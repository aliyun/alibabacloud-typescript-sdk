// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo extends $dara.Model {
  appCode?: string;
  creator?: string;
  devicePercent?: number;
  executionOrder?: number;
  gmtCreate?: string;
  gmtCreateStr?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyNotice?: number;
  greyNum?: number;
  greyPausePoint?: number;
  greyPauseType?: number;
  greyUv?: number;
  historyForce?: number;
  huobanNoticeId?: string;
  huobanUrl?: string;
  id?: number;
  innerVersion?: string;
  isEnterprise?: number;
  isOfficial?: number;
  isPush?: number;
  isRelease?: number;
  maxVersion?: string;
  memo?: string;
  modifier?: string;
  packageInfoId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  realGreyEndtime?: string;
  realGreyEndtimeStr?: string;
  realGreyEndtype?: number;
  realGreyNum?: number;
  realGreyUv?: number;
  silentType?: number;
  syncResult?: string;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      creator: 'Creator',
      devicePercent: 'DevicePercent',
      executionOrder: 'ExecutionOrder',
      gmtCreate: 'GmtCreate',
      gmtCreateStr: 'GmtCreateStr',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyNotice: 'GreyNotice',
      greyNum: 'GreyNum',
      greyPausePoint: 'GreyPausePoint',
      greyPauseType: 'GreyPauseType',
      greyUv: 'GreyUv',
      historyForce: 'HistoryForce',
      huobanNoticeId: 'HuobanNoticeId',
      huobanUrl: 'HuobanUrl',
      id: 'Id',
      innerVersion: 'InnerVersion',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isPush: 'IsPush',
      isRelease: 'IsRelease',
      maxVersion: 'MaxVersion',
      memo: 'Memo',
      modifier: 'Modifier',
      packageInfoId: 'PackageInfoId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      realGreyEndtime: 'RealGreyEndtime',
      realGreyEndtimeStr: 'RealGreyEndtimeStr',
      realGreyEndtype: 'RealGreyEndtype',
      realGreyNum: 'RealGreyNum',
      realGreyUv: 'RealGreyUv',
      silentType: 'SilentType',
      syncResult: 'SyncResult',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      creator: 'string',
      devicePercent: 'number',
      executionOrder: 'number',
      gmtCreate: 'string',
      gmtCreateStr: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyNotice: 'number',
      greyNum: 'number',
      greyPausePoint: 'number',
      greyPauseType: 'number',
      greyUv: 'number',
      historyForce: 'number',
      huobanNoticeId: 'string',
      huobanUrl: 'string',
      id: 'number',
      innerVersion: 'string',
      isEnterprise: 'number',
      isOfficial: 'number',
      isPush: 'number',
      isRelease: 'number',
      maxVersion: 'string',
      memo: 'string',
      modifier: 'string',
      packageInfoId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      realGreyEndtime: 'string',
      realGreyEndtimeStr: 'string',
      realGreyEndtype: 'number',
      realGreyNum: 'number',
      realGreyUv: 'number',
      silentType: 'number',
      syncResult: 'string',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelistIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponseBodyListTaskResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  taskInfo?: ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      taskInfo: { 'type': 'array', 'itemType': ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskInfo)) {
      $dara.Model.validateArray(this.taskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponseBody extends $dara.Model {
  listTaskResult?: ListMcubeUpgradeTasksResponseBodyListTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listTaskResult: 'ListTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listTaskResult: ListMcubeUpgradeTasksResponseBodyListTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listTaskResult && typeof (this.listTaskResult as any).validate === 'function') {
      (this.listTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

