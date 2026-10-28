// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcsSpec extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @remarks
   * The ECS image ID.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  ecsImageId?: string;
  /**
   * @remarks
   * The number of Elastic RDMA Interface (ERI) network interface controllers.
   * 
   * @example
   * 0
   */
  eriQuantity?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpu?: number;
  /**
   * @remarks
   * The GPU computing unit specifications.
   */
  gpuGUSpec?: string;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 80
   */
  gpuMemory?: number;
  /**
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @remarks
   * The GPU type alias.
   * 
   * @example
   * A100
   */
  gpuTypeAlias?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ml.gu7xf.8xlarge-gu108
   */
  instanceType?: string;
  /**
   * @remarks
   * The machine model.
   */
  machineModel?: string;
  /**
   * @remarks
   * The memory resources.
   * 
   * @example
   * 92
   */
  memory?: number;
  /**
   * @remarks
   * The network mode.
   */
  networkMode?: string;
  /**
   * @remarks
   * The planned number of CPU cores.
   * 
   * @example
   * 12
   */
  plannedCpu?: number;
  /**
   * @remarks
   * The planned memory size.
   */
  plannedMemory?: number;
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
   * Specifies whether GPU sharing is supported.
   */
  supportGPUShare?: boolean;
  supportRDMA?: boolean;
  /**
   * @remarks
   * Specifies whether setting the network interface controller index is supported.
   */
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

