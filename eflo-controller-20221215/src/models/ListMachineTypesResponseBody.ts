// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineTypesResponseBodyMachineTypesCpuInfoDetail extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture.
   * 
   * @example
   * x86_64
   */
  cpuArch?: string;
  /**
   * @remarks
   * The number of CPU sockets.
   * 
   * @example
   * 2
   */
  cpuSockets?: number;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
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
   * @remarks
   * The number of disks.
   * 
   * @example
   * 4
   */
  localDiskCount?: number;
  /**
   * @remarks
   * The capacity per disk, in TB.
   * 
   * @example
   * 3.84
   */
  localDiskSizeInTB?: number;
  /**
   * @remarks
   * The disk type.
   * 
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
   * @remarks
   * The frontend network type.
   * 
   * @example
   * vpc
   */
  frontendNetworkType?: string;
  /**
   * @remarks
   * Indicates whether jumbo frames are supported.
   * 
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
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 8
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU memory per card, in GB.
   * 
   * @example
   * 144
   */
  gpuMemoryInGB?: number;
  /**
   * @remarks
   * The GPU name.
   * 
   * @example
   * M890P-144G
   */
  gpuName?: string;
  /**
   * @remarks
   * The GPU vendor.
   * 
   * @example
   * T-HEAD
   */
  gpuVendor?: string;
  /**
   * @remarks
   * The total GPU memory, in GB.
   * 
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
   * @remarks
   * The memory size, in GB.
   * 
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
   * @remarks
   * The bandwidth per backend RDMA NIC, in Gbps.
   * 
   * @example
   * 400
   */
  backendRdmaNicBwInGbps?: number;
  /**
   * @remarks
   * The number of backend RDMA NICs.
   * 
   * @example
   * 4
   */
  backendRdmaNicCount?: number;
  /**
   * @remarks
   * Indicates whether backend RDMA is supported. Valid values:
   * - true: The current machine type supports backend RDMA.
   * - false: The current machine type does not support backend RDMA.
   * 
   * @example
   * true
   */
  backendRdmaSupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      backendRdmaNicBwInGbps: 'BackendRdmaNicBwInGbps',
      backendRdmaNicCount: 'BackendRdmaNicCount',
      backendRdmaSupported: 'BackendRdmaSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendRdmaNicBwInGbps: 'number',
      backendRdmaNicCount: 'number',
      backendRdmaSupported: 'boolean',
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
   * The CPU information.
   * 
   * @example
   * 2x Intel Icelake 8369B 32C CPU
   */
  cpuInfo?: string;
  /**
   * @remarks
   * The structured CPU specifications.
   */
  cpuInfoDetail?: ListMachineTypesResponseBodyMachineTypesCpuInfoDetail;
  /**
   * @remarks
   * The disk information.
   * 
   * @example
   * 2x 480GB SATA SSD
   */
  diskInfo?: string;
  /**
   * @remarks
   * The disk information.
   */
  diskInfoDetail?: ListMachineTypesResponseBodyMachineTypesDiskInfoDetail;
  /**
   * @remarks
   * The frontend network information.
   */
  frontendNetworkDetail?: ListMachineTypesResponseBodyMachineTypesFrontendNetworkDetail;
  /**
   * @remarks
   * The GPU information.
   * 
   * @example
   * 8x NVIDIA SXM4 80GB A100 GPU
   */
  gpuInfo?: string;
  /**
   * @remarks
   * The GPU information.
   */
  gpuInfoDetail?: ListMachineTypesResponseBodyMachineTypesGpuInfoDetail;
  /**
   * @remarks
   * The memory information.
   * 
   * @example
   * 32x 64GB DDR4 3200 Memory
   */
  memoryInfo?: string;
  /**
   * @remarks
   * The memory information.
   */
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
   * The network information.
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
   * The RDMA information.
   */
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
   * The machine type.
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
   * The details of the machine types.
   */
  machineTypes?: ListMachineTypesResponseBodyMachineTypes[];
  /**
   * @remarks
   * The next token for pagination. Include this value in the request to retrieve the next page of results.
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

