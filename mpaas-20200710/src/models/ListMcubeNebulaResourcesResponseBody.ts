// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo extends $dara.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  creator?: string;
  debugUrl?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  lazyLoad?: number;
  mainUrl?: string;
  md5?: string;
  memo?: string;
  metaId?: number;
  modifier?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  releaseVersion?: string;
  resourceType?: string;
  status?: number;
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      creator: 'Creator',
      debugUrl: 'DebugUrl',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      lazyLoad: 'LazyLoad',
      mainUrl: 'MainUrl',
      md5: 'Md5',
      memo: 'Memo',
      metaId: 'MetaId',
      modifier: 'Modifier',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      releaseVersion: 'ReleaseVersion',
      resourceType: 'ResourceType',
      status: 'Status',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      creator: 'string',
      debugUrl: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      lazyLoad: 'number',
      mainUrl: 'string',
      md5: 'string',
      memo: 'string',
      metaId: 'number',
      modifier: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      releaseVersion: 'string',
      resourceType: 'string',
      status: 'number',
      vhost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult extends $dara.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  nebulaResourceInfo?: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      nebulaResourceInfo: 'NebulaResourceInfo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      nebulaResourceInfo: { 'type': 'array', 'itemType': ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nebulaResourceInfo)) {
      $dara.Model.validateArray(this.nebulaResourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponseBody extends $dara.Model {
  listMcubeNebulaResourceResult?: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaResourceResult: 'ListMcubeNebulaResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaResourceResult: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMcubeNebulaResourceResult && typeof (this.listMcubeNebulaResourceResult as any).validate === 'function') {
      (this.listMcubeNebulaResourceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

