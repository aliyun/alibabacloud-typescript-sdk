// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceBeautyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/FaceBeauty/FaceBeauty4.png
   */
  imageURL?: string;
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
      imageURL: 'ImageURL',
      sharp: 'Sharp',
      smooth: 'Smooth',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
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

