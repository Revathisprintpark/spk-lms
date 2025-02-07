import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqs = [
    { question: 'Which offerings are eligible for the discount?', answer: 'Most online courses, executive programs, and certifications are eligible for a discount. Please check the course details for eligibility.' },
    { question: 'How do I redeem the discount on courses and programs?', answer: 'To redeem your discount, enter the provided promo code at checkout. If the discount applies, you will see the updated price before payment.' },
    { question: 'How do I redeem the discount on executive education courses?', answer: 'You can apply the discount code while registering for executive education courses on our website. Some courses may require approval before applying the discount.' },
    { question: 'I’m having trouble redeeming my discount. How can I get help?', answer: 'If you experience any issues, contact our support team at support@example.com. They will assist you in resolving the issue.' }
  ];

  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}