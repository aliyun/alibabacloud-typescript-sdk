// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailRuleJsonList extends $dara.Model {
  /**
   * @example
   * and
   */
  operation?: string;
  /**
   * @example
   * city
   */
  ruleElement?: string;
  /**
   * @example
   * 0
   */
  ruleType?: string;
  /**
   * @example
   * smtp.qiye.aliyun.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ruleElement: 'RuleElement',
      ruleType: 'RuleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ruleElement: 'string',
      ruleType: 'string',
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

export class QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailWhitelist extends $dara.Model {
  /**
   * @example
   * ONEXPRE40DB571151920-default
   */
  appCode?: string;
  /**
   * @example
   * business
   */
  business?: string;
  /**
   * @example
   * 1760754049000
   */
  gmtModified?: string;
  /**
   * @example
   * 9952804
   */
  id?: number;
  /**
   * @example
   * userId
   */
  idType?: string;
  /**
   * @example
   * iOS
   */
  platform?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 100
   */
  whiteListCount?: number;
  /**
   * @example
   * whitelistName
   */
  whiteListName?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      business: 'Business',
      gmtModified: 'GmtModified',
      id: 'Id',
      idType: 'IdType',
      platform: 'Platform',
      status: 'Status',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      business: 'string',
      gmtModified: 'string',
      id: 'number',
      idType: 'string',
      platform: 'string',
      status: 'number',
      whiteListCount: 'number',
      whiteListName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetail extends $dara.Model {
  /**
   * @example
   * ONEXPRE22BA951112038-default
   */
  appCode?: string;
  /**
   * @example
   * ALIPUB9A63274111812
   */
  appId?: string;
  /**
   * @example
   * 0
   */
  baseInfoId?: number;
  bundles?: string[];
  /**
   * @example
   * ***
   */
  creator?: string;
  /**
   * @example
   * https://xxxxx
   */
  downloadUrl?: string;
  /**
   * @example
   * 117
   */
  fileSize?: string;
  /**
   * @example
   * 1766111313000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-01-09 10:14:46
   */
  gmtModified?: string;
  /**
   * @example
   * 2026-01-09 10:14:46
   */
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  /**
   * @example
   * 2024-01-01 12:00:00
   */
  greyEndtimeData?: string;
  /**
   * @example
   * 100
   */
  greyNum?: number;
  /**
   * @example
   * 14332
   */
  id?: number;
  /**
   * @example
   * 15cf3772223630be907c7aaefe8d51c6
   */
  md5?: string;
  memo?: string;
  /**
   * @example
   * ***
   */
  modifier?: string;
  /**
   * @example
   * 1664552
   */
  packageId?: number;
  /**
   * @example
   * iOS
   */
  platform?: string;
  /**
   * @example
   * ONEXPRE22BA951112038_ANDROID-default
   */
  productId?: string;
  /**
   * @example
   * 1.0.0
   */
  productVersion?: string;
  /**
   * @example
   * 1
   */
  publishMode?: number;
  /**
   * @example
   * 2
   */
  publishPeriod?: number;
  /**
   * @example
   * 3
   */
  publishType?: number;
  /**
   * @example
   * 0
   */
  quickRollback?: number;
  /**
   * @example
   * 81c90a2cafdc6dfc54201e70845b5708
   */
  releaseVersion?: string;
  ruleJsonList?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailRuleJsonList[];
  /**
   * @example
   * mpaas.jar
   */
  sourceName?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 1770442895017
   */
  taskVersion?: number;
  whitelist?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailWhitelist[];
  /**
   * @example
   * 825827
   */
  whitelistIds?: string;
  /**
   * @example
   * default
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      baseInfoId: 'BaseInfoId',
      bundles: 'Bundles',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      md5: 'Md5',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishPeriod: 'PublishPeriod',
      publishType: 'PublishType',
      quickRollback: 'QuickRollback',
      releaseVersion: 'ReleaseVersion',
      ruleJsonList: 'RuleJsonList',
      sourceName: 'SourceName',
      taskStatus: 'TaskStatus',
      taskVersion: 'TaskVersion',
      whitelist: 'Whitelist',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      baseInfoId: 'number',
      bundles: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      downloadUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      md5: 'string',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishPeriod: 'number',
      publishType: 'number',
      quickRollback: 'number',
      releaseVersion: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailRuleJsonList },
      sourceName: 'string',
      taskStatus: 'number',
      taskVersion: 'number',
      whitelist: { 'type': 'array', 'itemType': QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailWhitelist },
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bundles)) {
      $dara.Model.validateArray(this.bundles);
    }
    if(Array.isArray(this.ruleJsonList)) {
      $dara.Model.validateArray(this.ruleJsonList);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResult extends $dara.Model {
  /**
   * @example
   * Success
   */
  errorCode?: string;
  hotpatchTaskDetail?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetail;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 61B9F63C-4E6F-5D8E-A694-899450987B48
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      hotpatchTaskDetail: 'HotpatchTaskDetail',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hotpatchTaskDetail: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetail,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.hotpatchTaskDetail && typeof (this.hotpatchTaskDetail as any).validate === 'function') {
      (this.hotpatchTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeHotpatchTaskDetailResponseBody extends $dara.Model {
  queryHotpatchTaskDetailResult?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResult;
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
      queryHotpatchTaskDetailResult: 'QueryHotpatchTaskDetailResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryHotpatchTaskDetailResult: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.queryHotpatchTaskDetailResult && typeof (this.queryHotpatchTaskDetailResult as any).validate === 'function') {
      (this.queryHotpatchTaskDetailResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

