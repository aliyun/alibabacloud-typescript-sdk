// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailRuleJsonList extends $dara.Model {
  operation?: string;
  ruleElement?: string;
  ruleType?: string;
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
  appCode?: string;
  business?: string;
  gmtModified?: string;
  id?: number;
  idType?: string;
  platform?: string;
  status?: number;
  whiteListCount?: number;
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
  appCode?: string;
  appId?: string;
  baseInfoId?: number;
  bundles?: string[];
  creator?: string;
  downloadUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  md5?: string;
  memo?: string;
  modifier?: string;
  packageId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishPeriod?: number;
  publishType?: number;
  quickRollback?: number;
  releaseVersion?: string;
  ruleJsonList?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailRuleJsonList[];
  sourceName?: string;
  taskStatus?: number;
  taskVersion?: number;
  whitelist?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetailWhitelist[];
  whitelistIds?: string;
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
  errorCode?: string;
  hotpatchTaskDetail?: QueryMcubeHotpatchTaskDetailResponseBodyQueryHotpatchTaskDetailResultHotpatchTaskDetail;
  requestId?: string;
  resultMsg?: string;
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
  requestId?: string;
  resultCode?: string;
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

