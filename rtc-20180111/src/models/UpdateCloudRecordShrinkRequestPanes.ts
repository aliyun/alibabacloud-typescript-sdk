// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateCloudRecordShrinkRequestPanesBackgrounds } from "./UpdateCloudRecordShrinkRequestPanesBackgrounds";
import { UpdateCloudRecordShrinkRequestPanesImages } from "./UpdateCloudRecordShrinkRequestPanesImages";
import { UpdateCloudRecordShrinkRequestPanesTexts } from "./UpdateCloudRecordShrinkRequestPanesTexts";
import { UpdateCloudRecordShrinkRequestPanesWhiteboard } from "./UpdateCloudRecordShrinkRequestPanesWhiteboard";


export class UpdateCloudRecordShrinkRequestPanes extends $dara.Model {
  backgrounds?: UpdateCloudRecordShrinkRequestPanesBackgrounds[];
  images?: UpdateCloudRecordShrinkRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  paneId?: number;
  reservePaneForOfflineUser?: boolean;
  /**
   * @example
   * 22
   */
  source?: string;
  /**
   * @example
   * video
   */
  sourceType?: string;
  texts?: UpdateCloudRecordShrinkRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: UpdateCloudRecordShrinkRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: UpdateCloudRecordShrinkRequestPanesWhiteboard,
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

