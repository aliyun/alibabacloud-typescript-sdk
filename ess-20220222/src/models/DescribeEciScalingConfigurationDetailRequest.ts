// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEciScalingConfigurationDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The output format. Set the value to YAML.
   * 
   * @example
   * yaml
   */
  outputFormat?: string;
  /**
   * @remarks
   * The region ID of the scaling group to which the scaling configuration belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling configuration based on which elastic container instances are created.
   * 
   * This parameter is required.
   * 
   * @example
   * asc-bp1ffogfdauy0nu5****
   */
  scalingConfigurationId?: string;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling configuration belongs.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
      scalingConfigurationId: 'ScalingConfigurationId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
      regionId: 'string',
      scalingConfigurationId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

