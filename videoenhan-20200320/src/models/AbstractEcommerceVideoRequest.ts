// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbstractEcommerceVideoRequest extends $dara.Model {
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
  videoUrl?: string;
  /**
   * @example
   * 480
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      height: 'Height',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      videoUrl: 'string',
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

