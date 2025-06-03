// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRecordTaskRequestUserPanesImages } from "./UpdateRecordTaskRequestUserPanesImages";
import { UpdateRecordTaskRequestUserPanesTexts } from "./UpdateRecordTaskRequestUserPanesTexts";


export class UpdateRecordTaskRequestUserPanes extends $dara.Model {
  images?: UpdateRecordTaskRequestUserPanesImages[];
  /**
   * @example
   * 1
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateRecordTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateRecordTaskRequestUserPanesTexts },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

