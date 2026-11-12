// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAdaptorInfoBOList extends $dara.Model {
  /**
   * @remarks
   * The adapter ID.
   * 
   * @example
   * adt-13ff3****
   */
  adaptorId?: string;
  /**
   * @remarks
   * The adapter message.
   * 
   * @example
   * success
   */
  adaptorMessage?: string;
  /**
   * @remarks
   * The adaptation mode.
   * 
   * @example
   * MANUAL
   */
  adaptorMode?: string;
  /**
   * @remarks
   * The adaptation phase.
   * 
   * @example
   * FINISH_ADAPT
   */
  adaptorStep?: string;
  /**
   * @remarks
   * The application icon.
   * 
   * @example
   * https://****.jpg
   */
  appIconUrl?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-0aae4rgle910jh689
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * idb-ent-console
   */
  appName?: string;
  /**
   * @remarks
   * The application script.
   * 
   * @example
   * {"param":"test", "startCmd":"test.exe"}
   */
  appScript?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * USER_APP
   */
  appType?: string;
  /**
   * @remarks
   * The application version ID.
   * 
   * @example
   * apv-****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * 1.0
   */
  appVersionName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  appVersionNumber?: string;
  /**
   * @remarks
   * The business line ID of the application.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The name of the OSS bucket where the application files are stored.
   * 
   * @example
   * xiaowutest-j
   */
  bucketName?: string;
  /**
   * @remarks
   * The level-2 application category, such as design software, office, or browser. This parameter is not available to the public.
   * 
   * @example
   * 123
   */
  categoryId?: number;
  /**
   * @remarks
   * The level-1 application category, such as cloud application or cloud game. This parameter is not available to the public.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The control parameter. This parameter can be configured by tenants and internal administrators and is not available to the public.
   * 
   * @example
   * {}
   */
  controlParam?: string;
  /**
   * @remarks
   * The path of the executable file. This parameter is not available to the public.
   * 
   * @example
   * abc.text
   */
  executeFileAddress?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * filename_install.exe
   */
  fileName?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /tenant/123
   */
  filePath?: string;
  /**
   * @remarks
   * The file size. Unit: KB.
   * 
   * @example
   * 102400
   */
  fileSize?: number;
  /**
   * @remarks
   * The optimization parameter configured in the backend by internal administrators.
   * 
   * @example
   * {}
   */
  optimizeParam?: string;
  /**
   * @remarks
   * The original application type.
   * 
   * @example
   * CLIENT_BASE
   */
  originAppType?: string;
  /**
   * @remarks
   * The operating system type applicable to the application.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The application service port. For applications that require port-based access, specify the actual port number that the application listens on.
   * 
   * @example
   * 9000
   */
  port?: string;
  /**
   * @remarks
   * The product type of the application.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The runtime environment.
   * 
   * @example
   * WINDOWS_MULTI_SESSION
   */
  runtimeEnv?: string;
  /**
   * @remarks
   * Specifies whether silent installation is enabled. This parameter can be configured by tenants and internal administrators and is not available to the public.
   * 
   * @example
   * {}
   */
  silenceFlag?: string;
  /**
   * @remarks
   * The silent installation parameter. This parameter is not available to the public.
   * 
   * @example
   * {}
   */
  silenceParam?: string;
  /**
   * @remarks
   * The application adaptation status. For example, ADAPT_DONE indicates that the adaptation is complete.
   * 
   * @example
   * ADAPT_DONE
   */
  status?: string;
  /**
   * @remarks
   * The sub-application type.
   * 
   * @example
   * SAAS
   */
  subAppType?: string;
  /**
   * @remarks
   * The URL path suffix for application access. This suffix and the application service port together describe the access entry point.
   * 
   * @example
   * /index
   */
  urlSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      adaptorMessage: 'AdaptorMessage',
      adaptorMode: 'AdaptorMode',
      adaptorStep: 'AdaptorStep',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appScript: 'AppScript',
      appType: 'AppType',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      bizType: 'BizType',
      bucketName: 'BucketName',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      controlParam: 'ControlParam',
      executeFileAddress: 'ExecuteFileAddress',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileSize: 'FileSize',
      optimizeParam: 'OptimizeParam',
      originAppType: 'OriginAppType',
      osType: 'OsType',
      port: 'Port',
      productType: 'ProductType',
      runtimeEnv: 'RuntimeEnv',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      status: 'Status',
      subAppType: 'SubAppType',
      urlSuffix: 'UrlSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'string',
      adaptorMessage: 'string',
      adaptorMode: 'string',
      adaptorStep: 'string',
      appIconUrl: 'string',
      appId: 'string',
      appName: 'string',
      appScript: 'string',
      appType: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      bizType: 'number',
      bucketName: 'string',
      categoryId: 'number',
      categoryType: 'number',
      controlParam: 'string',
      executeFileAddress: 'string',
      fileName: 'string',
      filePath: 'string',
      fileSize: 'number',
      optimizeParam: 'string',
      originAppType: 'string',
      osType: 'string',
      port: 'string',
      productType: 'string',
      runtimeEnv: 'string',
      silenceFlag: 'string',
      silenceParam: 'string',
      status: 'string',
      subAppType: 'string',
      urlSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAppList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-0aae4rxw78****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * idb-ent-console
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

