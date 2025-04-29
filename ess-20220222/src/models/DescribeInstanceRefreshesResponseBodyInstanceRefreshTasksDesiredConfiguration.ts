// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRefreshesResponseBodyInstanceRefreshTasksDesiredConfiguration extends $dara.Model {
  /**
   * @remarks
   * The ID of the image file that provides the image resource for Auto Scaling to create instances.
   * 
   * @example
   * m-uf6g5noisr****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-wz91ibkhfor****
   */
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

