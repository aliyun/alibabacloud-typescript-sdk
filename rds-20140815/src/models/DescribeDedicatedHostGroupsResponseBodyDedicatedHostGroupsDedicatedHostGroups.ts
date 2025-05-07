// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList } from "./DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIdlist";


export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $dara.Model {
  /**
   * @remarks
   * The policy based on which the system allocates resources in the dedicated cluster. Valid values:
   * 
   * *   **Evenly**: The system evenly allocates the resources to all the hosts in the dedicated cluster.
   * *   **Intensively**: The system preferentially allocates the resources to the heavily loaded hosts in the dedicated cluster.
   * 
   * @example
   * Evenly
   */
  allocationPolicy?: string;
  /**
   * @remarks
   * The ID of the bastion host.
   * 
   * @example
   * bastionhost-cn-m7xxxxxxxx
   */
  bastionInstanceId?: string;
  /**
   * @remarks
   * The percentage of allocated cores in the dedicated cluster. Unit: %.
   * 
   * @example
   * 25
   */
  cpuAllocateRation?: number;
  /**
   * @remarks
   * The number of allocated cores in the dedicated cluster.
   * 
   * @example
   * 8
   */
  cpuAllocatedAmount?: number;
  /**
   * @remarks
   * The core overcommitment ratio of the dedicated cluster. Unit: %. For more information about the core overcommitment ratio, see [Manage a dedicated cluster](https://help.aliyun.com/document_detail/182328.html).
   * 
   * @example
   * 200
   */
  cpuAllocationRatio?: number;
  /**
   * @remarks
   * The timestamp when the dedicated cluster was created.
   * 
   * @example
   * 1571125370000
   */
  createTime?: string;
  /**
   * @remarks
   * The type of storage media that is used for the hosts in the dedicated cluster. Valid values:
   * 
   * *   **dhg_cloud_ssd**: cloud disks
   * *   **dhg_local_ssd**: local disks
   * 
   * @example
   * dhg_cloud_ssd
   */
  dedicatedHostCountGroupByHostType?: { [key: string]: any };
  /**
   * @remarks
   * The name of the dedicated cluster.
   * 
   * @example
   * testHostGroup
   */
  dedicatedHostGroupDesc?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The percentage of allocated disk space in the dedicated cluster. Unit: %.
   * 
   * @example
   * 0.49
   */
  diskAllocateRation?: number;
  /**
   * @remarks
   * The amount of allocated disk space in the dedicated cluster. Unit: GB.
   * 
   * @example
   * 200
   */
  diskAllocatedAmount?: number;
  /**
   * @remarks
   * The disk overcommitment ratio of the dedicated cluster. Unit: %. For more information about the core overcommitment ratio, see [Manage a dedicated cluster](https://help.aliyun.com/document_detail/182328.html).
   * 
   * @example
   * 200
   */
  diskAllocationRatio?: number;
  /**
   * @remarks
   * The amount of used disk space in the dedicated cluster. Unit: GB.
   * 
   * @example
   * 20
   */
  diskUsedAmount?: number;
  /**
   * @remarks
   * The disk usage of the dedicated cluster. Unit: %.
   * 
   * @example
   * 0
   */
  diskUtility?: number;
  /**
   * @remarks
   * The database engine of the instances in the dedicated cluster.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The total number of hosts in the dedicated cluster.
   * 
   * @example
   * 3
   */
  hostNumber?: number;
  /**
   * @remarks
   * The policy that is used to handle host failures. Valid values:
   * 
   * *   **Auto**: The system automatically replaces faulty hosts.
   * *   **Manual**: You must manually replace faulty hosts.
   * 
   * @example
   * Auto
   */
  hostReplacePolicy?: string;
  /**
   * @remarks
   * The total number of instances in the dedicated cluster.
   * 
   * @example
   * 4
   */
  instanceNumber?: number;
  /**
   * @remarks
   * The percentage of allocated memory space in the dedicated cluster. Unit: %.
   * 
   * @example
   * 33.7
   */
  memAllocateRation?: number;
  /**
   * @remarks
   * The amount of allocated memory space in the dedicated cluster.
   * 
   * @example
   * 16384
   */
  memAllocatedAmount?: number;
  /**
   * @remarks
   * The memory overcommitment ratio of the dedicated cluster. Unit: %. For more information about the core overcommitment ratio, see [Manage a dedicated cluster](https://help.aliyun.com/document_detail/182328.html).
   * 
   * @example
   * 90
   */
  memAllocationRatio?: number;
  /**
   * @remarks
   * The amount of used memory space in the dedicated cluster. Unit: MB.
   * 
   * @example
   * 0
   */
  memUsedAmount?: number;
  /**
   * @remarks
   * The memory usage of the dedicated cluster. Unit: %.
   * 
   * @example
   * 0
   */
  memUtility?: number;
  /**
   * @remarks
   * Indicates whether the feature that allows you to have the OS permissions on the host is enabled. Valid values:
   * 
   * *   **0** or **null**: The permissions cannot be granted.
   * *   **1**: The permissions can be granted.
   * *   **3**: The permissions have been granted.
   * 
   * @example
   * 3
   */
  openPermission?: string;
  /**
   * @remarks
   * The name and ID of the dedicated cluster. The value consists of **DedicatedHostGroupDesc** and **DedicatedHostGroupId**. Format: DedicatedHostGroupDesc/DedicatedHostGroupId.
   * 
   * @example
   * testHostGroup/dhg-7a9xxxxxxxx
   */
  text?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the dedicated cluster belongs.
   * 
   * @example
   * vpc-bp1oxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The zones to which the hosts of the dedicated cluster belong.
   */
  zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
  static names(): { [key: string]: string } {
    return {
      allocationPolicy: 'AllocationPolicy',
      bastionInstanceId: 'BastionInstanceId',
      cpuAllocateRation: 'CpuAllocateRation',
      cpuAllocatedAmount: 'CpuAllocatedAmount',
      cpuAllocationRatio: 'CpuAllocationRatio',
      createTime: 'CreateTime',
      dedicatedHostCountGroupByHostType: 'DedicatedHostCountGroupByHostType',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      diskAllocateRation: 'DiskAllocateRation',
      diskAllocatedAmount: 'DiskAllocatedAmount',
      diskAllocationRatio: 'DiskAllocationRatio',
      diskUsedAmount: 'DiskUsedAmount',
      diskUtility: 'DiskUtility',
      engine: 'Engine',
      hostNumber: 'HostNumber',
      hostReplacePolicy: 'HostReplacePolicy',
      instanceNumber: 'InstanceNumber',
      memAllocateRation: 'MemAllocateRation',
      memAllocatedAmount: 'MemAllocatedAmount',
      memAllocationRatio: 'MemAllocationRatio',
      memUsedAmount: 'MemUsedAmount',
      memUtility: 'MemUtility',
      openPermission: 'OpenPermission',
      text: 'Text',
      VPCId: 'VPCId',
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationPolicy: 'string',
      bastionInstanceId: 'string',
      cpuAllocateRation: 'number',
      cpuAllocatedAmount: 'number',
      cpuAllocationRatio: 'number',
      createTime: 'string',
      dedicatedHostCountGroupByHostType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dedicatedHostGroupDesc: 'string',
      dedicatedHostGroupId: 'string',
      diskAllocateRation: 'number',
      diskAllocatedAmount: 'number',
      diskAllocationRatio: 'number',
      diskUsedAmount: 'number',
      diskUtility: 'number',
      engine: 'string',
      hostNumber: 'number',
      hostReplacePolicy: 'string',
      instanceNumber: 'number',
      memAllocateRation: 'number',
      memAllocatedAmount: 'number',
      memAllocationRatio: 'number',
      memUsedAmount: 'number',
      memUtility: 'number',
      openPermission: 'string',
      text: 'string',
      VPCId: 'string',
      zoneIDList: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList,
    };
  }

  validate() {
    if(this.dedicatedHostCountGroupByHostType) {
      $dara.Model.validateMap(this.dedicatedHostCountGroupByHostType);
    }
    if(this.zoneIDList && typeof (this.zoneIDList as any).validate === 'function') {
      (this.zoneIDList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

