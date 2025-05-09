// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageRequestVMImageSpec extends $dara.Model {
  /**
   * @example
   * m-bp1akkkr1rkxtb******
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

