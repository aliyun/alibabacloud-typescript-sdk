// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeType extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the resource node specifications (CPU/GPU).
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of allocatable CPU cores.
   * 
   * @example
   * 2
   */
  allocatableCPU?: string;
  /**
   * @remarks
   * The allocatable memory size.
   * 
   * @example
   * 2Gi
   */
  allocatableMemory?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 16
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU memory.
   * 
   * @example
   * 80G
   */
  GPUMemory?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * A10
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 64Gi
   */
  memory?: string;
  /**
   * @remarks
   * The resource node specifications type.
   * 
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  /**
   * @remarks
   * The number of system-reserved CPU cores.
   * 
   * @example
   * 0
   */
  systemReservedCPU?: string;
  /**
   * @remarks
   * The system-reserved memory size.
   * 
   * @example
   * 2Gi
   */
  systemReservedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      allocatableCPU: 'AllocatableCPU',
      allocatableMemory: 'AllocatableMemory',
      CPU: 'CPU',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      memory: 'Memory',
      nodeType: 'NodeType',
      systemReservedCPU: 'SystemReservedCPU',
      systemReservedMemory: 'SystemReservedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      allocatableCPU: 'string',
      allocatableMemory: 'string',
      CPU: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUType: 'string',
      memory: 'string',
      nodeType: 'string',
      systemReservedCPU: 'string',
      systemReservedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

