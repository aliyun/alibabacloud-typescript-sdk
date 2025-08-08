// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList extends $dara.Model {
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

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist extends $dara.Model {
  appCode?: string;
  id?: number;
  idType?: string;
  platform?: string;
  status?: number;
  userType?: string;
  whiteListCount?: number;
  whiteListName?: string;
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      id: 'Id',
      idType: 'IdType',
      platform: 'Platform',
      status: 'Status',
      userType: 'UserType',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      id: 'number',
      idType: 'string',
      platform: 'string',
      status: 'number',
      userType: 'string',
      whiteListCount: 'number',
      whiteListName: 'string',
      whitelistType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo extends $dara.Model {
  appCode?: string;
  appId?: string;
  appstoreUrl?: string;
  creater?: string;
  creator?: string;
  downloadUrl?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  historyForce?: number;
  id?: number;
  isEnterprise?: number;
  isOfficial?: number;
  isRc?: number;
  isRelease?: number;
  memo?: string;
  modifier?: string;
  netType?: string;
  osVersion?: string;
  packageInfoId?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  qrcodeUrl?: string;
  ruleJsonList?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList[];
  silentType?: number;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelist?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist[];
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appstoreUrl: 'AppstoreUrl',
      creater: 'Creater',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      historyForce: 'HistoryForce',
      id: 'Id',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      memo: 'Memo',
      modifier: 'Modifier',
      netType: 'NetType',
      osVersion: 'OsVersion',
      packageInfoId: 'PackageInfoId',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      qrcodeUrl: 'QrcodeUrl',
      ruleJsonList: 'RuleJsonList',
      silentType: 'SilentType',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelist: 'Whitelist',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      appstoreUrl: 'string',
      creater: 'string',
      creator: 'string',
      downloadUrl: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      historyForce: 'number',
      id: 'number',
      isEnterprise: 'number',
      isOfficial: 'number',
      isRc: 'number',
      isRelease: 'number',
      memo: 'string',
      modifier: 'string',
      netType: 'string',
      osVersion: 'string',
      packageInfoId: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      qrcodeUrl: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList },
      silentType: 'number',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelist: { 'type': 'array', 'itemType': GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist },
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
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

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  taskInfo?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo;
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
      taskInfo: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBody extends $dara.Model {
  getTaskResult?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getTaskResult: 'GetTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getTaskResult: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.getTaskResult && typeof (this.getTaskResult as any).validate === 'function') {
      (this.getTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

