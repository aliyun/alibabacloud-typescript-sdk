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
   * The size of the data disk, in GiB.
   * 
   * @example
   * 150
   */
  dataDiskSize?: string;
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
   * The availability of the specification. A value of `SUFFICIENT` indicates that the specification is in stock.
   * 
   * @example
   * SUFFICIENT
   */
  desktopTypeStatus?: string;
  envId?: string;
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
   * The GPU memory size in MiB. This parameter is valid only for GPU-accelerated cloud desktops.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The GPU memory size.
   * 
   * @example
   * 16 GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The instance type family.
   * 
   * @example
   * ecd.graphics
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions that is supported by the cloud desktop specification.
   * 
   * @example
   * 4
   */
  maxSessionCount?: number;
  /**
   * @remarks
   * The memory size, in MiB.
   * 
   * @example
   * 23552
   */
  memorySize?: string;
  /**
   * @remarks
   * The purchase options for the specification.
   */
  scopes?: string[];
  /**
   * @remarks
   * The inventory status.
   * 
   * @example
   * Sufficient
   */
  stockState?: string;
  /**
   * @remarks
   * The size of the system disk, in GiB.
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
      scopes: { 'type': 'array', 'itemType': 'string' },
      stockState: 'string',
      systemDiskSize: 'string',
    };
  }

  validate() {
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

