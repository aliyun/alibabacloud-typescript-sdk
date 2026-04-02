// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsageInfoDTO extends $dara.Model {
  /**
   * @example
   * 50
   */
  completionTokens?: number;
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 100
   */
  promptTokens?: number;
  /**
   * @example
   * 150
   */
  totalTokens?: number;
  /**
   * @example
   * 0
   */
  videoCount?: number;
  /**
   * @example
   * 0
   */
  videoDuration?: number;
  static names(): { [key: string]: string } {
    return {
      completionTokens: 'completionTokens',
      imageCount: 'imageCount',
      promptTokens: 'promptTokens',
      totalTokens: 'totalTokens',
      videoCount: 'videoCount',
      videoDuration: 'videoDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTokens: 'number',
      imageCount: 'number',
      promptTokens: 'number',
      totalTokens: 'number',
      videoCount: 'number',
      videoDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

