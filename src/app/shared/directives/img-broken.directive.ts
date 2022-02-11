import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  //TODO: host Host HOST
  @Input() customImg: string = '';
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    elNative.src = this.customImg;
  }
  constructor(private elHost: ElementRef) {}
}
