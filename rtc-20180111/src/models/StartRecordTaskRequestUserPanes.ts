// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartRecordTaskRequestUserPanesImages } from "./StartRecordTaskRequestUserPanesImages";
import { StartRecordTaskRequestUserPanesTexts } from "./StartRecordTaskRequestUserPanesTexts";


export class StartRecordTaskRequestUserPanes extends $dara.Model {
  images?: StartRecordTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: StartRecordTaskRequestUserPanesTexts[];
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
      images: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesImages },
      paneId: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartRecordTaskRequestUserPanesTexts },
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

