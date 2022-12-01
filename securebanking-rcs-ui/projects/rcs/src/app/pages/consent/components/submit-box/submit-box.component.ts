import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {ForgerockConfirmDialogComponent} from "@securebanking/securebanking-common-ui/components/forgerock-confirm-dialog";

@Component({
  selector: 'app-submit-box',
  templateUrl: './submit-box.component.html',
  styleUrls: ['./submit-box.component.scss']
})
export class SubmitBoxComponent implements OnInit {
  @Input() label: string;
  @Input() loading: boolean;
  @Input() cancelLabel: string;
  @Input() proceedLabel: string;
  @Input() form: FormGroup;

  @Output() accept = new EventEmitter<any>();
  @Output() deny = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private translate: TranslateService) {}

  ngOnInit() {
    console.log("submit-box")
    console.log(this.form)
  }

  cancel(e: Event) {
    console.log("cancel");
    e.stopPropagation();
    const dialogRef = this.dialog.open(ForgerockConfirmDialogComponent, {
      data: {
        text: this.translate.instant('COMPONENT.CANCEL.CONFIRM')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deny.emit();
      }
    });
  }

  submit(e: Event) {
    console.log("submit");
    e.stopPropagation();
    const dialogRef = this.dialog.open(ForgerockConfirmDialogComponent, {
      data: {
        text: this.translate.instant('COMPONENT.ACCEPT.CONFIRM')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.accept.emit();
      }
    });
  }
}
