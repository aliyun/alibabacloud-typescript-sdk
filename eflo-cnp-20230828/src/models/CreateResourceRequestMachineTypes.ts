// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestMachineTypes extends $dara.Model {
  /**
   * @remarks
   * Number of Network Bonds
   * 
   * @example
   * 5
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU Information
   * 
   * This parameter is required.
   * 
   * @example
   * 2x Intel Saphhire Rapid 8469C 48C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk Information
   * 
   * @example
   * 2x 480GB SATA SSD \\n 4x 3.84TB NVMe SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU Information
   * 
   * This parameter is required.
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory Information
   * 
   * @example
   * 32x 64GB DDR4 4800 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * Specification Name
   * 
   * @example
   * efg1.nvga1n
   */
  name?: string;
  /**
   * @remarks
   * Network Information
   * 
   * @example
   * 1x 200Gbps Dual Port BF3 DPU for VPC\\\\n4x 200Gbps Dual Port EIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * Network Mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Number of Nodes
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * Type
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bondNum: 'BondNum',
      cpuInfo: 'CpuInfo',
      diskInfo: 'DiskInfo',
      gpuInfo: 'GpuInfo',
      memoryInfo: 'MemoryInfo',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      networkMode: 'NetworkMode',
      nodeCount: 'NodeCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      diskInfo: 'string',
      gpuInfo: 'string',
      memoryInfo: 'string',
      name: 'string',
      networkInfo: 'string',
      networkMode: 'string',
      nodeCount: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

