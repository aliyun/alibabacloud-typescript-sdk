// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceInfoResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos_6_08_64_20G_a****
   */
  imageName?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 20
   */
  imageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageSize: 'ImageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      imageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

