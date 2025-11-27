// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageAdditionalRegionsInfo extends $dara.Model {
  imageId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpecRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The password of the logon user.
   * 
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @remarks
   * The registered address of the image repository.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username of the logon user.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageContainerImageSpec extends $dara.Model {
  architecture?: string;
  /**
   * @remarks
   * Whether the instance is an Alibaba Cloud image repository Enterprise Edition.
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @remarks
   * Whether it is an Alibaba Cloud image repository.
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  isACRRegistry?: boolean;
  osTag?: string;
  platform?: string;
  /**
   * @remarks
   * The authentication of the private image repository.
   */
  registryCredential?: GetImageResponseBodyImageContainerImageSpecRegistryCredential;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition image repository.
   * 
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @remarks
   * The endpoint of the container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest
   */
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      osTag: 'OsTag',
      platform: 'Platform',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      osTag: 'string',
      platform: 'string',
      registryCredential: GetImageResponseBodyImageContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  validate() {
    if(this.registryCredential && typeof (this.registryCredential as any).validate === 'function') {
      (this.registryCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageDocumentInfo extends $dara.Model {
  document?: string;
  documentId?: string;
  encodingMode?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      documentId: 'DocumentId',
      encodingMode: 'EncodingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      documentId: 'string',
      encodingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImageVMImageSpec extends $dara.Model {
  /**
   * @remarks
   * The type of the architecture.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-uf60twafjtaart******
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the specific OS version.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osTag?: string;
  /**
   * @remarks
   * The type of the platform.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageId: 'ImageId',
      osTag: 'OsTag',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageId: 'string',
      osTag: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyImage extends $dara.Model {
  additionalRegionsInfo?: GetImageResponseBodyImageAdditionalRegionsInfo[];
  appId?: string;
  /**
   * @remarks
   * The configuration details of the container image.
   */
  containerImageSpec?: GetImageResponseBodyImageContainerImageSpec;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2022-12-23T09:51:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the image.
   */
  description?: string;
  documentInfo?: GetImageResponseBodyImageDocumentInfo;
  /**
   * @remarks
   * The type of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 40 GiB
   */
  size?: string;
  status?: string;
  /**
   * @remarks
   * The configuration details of the virtual machine image.
   */
  VMImageSpec?: GetImageResponseBodyImageVMImageSpec;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * v1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      additionalRegionsInfo: 'AdditionalRegionsInfo',
      appId: 'AppId',
      containerImageSpec: 'ContainerImageSpec',
      createTime: 'CreateTime',
      description: 'Description',
      documentInfo: 'DocumentInfo',
      imageType: 'ImageType',
      name: 'Name',
      size: 'Size',
      status: 'Status',
      VMImageSpec: 'VMImageSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalRegionsInfo: { 'type': 'array', 'itemType': GetImageResponseBodyImageAdditionalRegionsInfo },
      appId: 'string',
      containerImageSpec: GetImageResponseBodyImageContainerImageSpec,
      createTime: 'string',
      description: 'string',
      documentInfo: GetImageResponseBodyImageDocumentInfo,
      imageType: 'string',
      name: 'string',
      size: 'string',
      status: 'string',
      VMImageSpec: GetImageResponseBodyImageVMImageSpec,
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalRegionsInfo)) {
      $dara.Model.validateArray(this.additionalRegionsInfo);
    }
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.documentInfo && typeof (this.documentInfo as any).validate === 'function') {
      (this.documentInfo as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the image.
   */
  image?: GetImageResponseBodyImage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The task is successful.
   * *   false: The error occurred.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total amount of data in this request.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: GetImageResponseBodyImage,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

