// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-bp14wakr1rkxtb******
   */
  imageId?: string;
  imageType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

