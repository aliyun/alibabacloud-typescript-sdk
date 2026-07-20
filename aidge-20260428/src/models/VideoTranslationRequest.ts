// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  capabilities?: string[];
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

