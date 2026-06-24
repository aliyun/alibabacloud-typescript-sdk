// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageResponseBodyDataAppList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * ca-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 应用名称
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBodyDataImageRegionDistributeList extends $dara.Model {
  /**
   * @remarks
   * The image ID. System image IDs are meaningful, while custom image IDs are automatically generated.
   * 
   * @example
   * imgc-xxx
   */
  imageId?: string;
  /**
   * @remarks
   * The progress percentage.
   * 
   * @example
   * 70%
   */
  progress?: string;
  /**
   * @remarks
   * The supported region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      progress: 'Progress',
      regionId: 'RegionId',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      progress: 'string',
      regionId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBodyDataSnapshotList extends $dara.Model {
  bindType?: string;
  diskCategory?: string;
  diskSubType?: string;
  diskType?: string;
  size?: number;
  snapshotId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      bindType: 'BindType',
      diskCategory: 'DiskCategory',
      diskSubType: 'DiskSubType',
      diskType: 'DiskType',
      size: 'Size',
      snapshotId: 'SnapshotId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindType: 'string',
      diskCategory: 'string',
      diskSubType: 'string',
      diskType: 'string',
      size: 'number',
      snapshotId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBodyDataTagList extends $dara.Model {
  /**
   * @example
   * 1630348213973321
   */
  key?: string;
  /**
   * @example
   * inner
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
  /**
   * @remarks
   * The application configurations.
   */
  appList?: ListImageResponseBodyDataAppList[];
  /**
   * @remarks
   * The base image ID.
   * 
   * @example
   * imgc-xxx
   */
  baseImageId?: string;
  /**
   * @remarks
   * The base image version.
   * 
   * @example
   * iv-xxx
   */
  baseImageVersion?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Indicates whether the compatibility mode is enabled.
   * 
   * @example
   * true
   */
  compatibleMode?: boolean;
  /**
   * @remarks
   * The data cloud disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The distribution name.
   * 
   * @example
   * Ubuntu 22.04 64位
   */
  distro?: string;
  /**
   * @remarks
   * The list of driver information.
   */
  driverList?: string[];
  /**
   * @example
   * env-164c321f405ca84143e4b730dbe4
   */
  environmentId?: string;
  /**
   * @remarks
   * The list of image feature tags.
   */
  featureList?: string[];
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 镜像支持的fota渠道，暂未启用
   */
  fotaChannel?: string;
  /**
   * @remarks
   * The FOTA version.
   * 
   * @example
   * 2.3.0-xxx
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image creation type.
   * 
   * @example
   * BUILDER_MANUAL
   */
  imageCreateMode?: string;
  imageIconUrl?: string;
  /**
   * @remarks
   * The image ID. System image IDs are meaningful, while custom image IDs are automatically generated.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * DemoImage
   */
  imageName?: string;
  /**
   * @remarks
   * The effective region information for overlay layers.
   */
  imageRegionDistributeList?: ListImageResponseBodyDataImageRegionDistributeList[];
  /**
   * @remarks
   * The regions.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The image language. If the package type is VHD or Container, this property is inherited from the ECS-packaged image in the image combination.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The latest sub-version of the image. An image consists of multiple sub-versions.
   * 
   * @example
   * iv-xxx
   */
  latestVersionId?: string;
  /**
   * @remarks
   * Indicates whether the current version is the active version.
   * 
   * @example
   * true
   */
  onlineVersion?: boolean;
  /**
   * @remarks
   * The sub-version from which the current image reads the primary image information. An image consists of multiple sub-versions.
   * 
   * @example
   * iv-xxxx
   */
  onlineVersionId?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image package type.
   * 
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @remarks
   * The parent image ID. This parameter indicates only the inheritance relationship. System images do not have a parent image.
   * 
   * @example
   * imgc-xxx
   */
  parentImageId?: string;
  /**
   * @remarks
   * The parent image version.
   * 
   * @example
   * iv-xxx
   */
  parentImageVersion?: string;
  /**
   * @remarks
   * The operating system platform of the image.
   * 
   * > If the package type is VHD or Container, this property is inherited from the ECS-packaged image in the image combination.
   * 
   * @example
   * Windows
   */
  platform?: number;
  /**
   * @remarks
   * The system platform name.
   * 
   * @example
   * Windows Server 2022
   */
  platformName?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * 95
   */
  rating?: number;
  /**
   * @remarks
   * The resource type supported by the image.
   * 
   * @example
   * ["eds.cpu.category"]
   */
  resourceInstanceCategory?: string;
  /**
   * @example
   * AIGC
   */
  scene?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  snapshotList?: ListImageResponseBodyDataSnapshotList[];
  /**
   * @remarks
   * The image status.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The list of supported languages.
   */
  supportedLanguageList?: string[];
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * > The system cloud disk size cannot be smaller than the image file.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  tagList?: ListImageResponseBodyDataTagList[];
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v0.1.0
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether cloud disk encryption is enabled.
   * 
   * @example
   * true
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The KMS key ID used when cloud disk encryption is enabled.
   * 
   * @example
   * a7b3c0c8-xxxx
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appList: 'AppList',
      baseImageId: 'BaseImageId',
      baseImageVersion: 'BaseImageVersion',
      bizType: 'BizType',
      compatibleMode: 'CompatibleMode',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      distro: 'Distro',
      driverList: 'DriverList',
      environmentId: 'EnvironmentId',
      featureList: 'FeatureList',
      fotaChannel: 'FotaChannel',
      fotaVersion: 'FotaVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageCreateMode: 'ImageCreateMode',
      imageIconUrl: 'ImageIconUrl',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageRegionDistributeList: 'ImageRegionDistributeList',
      imageRegionList: 'ImageRegionList',
      imageType: 'ImageType',
      language: 'Language',
      latestVersionId: 'LatestVersionId',
      onlineVersion: 'OnlineVersion',
      onlineVersionId: 'OnlineVersionId',
      osType: 'OsType',
      packageType: 'PackageType',
      parentImageId: 'ParentImageId',
      parentImageVersion: 'ParentImageVersion',
      platform: 'Platform',
      platformName: 'PlatformName',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      rating: 'Rating',
      resourceInstanceCategory: 'ResourceInstanceCategory',
      scene: 'Scene',
      sessionType: 'SessionType',
      snapshotList: 'SnapshotList',
      status: 'Status',
      supportedLanguageList: 'SupportedLanguageList',
      systemDiskSize: 'SystemDiskSize',
      tagList: 'TagList',
      versionId: 'VersionId',
      versionName: 'VersionName',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appList: { 'type': 'array', 'itemType': ListImageResponseBodyDataAppList },
      baseImageId: 'string',
      baseImageVersion: 'string',
      bizType: 'number',
      compatibleMode: 'boolean',
      dataDiskSize: 'number',
      description: 'string',
      distro: 'string',
      driverList: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      featureList: { 'type': 'array', 'itemType': 'string' },
      fotaChannel: 'string',
      fotaVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageCreateMode: 'string',
      imageIconUrl: 'string',
      imageId: 'string',
      imageName: 'string',
      imageRegionDistributeList: { 'type': 'array', 'itemType': ListImageResponseBodyDataImageRegionDistributeList },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      language: 'string',
      latestVersionId: 'string',
      onlineVersion: 'boolean',
      onlineVersionId: 'string',
      osType: 'string',
      packageType: 'string',
      parentImageId: 'string',
      parentImageVersion: 'string',
      platform: 'number',
      platformName: 'string',
      productType: 'string',
      protocolType: 'string',
      rating: 'number',
      resourceInstanceCategory: 'string',
      scene: 'string',
      sessionType: 'string',
      snapshotList: { 'type': 'array', 'itemType': ListImageResponseBodyDataSnapshotList },
      status: 'string',
      supportedLanguageList: { 'type': 'array', 'itemType': 'string' },
      systemDiskSize: 'number',
      tagList: { 'type': 'array', 'itemType': ListImageResponseBodyDataTagList },
      versionId: 'string',
      versionName: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(Array.isArray(this.driverList)) {
      $dara.Model.validateArray(this.driverList);
    }
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    if(Array.isArray(this.imageRegionDistributeList)) {
      $dara.Model.validateArray(this.imageRegionDistributeList);
    }
    if(Array.isArray(this.imageRegionList)) {
      $dara.Model.validateArray(this.imageRegionList);
    }
    if(Array.isArray(this.snapshotList)) {
      $dara.Model.validateArray(this.snapshotList);
    }
    if(Array.isArray(this.supportedLanguageList)) {
      $dara.Model.validateArray(this.supportedLanguageList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 22
   */
  count?: number;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListImageResponseBodyData[];
  /**
   * @remarks
   * The message returned for the API request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListImageResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

