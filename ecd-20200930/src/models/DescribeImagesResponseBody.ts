// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The time when the image was created. The time is in the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2018-01-10T01:01:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The data cloud disk size. Unit: GiB.
   * 
   * @example
   * 150
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the image is a GPU image.
   * 
   * @example
   * false
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * 417.22
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * SYSTEM
   */
  imageType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * testImageName
   */
  name?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * WINDOWS
   */
  osType?: string;
  /**
   * @remarks
   * The operating system type of the image.
   * 
   * @example
   * Windows Server 2019
   */
  platform?: string;
  /**
   * @remarks
   * The progress of image creation. Unit: %.
   * 
   * @example
   * 100%
   */
  progress?: string;
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
   * The session type of the image.
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
   * The image size. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The image status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The operating system language.
   */
  supportedLanguages?: string[];
  /**
   * @remarks
   * The time when the image was last modified. The time is in the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
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
   * The ID of the KMS key used for disk encryption. You can call [ListKeys](https://help.aliyun.com/document_detail/28951.html) to obtain the key ID.
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

export class DescribeImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of image information.
   */
  images?: DescribeImagesResponseBodyImages[];
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there is no next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4636DBE0-BBB4-4076-8B8E-94D21A9A3CFB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

