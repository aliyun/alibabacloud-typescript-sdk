// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCandidateOptions extends $dara.Model {
  /**
   * @example
   * 60
   */
  timeoutMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutMinutes: 'TimeoutMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCapacitySpecification extends $dara.Model {
  /**
   * @example
   * 2
   */
  payAsYouGoCapacity?: number;
  /**
   * @example
   * 0
   */
  prePaidCapacity?: number;
  /**
   * @example
   * 3
   */
  spotCapacity?: number;
  /**
   * @example
   * 5
   */
  totalCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      payAsYouGoCapacity: 'PayAsYouGoCapacity',
      prePaidCapacity: 'PrePaidCapacity',
      spotCapacity: 'SpotCapacity',
      totalCapacity: 'TotalCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payAsYouGoCapacity: 'number',
      prePaidCapacity: 'number',
      spotCapacity: 'number',
      totalCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig extends $dara.Model {
  instanceType?: string;
  maxPrice?: number;
  priority?: number;
  vSwitchId?: string;
  weightedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      priority: 'Priority',
      vSwitchId: 'VSwitchId',
      weightedCapacity: 'WeightedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      priority: 'number',
      vSwitchId: 'string',
      weightedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs extends $dara.Model {
  launchTemplateConfig?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateConfig: 'LaunchTemplateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateConfig: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigsLaunchTemplateConfig },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateConfig)) {
      $dara.Model.validateArray(this.launchTemplateConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions extends $dara.Model {
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

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions extends $dara.Model {
  allocationStrategy?: string;
  instanceInterruptionBehavior?: string;
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

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSuspendedProcesses extends $dara.Model {
  suspendedProcess?: string[];
  static names(): { [key: string]: string } {
    return {
      suspendedProcess: 'SuspendedProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspendedProcess: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.suspendedProcess)) {
      $dara.Model.validateArray(this.suspendedProcess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags extends $dara.Model {
  tag?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification extends $dara.Model {
  defaultTargetCapacityType?: string;
  payAsYouGoTargetCapacity?: number;
  spotTargetCapacity?: number;
  totalTargetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      defaultTargetCapacityType: 'DefaultTargetCapacityType',
      payAsYouGoTargetCapacity: 'PayAsYouGoTargetCapacity',
      spotTargetCapacity: 'SpotTargetCapacity',
      totalTargetCapacity: 'TotalTargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTargetCapacityType: 'string',
      payAsYouGoTargetCapacity: 'number',
      spotTargetCapacity: 'number',
      totalTargetCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup extends $dara.Model {
  autoProvisioningGroupId?: string;
  autoProvisioningGroupName?: string;
  autoProvisioningGroupType?: string;
  candidateOptions?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCandidateOptions;
  capacitySpecification?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCapacitySpecification;
  creationTime?: string;
  excessCapacityTerminationPolicy?: string;
  launchTemplateConfigs?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs;
  launchTemplateId?: string;
  launchTemplateVersion?: string;
  maxSpotPrice?: number;
  payAsYouGoOptions?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions;
  regionId?: string;
  resourceGroupId?: string;
  spotOptions?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions;
  state?: string;
  status?: string;
  suspendedProcesses?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSuspendedProcesses;
  tags?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags;
  targetCapacitySpecification?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification;
  terminateInstances?: boolean;
  terminateInstancesWithExpiration?: boolean;
  validFrom?: string;
  validUntil?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupType: 'AutoProvisioningGroupType',
      candidateOptions: 'CandidateOptions',
      capacitySpecification: 'CapacitySpecification',
      creationTime: 'CreationTime',
      excessCapacityTerminationPolicy: 'ExcessCapacityTerminationPolicy',
      launchTemplateConfigs: 'LaunchTemplateConfigs',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxSpotPrice: 'MaxSpotPrice',
      payAsYouGoOptions: 'PayAsYouGoOptions',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      spotOptions: 'SpotOptions',
      state: 'State',
      status: 'Status',
      suspendedProcesses: 'SuspendedProcesses',
      tags: 'Tags',
      targetCapacitySpecification: 'TargetCapacitySpecification',
      terminateInstances: 'TerminateInstances',
      terminateInstancesWithExpiration: 'TerminateInstancesWithExpiration',
      validFrom: 'ValidFrom',
      validUntil: 'ValidUntil',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupType: 'string',
      candidateOptions: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCandidateOptions,
      capacitySpecification: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupCapacitySpecification,
      creationTime: 'string',
      excessCapacityTerminationPolicy: 'string',
      launchTemplateConfigs: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupLaunchTemplateConfigs,
      launchTemplateId: 'string',
      launchTemplateVersion: 'string',
      maxSpotPrice: 'number',
      payAsYouGoOptions: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupPayAsYouGoOptions,
      regionId: 'string',
      resourceGroupId: 'string',
      spotOptions: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSpotOptions,
      state: 'string',
      status: 'string',
      suspendedProcesses: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupSuspendedProcesses,
      tags: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTags,
      targetCapacitySpecification: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroupTargetCapacitySpecification,
      terminateInstances: 'boolean',
      terminateInstancesWithExpiration: 'boolean',
      validFrom: 'string',
      validUntil: 'string',
    };
  }

  validate() {
    if(this.candidateOptions && typeof (this.candidateOptions as any).validate === 'function') {
      (this.candidateOptions as any).validate();
    }
    if(this.capacitySpecification && typeof (this.capacitySpecification as any).validate === 'function') {
      (this.capacitySpecification as any).validate();
    }
    if(this.launchTemplateConfigs && typeof (this.launchTemplateConfigs as any).validate === 'function') {
      (this.launchTemplateConfigs as any).validate();
    }
    if(this.payAsYouGoOptions && typeof (this.payAsYouGoOptions as any).validate === 'function') {
      (this.payAsYouGoOptions as any).validate();
    }
    if(this.spotOptions && typeof (this.spotOptions as any).validate === 'function') {
      (this.spotOptions as any).validate();
    }
    if(this.suspendedProcesses && typeof (this.suspendedProcesses as any).validate === 'function') {
      (this.suspendedProcesses as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.targetCapacitySpecification && typeof (this.targetCapacitySpecification as any).validate === 'function') {
      (this.targetCapacitySpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups extends $dara.Model {
  autoProvisioningGroup?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroup: 'AutoProvisioningGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroup: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroup)) {
      $dara.Model.validateArray(this.autoProvisioningGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsResponseBody extends $dara.Model {
  autoProvisioningGroups?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried auto provisioning groups.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroups: 'AutoProvisioningGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroups: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.autoProvisioningGroups && typeof (this.autoProvisioningGroups as any).validate === 'function') {
      (this.autoProvisioningGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

