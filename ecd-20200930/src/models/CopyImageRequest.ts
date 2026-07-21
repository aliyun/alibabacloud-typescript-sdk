// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the image in the destination region. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a test.
   */
  destinationDescription?: string;
  /**
   * @remarks
   * The name of the new image created by the copy operation. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), or hyphens (-). It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * Office_Shanghai
   */
  destinationImageName?: string;
  /**
   * @remarks
   * The ID of the destination region to which the image is copied. The destination region ID must be different from the current region ID of the image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The ID of the image to be copied.
   * 
   * This parameter is required.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDescription: 'DestinationDescription',
      destinationImageName: 'DestinationImageName',
      destinationRegionId: 'DestinationRegionId',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDescription: 'string',
      destinationImageName: 'string',
      destinationRegionId: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

