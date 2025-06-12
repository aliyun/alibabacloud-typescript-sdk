// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions extends $dara.Model {
  /**
   * @remarks
   * The policy for creating spot instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. This policy indicates that the lowest-priced instance type is used to create instances.
   * *   diversified: balanced distribution policy. This policy indicates that instances are created evenly across multiple zones specified in the extended configuration.
   * 
   * @example
   * diversified
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The action to be performed after the excess spot instances are stopped. Valid values:
   * 
   * *   stop: retains the excess spot instances in the stopped state.
   * *   terminate: releases the excess spot instances.
   * 
   * @example
   * stop
   */
  instanceInterruptionBehavior?: string;
  /**
   * @remarks
   * The number of instances that the auto provisioning group creates by selecting the instance type of the lowest price.
   * 
   * >  This parameter is set when the auto provisioning group is created, and cannot be modified.
   * 
   * @example
   * 2
   */
  instancePoolsToUseCount?: number;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      instanceInterruptionBehavior: 'InstanceInterruptionBehavior',
      instancePoolsToUseCount: 'InstancePoolsToUseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      instanceInterruptionBehavior: 'string',
      instancePoolsToUseCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

