// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupMachineGroupResponseBodyTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
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
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * 535
   */
  defaultDriver?: string;
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
   * 2023-06-22T00:00:00Z
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
  /**
   * @example
   * 8
   */
  gpu?: string;
  /**
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @example
   * mgmioirqjgw6c5lg
   */
  machineGroupID?: string;
  /**
   * @example
   * 64
   */
  memory?: string;
  /**
   * @example
   * testMachineGroup
   */
  name?: string;
  /**
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  supportedDrivers?: string[];
  systemReservedCpu?: string;
  systemReservedMemory?: string;
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

