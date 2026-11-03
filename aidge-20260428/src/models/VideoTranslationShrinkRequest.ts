// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of translation features. Valid values: speech and visual. You can select both. At least one feature must be specified. Duplicate values are not allowed.
   * 
   * This parameter is required.
   */
  capabilitiesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable the quality check for on-screen text processing. This parameter takes effect only when visual is included and explicitly set to true. If only speech is selected, this parameter is ignored. No quality check is performed, no quality check fields are returned, and no error is reported for this parameter. Enabling the quality check may increase the waiting time. Do not enable it unless necessary. Default value: false.
   * 
   * @example
   * false
   */
  enableQualityCheck?: boolean;
  /**
   * @remarks
   * Valid only when visual is included. Specifies whether to only erase the on-screen text without translation. Valid values:
   * - true: Erases the on-screen text without translation.
   * - false: Translates the on-screen text.
   * Default value: false.
   * 
   * @example
   * false
   */
  eraseOnly?: boolean;
  /**
   * @remarks
   * Valid only when visual is included. Specifies whether to erase brand logos. Valid values:
   * - true: Erases brand logos.
   * - false: Retains brand logos.
   * Default value: false. This parameter is independent of EraseOnly.
   * 
   * @example
   * false
   */
  removeLogo?: boolean;
  /**
   * @remarks
   * The original language of the video. For supported languages, see Language support.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * Valid only when speech is included. Valid values:
   * - erase: Erases only the original subtitles.
   * - replace: Replaces the original subtitles with translated subtitles. This erases the original subtitles and adds subtitles synchronized with the translated speech.
   * - If not specified, the original subtitles are not processed. This means the original subtitles are neither erased nor replaced with new subtitles.
   * 
   * @example
   * replace
   */
  subtitleMode?: string;
  /**
   * @remarks
   * Required when speech is included. Optional when only visual is selected and EraseOnly is set to true. If provided in this case, it is ignored. Required in all other cases.
   * 
   * @example
   * en
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

