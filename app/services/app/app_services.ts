import { openModal } from '@services/modal/modalService';
import { getTourTemplate } from '../../templates/tours';
import { ITours } from './../../models/tours';

export function initToursDivElements(data:Array<ITours>):void {

    if (Array.isArray(data)) {
      const rootElement = document.querySelector('.main-app');
      const tourWrap = document.createElement('div');
  
      tourWrap.classList.add('tour-wrap');
  
      // init click for modal
      initTourElemListener(tourWrap);
  
      let rootElementData = '';
      data.forEach((el, i) => {
        rootElementData += getTourTemplate(el, i);
      });
  
      tourWrap.innerHTML = rootElementData;
      rootElement.appendChild(tourWrap) ;
    }
  }
  
  
 export function initTourElemListener(tourWrap:HTMLDivElement):void {
    tourWrap.addEventListener('click', (ev) => {
      const targetItem = ev.target as HTMLElement;
      const parentItem = targetItem?.parentNode as HTMLElement;
      let realTarget:HTMLElement;
  
      if (targetItem.hasAttribute('data-tour-item-index')) {
        realTarget = targetItem;
      } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
        realTarget = parentItem;
      }
  
      if (realTarget) {
        const dataIndex = realTarget.getAttribute('data-tour-item-index');
        openModal('order', Number(dataIndex));
      }
    });
  }
  