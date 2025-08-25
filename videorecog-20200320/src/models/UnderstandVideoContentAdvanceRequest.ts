// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UnderstandVideoContentAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/UnderstandVideoContent/UnderstandVideoContent1.mp4
   */
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

