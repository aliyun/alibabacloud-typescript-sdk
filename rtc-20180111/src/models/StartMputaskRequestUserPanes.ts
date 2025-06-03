// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartMPUTaskRequestUserPanesImages } from "./StartMputaskRequestUserPanesImages";
import { StartMPUTaskRequestUserPanesTexts } from "./StartMputaskRequestUserPanesTexts";


export class StartMPUTaskRequestUserPanes extends $dara.Model {
  images?: StartMPUTaskRequestUserPanesImages[];
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
  texts?: StartMPUTaskRequestUserPanesTexts[];
  /**
   * @example
   * TestId
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
      images: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesImages },
      paneId: 'number',
      segmentType: 'number',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartMPUTaskRequestUserPanesTexts },
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

