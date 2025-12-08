// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetouchSkinRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RetouchSkin/RetouchSkin3.png
   */
  imageURL?: string;
  /**
   * @example
   * 1.0
   */
  retouchDegree?: number;
  /**
   * @example
   * 1.0
   */
  whiteningDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      retouchDegree: 'RetouchDegree',
      whiteningDegree: 'WhiteningDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      retouchDegree: 'number',
      whiteningDegree: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

