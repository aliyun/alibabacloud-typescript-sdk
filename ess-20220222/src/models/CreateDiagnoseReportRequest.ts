// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDiagnoseReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the scaling group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the target scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1f2f6oxc2*******
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

