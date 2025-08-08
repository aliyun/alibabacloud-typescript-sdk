// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList extends $dara.Model {
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

export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail extends $dara.Model {
  appCode?: string;
  appId?: string;
  atomic?: number;
  baseInfoId?: number;
  bizType?: string;
  creator?: string;
  cronexpress?: number;
  downloadUrl?: string;
  extraData?: string;
  fileSize?: string;
  fullRepair?: number;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyEndtimeStr?: string;
  greyNum?: number;
  greyUrl?: string;
  id?: number;
  issueDesc?: string;
  memo?: string;
  modifier?: string;
  ossPath?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishPeriod?: number;
  publishType?: number;
  quickRollback?: number;
  releaseVersion?: string;
  ruleJsonList?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList[];
  sourceId?: string;
  sourceName?: string;
  sourceType?: string;
  status?: number;
  syncResult?: string;
  syncType?: number;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      atomic: 'Atomic',
      baseInfoId: 'BaseInfoId',
      bizType: 'BizType',
      creator: 'Creator',
      cronexpress: 'Cronexpress',
      downloadUrl: 'DownloadUrl',
      extraData: 'ExtraData',
      fileSize: 'FileSize',
      fullRepair: 'FullRepair',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyEndtimeStr: 'GreyEndtimeStr',
      greyNum: 'GreyNum',
      greyUrl: 'GreyUrl',
      id: 'Id',
      issueDesc: 'IssueDesc',
      memo: 'Memo',
      modifier: 'Modifier',
      ossPath: 'OssPath',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishPeriod: 'PublishPeriod',
      publishType: 'PublishType',
      quickRollback: 'QuickRollback',
      releaseVersion: 'ReleaseVersion',
      ruleJsonList: 'RuleJsonList',
      sourceId: 'SourceId',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      status: 'Status',
      syncResult: 'SyncResult',
      syncType: 'SyncType',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      atomic: 'number',
      baseInfoId: 'number',
      bizType: 'string',
      creator: 'string',
      cronexpress: 'number',
      downloadUrl: 'string',
      extraData: 'string',
      fileSize: 'string',
      fullRepair: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyEndtimeStr: 'string',
      greyNum: 'number',
      greyUrl: 'string',
      id: 'number',
      issueDesc: 'string',
      memo: 'string',
      modifier: 'string',
      ossPath: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishPeriod: 'number',
      publishType: 'number',
      quickRollback: 'number',
      releaseVersion: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList },
      sourceId: 'string',
      sourceName: 'string',
      sourceType: 'string',
      status: 'number',
      syncResult: 'string',
      syncType: 'number',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleJsonList)) {
      $dara.Model.validateArray(this.ruleJsonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult extends $dara.Model {
  errorCode?: string;
  nebulaTaskDetail?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskDetail: 'NebulaTaskDetail',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskDetail: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nebulaTaskDetail && typeof (this.nebulaTaskDetail as any).validate === 'function') {
      (this.nebulaTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBody extends $dara.Model {
  getMcubeNebulaTaskDetailResult?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getMcubeNebulaTaskDetailResult: 'GetMcubeNebulaTaskDetailResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getMcubeNebulaTaskDetailResult: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.getMcubeNebulaTaskDetailResult && typeof (this.getMcubeNebulaTaskDetailResult as any).validate === 'function') {
      (this.getMcubeNebulaTaskDetailResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

