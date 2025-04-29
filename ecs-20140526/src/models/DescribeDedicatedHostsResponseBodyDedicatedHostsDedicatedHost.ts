// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags";


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost extends $dara.Model {
  schedulerOptions?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions;
  /**
   * @remarks
   * The policy used to migrate the ECS instances deployed on the dedicated host when the dedicated host fails. Valid values:
   * 
   * *   Migrate: The instances are migrated to another physical machine. Instances that are not in the Stopped state when the dedicated host fails are restarted.
   * *   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.
   * 
   * If the dedicated host has cloud disks attached, the default value is Migrate. If the dedicated host has local disks attached, the default value is Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Indicates whether the dedicated host is added to the resource pool for automatic deployment. Valid values:
   * 
   * *   on: The dedicated host is added to the resource pool for automatic deployment.
   * *   off: The dedicated host is not added to the resource pool for automatic deployment.
   * 
   * For information about automatic deployment, see the "Automatic deployment" section in [Functions and features](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * on
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The automatic release time of the dedicated host. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-01T12:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The performance specifications of the dedicated host.
   */
  capacity?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity;
  /**
   * @remarks
   * The billing method of the dedicated host.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of physical cores per CPU.
   * 
   * @example
   * 3
   */
  cores?: number;
  /**
   * @remarks
   * The CPU overcommit ratio.Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The time when the dedicated host was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-01T12:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the dedicated host cluster to which the dedicated host belongs.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * MyDDHTestName
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The ID of the dedicated host owner.
   * 
   * @example
   * 100************7
   */
  dedicatedHostOwnerId?: number;
  /**
   * @remarks
   * The type of the dedicated host.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The description of the dedicated host.
   * 
   * @example
   * this-is-my-DDH
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the subscription dedicated host. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T12:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * gpu
   */
  GPUSpec?: string;
  /**
   * @remarks
   * This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   */
  hostDetailInfo?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo;
  /**
   * @remarks
   * The ECS instances that were created on the dedicated host.
   */
  instances?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances;
  /**
   * @remarks
   * The machine code of the dedicated host.
   * 
   * @example
   * 12aaa123456ff19dec12345d3026e****
   */
  machineId?: string;
  /**
   * @remarks
   * The network attributes of the dedicated host.
   */
  networkAttributes?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes;
  /**
   * @remarks
   * The reasons why the resources of the dedicated host were locked.
   */
  operationLocks?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks;
  /**
   * @remarks
   * The number of physical GPUs.
   * 
   * @example
   * 10
   */
  physicalGpus?: number;
  /**
   * @remarks
   * The region ID of the dedicated host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs.
   * 
   * @example
   * rg-aek3b6jzp66****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  saleCycle?: string;
  /**
   * @remarks
   * The number of physical CPUs.
   * 
   * @example
   * 5
   */
  sockets?: number;
  /**
   * @remarks
   * The status of the dedicated host. Valid values:
   * 
   * *   Available: The dedicated host is running as expected.
   * *   UnderAssessment: The dedicated host is available but has potential risks that may cause the ECS instances on the dedicated host to fail.
   * *   PermanentFailure: The dedicated host has permanent failures and is unavailable.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The custom ECS instance families that are supported by the dedicated host.
   */
  supportedCustomInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies;
  /**
   * @remarks
   * The ECS instance families that are supported by the dedicated host.
   */
  supportedInstanceTypeFamilies?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies;
  /**
   * @remarks
   * The ECS instance types that are supported by the dedicated host.
   */
  supportedInstanceTypesList?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList;
  /**
   * @remarks
   * The tags of the dedicated host.
   */
  tags?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags;
  /**
   * @remarks
   * The zone ID of the dedicated host.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      schedulerOptions: 'SchedulerOptions',
      actionOnMaintenance: 'ActionOnMaintenance',
      autoPlacement: 'AutoPlacement',
      autoReleaseTime: 'AutoReleaseTime',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      cores: 'Cores',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      creationTime: 'CreationTime',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostOwnerId: 'DedicatedHostOwnerId',
      dedicatedHostType: 'DedicatedHostType',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      GPUSpec: 'GPUSpec',
      hostDetailInfo: 'HostDetailInfo',
      instances: 'Instances',
      machineId: 'MachineId',
      networkAttributes: 'NetworkAttributes',
      operationLocks: 'OperationLocks',
      physicalGpus: 'PhysicalGpus',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      saleCycle: 'SaleCycle',
      sockets: 'Sockets',
      status: 'Status',
      supportedCustomInstanceTypeFamilies: 'SupportedCustomInstanceTypeFamilies',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedulerOptions: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSchedulerOptions,
      actionOnMaintenance: 'string',
      autoPlacement: 'string',
      autoReleaseTime: 'string',
      capacity: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity,
      chargeType: 'string',
      cores: 'number',
      cpuOverCommitRatio: 'number',
      creationTime: 'string',
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
      dedicatedHostOwnerId: 'number',
      dedicatedHostType: 'string',
      description: 'string',
      expiredTime: 'string',
      GPUSpec: 'string',
      hostDetailInfo: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostHostDetailInfo,
      instances: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances,
      machineId: 'string',
      networkAttributes: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes,
      operationLocks: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks,
      physicalGpus: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      saleCycle: 'string',
      sockets: 'number',
      status: 'string',
      supportedCustomInstanceTypeFamilies: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies,
      supportedInstanceTypeFamilies: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedInstanceTypesList,
      tags: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.capacity && typeof (this.capacity as any).validate === 'function') {
      (this.capacity as any).validate();
    }
    if(this.hostDetailInfo && typeof (this.hostDetailInfo as any).validate === 'function') {
      (this.hostDetailInfo as any).validate();
    }
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.supportedCustomInstanceTypeFamilies && typeof (this.supportedCustomInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedCustomInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypeFamilies && typeof (this.supportedInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypesList && typeof (this.supportedInstanceTypesList as any).validate === 'function') {
      (this.supportedInstanceTypesList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

