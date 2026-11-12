// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageByIdResponseBodyDataAdaptorInfoBOList extends $dara.Model {
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
   * The adaptor message.
   * 
   * @example
   * success
   */
  adaptorMessage?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * MANUAL
   */
  adaptorMode?: string;
  /**
   * @remarks
   * The execution step.
   * 
   * @example
   * FINISH_ADAPT
   */
  adaptorStep?: string;
  /**
   * @remarks
   * The numeric ID of the application.
   * 
   * @example
   * 12345
   */
  aid?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
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
   * The theme color.
   * 
   * @example
   * #FFFFFF
   */
  appThemeColor?: string;
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
   * The ID of the business line to which the application belongs.
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
   * appstream-example
   */
  bucketName?: string;
  /**
   * @remarks
   * The level-2 category of the application.
   * 
   * @example
   * 123
   */
  categoryId?: number;
  /**
   * @remarks
   * The level-1 category of the application.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The control parameters that can be configured by tenants and administrators.
   * 
   * @example
   * {}
   */
  controlParam?: string;
  /**
   * @remarks
   * The ID of the disk where the application files are stored.
   * 
   * @example
   * d-bp1example****
   */
  diskId?: string;
  /**
   * @remarks
   * The path of the executable file after the cloud application is installed.
   * 
   * @example
   * abc.text
   */
  executeFileAddress?: string;
  /**
   * @remarks
   * The extended information of the adapted application.
   * 
   * @example
   * {}
   */
  extend?: string;
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
   * The file size.
   * 
   * @example
   * 102400
   */
  fileSize?: number;
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
   * The last update time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The optimization parameters configured in the administrator backend.
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
   * The operating system type supported by the application.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The product type to which the application belongs.
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
   * Specifies whether to skip installation. This parameter can be configured by tenants and administrators.
   * 
   * @example
   * {}
   */
  silenceFlag?: string;
  /**
   * @remarks
   * The installation parameters that can be configured by tenants and administrators.
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
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      adaptorMessage: 'AdaptorMessage',
      adaptorMode: 'AdaptorMode',
      adaptorStep: 'AdaptorStep',
      aid: 'Aid',
      aliUid: 'AliUid',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appScript: 'AppScript',
      appThemeColor: 'AppThemeColor',
      appType: 'AppType',
      appVersionId: 'AppVersionId',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      bizType: 'BizType',
      bucketName: 'BucketName',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      controlParam: 'ControlParam',
      diskId: 'DiskId',
      executeFileAddress: 'ExecuteFileAddress',
      extend: 'Extend',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      optimizeParam: 'OptimizeParam',
      originAppType: 'OriginAppType',
      osType: 'OsType',
      productType: 'ProductType',
      runtimeEnv: 'RuntimeEnv',
      silenceFlag: 'SilenceFlag',
      silenceParam: 'SilenceParam',
      status: 'Status',
      subAppType: 'SubAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'string',
      adaptorMessage: 'string',
      adaptorMode: 'string',
      adaptorStep: 'string',
      aid: 'number',
      aliUid: 'number',
      appIconUrl: 'string',
      appId: 'string',
      appName: 'string',
      appScript: 'string',
      appThemeColor: 'string',
      appType: 'string',
      appVersionId: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      bizType: 'number',
      bucketName: 'string',
      categoryId: 'number',
      categoryType: 'number',
      controlParam: 'string',
      diskId: 'string',
      executeFileAddress: 'string',
      extend: 'string',
      fileName: 'string',
      filePath: 'string',
      fileSize: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      optimizeParam: 'string',
      originAppType: 'string',
      osType: 'string',
      productType: 'string',
      runtimeEnv: 'string',
      silenceFlag: 'string',
      silenceParam: 'string',
      status: 'string',
      subAppType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageByIdResponseBodyDataImageExtendInfoModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
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
   * The creation time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
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
   * The image ID.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image package type. Valid values:
   * - Ecs: ECS image.
   * - Vhd: Virtual disk image.
   * - Container: Container image.
   * - Ecs_Container: ECS and container combined image.
   * - K8s_Node: Kubernetes node image.
   * 
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
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
      aliUid: 'AliUid',
      dataDiskSize: 'DataDiskSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      packageType: 'PackageType',
      systemDiskSize: 'SystemDiskSize',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      dataDiskSize: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      gpuCategory: 'number',
      gpuDriverVersion: 'string',
      imageId: 'string',
      packageType: 'string',
      systemDiskSize: 'number',
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

export class GetImageByIdResponseBodyDataImageRegionDistributeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the ECS image corresponding to the region.
   * 
   * @example
   * m-bp1example****
   */
  ecsImageId?: string;
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
   * The last update time.
   * 
   * @example
   * 2025-04-25 15:13:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
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
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region distribution status. Valid values:
   * - CREATING: Distributing.
   * - AVAILABLE: Available.
   * - CREATE_FAILED: Distribution failed.
   * - DELETE: Deleted.
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
      aliUid: 'AliUid',
      ecsImageId: 'EcsImageId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      message: 'Message',
      progress: 'Progress',
      regionId: 'RegionId',
      status: 'Status',
      unitImageId: 'UnitImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      ecsImageId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      message: 'string',
      progress: 'string',
      regionId: 'string',
      status: 'string',
      unitImageId: 'string',
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

