// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of translation features. Valid values: speech and visual. You can select both. At least one feature is required. Duplicate values are not accepted.
   * 
   * This parameter is required.
   */
  capabilitiesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable the quality check for on-screen text processing. Default value: false. The quality check is enabled when visual is included and this parameter is explicitly set to true. If only speech is selected, this parameter is ignored, no quality check is performed, no quality check fields are returned, and no errors are reported due to this parameter. Enabling the quality check may increase the waiting time. Do not enable it unless necessary.
   * 
   * @example
   * true
   */
  enableQualityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to only erase the source language text in the video frames without translating it. This parameter is valid only when visual is included. Valid values: true (erases only) and false (translates the on-screen text). Default value: false.
   * 
   * @example
   * true
   */
  eraseOnly?: boolean;
  /**
   * @remarks
   * Specifies whether to erase brand logos. This parameter is valid only when visual is included. Valid values: true (erases brand logos) and false (retains logos). Default value: false. This parameter is independent of eraseOnly.
   * 
   * @example
   * true
   */
  removeLogo?: boolean;
  /**
   * @remarks
   * The source language. For supported languages, see Language support.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The subtitle processing mode. This parameter is valid only when speech is included. Valid values: erase (erases only the original subtitles) and replace (erases the original subtitles and adds new subtitles). If this parameter is omitted, the original subtitles are not processed and no new subtitles are added.
   * 
   * @example
   * erase
   */
  subtitleMode?: string;
  /**
   * @remarks
   * The target language. This parameter is required.
   * 
   * @example
   * ru
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The URL of the video. Supported formats: MP4 and MOV. Maximum size: 200 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://cdn.example.com/product-demo.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      capabilitiesShrink: 'Capabilities',
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
      capabilitiesShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

