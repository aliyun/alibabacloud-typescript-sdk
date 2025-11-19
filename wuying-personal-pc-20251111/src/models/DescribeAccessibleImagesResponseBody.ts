// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessibleImagesResponseBodyDataCurrentImageCodeInfo extends $dara.Model {
  currentPassword?: string;
  expireTime?: string;
  gmtCreated?: string;
  gmtModified?: string;
  imageCode?: string;
  imageId?: string;
  isCopyPassword?: boolean;
  isEncrypted?: boolean;
  isFree?: boolean;
  periodDays?: number;
  redeemCount?: number;
  redeemQuota?: number;
  static names(): { [key: string]: string } {
    return {
      currentPassword: 'CurrentPassword',
      expireTime: 'ExpireTime',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      imageCode: 'ImageCode',
      imageId: 'ImageId',
      isCopyPassword: 'IsCopyPassword',
      isEncrypted: 'IsEncrypted',
      isFree: 'IsFree',
      periodDays: 'PeriodDays',
      redeemCount: 'RedeemCount',
      redeemQuota: 'RedeemQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPassword: 'string',
      expireTime: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      imageCode: 'string',
      imageId: 'string',
      isCopyPassword: 'boolean',
      isEncrypted: 'boolean',
      isFree: 'boolean',
      periodDays: 'number',
      redeemCount: 'number',
      redeemQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleImagesResponseBodyData extends $dara.Model {
  activityType?: string;
  authTime?: string;
  canUpdate?: boolean;
  currentImageCodeInfo?: DescribeAccessibleImagesResponseBodyDataCurrentImageCodeInfo;
  dataDiskSize?: number;
  deployMode?: string;
  description?: string;
  dockerImageSize?: number;
  enableStartUpConfig?: boolean;
  gmtCreated?: string;
  imageId?: string;
  imageScope?: string;
  imageSource?: string;
  imageType?: string;
  isGpu?: boolean;
  isLinggou?: string;
  isWorkstation?: boolean;
  name?: string;
  operationSystem?: string;
  osType?: string;
  permission?: string;
  platform?: string;
  progress?: string;
  receiverType?: string;
  shareCodes?: string[];
  shareCodesIncludeDisable?: string[];
  shared?: boolean;
  sharedBy?: string;
  sourceDesktopId?: string;
  sourceDesktopType?: string;
  sourceImageId?: string;
  sourceImageName?: string;
  startUpFileList?: string[];
  status?: string;
  supportPublish?: boolean;
  systemDiskSize?: number;
  validationCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      authTime: 'AuthTime',
      canUpdate: 'CanUpdate',
      currentImageCodeInfo: 'CurrentImageCodeInfo',
      dataDiskSize: 'DataDiskSize',
      deployMode: 'DeployMode',
      description: 'Description',
      dockerImageSize: 'DockerImageSize',
      enableStartUpConfig: 'EnableStartUpConfig',
      gmtCreated: 'GmtCreated',
      imageId: 'ImageId',
      imageScope: 'ImageScope',
      imageSource: 'ImageSource',
      imageType: 'ImageType',
      isGpu: 'IsGpu',
      isLinggou: 'IsLinggou',
      isWorkstation: 'IsWorkstation',
      name: 'Name',
      operationSystem: 'OperationSystem',
      osType: 'OsType',
      permission: 'Permission',
      platform: 'Platform',
      progress: 'Progress',
      receiverType: 'ReceiverType',
      shareCodes: 'ShareCodes',
      shareCodesIncludeDisable: 'ShareCodesIncludeDisable',
      shared: 'Shared',
      sharedBy: 'SharedBy',
      sourceDesktopId: 'SourceDesktopId',
      sourceDesktopType: 'SourceDesktopType',
      sourceImageId: 'SourceImageId',
      sourceImageName: 'SourceImageName',
      startUpFileList: 'StartUpFileList',
      status: 'Status',
      supportPublish: 'SupportPublish',
      systemDiskSize: 'SystemDiskSize',
      validationCode: 'ValidationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      authTime: 'string',
      canUpdate: 'boolean',
      currentImageCodeInfo: DescribeAccessibleImagesResponseBodyDataCurrentImageCodeInfo,
      dataDiskSize: 'number',
      deployMode: 'string',
      description: 'string',
      dockerImageSize: 'number',
      enableStartUpConfig: 'boolean',
      gmtCreated: 'string',
      imageId: 'string',
      imageScope: 'string',
      imageSource: 'string',
      imageType: 'string',
      isGpu: 'boolean',
      isLinggou: 'string',
      isWorkstation: 'boolean',
      name: 'string',
      operationSystem: 'string',
      osType: 'string',
      permission: 'string',
      platform: 'string',
      progress: 'string',
      receiverType: 'string',
      shareCodes: { 'type': 'array', 'itemType': 'string' },
      shareCodesIncludeDisable: { 'type': 'array', 'itemType': 'string' },
      shared: 'boolean',
      sharedBy: 'string',
      sourceDesktopId: 'string',
      sourceDesktopType: 'string',
      sourceImageId: 'string',
      sourceImageName: 'string',
      startUpFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      supportPublish: 'boolean',
      systemDiskSize: 'number',
      validationCode: 'string',
    };
  }

  validate() {
    if(this.currentImageCodeInfo && typeof (this.currentImageCodeInfo as any).validate === 'function') {
      (this.currentImageCodeInfo as any).validate();
    }
    if(Array.isArray(this.shareCodes)) {
      $dara.Model.validateArray(this.shareCodes);
    }
    if(Array.isArray(this.shareCodesIncludeDisable)) {
      $dara.Model.validateArray(this.shareCodesIncludeDisable);
    }
    if(Array.isArray(this.startUpFileList)) {
      $dara.Model.validateArray(this.startUpFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessibleImagesResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeAccessibleImagesResponseBodyData[];
  httpStatusCode?: number;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeAccessibleImagesResponseBodyData },
      httpStatusCode: 'number',
      requestId: 'string',
      traceId: 'string',
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

