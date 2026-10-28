// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUMetric } from "./Gpumetric";


export class NodeGPUMetric extends $dara.Model {
  /**
   * @remarks
   * The accelerator type.
   * 
   * @example
   * GPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The GPU count.
   * 
   * @example
   * 1
   */
  GPUCount?: number;
  /**
   * @remarks
   * The GPU metrics.
   */
  GPUMetrics?: GPUMetric[];
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory utilization.
   * 
   * @example
   * 0
   */
  memoryUtil?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * lingj19q90jp66nq-mg1a2kc92f9nn8yd-20
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * ecs.c8i.xlarge
   */
  nodeType?: string;
  /**
   * @remarks
   * The total memory.
   */
  totalMemory?: number;
  /**
   * @remarks
   * The used memory.
   * 
   * @example
   * 0
   */
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      GPUCount: 'GPUCount',
      GPUMetrics: 'GPUMetrics',
      GPUType: 'GPUType',
      memoryUtil: 'MemoryUtil',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      totalMemory: 'TotalMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      GPUCount: 'number',
      GPUMetrics: { 'type': 'array', 'itemType': GPUMetric },
      GPUType: 'string',
      memoryUtil: 'number',
      nodeId: 'string',
      nodeType: 'string',
      totalMemory: 'number',
      usedMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.GPUMetrics)) {
      $dara.Model.validateArray(this.GPUMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

