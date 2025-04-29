// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The output format. Set the value to yaml.
   * 
   * @example
   * yaml
   */
  outputFormat?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      outputFormat: 'OutputFormat',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFormat: 'string',
      ownerId: 'number',
      regionId: 'string',
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

