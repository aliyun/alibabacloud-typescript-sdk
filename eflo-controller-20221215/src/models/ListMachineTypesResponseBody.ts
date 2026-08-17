// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineTypesResponseBodyMachineTypesCpuInfoDetail extends $dara.Model {
  /**
   * @example
   * x86_64
   */
  cpuArch?: string;
  /**
   * @example
   * 2
   */
  cpuSockets?: number;
  /**
   * @example
   * 192
   */
  VCpuCores?: number;
  static names(): { [key: string]: string } {
    return {
      cpuArch: 'CpuArch',
      cpuSockets: 'CpuSockets',
      VCpuCores: 'VCpuCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArch: 'string',
      cpuSockets: 'number',
      VCpuCores: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypesDiskInfoDetail extends $dara.Model {
  /**
   * @example
   * 4
   */
  localDiskCount?: number;
  /**
   * @example
   * 3.84
   */
  localDiskSizeInTB?: number;
  /**
   * @example
   * NVMe SSD
   */
  localDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      localDiskCount: 'LocalDiskCount',
      localDiskSizeInTB: 'LocalDiskSizeInTB',
      localDiskType: 'LocalDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localDiskCount: 'number',
      localDiskSizeInTB: 'number',
      localDiskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypesFrontendNetworkDetail extends $dara.Model {
  /**
   * @example
   * vpc
   */
  frontendNetworkType?: string;
  /**
   * @example
   * true
   */
  jumboFrameSupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      frontendNetworkType: 'FrontendNetworkType',
      jumboFrameSupported: 'JumboFrameSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendNetworkType: 'string',
      jumboFrameSupported: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypesGpuInfoDetail extends $dara.Model {
  /**
   * @example
   * 8
   */
  gpuCount?: number;
  /**
   * @example
   * 144
   */
  gpuMemoryInGB?: number;
  /**
   * @example
   * M890P-144G
   */
  gpuName?: string;
  /**
   * @example
   * T-HEAD
   */
  gpuVendor?: string;
  /**
   * @example
   * 9216
   */
  totalGpuMemoryInGB?: number;
  static names(): { [key: string]: string } {
    return {
      gpuCount: 'GpuCount',
      gpuMemoryInGB: 'GpuMemoryInGB',
      gpuName: 'GpuName',
      gpuVendor: 'GpuVendor',
      totalGpuMemoryInGB: 'TotalGpuMemoryInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuCount: 'number',
      gpuMemoryInGB: 'number',
      gpuName: 'string',
      gpuVendor: 'string',
      totalGpuMemoryInGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypesMemoryInfoDetail extends $dara.Model {
  /**
   * @example
   * 2048
   */
  memorySizeInGB?: number;
  static names(): { [key: string]: string } {
    return {
      memorySizeInGB: 'MemorySizeInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memorySizeInGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMachineTypesResponseBodyMachineTypesRdmaInfoDetail extends $dara.Model {
  /**
   * @example
   * 400
   */
  backendRdmaNicBwInGbps?: number;
  /**
   * @example
   * 4
   */
  backendRdmaNicCount?: number;
  static names(): { [key: string]: string } {
    return {
      backendRdmaNicBwInGbps: 'BackendRdmaNicBwInGbps',
      backendRdmaNicCount: 'BackendRdmaNicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendRdmaNicBwInGbps: 'number',
      backendRdmaNicCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  cpuInfoDetail?: ListMachineTypesResponseBodyMachineTypesCpuInfoDetail;
  /**
   * @remarks
   * Disk information.
   * 
   * @example
   * 2x 480GB SATA SSD
   */
  diskInfo?: string;
  diskInfoDetail?: ListMachineTypesResponseBodyMachineTypesDiskInfoDetail;
  frontendNetworkDetail?: ListMachineTypesResponseBodyMachineTypesFrontendNetworkDetail;
  /**
   * @remarks
   * GPU information.
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  gpuInfoDetail?: ListMachineTypesResponseBodyMachineTypesGpuInfoDetail;
  /**
   * @remarks
   * Memory information.
   * 
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  memoryInfoDetail?: ListMachineTypesResponseBodyMachineTypesMemoryInfoDetail;
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
  rdmaInfoDetail?: ListMachineTypesResponseBodyMachineTypesRdmaInfoDetail;
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
      cpuInfoDetail: 'CpuInfoDetail',
      diskInfo: 'DiskInfo',
      diskInfoDetail: 'DiskInfoDetail',
      frontendNetworkDetail: 'FrontendNetworkDetail',
      gpuInfo: 'GpuInfo',
      gpuInfoDetail: 'GpuInfoDetail',
      memoryInfo: 'MemoryInfo',
      memoryInfoDetail: 'MemoryInfoDetail',
      name: 'Name',
      networkInfo: 'NetworkInfo',
      nodeCount: 'NodeCount',
      rdmaInfoDetail: 'RdmaInfoDetail',
      totalCpuCore: 'TotalCpuCore',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondNum: 'number',
      cpuInfo: 'string',
      cpuInfoDetail: ListMachineTypesResponseBodyMachineTypesCpuInfoDetail,
      diskInfo: 'string',
      diskInfoDetail: ListMachineTypesResponseBodyMachineTypesDiskInfoDetail,
      frontendNetworkDetail: ListMachineTypesResponseBodyMachineTypesFrontendNetworkDetail,
      gpuInfo: 'string',
      gpuInfoDetail: ListMachineTypesResponseBodyMachineTypesGpuInfoDetail,
      memoryInfo: 'string',
      memoryInfoDetail: ListMachineTypesResponseBodyMachineTypesMemoryInfoDetail,
      name: 'string',
      networkInfo: 'string',
      nodeCount: 'string',
      rdmaInfoDetail: ListMachineTypesResponseBodyMachineTypesRdmaInfoDetail,
      totalCpuCore: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.cpuInfoDetail && typeof (this.cpuInfoDetail as any).validate === 'function') {
      (this.cpuInfoDetail as any).validate();
    }
    if(this.diskInfoDetail && typeof (this.diskInfoDetail as any).validate === 'function') {
      (this.diskInfoDetail as any).validate();
    }
    if(this.frontendNetworkDetail && typeof (this.frontendNetworkDetail as any).validate === 'function') {
      (this.frontendNetworkDetail as any).validate();
    }
    if(this.gpuInfoDetail && typeof (this.gpuInfoDetail as any).validate === 'function') {
      (this.gpuInfoDetail as any).validate();
    }
    if(this.memoryInfoDetail && typeof (this.memoryInfoDetail as any).validate === 'function') {
      (this.memoryInfoDetail as any).validate();
    }
    if(this.rdmaInfoDetail && typeof (this.rdmaInfoDetail as any).validate === 'function') {
      (this.rdmaInfoDetail as any).validate();
    }
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

