// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of translation features. Valid values: speech and visual. You can select both. At least one feature is required. Duplicate values are not accepted.
   * 
   * This parameter is required.
   */
  capabilities?: string[];
  /**
   * @remarks
   * Specifies whether to enable quality inspection for on-screen text processing. Effective only when visual is included and this parameter is explicitly set to true. If only speech is selected, this parameter is ignored, no quality inspection is performed, no quality inspection fields are returned, and no error is reported due to this parameter. Enabling quality inspection may increase the processing time. Do not enable it unless necessary. Default value: false.
   * 
   * @example
   * false
   */
  enableQualityCheck?: boolean;
  /**
   * @remarks
   * Applicable only when visual is included. Specifies whether to erase on-screen text without translation. Valid values: true: erases on-screen text without translation. false: translates on-screen text. Default value: false.
   * 
   * @example
   * false
   */
  eraseOnly?: boolean;
  /**
   * @remarks
   * Applicable only when visual is included. Specifies whether to erase brand logos. Valid values: true: erases brand logos. false: retains brand logos. Default value: false. This parameter is independent of EraseOnly.
   * 
   * @example
   * false
   */
  removeLogo?: boolean;
  /**
   * @remarks
   * The original language of the video (source language). For supported languages, see Language support.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Applicable only when speech is included. Valid values: erase: erases the original subtitles only. replace: replaces the original subtitles with translated subtitles, which means erasing the original subtitles and adding subtitles synchronized with the translated speech. If not specified, the original subtitles are not processed, which means neither erasing the original subtitles nor adding new subtitles.
   * 
   * @example
   * replace
   */
  subtitleMode?: string;
  /**
   * @remarks
   * Required when speech is included. Optional when only visual is included and EraseOnly is set to true. If specified in this case, it is ignored. Required in other cases.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The video URL. Supported formats: MP4 and MOV. Maximum size: 200 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://cdn.example.com/product-demo.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      enableQualityCheck: 'EnableQualityCheck',
      eraseOnly: 'EraseOnly',
      removeLogo: 'RemoveLogo',
      sourceLanguage: 'SourceLanguage',
      subtitleMode: 'SubtitleMode',
      targetLanguage: 'TargetLanguage',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': 'string' },
      enableQualityCheck: 'boolean',
      eraseOnly: 'boolean',
      removeLogo: 'boolean',
      sourceLanguage: 'string',
      subtitleMode: 'string',
      targetLanguage: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

