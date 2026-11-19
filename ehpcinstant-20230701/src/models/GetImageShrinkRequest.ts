// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of additional region IDs for which to query image information.
   */
  additionalRegionIdsShrink?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * - Public: public images provided by Alibaba Cloud
   * - Custom: custom images added by you
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
   * The image type. Valid values:
   * 
   * - VM: virtual machine image
   * - Container: container image
   * 
   * Default value: VM.
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

