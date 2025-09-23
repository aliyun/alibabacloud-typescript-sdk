// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectKitchenAnimalsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectKitchenAnimals/DetectKitchenAnimals-left1.png
   */
  imageURLA?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectKitchenAnimals/DetectKitchenAnimals-right1.png
   */
  imageURLB?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLA: 'string',
      imageURLB: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

