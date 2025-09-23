// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectVideoIPCObjectAdvanceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  callbackOnlyHasObject?: boolean;
  /**
   * @example
   * 1629086400
   */
  startTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVideoIPCObject/DetectVideoIPCObject1.mp4
   */
  videoURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      callbackOnlyHasObject: 'CallbackOnlyHasObject',
      startTimestamp: 'StartTimestamp',
      videoURLObject: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackOnlyHasObject: 'boolean',
      startTimestamp: 'number',
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

