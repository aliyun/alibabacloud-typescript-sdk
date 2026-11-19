// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageAdditionalRegionsInfo extends $dara.Model {
  /**
   * @remarks
   * The image ID in the additional region.
   * 
   * @example
   * m-f8abcdef0123456789ab
   */
  imageId?: string;
  /**
   * @remarks
   * The additional region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the image in the additional region.
   * 
   * @example
   * Available
   */
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
   * The logon password.
   * 
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @remarks
   * The server address of the image registry.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The logon username.
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
  /**
   * @remarks
   * The architecture type.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * Indicates whether the image is stored in Container Registry Enterprise Edition. Valid values:
   * 
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @remarks
   * Indicates whether the image is stored in Container Registry. Valid values:
   * 
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * True
   */
  isACRRegistry?: boolean;
  /**
   * @remarks
   * The specific version identifier of the operating system.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osTag?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The authentication information for the private image registry.
   */
  registryCredential?: GetImageResponseBodyImageContainerImageSpecRegistryCredential;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @remarks
   * The access URL of the container image.
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
  /**
   * @remarks
   * The content of the application document.
   * 
   * @example
   * VGhpcyBpcyBhbiBleGFtcGxlIGFwcGxpY2F0aW9uIGRvY3VtZW50Lg==
   */
  document?: string;
  /**
   * @remarks
   * The application document ID.
   * 
   * @example
   * 1001
   */
  documentId?: string;
  /**
   * @remarks
   * The encoding method of the application document. Base64 and PlainText are supported.
   * 
   * @example
   * Base64
   */
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
   * The architecture type.
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
   * The specific version identifier of the operating system.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osTag?: string;
  /**
   * @remarks
   * The platform type.
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
  /**
   * @remarks
   * The list of status information of the image in additional regions.
   */
  additionalRegionsInfo?: GetImageResponseBodyImageAdditionalRegionsInfo[];
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ci-vm-0123456789abcdef
   */
  appId?: string;
  /**
   * @remarks
   * The configuration details of the container image.
   */
  containerImageSpec?: GetImageResponseBodyImageContainerImageSpec;
  /**
   * @remarks
   * The time when the image was created. The time is displayed in the YYYY-MM-DDTHH:mm:ssZ format, where Z represents UTC.
   * 
   * @example
   * 2022-12-23T09:51:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * Application test image
   */
  description?: string;
  /**
   * @remarks
   * The application document information associated with the image.
   */
  documentInfo?: GetImageResponseBodyImageDocumentInfo;
  /**
   * @remarks
   * The image type.
   * 
   * This parameter is required.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The image size. Unit: GiB.
   * 
   * @example
   * 40 GiB
   */
  size?: string;
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
   * The image details.
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
   * Indicates whether the process of executing the command and obtaining the result is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of items that meet the request conditions.
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

