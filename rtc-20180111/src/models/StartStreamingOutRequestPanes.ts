// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartStreamingOutRequestPanesBackgrounds } from "./StartStreamingOutRequestPanesBackgrounds";
import { StartStreamingOutRequestPanesImages } from "./StartStreamingOutRequestPanesImages";
import { StartStreamingOutRequestPanesTexts } from "./StartStreamingOutRequestPanesTexts";
import { StartStreamingOutRequestPanesWhiteboard } from "./StartStreamingOutRequestPanesWhiteboard";


export class StartStreamingOutRequestPanes extends $dara.Model {
  backgrounds?: StartStreamingOutRequestPanesBackgrounds[];
  images?: StartStreamingOutRequestPanesImages[];
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
  paneId?: string;
  reservePaneForOfflineUser?: boolean;
  /**
   * @example
   * 1811****
   */
  source?: string;
  /**
   * @example
   * Video
   */
  sourceType?: string;
  texts?: StartStreamingOutRequestPanesTexts[];
  /**
   * @example
   * cameraFirst
   */
  videoOrder?: string;
  whiteboard?: StartStreamingOutRequestPanesWhiteboard;
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
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesBackgrounds },
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesImages },
      paneCropMode: 'number',
      paneId: 'string',
      reservePaneForOfflineUser: 'boolean',
      source: 'string',
      sourceType: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestPanesTexts },
      videoOrder: 'string',
      whiteboard: StartStreamingOutRequestPanesWhiteboard,
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

