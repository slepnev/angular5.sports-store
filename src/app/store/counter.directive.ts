import {
  Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges, OnChanges
} from '@angular/core';

@Directive({
  selector: '[appCounterOf]'
})
export class CounterDirective {
  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<Object>) {
  }

  @Input() set appCounterOf(num: number) {
    this.viewContainer.clear();
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef,
        new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {
  }
}
