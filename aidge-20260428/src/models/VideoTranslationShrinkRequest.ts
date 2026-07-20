// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  capabilitiesShrink?: string;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ru
   */
  targetLanguage?: string;
  /**
   * @remarks
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

