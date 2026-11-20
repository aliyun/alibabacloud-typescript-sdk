// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsageInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The output tokens.
   * 
   * @example
   * 50
   */
  completionTokens?: number;
  /**
   * @remarks
   * The number of images.
   * 
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @remarks
   * The input tokens.
   * 
   * @example
   * 100
   */
  promptTokens?: number;
  /**
   * @remarks
   * The total tokens.
   * 
   * @example
   * 150
   */
  totalTokens?: number;
  /**
   * @remarks
   * The number of videos.
   * 
   * @example
   * 0
   */
  videoCount?: number;
  /**
   * @remarks
   * The video duration in seconds.
   * 
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

