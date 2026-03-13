// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GPUMetric } from "./Gpumetric";


export class NodeGPUMetric extends $dara.Model {
  acceleratorType?: string;
  GPUCount?: number;
  GPUMetrics?: GPUMetric[];
  GPUType?: string;
  memoryUtil?: number;
  nodeId?: string;
  nodeType?: string;
  totalMemory?: number;
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

