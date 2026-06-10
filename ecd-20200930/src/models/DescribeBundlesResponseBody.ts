// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBundlesResponseBodyBundlesDesktopTypeAttribute extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 10
   */
  cpuCount?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0.5
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 4096
   */
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      gpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDisks extends $dara.Model {
  /**
   * @remarks
   * The PL of the disk.
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 150
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskPerformanceLevel: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundles extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer template.
   * 
   * @example
   * bundle_ecd_graphics.2xlarge_s15d15_win2019
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the cloud computer template.
   * 
   * @example
   * Advanced graphics with Windows 2019
   */
  bundleName?: string;
  /**
   * @remarks
   * The type of the cloud computer template.
   * 
   * @example
   * SYSTEM
   */
  bundleType?: string;
  /**
   * @remarks
   * The time when the cloud computer template was created.
   * 
   * @example
   * 2021-09-30T06:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The category of the data disk.
   * 
   * @example
   * cloud_efficiency
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The description of the cloud computer template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The instance type of the cloud computer.
   * 
   * @example
   * ecd.graphics.2xlarge
   */
  desktopType?: string;
  /**
   * @remarks
   * The details of the cloud computer instance type.
   */
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  /**
   * @remarks
   * The instance family of the cloud computer.
   * 
   * @example
   * eds.general
   */
  desktopTypeFamily?: string;
  /**
   * @remarks
   * Details of the disks.
   */
  disks?: DescribeBundlesResponseBodyBundlesDisks[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * desktopimage-windows-server-2019-64-ch-vgpu
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Windows server 2019 Chinese
   */
  imageName?: string;
  /**
   * @remarks
   * The status of the image.
   * 
   * @example
   * Available
   */
  imageStatus?: string;
  /**
   * @remarks
   * The OS language of the image.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The type of the OS.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * Windows Server 2019
   */
  platform?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * 0
   */
  sessionType?: string;
  /**
   * @remarks
   * The inventory status of the cloud computer instance type. This parameter is returned only if you set the `CheckStock` parameter to `true`.
   * 
   * @example
   * Sufficient
   */
  stockState?: string;
  /**
   * @remarks
   * The category of the system disk.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      bundleType: 'BundleType',
      creationTime: 'CreationTime',
      dataDiskCategory: 'DataDiskCategory',
      description: 'Description',
      desktopType: 'DesktopType',
      desktopTypeAttribute: 'DesktopTypeAttribute',
      desktopTypeFamily: 'DesktopTypeFamily',
      disks: 'Disks',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageStatus: 'ImageStatus',
      language: 'Language',
      osType: 'OsType',
      platform: 'Platform',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      stockState: 'StockState',
      systemDiskCategory: 'SystemDiskCategory',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      bundleType: 'string',
      creationTime: 'string',
      dataDiskCategory: 'string',
      description: 'string',
      desktopType: 'string',
      desktopTypeAttribute: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute,
      desktopTypeFamily: 'string',
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundlesDisks },
      imageId: 'string',
      imageName: 'string',
      imageStatus: 'string',
      language: 'string',
      osType: 'string',
      platform: 'string',
      protocolType: 'string',
      sessionType: 'string',
      stockState: 'string',
      systemDiskCategory: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(this.desktopTypeAttribute && typeof (this.desktopTypeAttribute as any).validate === 'function') {
      (this.desktopTypeAttribute as any).validate();
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computer templates.
   */
  bundles?: DescribeBundlesResponseBodyBundles[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lu3PTF6h3zE8egwlYuv8M8
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCC854D8-5D1E-46D3-96EF-797A5DD36789
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundles: 'Bundles',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundles },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bundles)) {
      $dara.Model.validateArray(this.bundles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

