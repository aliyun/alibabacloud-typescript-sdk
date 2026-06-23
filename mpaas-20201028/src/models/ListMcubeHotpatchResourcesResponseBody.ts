// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResultHotpatchResourceInfo extends $dara.Model {
  appCode?: string;
  creator?: string;
  downloadUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hotpatchVersion?: string;
  id?: number;
  md5?: string;
  memo?: string;
  modifier?: string;
  packageId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishPeriod?: number;
  releaseVersion?: string;
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hotpatchVersion: 'HotpatchVersion',
      id: 'Id',
      md5: 'Md5',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishPeriod: 'PublishPeriod',
      releaseVersion: 'ReleaseVersion',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      creator: 'string',
      downloadUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hotpatchVersion: 'string',
      id: 'number',
      md5: 'string',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishPeriod: 'number',
      releaseVersion: 'string',
      sourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResult extends $dara.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  hotpatchResourceInfo?: ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResultHotpatchResourceInfo[];
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
      hotpatchResourceInfo: 'HotpatchResourceInfo',
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
      hotpatchResourceInfo: { 'type': 'array', 'itemType': ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResultHotpatchResourceInfo },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hotpatchResourceInfo)) {
      $dara.Model.validateArray(this.hotpatchResourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeHotpatchResourcesResponseBody extends $dara.Model {
  listHotpatchResourceResult?: ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listHotpatchResourceResult: 'ListHotpatchResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listHotpatchResourceResult: ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listHotpatchResourceResult && typeof (this.listHotpatchResourceResult as any).validate === 'function') {
      (this.listHotpatchResourceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

