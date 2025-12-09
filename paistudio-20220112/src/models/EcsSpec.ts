// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcsSpec extends $dara.Model {
  acceleratorType?: string;
  cpu?: number;
  ecsImageId?: string;
  eriQuantity?: number;
  gpu?: number;
  gpuGUSpec?: string;
  gpuMemory?: number;
  gpuType?: string;
  gpuTypeAlias?: string;
  instanceType?: string;
  machineModel?: string;
  memory?: number;
  networkMode?: string;
  plannedCpu?: number;
  plannedMemory?: number;
  resourceType?: string;
  supportGPUShare?: boolean;
  supportRDMA?: boolean;
  supportSetNetworkCardIndex?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      cpu: 'Cpu',
      ecsImageId: 'EcsImageId',
      eriQuantity: 'EriQuantity',
      gpu: 'Gpu',
      gpuGUSpec: 'GpuGUSpec',
      gpuMemory: 'GpuMemory',
      gpuType: 'GpuType',
      gpuTypeAlias: 'GpuTypeAlias',
      instanceType: 'InstanceType',
      machineModel: 'MachineModel',
      memory: 'Memory',
      networkMode: 'NetworkMode',
      plannedCpu: 'PlannedCpu',
      plannedMemory: 'PlannedMemory',
      resourceType: 'ResourceType',
      supportGPUShare: 'SupportGPUShare',
      supportRDMA: 'SupportRDMA',
      supportSetNetworkCardIndex: 'SupportSetNetworkCardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      cpu: 'number',
      ecsImageId: 'string',
      eriQuantity: 'number',
      gpu: 'number',
      gpuGUSpec: 'string',
      gpuMemory: 'number',
      gpuType: 'string',
      gpuTypeAlias: 'string',
      instanceType: 'string',
      machineModel: 'string',
      memory: 'number',
      networkMode: 'string',
      plannedCpu: 'number',
      plannedMemory: 'number',
      resourceType: 'string',
      supportGPUShare: 'boolean',
      supportRDMA: 'boolean',
      supportSetNetworkCardIndex: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

