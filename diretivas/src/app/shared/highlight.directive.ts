import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'white';
  @Input() hightlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string = '';



  constructor() { }

  ngOnInit(): void {
     this.backgroundColor = 'grey';
  }

}
