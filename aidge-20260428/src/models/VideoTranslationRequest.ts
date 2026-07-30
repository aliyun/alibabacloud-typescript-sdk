// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationRequest extends $dara.Model {
  /**
   * @remarks
   * The array of translation capabilities. Valid values: ["visual"].
   * 
   * This parameter is required.
   */
  capabilities?: string[];
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
      capabilities: 'Capabilities',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': 'string' },
      sourceLanguage: 'string',
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

