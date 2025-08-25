// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class AddFaceVideoTemplateAdvanceRequest extends $dara.Model {
  videoScene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://invi-label.oss-cn-shanghai.aliyuncs.com/labl/temp/faceswap/test_for_api/xxxx.mp4
   */
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoScene: 'VideoScene',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoScene: 'string',
      videoURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

