// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotAdviceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs of the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of GPUs that a GPU-accelerated instance has. For information about the valid values, see [GPU-accelerated compute optimized instance types](https://help.aliyun.com/document_detail/108496.html).
   * 
   * @example
   * 2
   */
  gpuAmount?: number;
  /**
   * @remarks
   * The GPU type. Valid values:
   * 
   * *   NVIDIA P4
   * *   NVIDIA T4
   * *   NVIDIA P100
   * *   NVIDIA V100
   * 
   * This parameter is left empty by default, which indicates that all GPU types are queried. For more information, see [GPU-accelerated compute-optimized and vGPU-accelerated instance families](https://help.aliyun.com/document_detail/108496.html).
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * *   EntryLevel.
   * *   EnterpriseLevel.
   * *   CreditEntryLevel. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * This parameter is left empty by default, which indicates that instance families at all levels are queried.
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance family. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.c5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance types. You can specify up to 10 instance types.
   * 
   * @example
   * ecs.c5.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The minimum number of vCPUs of the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 2
   */
  minCores?: number;
  /**
   * @remarks
   * The minimum memory size of the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 8.0
   */
  minMemory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is left empty by default, which indicates that all zones in the specified region are queried.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      gpuAmount: 'GpuAmount',
      gpuSpec: 'GpuSpec',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypes: 'InstanceTypes',
      memory: 'Memory',
      minCores: 'MinCores',
      minMemory: 'MinMemory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      gpuAmount: 'number',
      gpuSpec: 'string',
      instanceFamilyLevel: 'string',
      instanceTypeFamily: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      minCores: 'number',
      minMemory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
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

