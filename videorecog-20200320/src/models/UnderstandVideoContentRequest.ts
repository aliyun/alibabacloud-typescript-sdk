// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnderstandVideoContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/UnderstandVideoContent/UnderstandVideoContent1.mp4
   */
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

