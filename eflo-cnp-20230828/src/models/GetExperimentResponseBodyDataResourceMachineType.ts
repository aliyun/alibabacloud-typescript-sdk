// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBodyDataResourceMachineType extends $dara.Model {
  /**
   * @remarks
   * Number of network bonds
   * 
   * @example
   * 5
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU information
   * 
   * @example
   * 2x Intel Icelake 8369B 32C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk information
   * 
   * @example
   * 2x 480GB SATA SSD \\n 4x 3.84TB NVMe SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU information
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory information
   * 
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * Specification name
   * 
   * @example
   * efg1.nvga1n
   */
  name?: string;
  /**
   * @remarks
   * Network information
   * 
   * @example
   * 1x 100Gbps DP NIC for VPC \\n 4x 100Gbps DP RoCE NIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * Network mode
   * 
   * @example
   * 2
   */
  networkMode?: string;
  /**
   * @remarks
   * Number of nodes
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
   * Public
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

