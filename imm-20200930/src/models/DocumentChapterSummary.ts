// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChapterSummary } from "./ChapterSummary";


export class DocumentChapterSummary extends $dara.Model {
  data?: ChapterSummary[];
  nextMarker?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextMarker: 'NextMarker',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ChapterSummary },
      nextMarker: 'number',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

