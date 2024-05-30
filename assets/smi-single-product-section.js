var SMI_SingleProductSection = (function () {
    'use strict';
      class SMI_SingleProductSection {
          sectionEl = null;
          sectionId = null
          constructor(_sectionId) {
              this.sectionId = _sectionId
              this.sectionEl = document.querySelector(`#${_sectionId}`);
              if (this.sectionEl === null) return null;
              this._handleResponsive();
              this._submitForm()
          }
          _handleResponsive() {
              const mediaQuery = window.matchMedia('(min-width: 768px)')
              const tabletChange = (e) => {
                  const b1 = this.sectionEl.querySelector('.smi-block-container-1');
                  const b2 = this.sectionEl.querySelector('.smi-block-container-2');
                  const b3 = this.sectionEl.querySelector('.smi-block-container-3');
                  if (e.matches) {
                      b1.after(b2)
                  } else {
                      b3.after(b2)
                  }
              }
              tabletChange(mediaQuery)
              mediaQuery.addListener(tabletChange)
          }
  
          getSectionInnerHTML(html, selector) {
              return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
          }

          getSectionsToRender() {
              const drawerCart = document.getElementById('smi-drawer-items')
              const res = [
                  {
                      id: 'smi-cart-button',
                      section: 'smi-cart-icon-bubble',
                      selector: '.shopify-section',
                  }
              ]
  
              if (drawerCart) {
                  res.push({
                      id: 'shopify-section-' + drawerCart.dataset.id,
                      section: drawerCart.dataset.id,
                      selector: '.smi-drawer-items_w',
                  })
              }
  
              return res
  
          }
  
          _submitForm() {           
              // const cartDrawerElement = document.querySelector('.smi-cart-drawer-1')
              // if(!cartDrawerElement) {
              //   return;
              // }
            
              const forms = this.sectionEl.querySelectorAll('.smi-product-form-add-to-cart')
              if (forms.length) {
                forms.forEach(form => {
                  form.addEventListener('submit', (e) => {
                      e.preventDefault()
                      form.classList.add('smi-form-loading')

                      //Compatible free theme
                      const cartObj = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
                      //End compatible free theme
                      const cartType = window.smiObject ? window.smiObject.cartType : 'page'

                      let sectionsPayload = this.getSectionsToRender().map((section) => section.section)
                      //Compatible free theme
                      if (cartObj) {
                          let _sectionsPayload = cartObj.getSectionsToRender().map((section) => section.id)
                          sectionsPayload = [...sectionsPayload, ..._sectionsPayload]
                      }
                      //End compatible free theme
  
                      const config = {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json', Accept: `application/json` },
                      };
                      config.headers['X-Requested-With'] = 'XMLHttpRequest';
                      delete config.headers['Content-Type'];
                      const formData = new FormData(form);
                      formData.append(
                          'sections',
                          sectionsPayload
                      );
                      formData.append('sections_url', window.location.pathname);
                      config.body = formData;
                      const formErrorEl = document.querySelector(`#msg_notice_cart_item_added_all_${this.sectionId.replace('smi-', '')}`)
                      if(formErrorEl) {
                        // let msg_sec=""

                        //   if(document.getElementById(`msg_notice_sec_add_${this.sectionId.replace('smi-', '')}`)){
                        //       msg_sec = document.getElementById(`msg_notice_sec_add_${this.sectionId.replace('smi-', '')}`).value
                        //   }else{
                        //       msg_sec = document.getElementById(`msg_notice_sec_add2_${this.sectionId.replace('smi-', '')}`).value
                        //   }
                        //   formErrorEl.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10.5" fill="#EB001B" stroke="white"/><rect x="10.5" y="5.73938" width="3" height="8" rx="1.5" fill="white"/><circle cx="12" cy="16.7607" r="1.5" fill="white"/></svg>&nbsp;${msg_sec}`
                      }
                      fetch("/cart/add.js", config).then((response) => response.json()).then((data) => {
                          if (data?.status == 422 || data?.message === 'Cart Error') {
                              if(formErrorEl) {
                                  console.log('errr data: ', data)
                                  formErrorEl.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10.5" fill="#EB001B" stroke="white"/><rect x="10.5" y="5.73938" width="3" height="8" rx="1.5" fill="white"/><circle cx="12" cy="16.7607" r="1.5" fill="white"/></svg>&nbsp;${data?.description}`
                                  formErrorEl.classList.remove('hide-msg-noti-cart-item')
                              }
                          } else {
                              const sectionRender = this.getSectionsToRender()
                              sectionRender.forEach((section) => {
                                  const _sectionEl = document.getElementById(section.id)
                                  if (_sectionEl) {
                                      const _elementToReplace = _sectionEl.querySelector(section.selector);
                                      let elementToReplace = null
                                      if (_elementToReplace) {
                                          elementToReplace = _elementToReplace
                                      } else {
                                          elementToReplace = _sectionEl
                                      }
                                      if (elementToReplace) {
                                          elementToReplace.innerHTML = this.getSectionInnerHTML(
                                              data.sections[section.section],
                                              section.selector
                                          );
                                          if (typeof SMI_CartDrawer === 'function' && cartType === 'drawer') {
                                              setTimeout(() => {
                                                  const drawerObj = new SMI_CartDrawer('.smi-cart-drawer-1')
                                                  drawerObj.handleToggle()
                                                  drawerObj.openDrawer()
                                                  drawerObj.note()
                                              }, 150)
                                          } else {
                                              window.location.href = window.smiObject.routes.cart_url
                                          }

                                          if(data?.sections?.['smi-cart-icon-bubble']) {
                                            const cartIcon = new DOMParser().parseFromString(data?.sections?.['smi-cart-icon-bubble'], 'text/html')
                                            const numberCartItems = cartIcon.querySelector('.smi-cart-badges').innerText
                                            form.setAttribute('data-cart-items', numberCartItems)
                                          }
                                      }
                                  }
                              });

                              //Compatible free theme
                              if (cartObj) {
                                  if (typeof cartObj['renderContents'] === 'function') {
                                      cartObj.renderContents(data)
                                  }
                              } else {
                                  if (typeof SMI_CartDrawer !== 'function' && window.smiObject) {
                                      window.location.href = window.smiObject.routes.cart_url
                                  }
                              }
                              //End compatible free theme
                          }
                      }).finally(() => {
                          form.classList.remove('smi-form-loading')
                          //Compatible free theme
                          if (cartObj && cartObj.classList.contains('is-empty')) cartObj.classList.remove('is-empty');
                          //End compatible free theme
                      })
                  })
                  })
              }
          }
      }
  
      
    return SMI_SingleProductSection
  })();
  