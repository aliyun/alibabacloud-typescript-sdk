// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedResourceResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos_6_08_64_20G_alibase_****
   */
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

