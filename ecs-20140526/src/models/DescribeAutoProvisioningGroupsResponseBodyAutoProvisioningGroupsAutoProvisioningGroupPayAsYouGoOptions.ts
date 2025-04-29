// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions extends $dara.Model {
  /**
   * @remarks
   * The policy for creating pay-as-you-go instances. Valid values:
   * 
   * *   lowest-price: cost optimization policy. This policy indicates that lowest-cost instance types are used to create instances.
   * *   prioritized: priority-based policy. This policy indicates that instances are created based on the priority specified by the LaunchTemplateConfig.N.Priority parameter.
   * 
   * >  The LaunchTemplateConfig.N.Priority parameter is set when the auto provisioning group is created, and cannot be modified.
   * 
   * @example
   * prioritized
   */
  allocationStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

