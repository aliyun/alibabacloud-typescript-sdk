// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of translation capabilities. Valid values: `speech` and `visual`. You can select both. At least one capability must be specified. Duplicate values are not allowed.
   * 
   * This parameter is required.
   */
  capabilitiesShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable the quality check for on-screen text processing. This parameter takes effect only when `visual` is included and explicitly set to `true`. If only `speech` is selected, this parameter is ignored, no quality check is performed, no quality check fields are returned, and no error is reported for this parameter. Enabling the quality check may increase the processing time. Do not enable it unless necessary. Default value: `false`.
   * 
   * @example
   * false
   */
  enableQualityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether to only erase on-screen text without translation. This parameter is valid only when `visual` is included. Valid values: `true`: erases the on-screen text without translation. `false`: translates the on-screen text. Default value: `false`.
   * 
   * @example
   * false
   */
  eraseOnly?: boolean;
  /**
   * @remarks
   * Specifies whether to erase brand logos. This parameter is valid only when `visual` is included. Valid values: `true`: erases brand logos. `false`: retains brand logos. Default value: `false`. This parameter is independent of `EraseOnly`.
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
   * The subtitle processing mode. This parameter is valid only when `speech` is included. Valid values: `erase`: erases the original subtitles only. `replace`: replaces the original subtitles with translated subtitles, which means erasing the original subtitles and adding subtitles synchronized with the translated speech. If this parameter is not specified, the original subtitles are not processed, which means neither erasing the original subtitles nor adding new subtitles.
   * 
   * @example
   * replace
   */
  subtitleMode?: string;
  /**
   * @remarks
   * The target language. This parameter is required when `speech` is included. If only `visual` is included and `EraseOnly` is set to true, this parameter is optional and ignored if provided. In other cases, this parameter is required.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The video URL. Supported formats: MP4 and MOV. Maximum file size: 200 MB.
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

