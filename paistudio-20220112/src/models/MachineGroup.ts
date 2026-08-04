// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroup extends $dara.Model {
  allocatableCpu?: number;
  allocatableMemory?: number;
  cpu?: number;
  /**
   * @remarks
   * Machine group creator ID
   * 
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @remarks
   * Default driver supported by the machine group
   * 
   * @example
   * 470.199.02
   */
  defaultDriver?: string;
  diskCapacity?: number;
  diskPL?: string;
  /**
   * @remarks
   * Resource count
   * 
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @remarks
   * ECS specification
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * Expiration Time
   * 
   * @example
   * 2023-08-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Start At
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  gpu?: number;
  gpuMemory?: number;
  gpuType?: string;
  /**
   * @remarks
   * Machine Group ID
   * 
   * @example
   * mg1
   */
  machineGroupID?: string;
  memory?: number;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * “”
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 2
   */
  paymentDuration?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * Monthly
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * Payment type
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * Machine group error code
   * 
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @remarks
   * Machine group fault message
   * 
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  resourceType?: string;
  /**
   * @remarks
   * Machine group status
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * List of NVIDIA GPU driver versions supported by the machine group
   */
  supportedDrivers?: string[];
  systemReservedCpu?: number;
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

