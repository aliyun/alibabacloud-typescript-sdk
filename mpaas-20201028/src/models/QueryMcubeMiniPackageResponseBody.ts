// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo extends $dara.Model {
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

export class QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult extends $dara.Model {
  miniPackageInfo?: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniPackageInfo: 'MiniPackageInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniPackageInfo: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.miniPackageInfo && typeof (this.miniPackageInfo as any).validate === 'function') {
      (this.miniPackageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseBody extends $dara.Model {
  queryMiniPackageResult?: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMiniPackageResult: 'QueryMiniPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMiniPackageResult: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.queryMiniPackageResult && typeof (this.queryMiniPackageResult as any).validate === 'function') {
      (this.queryMiniPackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

