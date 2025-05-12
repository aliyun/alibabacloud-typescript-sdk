// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBundlesResponseBodyBundlesDesktopTypeAttribute } from "./DescribeBundlesResponseBodyBundlesDesktopTypeAttribute";
import { DescribeBundlesResponseBodyBundlesDisks } from "./DescribeBundlesResponseBodyBundlesDisks";


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
   * Valid values:
   * 
   * *   SYSTEM: system template
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CUSTOM: custom template
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * Valid values:
   * 
   * *   cloud_efficiency: the ultra disk
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the ESSD. Take note that only specific cloud computer types support ESSDs.
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
   * Valid values:
   * 
   * *   eds.graphics: graphical instance family
   * *   eds.hf: instance family with a high clock speed
   * *   eds.general: general-purpose instance family
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
   * Valid values:
   * 
   * *   en-US: English
   * *   zh-HK: Chinese, Traditional (Hong Kong, China)
   * *   zh-CN: Simplified Chinese
   * *   ja-JP: Japanese
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The type of the OS.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The OS.
   * 
   * Valid values:
   * 
   * *   Ubuntu
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows Server 2022
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   UOS
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CentOS
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows Server 2019
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows Server 2016
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows Server 2019
   */
  platform?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX: HDX protocol
   * *   ASP: in-house ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   0: single-session
   * *   1: multi-session
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
   * Valid values:
   * 
   * *   cloud_efficiency: the ultra disk
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the Enterprise SSD (ESSD). Take note that only specific cloud computer types support ESSDs.
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

