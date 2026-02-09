// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResultHotpatchResourceInfo extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419-default
   */
  appCode?: string;
  /**
   * @example
   * xxx
   */
  creator?: string;
  /**
   * @example
   * https://xxxxx.jar
   */
  downloadUrl?: string;
  /**
   * @example
   * 528
   */
  fileSize?: string;
  /**
   * @example
   * 1745892911000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1574261514000
   */
  gmtModified?: string;
  /**
   * @example
   * 81c90a2cafdc6dfc54201e70845b5708
   */
  hotpatchVersion?: string;
  /**
   * @example
   * 1358
   */
  id?: number;
  /**
   * @example
   * E268154063D1256B4E60FE82B48E0811
   */
  md5?: string;
  memo?: string;
  /**
   * @example
   * modifier
   */
  modifier?: string;
  /**
   * @example
   * 0
   */
  packageId?: number;
  /**
   * @example
   * iOS,Android
   */
  platform?: string;
  /**
   * @example
   * ALIPUBE5C3F6D091419_Android-default
   */
  productId?: string;
  /**
   * @example
   * 1.0.0
   */
  productVersion?: string;
  /**
   * @example
   * 0
   */
  publishPeriod?: number;
  /**
   * @example
   * 81c90a2cafdc6dfc54201e70845b5708
   */
  releaseVersion?: string;
  /**
   * @example
   * mpaas.jar
   */
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
  /**
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * False
   */
  hasMore?: boolean;
  hotpatchResourceInfo?: ListMcubeHotpatchResourcesResponseBodyListHotpatchResourceResultHotpatchResourceInfo[];
  /**
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @example
   * 1C23E812-217E-5065-B778-D34586E2105E
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 71
   */
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
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  /**
   * @example
   * success
   */
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

