// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineTypesResponseBodyMachineTypes extends $dara.Model {
  /**
   * @remarks
   * The number of bonds.
   * 
   * @example
   * 2
   */
  bondNum?: number;
  /**
   * @remarks
   * CPU information.
   * 
   * @example
   * 2x Intel Icelake 8369B 32C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * Disk information.
   * 
   * @example
   * 2x 480GB SATA SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * GPU information.
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * Memory information.
   * 
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * The name of the machine type.
   * 
   * @example
   * efg1.nvga1
   */
  name?: string;
  /**
   * @remarks
   * Network information.
   * 
   * @example
   * 2x 100Gbps DP NIC
   */
  networkInfo?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 10
   */
  nodeCount?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 48
   */
  totalCpuCore?: number;
  /**
   * @remarks
   * The type of the machine type.
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
      nodeCount: 'NodeCount',
      totalCpuCore: 'TotalCpuCore',
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
      nodeCount: 'string',
      totalCpuCore: 'number',
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

export class ListMachineTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the machine types.
   */
  machineTypes?: ListMachineTypesResponseBodyMachineTypes[];
  /**
   * @remarks
   * The token to request the next page of results. Include this token in your next request to retrieve the next page.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F16BA4D8-FF50-53B6-A026-F443FE31006C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: { 'type': 'array', 'itemType': ListMachineTypesResponseBodyMachineTypes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineTypes)) {
      $dara.Model.validateArray(this.machineTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

