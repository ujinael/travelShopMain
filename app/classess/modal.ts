
export interface IModal{
}
export class Modal  implements IModal{

  private readonly id:string
  public static modals:Modal[] = []

  constructor(id:null|string=null ){
const findModal = Modal.modals.find(x=>x.id === id)
if(findModal)Modal.removeById(id)
Modal.modals.push(this)
console.log("Modal.modals",Modal.modals);
this.id = id || (Math.random() + Modal.modals.length).toString()

}
public open(template:string):void {
const divWrap = document.createElement("div")
divWrap.innerHTML=template
divWrap.id = this.id
divWrap.setAttribute('modal-id',this.id)
divWrap.classList.add("modal-element")
divWrap.addEventListener('click', this.closeModalHandler);
document.body.appendChild(divWrap)
};
remove():void{  
const modalEl = document.getElementById(this.id)
if(modalEl){
  modalEl.removeEventListener("click",this.closeModalHandler)
  modalEl.parentNode.removeChild(modalEl)

}
}
private closeModalHandler = (ev: Event):void => {    const target = ev.target as HTMLElement;    if (target.classList.contains('close-modal')) {        this.remove();    }}
public static removeById(id) {
let modalId = id
const findEl = Modal.modals.find(x=>x.id===modalId)
if(findEl){
  findEl.remove()
  Modal.modals = Modal.modals.filter(el=>el.id!==modalId)
} else{
  if(Array.isArray(Modal.modals)){
    const lastEl = Modal.modals.pop()
    if(lastEl)lastEl.remove()
  }
}
}
}
