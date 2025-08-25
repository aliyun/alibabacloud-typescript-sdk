// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class GenerateVideoCoverAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isGif?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videorecog/videorecog/videorecog1.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      isGif: 'IsGif',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGif: 'boolean',
      videoUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

