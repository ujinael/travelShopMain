
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName:string, selector:string):void {
    const headerElement= document.querySelector('header');
    const targetItem = headerElement.querySelector(selector) as HTMLElement;
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName:string, selector:string):void  {
    const headerElement = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector) as HTMLElement;
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}