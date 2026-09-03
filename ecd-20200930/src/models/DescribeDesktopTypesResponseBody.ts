// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopTypesResponseBodyDesktopTypes extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpuCount?: string;
  /**
   * @remarks
   * The data cloud disk size. Unit: GiB.
   * 
   * @example
   * 150
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * The description of the NAS file system.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The specification ID.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopTypeId?: string;
  /**
   * @remarks
   * The specification status. A value of `SUFFICIENT` indicates that the specification resources are sufficient.
   * 
   * @example
   * SUFFICIENT
   */
  desktopTypeStatus?: string;
  /**
   * @remarks
   * The environment ID. This parameter is not publicly available.
   * 
   * @example
   * adifa****
   */
  envId?: string;
  /**
   * @remarks
   * The environment type. This parameter is not publicly available.
   * 
   * @example
   * Private
   */
  envType?: string;
  /**
   * @remarks
   * The number of GPU cores.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU memory size. This parameter is meaningful only for GPU-accelerated cloud computers. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The GPU memory.
   * 
   * @example
   * 16 GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecd.graphics
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The number of multi-sessions supported by the current specification.
   * 
   * @example
   * 4
   */
  maxSessionCount?: number;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 23552
   */
  memorySize?: string;
  /**
   * @remarks
   * The supported desktop type sale categories.
   */
  saleTypes?: string[];
  /**
   * @remarks
   * The list of billing methods for the specification.
   */
  scopes?: string[];
  /**
   * @remarks
   * The stock status.
   * 
   * @example
   * Sufficient
   */
  stockState?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * @example
   * 150
   */
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      desktopTypeId: 'DesktopTypeId',
      desktopTypeStatus: 'DesktopTypeStatus',
      envId: 'EnvId',
      envType: 'EnvType',
      gpuCount: 'GpuCount',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      maxSessionCount: 'MaxSessionCount',
      memorySize: 'MemorySize',
      saleTypes: 'SaleTypes',
      scopes: 'Scopes',
      stockState: 'StockState',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'string',
      dataDiskSize: 'string',
      description: 'string',
      desktopTypeId: 'string',
      desktopTypeStatus: 'string',
      envId: 'string',
      envType: 'string',
      gpuCount: 'number',
      gpuMemory: 'number',
      gpuSpec: 'string',
      instanceTypeFamily: 'string',
      maxSessionCount: 'number',
      memorySize: 'string',
      saleTypes: { 'type': 'array', 'itemType': 'string' },
      scopes: { 'type': 'array', 'itemType': 'string' },
      stockState: 'string',
      systemDiskSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.saleTypes)) {
      $dara.Model.validateArray(this.saleTypes);
    }
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the specifications.
   */
  desktopTypes?: DescribeDesktopTypesResponseBodyDesktopTypes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopTypes: 'DesktopTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopTypes)) {
      $dara.Model.validateArray(this.desktopTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

