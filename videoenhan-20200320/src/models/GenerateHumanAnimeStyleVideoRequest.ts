// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateHumanAnimeStyleVideoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * anime
   */
  cartoonStyle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/xxx/eas/EvaluateVideoQuality/123.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cartoonStyle: 'CartoonStyle',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartoonStyle: 'string',
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

