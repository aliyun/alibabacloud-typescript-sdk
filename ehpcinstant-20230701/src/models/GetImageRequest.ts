// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageRequest extends $dara.Model {
  additionalRegionIds?: string[];
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
      additionalRegionIds: 'AdditionalRegionIds',
      imageCategory: 'ImageCategory',
      imageId: 'ImageId',
      imageType: 'ImageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalRegionIds: { 'type': 'array', 'itemType': 'string' },
      imageCategory: 'string',
      imageId: 'string',
      imageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalRegionIds)) {
      $dara.Model.validateArray(this.additionalRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

