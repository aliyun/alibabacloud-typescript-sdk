// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuperResolveVideoRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  bitRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/SuperResolveVideo/SuperResolveVideo2.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bitRate: 'BitRate',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitRate: 'number',
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