export class GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageExtendInfoModel extends $dara.Model {
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The GPU category.
   * 
   * @example
   * 1
   */
  gpuCategory?: number;
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * 12
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 50
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      gpuCategory: 'number',
      gpuDriverVersion: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageRegionDistribute extends $dara.Model {
  /**
   * @remarks
   * The processing information reported by the region distribution task.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The distribution progress of the image in the region, expressed as a percentage.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The ID of the region where the image is distributed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The region distribution status. Valid values: CREATING: distributing. AVAILABLE: available. CREATE_FAILED: distribution failed. DELETE: deleted.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The logical ID of the image on the unit side, which can be different from the central image ID.
   * 
   * @example
   * m-1bdedef****
   */
  unitImageId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      progress: 'Progress',
      regionId: 'RegionId',
      status: 'Status',
      unitImageId: 'UnitImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      progress: 'string',
      regionId: 'string',
      status: 'string',
      unitImageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelList extends $dara.Model {
  /**
   * @remarks
   * The list of adapted applications for the image version.
   */
  adaptorInfoBOList?: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAdaptorInfoBOList[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 13605346******
   */
  aliUid?: number;
  /**
   * @remarks
   * The application list, which displays only the application names and IDs.
   * 
   * @example
   * []
   */
  appList?: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAppList[];
  /**
   * @remarks
   * The base image ID.
   * 
   * @example
   * imgc-dewgefwc******
   */
  baseImageId?: string;
  /**
   * @remarks
   * The base image version ID.
   * 
   * @example
   * iv-adbef134****
   */
  baseImageVersion?: string;
  /**
   * @remarks
   * The business line to which the image belongs. Valid values:
   * - 1: Basic business.
   * - 2: Personal Edition.
   * - 3: Cloud Office.
   * - 4: Cloud Streaming.
   * - 10: Standard Edition.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The name of the OSS bucket where the image file is stored.
   * 
   * @example
   * monitor-record-sh-twg2is
   */
  bucketName?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * this is test image
   */
  description?: string;
  /**
   * @remarks
   * The list of feature tags supported by the image.
   */
  featureList?: string[];
  /**
   * @remarks
   * The FOTA version.
   * 
   * @example
   * 3.0.11-R-20260624.195825
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The creation time. The time is in RFC 3339 format. The Z in the example indicates the UTC time zone.
   * 
   * @example
   * 2023-09-12T13:01:09Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time. The time follows the RFC 3339 format. The Z in the example indicates the UTC time zone.
   * 
   * @example
   * 2026-07-16T07:39:43Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image creation method. For example, BUILDER_MANUAL indicates manual creation.
   * 
   * @example
   * BUILDER_MANUAL
   */
  imageCreateMode?: string;
  /**
   * @remarks
   * The image extension information, including disk specifications and GPU driver information. VHD or Container images use the extension information of their base image and base version.
   * 
   * @example
   * {}
   */
  imageExtendInfoModel?: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageExtendInfoModel;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-0aae4rgk5yaa*****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * image0625
   */
  imageName?: string;
  /**
   * @remarks
   * The image distribution information for the current region.
   */
  imageRegionDistribute?: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageRegionDistribute;
  /**
   * @remarks
   * The image source. For example, center indicates the central image service.
   * 
   * @example
   * center
   */
  imageSource?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * - System: System image.
   * - User: Custom image.
   * - Shared: Shared image.
   * - Community: Community image.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @remarks
   * The image language.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the latest version of the image.
   * 
   * @example
   * iv-1wder3ere****
   */
  latestVersionId?: string;
  /**
   * @remarks
   * Indicates whether the returned version is the active version. Valid values: true: Yes. false: No.
   * 
   * @example
   * true
   */
  onlineVersion?: boolean;
  /**
   * @remarks
   * The ID of the current online version of the image.
   * 
   * @example
   * iv-1wder3ere****
   */
  onlineVersionId?: string;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * - Windows: Windows operating system.
   * - Linux: Linux operating system.
   * - Android: Android operating system.
   * - Unknown: Unknown operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image packaging type. Valid values:
   * - Ecs: ECS image.
   * - Vhd: Virtual disk image.
   * - Container: Container image.
   * - Ecs_Container: Combined ECS and container image.
   * - K8s_Node: Kubernetes node image.
   * 
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @remarks
   * The parent image ID, which indicates the image inheritance relationship. System images do not have parent images.
   * 
   * @example
   * desktopimage-windows-11-64-asp
   */
  parentImageId?: string;
  /**
   * @remarks
   * The parent image version ID.
   * 
   * @example
   * iv-12ededgjj***
   */
  parentImageVersion?: string;
  /**
   * @remarks
   * The operating system platform ID. For example, 33 indicates Windows Server 2022.
   * 
   * @example
   * 33
   */
  platform?: number;
  /**
   * @remarks
   * The name of the operating system platform, which corresponds to Platform.
   * 
   * @example
   * Windows Server 2022
   */
  platformName?: string;
  /**
   * @remarks
   * The product type to which the image belongs, such as CloudDesktop (Cloud Desktop), CloudApp (Cloud App), or WuyingServer (WUYING Workspace Enterprise Edition workstation).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The extended properties of the image version in key-value pairs.
   * 
   * @example
   * {}
   */
  propertyMap?: { [key: string]: string };
  /**
   * @remarks
   * The connection protocol used by the image. Valid values:
   * - ASP: Alibaba Cloud Streaming Protocol.
   * - HDX: HDX protocol.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the region to which the image information belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The image status. Valid values:
   * - INIT: Initializing.
   * - CREATING: Creating.
   * - AVAILABLE: Available.
   * - CREATE_FAILED: Creation failed.
   * - DELETE: Deleted.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The image version ID.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorInfoBOList: 'AdaptorInfoBOList',
      aliUid: 'AliUid',
      appList: 'AppList',
      baseImageId: 'BaseImageId',
      baseImageVersion: 'BaseImageVersion',
      bizType: 'BizType',
      bucketName: 'BucketName',
      description: 'Description',
      featureList: 'FeatureList',
      fotaVersion: 'FotaVersion',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageCreateMode: 'ImageCreateMode',
      imageExtendInfoModel: 'ImageExtendInfoModel',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageRegionDistribute: 'ImageRegionDistribute',
      imageSource: 'ImageSource',
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
      propertyMap: 'PropertyMap',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorInfoBOList: { 'type': 'array', 'itemType': GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAdaptorInfoBOList },
      aliUid: 'number',
      appList: { 'type': 'array', 'itemType': GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListAppList },
      baseImageId: 'string',
      baseImageVersion: 'string',
      bizType: 'number',
      bucketName: 'string',
      description: 'string',
      featureList: { 'type': 'array', 'itemType': 'string' },
      fotaVersion: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageCreateMode: 'string',
      imageExtendInfoModel: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageExtendInfoModel,
      imageId: 'string',
      imageName: 'string',
      imageRegionDistribute: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelListImageRegionDistribute,
      imageSource: 'string',
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
      propertyMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adaptorInfoBOList)) {
      $dara.Model.validateArray(this.adaptorInfoBOList);
    }
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    if(this.imageExtendInfoModel && typeof (this.imageExtendInfoModel as any).validate === 'function') {
      (this.imageExtendInfoModel as any).validate();
    }
    if(this.imageRegionDistribute && typeof (this.imageRegionDistribute as any).validate === 'function') {
      (this.imageRegionDistribute as any).validate();
    }
    if(this.propertyMap) {
      $dara.Model.validateMap(this.propertyMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveImageByIdResponseBodyDataTagList extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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

export class GetEffectiveImageByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 100931896542****
   */
  aliUid?: number;
  /**
   * @remarks
   * The business line to which the image belongs. Valid values:
   * - 1: Basic business.
   * - 2: Personal Edition.
   * - 3: Cloud Office.
   * - 4: Cloud Streaming.
   * - 10: Standard Edition.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The description document of the image in Markdown format.
   * 
   * @example
   * ## this is a test document
   */
  document?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * eid-***
   */
  environmentId?: string;
  /**
   * @remarks
   * The creation time. The time is in RFC 3339 format. The Z in the example indicates the UTC time zone.
   * 
   * @example
   * 2026-03-10T01:33:37Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time. The time follows the RFC 3339 format. The Z in the example indicates the UTC time zone.
   * 
   * @example
   * 2025-12-11T02:19:27Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The URL of the image icon.
   * 
   * @example
   * https://xxx.jpg
   */
  imageIconUrl?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp1234567890abcde
   */
  imageId?: string;
  /**
   * @remarks
   * The details of the image version that actually takes effect in each region. For the same region, the configured newer version takes precedence.
   */
  imageInfoRegionModelList?: GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelList[];
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
   * The list of region IDs supported by the image.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The image type. Valid values:
   * - System: System image.
   * - User: Custom image.
   * - Shared: Shared image.
   * - Community: Community image.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The ID of the latest version of the image.
   * 
   * @example
   * iv-xxx
   */
  latestVersionId?: string;
  /**
   * @remarks
   * The data cloud disk size of the online version. Unit: GiB.
   * 
   * @example
   * 100
   */
  onlineVersionDataDiskSize?: number;
  /**
   * @remarks
   * The ID of the current online version of the image.
   * 
   * @example
   * iv-xxxx
   */
  onlineVersionId?: string;
  /**
   * @remarks
   * The system cloud disk size of the online version. Unit: GiB.
   * 
   * @example
   * 40
   */
  onlineVersionSystemDiskSize?: number;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled for the online version. Valid values: true: Enabled. false: Disabled.
   */
  onlineVersionVolumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The KMS key ID used when disk encryption is enabled for the online version.
   * 
   * @example
   * a7b3c0c8-xxxx
   */
  onlineVersionVolumeEncryptionKey?: string;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * - Windows: Windows operating system.
   * - Linux: Linux operating system.
   * - Android: Android operating system.
   * - Unknown: Unknown operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image packaging type. Valid values:
   * - Ecs: ECS image.
   * - Vhd: Virtual disk image.
   * - Container: Container image.
   * - Ecs_Container: Combined ECS and container image.
   * - K8s_Node: Kubernetes node image.
   * 
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @remarks
   * The parent image ID, which indicates the image inheritance relationship. System images do not have parent images.
   * 
   * @example
   * imgc-xxx
   */
  parentImageId?: string;
  /**
   * @remarks
   * The product type to which the image belongs, such as CloudDesktop (Cloud Desktop), CloudApp (Cloud App), or WuyingServer (WUYING Workspace Enterprise Edition workstation).
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The connection protocol used by the image. Valid values:
   * - ASP: Alibaba Cloud Streaming Protocol.
   * - HDX: HDX protocol.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The rating score of the image, out of 100.
   * 
   * @example
   * 95
   */
  rating?: number;
  /**
   * @remarks
   * The image status. Valid values:
   * - INIT: Initializing.
   * - CREATING: Creating.
   * - AVAILABLE: Available.
   * - CREATE_FAILED: Creation failed.
   * - DELETE: Deleted.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The list of image tags.
   */
  tagList?: GetEffectiveImageByIdResponseBodyDataTagList[];
  /**
   * @remarks
   * The image version ID.
   * 
   * @example
   * iv-agde4****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bizType: 'BizType',
      description: 'Description',
      document: 'Document',
      environmentId: 'EnvironmentId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageIconUrl: 'ImageIconUrl',
      imageId: 'ImageId',
      imageInfoRegionModelList: 'ImageInfoRegionModelList',
      imageName: 'ImageName',
      imageRegionList: 'ImageRegionList',
      imageType: 'ImageType',
      latestVersionId: 'LatestVersionId',
      onlineVersionDataDiskSize: 'OnlineVersionDataDiskSize',
      onlineVersionId: 'OnlineVersionId',
      onlineVersionSystemDiskSize: 'OnlineVersionSystemDiskSize',
      onlineVersionVolumeEncryptionEnabled: 'OnlineVersionVolumeEncryptionEnabled',
      onlineVersionVolumeEncryptionKey: 'OnlineVersionVolumeEncryptionKey',
      osType: 'OsType',
      packageType: 'PackageType',
      parentImageId: 'ParentImageId',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      rating: 'Rating',
      status: 'Status',
      tagList: 'TagList',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bizType: 'number',
      description: 'string',
      document: 'string',
      environmentId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageIconUrl: 'string',
      imageId: 'string',
      imageInfoRegionModelList: { 'type': 'array', 'itemType': GetEffectiveImageByIdResponseBodyDataImageInfoRegionModelList },
      imageName: 'string',
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
      imageType: 'string',
      latestVersionId: 'string',
      onlineVersionDataDiskSize: 'number',
      onlineVersionId: 'string',
      onlineVersionSystemDiskSize: 'number',
      onlineVersionVolumeEncryptionEnabled: 'boolean',
      onlineVersionVolumeEncryptionKey: 'string',
      osType: 'string',
      packageType: 'string',
      parentImageId: 'string',
      productType: 'string',
      protocolType: 'string',
      rating: 'number',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': GetEffectiveImageByIdResponseBodyDataTagList },
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfoRegionModelList)) {
      $dara.Model.validateArray(this.imageInfoRegionModelList);
    }
    if(Array.isArray(this.imageRegionList)) {
      $dara.Model.validateArray(this.imageRegionList);
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

export class GetEffectiveImageByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned by the API. A value of 200 indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The image information returned by the query.
   * 
   * @example
   * Object
   */
  data?: GetEffectiveImageByIdResponseBodyData;
  /**
   * @remarks
   * The message returned by the API.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID used to locate and troubleshoot the request.
   * 
   * @example
   * 50158E8B-992E-1286-B174-**********
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values: true: Successful. false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEffectiveImageByIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

