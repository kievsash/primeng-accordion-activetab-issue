import { Component, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { Accordion } from 'primeng/accordion';
@Component({
  selector: 'accordion-dynamic-demo',
  templateUrl: './accordion-dynamic-demo.html',
  standalone: true,
  imports: [ImportsModule],
})
export class AccordionDynamicDemo {
  @ViewChild(Accordion) accordion: Accordion;

  activeIndex = 0;
  tabs = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
  ];

  refreshData() {
    this.tabs = [...this.tabs.map((item) => ({ ...item }))].reverse();
    // this.activeIndex = null;
    this.accordion.resetActiveTab();
  }
}
