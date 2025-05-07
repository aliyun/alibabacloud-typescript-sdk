// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSmartClipTaskRequestInputConfigBackgroundMusics } from "./SubmitSmartClipTaskRequestInputConfigBackgroundMusics";
import { SubmitSmartClipTaskRequestInputConfigStickers } from "./SubmitSmartClipTaskRequestInputConfigStickers";
import { SubmitSmartClipTaskRequestInputConfigVideoIds } from "./SubmitSmartClipTaskRequestInputConfigVideoIds";


export class SubmitSmartClipTaskRequestInputConfig extends $dara.Model {
  backgroundMusics?: SubmitSmartClipTaskRequestInputConfigBackgroundMusics[];
  speechTexts?: string[];
  stickers?: SubmitSmartClipTaskRequestInputConfigStickers[];
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  videoIds?: SubmitSmartClipTaskRequestInputConfigVideoIds[];
  static names(): { [key: string]: string } {
    return {
      backgroundMusics: 'BackgroundMusics',
      speechTexts: 'SpeechTexts',
      stickers: 'Stickers',
      titles: 'Titles',
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusics: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigBackgroundMusics },
      speechTexts: { 'type': 'array', 'itemType': 'string' },
      stickers: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigStickers },
      titles: { 'type': 'array', 'itemType': 'string' },
      videoIds: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigVideoIds },
    };
  }

  validate() {
    if(Array.isArray(this.backgroundMusics)) {
      $dara.Model.validateArray(this.backgroundMusics);
    }
    if(Array.isArray(this.speechTexts)) {
      $dara.Model.validateArray(this.speechTexts);
    }
    if(Array.isArray(this.stickers)) {
      $dara.Model.validateArray(this.stickers);
    }
    if(Array.isArray(this.titles)) {
      $dara.Model.validateArray(this.titles);
    }
    if(Array.isArray(this.videoIds)) {
      $dara.Model.validateArray(this.videoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

