import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LectionCreationService } from 'src/app/course-page/admin-view/lections/lection-creation/lection-creation.service';
import { CreationPreview } from 'src/app/course-page/models/creation-preview.model';

@Component({
  selector: 'previews',
  templateUrl: './previews.component.html',
  styleUrls: ['./previews.component.scss'],
})
export class PreviewsComponent implements OnInit {
  @Input() previews: Array<CreationPreview | null>;
  @Output() onCreationApproval = new EventEmitter<
    Array<CreationPreview | null>
  >();

  constructor(private lectionCreationService: LectionCreationService) {}

  ngOnInit(): void {
    this.lectionCreationService.createLection$.subscribe((_) =>
      this.onCreationApproval.emit(this.previews)
    );
  }
}
