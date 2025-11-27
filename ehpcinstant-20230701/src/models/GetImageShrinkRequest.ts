// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageShrinkRequest extends $dara.Model {
  additionalRegionIdsShrink?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   Public: public images provided by Alibaba Cloud.
   * *   Custom: the custom image that you added.
   * 
   * @example
   * Custom
   */
  imageCategory?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-2ze74g5mvy4pjg*****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * *   VM: virtual machine image.
   * *   Container: the container image.
   * 
   * Default value: VM
   * 
   * @example
   * VM
   */
  imageType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalRegionIdsShrink: 'AdditionalRegionIds',
      imageCategory: 'ImageCategory',
      imageId: 'ImageId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalRegionIdsShrink: 'string',
      imageCategory: 'string',
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

