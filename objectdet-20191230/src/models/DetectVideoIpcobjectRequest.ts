// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVideoIPCObjectRequest extends $dara.Model {
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
  videoURL?: string;
  static names(): { [key: string]: string } {
    return {
      callbackOnlyHasObject: 'CallbackOnlyHasObject',
      startTimestamp: 'StartTimestamp',
      videoURL: 'VideoURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackOnlyHasObject: 'boolean',
      startTimestamp: 'number',
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