export class GetImageByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of adapted applications for the image version.
   */
  adaptorInfoBOList?: GetImageByIdResponseBodyDataAdaptorInfoBOList[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. The account ID for a system image is 0.
   * 
   * @example
   * 123456789
   */
  aliUid?: number;
  /**
   * @remarks
   * The ID of the base image.
   * 
   * @example
   * imgc-xxx
   */
  baseImageId?: string;
  /**
   * @remarks
   * The ID of the base image version.
   * 
   * @example
   * iv-xxx
   */
  baseImageVersion?: string;
  /**
   * @remarks
   * The business line to which the image belongs. Valid values:
   * - 1: basic business
   * - 2: personal edition
   * - 3: cloud office
   * - 4: cloud streaming
   * - 10: standard edition
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The name of the OSS bucket where the image files are stored.
   * 
   * @example
   * appstream-example
   */
  bucketName?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Description
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
   * The last update time.
   * 
   * @example
   * 2025-04-25 15:13:57
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
   * The image extended information, including disk specifications and GPU driver information. For VHD or container images, the extended information of the base image and base version is used.
   */
  imageExtendInfoModel?: GetImageByIdResponseBodyDataImageExtendInfoModel;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * DemoImage
   */
  imageName?: string;
  /**
   * @remarks
   * The list of region distribution information for the image version.
   */
  imageRegionDistributeList?: GetImageByIdResponseBodyDataImageRegionDistributeList[];
  /**
   * @remarks
   * The list of region IDs supported by the image.
   */
  imageRegionList?: string[];
  /**
   * @remarks
   * The source of the image. For example, center indicates the central image service.
   * 
   * @example
   * center
   */
  imageSource?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * - System: system image
   * - User: custom image
   * - Shared: shared image
   * - Community: community image
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The image language. If the encapsulation type is VHD or Container, this property is inherited from the image with the ECS encapsulation type in the image combination.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the latest image version.
   * 
   * @example
   * iv-xxx
   */
  latestVersionId?: string;
  /**
   * @remarks
   * Indicates whether the returned version is the active version. Valid values:
   * - true: Yes.
   * - false: No.
   */
  onlineVersion?: boolean;
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
   * The operating system type of the image. Valid values:
   * - Windows: Windows system
   * - Linux: Linux system
   * - Android: Android system
   * - Unknown: unknown system
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image package type. Valid values:
   * - Ecs: ECS image.
   * - Vhd: Virtual disk image.
   * - Container: Container image.
   * - Ecs_Container: ECS and container combined image.
   * - K8s_Node: Kubernetes node image.
   * 
   * @example
   * ECS
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the parent image, which indicates the image inheritance relationship. System images do not have parent images.
   * 
   * @example
   * imgc-xxx
   */
  parentImageId?: string;
  /**
   * @remarks
   * The ID of the parent image version.
   * 
   * @example
   * iv-xxx
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
   * The product type to which the image belongs, such as CloudDesktop (Cloud Desktop), CloudApp (Cloud Application), or WuyingServer (WUYING Workspace Enterprise Edition workstation).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The extended properties of the image version, in key-value pair format.
   * 
   * @example
   * {}
   */
  propertyMap?: { [key: string]: string };
  /**
   * @remarks
   * The connection protocol used by the image. Valid values:
   * - ASP: Alibaba Cloud Streaming Protocol
   * - HDX: HDX protocol
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The image status. Valid values:
   * - INIT: Initialized.
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
      imageRegionDistributeList: 'ImageRegionDistributeList',
      imageRegionList: 'ImageRegionList',
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
      status: 'Status',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorInfoBOList: { 'type': 'array', 'itemType': GetImageByIdResponseBodyDataAdaptorInfoBOList },
      aliUid: 'number',
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
      imageExtendInfoModel: GetImageByIdResponseBodyDataImageExtendInfoModel,
      imageId: 'string',
      imageName: 'string',
      imageRegionDistributeList: { 'type': 'array', 'itemType': GetImageByIdResponseBodyDataImageRegionDistributeList },
      imageRegionList: { 'type': 'array', 'itemType': 'string' },
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
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adaptorInfoBOList)) {
      $dara.Model.validateArray(this.adaptorInfoBOList);
    }
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    if(this.imageExtendInfoModel && typeof (this.imageExtendInfoModel as any).validate === 'function') {
      (this.imageExtendInfoModel as any).validate();
    }
    if(Array.isArray(this.imageRegionDistributeList)) {
      $dara.Model.validateArray(this.imageRegionDistributeList);
    }
    if(Array.isArray(this.imageRegionList)) {
      $dara.Model.validateArray(this.imageRegionList);
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

export class GetImageByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The image information returned by the query.
   */
  data?: GetImageByIdResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      data: GetImageByIdResponseBodyData,
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

