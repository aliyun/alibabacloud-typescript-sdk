// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMPUTaskRequestUserPanesImages } from "./UpdateMputaskRequestUserPanesImages";
import { UpdateMPUTaskRequestUserPanesTexts } from "./UpdateMputaskRequestUserPanesTexts";


export class UpdateMPUTaskRequestUserPanes extends $dara.Model {
  images?: UpdateMPUTaskRequestUserPanesImages[];
  /**
   * @example
   * 2
   */
  paneId?: number;
  /**
   * @example
   * 0
   */
  segmentType?: number;
  /**
   * @example
   * camera
   */
  sourceType?: string;
  texts?: UpdateMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestUserID
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      paneId: 'PaneId',
      segmentType: 'SegmentType',
      sourceType: 'SourceType',
      texts: 'Texts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateMPUTaskRequestUserPanesTexts },
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

