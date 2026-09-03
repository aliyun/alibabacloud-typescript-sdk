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
   * The disk performance level.
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 150
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type.
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
   * The cloud computer template ID.
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
   * The cloud computer templatetype.
   * 
   * @example
   * SYSTEM
   */
  bundleType?: string;
  /**
   * @remarks
   * The time when the cloud computer template was created. The time is in the ISO 8601 standard in UTC.
   * 
   * @example
   * 2021-09-30T06:09Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data cloud disk type.
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
   * Template for daily office use
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer specifications.
   * 
   * @example
   * ecd.graphics.2xlarge
   */
  desktopType?: string;
  /**
   * @remarks
   * The details of the cloud computer specifications.
   */
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  /**
   * @remarks
   * The cloud computer instance family.
   * 
   * @example
   * eds.general
   */
  desktopTypeFamily?: string;
  /**
   * @remarks
   * The disk information.
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
   * The image status.
   * 
   * @example
   * Available
   */
  imageStatus?: string;
  /**
   * @remarks
   * The language of the image operating system.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The operating system platform information.
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
   * The stock status. This parameter is returned when `CheckStock` is set to `True`.
   * 
   * @example
   * Sufficient
   */
  stockState?: string;
  /**
   * @remarks
   * The system cloud disk type.
   * 
   * @example
   * cloud_efficiency
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used when disk encryption is enabled.
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
   * The list of cloud computer templates.
   */
  bundles?: DescribeBundlesResponseBodyBundles[];
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lu3PTF6h3zE8egwlYuv8M8
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
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

