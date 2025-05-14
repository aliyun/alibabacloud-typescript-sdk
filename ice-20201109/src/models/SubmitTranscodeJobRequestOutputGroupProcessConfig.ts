// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks";
import { SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode } from "./SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode";


export class SubmitTranscodeJobRequestOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The multi-input stream merge configuration.
   */
  combineConfigs?: SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration of an image.
   */
  imageWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermark.
   */
  textWatermarks?: SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   * 
   * This parameter is required.
   */
  transcode?: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigCombineConfigs },
      encryption: SubmitTranscodeJobRequestOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigImageWatermarks },
      subtitles: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': SubmitTranscodeJobRequestOutputGroupProcessConfigTextWatermarks },
      transcode: SubmitTranscodeJobRequestOutputGroupProcessConfigTranscode,
    };
  }

  validate() {
    if(Array.isArray(this.combineConfigs)) {
      $dara.Model.validateArray(this.combineConfigs);
    }
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(Array.isArray(this.imageWatermarks)) {
      $dara.Model.validateArray(this.imageWatermarks);
    }
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    if(Array.isArray(this.textWatermarks)) {
      $dara.Model.validateArray(this.textWatermarks);
    }
    if(this.transcode && typeof (this.transcode as any).validate === 'function') {
      (this.transcode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

