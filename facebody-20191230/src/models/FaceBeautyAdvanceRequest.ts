// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceBeautyAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/FaceBeauty/FaceBeauty4.png
   */
  imageURLObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sharp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.1
   */
  smooth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.3
   */
  white?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      sharp: 'Sharp',
      smooth: 'Smooth',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      sharp: 'number',
      smooth: 'number',
      white: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

