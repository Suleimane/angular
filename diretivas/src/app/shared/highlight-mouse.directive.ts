import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    )*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    )*/
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string = 'white';
  private backgroundColor: string = '';

  @HostBinding('style.backgroundColor') get setColor(){
     // codigo extra aqui
     return this.backgroundColor;
  };

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) { }

  ngOnInit(): void {

  }

}
