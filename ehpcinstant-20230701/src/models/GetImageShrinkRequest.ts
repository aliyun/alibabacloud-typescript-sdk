// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageShrinkRequest extends $dara.Model {
  additionalRegionIdsShrink?: string;
  imageCategory?: string;
  /**
   * @example
   * m-2ze74g5mvy4pjg*****
   */
  imageId?: string;
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

