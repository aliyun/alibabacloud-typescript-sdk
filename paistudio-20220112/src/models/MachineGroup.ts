// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MachineGroup extends $dara.Model {
  allocatableCpu?: number;
  allocatableMemory?: number;
  cpu?: number;
  /**
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultDriver?: string;
  diskCapacity?: number;
  diskPL?: string;
  /**
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2023-08-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  gpu?: number;
  gpuMemory?: number;
  gpuType?: string;
  /**
   * @example
   * mg1
   */
  machineGroupID?: string;
  memory?: number;
  /**
   * @example
   * “”
   */
  orderInstanceId?: string;
  /**
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
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  resourceType?: string;
  /**
   * @example
   * Success
   */
  status?: string;
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

