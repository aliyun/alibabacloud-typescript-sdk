// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo extends $dara.Model {
  appCode?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyNum?: number;
  historyForce?: number;
  id?: number;
  isEnterprise?: number;
  memo?: string;
  modifier?: string;
  packageInfoId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyNum: 'GreyNum',
      historyForce: 'HistoryForce',
      id: 'Id',
      isEnterprise: 'IsEnterprise',
      memo: 'Memo',
      modifier: 'Modifier',
      packageInfoId: 'PackageInfoId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyNum: 'number',
      historyForce: 'number',
      id: 'number',
      isEnterprise: 'number',
      memo: 'string',
      modifier: 'string',
      packageInfoId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
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

