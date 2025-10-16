// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageResponseBodyDataAppList extends $dara.Model {
  /**
   * @example
   * ca-xxx
   */
  appId?: string;
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
   * @example
   * imgc-xxx
   */
  imageId?: string;
  /**
   * @example
   * 70%
   */
  progress?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
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

export class ListImageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123456789
   */
  aliUid?: number;
  appList?: ListImageResponseBodyDataAppList[];
  /**
   * @example
   * imgc-xxx
   */
  baseImageId?: string;
  /**
   * @example
   * iv-xxx
   */
  baseImageVersion?: string;
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * true
   */
  compatibleMode?: boolean;
  /**
   * @example
   * 100
   */
  dataDiskSize?: number;
  description?: string;
  distro?: string;
  driverList?: string[];
  featureList?: string[];
  fotaChannel?: string;
  /**
   * @example
   * 2.3.0-xxx
   */
  fotaVersion?: string;
  /**
   * @example
   * 2025-04-25 15:13:57
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
  /**
   * @example
   * BUILDER_MANUAL
   */
  imageCreateMode?: string;
  /**
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @example
   * DemoImage
   */
  imageName?: string;
  imageRegionDistributeList?: ListImageResponseBodyDataImageRegionDistributeList[];
  imageRegionList?: string[];
  /**
   * @example
   * User
   */
  imageType?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * iv-xxx
   */
  latestVersionId?: string;
  onlineVersion?: boolean;
  /**
   * @example
   * iv-xxxx
   */
  onlineVersionId?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @example
   * imgc-xxx
   */
  parentImageId?: string;
  /**
   * @example
   * iv-xxx
   */
  parentImageVersion?: string;
  /**
   * @example
   * Windows
   */
  platform?: number;
  /**
   * @example
   * Windows Server 2022
   */
  platformName?: string;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * ["eds.cpu.category"]
   */
  resourceInstanceCategory?: string;
  /**
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  supportedLanguageList?: string[];
  /**
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @example
   * iv-xxx
   */
  versionId?: string;
  /**
   * @example
   * v0.1.0
   */
  versionName?: string;
  /**
   * @example
   * true
   */
  volumeEncryptionEnabled?: boolean;
  /**
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
      featureList: 'FeatureList',
      fotaChannel: 'FotaChannel',
      fotaVersion: 'FotaVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageCreateMode: 'ImageCreateMode',
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
      resourceInstanceCategory: 'ResourceInstanceCategory',
      sessionType: 'SessionType',
      status: 'Status',
      supportedLanguageList: 'SupportedLanguageList',
      systemDiskSize: 'SystemDiskSize',
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
      featureList: { 'type': 'array', 'itemType': 'string' },
      fotaChannel: 'string',
      fotaVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageCreateMode: 'string',
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
      resourceInstanceCategory: 'string',
      sessionType: 'string',
      status: 'string',
      supportedLanguageList: { 'type': 'array', 'itemType': 'string' },
      systemDiskSize: 'number',
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
    if(Array.isArray(this.supportedLanguageList)) {
      $dara.Model.validateArray(this.supportedLanguageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  data?: ListImageResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
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

