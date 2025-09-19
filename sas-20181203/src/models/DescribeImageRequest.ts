// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the image.
   * 
   * >  You can call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to query the IDs of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hfs6gaawhyu6****
   */
  imageInstanceId?: string;
  /**
   * @remarks
   * The region ID of the image.
   * 
   * >  You can call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to query the IDs of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  imageRegionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  You can call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to query the IDs of image repositories.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-7i88t7lx3fmf****
   */
  imageRepoId?: string;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * >  You can call the [DescribeImageInstances](~~DescribeImageInstances~~) operation to query tags.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.8.0.15
   */
  imageTag?: string;
  static names(): { [key: string]: string } {
    return {
      imageInstanceId: 'ImageInstanceId',
      imageRegionId: 'ImageRegionId',
      imageRepoId: 'ImageRepoId',
      imageTag: 'ImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInstanceId: 'string',
      imageRegionId: 'string',
      imageRepoId: 'string',
      imageTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

