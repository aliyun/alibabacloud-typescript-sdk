// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStreamingOutRequestPanesBackgrounds } from "./UpdateStreamingOutRequestPanesBackgrounds";
import { UpdateStreamingOutRequestPanesImages } from "./UpdateStreamingOutRequestPanesImages";
import { UpdateStreamingOutRequestPanesTexts } from "./UpdateStreamingOutRequestPanesTexts";
import { UpdateStreamingOutRequestPanesWhiteboard } from "./UpdateStreamingOutRequestPanesWhiteboard";


export class UpdateStreamingOutRequestPanes extends $dara.Model {
  backgrounds?: UpdateStreamingOutRequestPanesBackgrounds[];
  images?: UpdateStreamingOutRequestPanesImages[];
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
  texts?: UpdateStreamingOutRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: UpdateStreamingOutRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'number',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: UpdateStreamingOutRequestPanesWhiteboard,
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

