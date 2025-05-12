// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2018-01-10T01:01:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 150
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the image is a GPU-accelerated image.
   * 
   * @example
   * false
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The version number of the GPU driver.
   * 
   * @example
   * 417.22
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * Valid values:
   * 
   * *   SYSTEM
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CUSTOM
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
  imageType?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * testImageName
   */
  name?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * @example
   * WINDOWS
   */
  osType?: string;
  /**
   * @remarks
   * The operating system type of the image.
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
   * *   SQL Server 2016
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows 10
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
   * The creation progress of the image. Unit: %.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * *   ASP: in-house Adaptive Streaming Protocol (ASP) (recommended)
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The type of the image session.
   * 
   * Valid values:
   * 
   * *   SINGLE_SESSION: single-session image.
   * 
   * *   MULTIPLE_SESSION: multi-session image.
   * 
   * @example
   * MULTIPLE_SESSION
   */
  sessionType?: string;
  /**
   * @remarks
   * The number of shared images.
   * 
   * @example
   * 1
   */
  sharedCount?: number;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The status of the image.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Available
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The languages of the operating system.
   */
  supportedLanguages?: string[];
  /**
   * @remarks
   * The time when the image was last modified.
   * 
   * @example
   * 2021-12-22T02:48:43Z
   */
  updateTime?: string;
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
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to query the list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      creationTime: 'CreationTime',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osType: 'OsType',
      platform: 'Platform',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      sharedCount: 'SharedCount',
      size: 'Size',
      status: 'Status',
      supportedLanguages: 'SupportedLanguages',
      updateTime: 'UpdateTime',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      creationTime: 'string',
      dataDiskSize: 'number',
      description: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osType: 'string',
      platform: 'string',
      progress: 'string',
      protocolType: 'string',
      sessionType: 'string',
      sharedCount: 'number',
      size: 'number',
      status: 'string',
      supportedLanguages: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedLanguages)) {
      $dara.Model.validateArray(this.supportedLanguages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

