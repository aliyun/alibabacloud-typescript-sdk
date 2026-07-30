// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The array of translation capabilities. Valid values: ["visual"].
   * 
   * This parameter is required.
   */
  capabilitiesShrink?: string;
  /**
   * @remarks
   * The source language. This parameter is optional. Default value: auto (automatic detection).
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * ru
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The video URL (MP4/MOV, ≤ 200 MB).
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/video.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      capabilitiesShrink: 'Capabilities',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilitiesShrink: 'string',
      sourceLanguage: 'string',
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

