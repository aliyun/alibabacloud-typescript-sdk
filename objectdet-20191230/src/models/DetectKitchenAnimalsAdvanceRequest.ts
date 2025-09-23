// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectKitchenAnimalsAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectKitchenAnimals/DetectKitchenAnimals-left1.png
   */
  imageURLAObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectKitchenAnimals/DetectKitchenAnimals-right1.png
   */
  imageURLBObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageURLAObject: 'ImageURLA',
      imageURLBObject: 'ImageURLB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLAObject: 'Readable',
      imageURLBObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

