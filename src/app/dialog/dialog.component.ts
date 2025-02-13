import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  animations: [
    trigger('slideInFromTopRight', [
      state('void', style({ transform: 'translate(100%, -100%)', opacity: 0 })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translate(0, 0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.4s ease-in', style({ transform: 'translate(100%, -100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { section: string }
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000); // Adjust the timeout duration as needed
  }
}
