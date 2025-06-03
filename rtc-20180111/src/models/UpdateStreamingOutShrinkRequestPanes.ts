// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStreamingOutShrinkRequestPanesBackgrounds } from "./UpdateStreamingOutShrinkRequestPanesBackgrounds";
import { UpdateStreamingOutShrinkRequestPanesImages } from "./UpdateStreamingOutShrinkRequestPanesImages";
import { UpdateStreamingOutShrinkRequestPanesTexts } from "./UpdateStreamingOutShrinkRequestPanesTexts";
import { UpdateStreamingOutShrinkRequestPanesWhiteboard } from "./UpdateStreamingOutShrinkRequestPanesWhiteboard";


export class UpdateStreamingOutShrinkRequestPanes extends $dara.Model {
  backgrounds?: UpdateStreamingOutShrinkRequestPanesBackgrounds[];
  images?: UpdateStreamingOutShrinkRequestPanesImages[];
  /**
   * @example
   * 2
   */
  paneCropMode?: number;
  /**
   * @example
   * 1
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
  texts?: UpdateStreamingOutShrinkRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: UpdateStreamingOutShrinkRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: UpdateStreamingOutShrinkRequestPanesWhiteboard,
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

