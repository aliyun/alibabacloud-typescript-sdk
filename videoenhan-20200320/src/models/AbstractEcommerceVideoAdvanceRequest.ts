// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class AbstractEcommerceVideoAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  duration?: number;
  /**
   * @example
   * 480
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/AbstractEcommerceVideo/AbstractEcommerceVideo1.mp4
   */
  videoUrlObject?: Readable;
  /**
   * @example
   * 480
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      height: 'Height',
      videoUrlObject: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      videoUrlObject: 'Readable',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

