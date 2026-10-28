// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroup extends $dara.Model {
  /**
   * @remarks
   * The number of allocatable CPU cores.
   * 
   * @example
   * 16
   */
  allocatableCpu?: number;
  /**
   * @remarks
   * The allocatable memory size.
   * 
   * @example
   * 55
   */
  allocatableMemory?: number;
  /**
   * @remarks
   * The number of CPU cores in the machine group.
   * 
   * @example
   * 16
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the machine group creator.
   * 
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @remarks
   * The default driver supported by the machine group.
   * 
   * @example
   * 470.199.02
   */
  defaultDriver?: string;
  /**
   * @remarks
   * The cloud disk size.
   * 
   * @example
   * 1000
   */
  diskCapacity?: number;
  /**
   * @remarks
   * The cloud disk performance level.
   * 
   * @example
   * PL0
   */
  diskPL?: string;
  /**
   * @remarks
   * The resource count.
   * 
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2023-08-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  /**
   * @remarks
   * The number of GPUs in the machine group.
   * 
   * @example
   * 2
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU memory size of the machine group.
   * 
   * @example
   * 16
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The GPU type of the machine group.
   * 
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @remarks
   * The machine group ID.
   * 
   * @example
   * mg1
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The memory size of the machine group.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * “”
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 2
   */
  paymentDuration?: string;
  /**
   * @remarks
   * region ID
   * 
   * @example
   * Monthly
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The machine group error code.
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * The machine group error message.
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The machine group status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The list of NVIDIA GPU driver versions supported by the machine group.
   */
  supportedDrivers?: string[];
  /**
   * @remarks
   * The number of system-reserved CPU cores.
   * 
   * @example
   * 0
   */
  systemReservedCpu?: number;
  /**
   * @remarks
   * The size of system-reserved memory.
   * 
   * @example
   * 9
   */
  systemReservedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      allocatableCpu: 'AllocatableCpu',
      allocatableMemory: 'AllocatableMemory',
      cpu: 'Cpu',
      creatorID: 'CreatorID',
      defaultDriver: 'DefaultDriver',
      diskCapacity: 'DiskCapacity',
      diskPL: 'DiskPL',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuType: 'GpuType',
      machineGroupID: 'MachineGroupID',
      memory: 'Memory',
      orderInstanceId: 'OrderInstanceId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupID: 'ResourceGroupID',
      resourceType: 'ResourceType',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
      systemReservedCpu: 'SystemReservedCpu',
      systemReservedMemory: 'SystemReservedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatableCpu: 'number',
      allocatableMemory: 'number',
      cpu: 'number',
      creatorID: 'string',
      defaultDriver: 'string',
      diskCapacity: 'number',
      diskPL: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      gpu: 'number',
      gpuMemory: 'number',
      gpuType: 'string',
      machineGroupID: 'string',
      memory: 'number',
      orderInstanceId: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupID: 'string',
      resourceType: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
      systemReservedCpu: 'number',
      systemReservedMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

