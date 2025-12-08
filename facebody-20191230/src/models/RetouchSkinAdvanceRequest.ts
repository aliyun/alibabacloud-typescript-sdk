// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RetouchSkinAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/RetouchSkin/RetouchSkin3.png
   */
  imageURLObject?: Readable;
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
      imageURLObject: 'ImageURL',
      retouchDegree: 'RetouchDegree',
      whiteningDegree: 'WhiteningDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
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

