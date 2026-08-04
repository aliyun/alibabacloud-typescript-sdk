// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupMachineGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
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

export class GetResourceGroupMachineGroupResponseBody extends $dara.Model {
  allocatableCpu?: string;
  allocatableMemory?: string;
  /**
   * @remarks
   * The total number of CPU cores per machine in the machine group.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The default GPU driver version per machine in the machine group.
   * 
   * @example
   * 535
   */
  defaultDriver?: string;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @remarks
   * The ECS spec.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The creation time of the machine group.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The expiration time of the machine group.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @remarks
   * The last modification time of the machine group.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The start time of the machine group.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  /**
   * @remarks
   * The number of GPUs per machine in the machine group.
   * 
   * @example
   * 8
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU type per machine in the machine group.
   * 
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @remarks
   * The ID of the machine group.
   * 
   * @example
   * mgmioirqjgw6c5lg
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The amount of memory per machine in the machine group.
   * 
   * @example
   * 64
   */
  memory?: string;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * @example
   * testMachineGroup
   */
  name?: string;
  /**
   * @remarks
   * The payment duration. When PaymentDurationUnit is set to Month, valid values are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @remarks
   * The unit of the billing cycle for the machine group.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group. This ID is globally unique and can be used to retrieve information about the resource group.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The status of the machine group.
   * Valid values:
   * Creating: The machine group is being created.
   * Ready: The machine group is running.
   * Expiring: The machine group is about to expire.
   * Expired: The machine group has expired.
   * Stopping: The machine group is being stopped.
   * Stopped: The machine group has been stopped.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The GPU driver versions supported by the machines in the machine group.
   */
  supportedDrivers?: string[];
  systemReservedCpu?: string;
  systemReservedMemory?: string;
  /**
   * @remarks
   * The list of tags attached to the machine group.
   */
  tags?: GetResourceGroupMachineGroupResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      allocatableCpu: 'AllocatableCpu',
      allocatableMemory: 'AllocatableMemory',
      cpu: 'Cpu',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      machineGroupID: 'MachineGroupID',
      memory: 'Memory',
      name: 'Name',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
      systemReservedCpu: 'SystemReservedCpu',
      systemReservedMemory: 'SystemReservedMemory',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatableCpu: 'string',
      allocatableMemory: 'string',
      cpu: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      gpu: 'string',
      gpuType: 'string',
      machineGroupID: 'string',
      memory: 'string',
      name: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
      systemReservedCpu: 'string',
      systemReservedMemory: 'string',
      tags: { 'type': 'array', 'itemType': GetResourceGroupMachineGroupResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

