// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudRecordShrinkRequestPanesBackgrounds } from "./StartCloudRecordShrinkRequestPanesBackgrounds";
import { StartCloudRecordShrinkRequestPanesImages } from "./StartCloudRecordShrinkRequestPanesImages";
import { StartCloudRecordShrinkRequestPanesTexts } from "./StartCloudRecordShrinkRequestPanesTexts";
import { StartCloudRecordShrinkRequestPanesWhiteboard } from "./StartCloudRecordShrinkRequestPanesWhiteboard";


export class StartCloudRecordShrinkRequestPanes extends $dara.Model {
  backgrounds?: StartCloudRecordShrinkRequestPanesBackgrounds[];
  images?: StartCloudRecordShrinkRequestPanesImages[];
  /**
   * @example
   * 3
   */
  paneCropMode?: number;
  /**
   * @remarks
   * paneId
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  reservePaneForOfflineUser?: boolean;
  /**
   * @remarks
   * source
   */
  source?: string;
  /**
   * @remarks
   * sourceType
   * 
   * @example
   * video
   */
  sourceType?: string;
  texts?: StartCloudRecordShrinkRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: StartCloudRecordShrinkRequestPanesWhiteboard;
  static names(): { [key: string]: string } {
    return {
      backgrounds: 'Backgrounds',
      images: 'Images',
      paneCropMode: 'PaneCropMode',
      paneId: 'PaneId',
      reservePaneForOfflineUser: 'ReservePaneForOfflineUser',
      source: 'Source',
      sourceType: 'SourceType',
      texts: 'Texts',
      videoOrder: 'VideoOrder',
      whiteboard: 'Whiteboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartCloudRecordShrinkRequestPanesWhiteboard,
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    if(this.whiteboard && typeof (this.whiteboard as any).validate === 'function') {
      (this.whiteboard as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

