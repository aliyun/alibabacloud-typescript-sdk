// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList extends $dara.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  mainUrl?: string;
  memo?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  resourceType?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseBodyListMiniPackageResult extends $dara.Model {
  currentPage?: number;
  hasMore?: boolean;
  miniPackageList?: ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList[];
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      miniPackageList: 'MiniPackageList',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      miniPackageList: { 'type': 'array', 'itemType': ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList },
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.miniPackageList)) {
      $dara.Model.validateArray(this.miniPackageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseBody extends $dara.Model {
  listMiniPackageResult?: ListMcubeMiniPackagesResponseBodyListMiniPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniPackageResult: 'ListMiniPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniPackageResult: ListMcubeMiniPackagesResponseBodyListMiniPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMiniPackageResult && typeof (this.listMiniPackageResult as any).validate === 'function') {
      (this.listMiniPackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

