// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks";
import { ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode } from "./ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode";


export class ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfig extends $dara.Model {
  /**
   * @remarks
   * The multi-input stream merge configuration.
   */
  combineConfigs?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs[];
  /**
   * @remarks
   * The encryption settings.
   */
  encryption?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption;
  /**
   * @remarks
   * The watermark configuration for an image.
   */
  imageWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks[];
  /**
   * @remarks
   * Indicates whether the tags of the input stream are inherited in the output stream. This parameter does not take effect when the input is not a media asset. Default value: false.
   */
  isInheritTags?: boolean;
  /**
   * @remarks
   * The subtitle configuration.
   */
  subtitles?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles[];
  /**
   * @remarks
   * The configurations of the text watermarks.
   */
  textWatermarks?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks[];
  /**
   * @remarks
   * The transcoding configuration.
   */
  transcode?: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode;
  static names(): { [key: string]: string } {
    return {
      combineConfigs: 'CombineConfigs',
      encryption: 'Encryption',
      imageWatermarks: 'ImageWatermarks',
      isInheritTags: 'IsInheritTags',
      subtitles: 'Subtitles',
      textWatermarks: 'TextWatermarks',
      transcode: 'Transcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineConfigs: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigCombineConfigs },
      encryption: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigEncryption,
      imageWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigImageWatermarks },
      isInheritTags: 'boolean',
      subtitles: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigSubtitles },
      textWatermarks: { 'type': 'array', 'itemType': ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTextWatermarks },
      transcode: ListTranscodeJobsResponseBodyJobsOutputGroupProcessConfigTranscode,
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

