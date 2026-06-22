// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Summary } from "./Summary";


export class ChapterSummary extends $dara.Model {
  pageNumber?: number;
  summary?: Summary[];
  timeRange?: number[];
  title?: string;
  titleID?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      summary: 'Summary',
      timeRange: 'TimeRange',
      title: 'Title',
      titleID: 'TitleID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      summary: { 'type': 'array', 'itemType': Summary },
      timeRange: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
      titleID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.summary)) {
      $dara.Model.validateArray(this.summary);
    }
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

