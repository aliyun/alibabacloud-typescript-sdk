// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceVideoTemplateRequest extends $dara.Model {
  videoScene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://invi-label.oss-cn-shanghai.aliyuncs.com/labl/temp/faceswap/test_for_api/xxxx.mp4
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoScene: 'VideoScene',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoScene: 'string',
      videoURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

