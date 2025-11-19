// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageDetailResponseBodyDataCurrentImageCodeInfo extends $dara.Model {
  currentPassword?: string;
  expireTime?: string;
  gmtCreated?: string;
  gmtModified?: string;
  imageCode?: string;
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

export class DescribeImageDetailResponseBodyData extends $dara.Model {
  currentImageCodeInfo?: DescribeImageDetailResponseBodyDataCurrentImageCodeInfo;
  dataDiskSize?: number;
  description?: string;
  enableStartUpConfig?: boolean;
  gmtCreated?: string;
  imageId?: string;
  imageScope?: string;
  isGpu?: boolean;
  name?: string;
  osType?: string;
  permission?: string;
  platform?: string;
  progress?: string;
  shareCodes?: string[];
  shareCodesIncludeDisable?: string[];
  shared?: boolean;
  sourceDesktopType?: string;
  startUpFileList?: string[];
  status?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentImageCodeInfo: 'CurrentImageCodeInfo',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      enableStartUpConfig: 'EnableStartUpConfig',
      gmtCreated: 'GmtCreated',
      imageId: 'ImageId',
      imageScope: 'ImageScope',
      isGpu: 'IsGpu',
      name: 'Name',
      osType: 'OsType',
      permission: 'Permission',
      platform: 'Platform',
      progress: 'Progress',
      shareCodes: 'ShareCodes',
      shareCodesIncludeDisable: 'ShareCodesIncludeDisable',
      shared: 'Shared',
      sourceDesktopType: 'SourceDesktopType',
      startUpFileList: 'StartUpFileList',
      status: 'Status',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentImageCodeInfo: DescribeImageDetailResponseBodyDataCurrentImageCodeInfo,
      dataDiskSize: 'number',
      description: 'string',
      enableStartUpConfig: 'boolean',
      gmtCreated: 'string',
      imageId: 'string',
      imageScope: 'string',
      isGpu: 'boolean',
      name: 'string',
      osType: 'string',
      permission: 'string',
      platform: 'string',
      progress: 'string',
      shareCodes: { 'type': 'array', 'itemType': 'string' },
      shareCodesIncludeDisable: { 'type': 'array', 'itemType': 'string' },
      shared: 'boolean',
      sourceDesktopType: 'string',
      startUpFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      systemDiskSize: 'number',
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

export class DescribeImageDetailResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeImageDetailResponseBodyData;
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
      data: DescribeImageDetailResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      traceId: 'string',
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

