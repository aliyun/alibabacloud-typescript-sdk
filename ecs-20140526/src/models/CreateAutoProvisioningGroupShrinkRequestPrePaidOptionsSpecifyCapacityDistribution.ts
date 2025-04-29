// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution extends $dara.Model {
  /**
   * @remarks
   * Details about the instance types. Duplicate instance types are not allowed and the instance types are within the LaunchTemplateConfig.InstanceType range.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The minimum number of instances to be delivered within the `InstanceTypes` range.
   * 
   * >  `sum(MinTargetCapacity)<= TotalTargetCapacity` indicates that the sum of MinTargetCapacity values of all instance types cannot exceed the TotalTargetCapacity value. If any instance type set cannot meet the MinTargetCapacity requirement due to insufficient inventory or other reasons, the entire request fails.
   * 
   * @example
   * 5
   */
  minTargetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      minTargetCapacity: 'MinTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      minTargetCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

