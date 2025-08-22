// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeType extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  allocatableCPU?: string;
  allocatableMemory?: string;
  /**
   * @example
   * 16
   */
  CPU?: string;
  /**
   * @example
   * 0
   */
  GPU?: string;
  /**
   * @example
   * 80G
   */
  GPUMemory?: string;
  GPUType?: string;
  /**
   * @example
   * 64Gi
   */
  memory?: string;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  systemReservedCPU?: string;
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

