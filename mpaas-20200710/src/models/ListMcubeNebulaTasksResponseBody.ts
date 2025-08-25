// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo extends $dara.Model {
  appCode?: string;
  bizType?: string;
  creator?: string;
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
  memo?: string;
  modifier?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  releaseVersion?: string;
  status?: number;
  syncResult?: string;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      bizType: 'BizType',
      creator: 'Creator',
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
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      releaseVersion: 'ReleaseVersion',
      status: 'Status',
      syncResult: 'SyncResult',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      bizType: 'string',
      creator: 'string',
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
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      releaseVersion: 'string',
      status: 'number',
      syncResult: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
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

export class ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult extends $dara.Model {
  errorCode?: string;
  nebulaTaskInfo?: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo[];
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskInfo: 'NebulaTaskInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskInfo: { 'type': 'array', 'itemType': ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo },
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nebulaTaskInfo)) {
      $dara.Model.validateArray(this.nebulaTaskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksResponseBody extends $dara.Model {
  listMcubeNebulaTaskResult?: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaTaskResult: 'ListMcubeNebulaTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaTaskResult: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMcubeNebulaTaskResult && typeof (this.listMcubeNebulaTaskResult as any).validate === 'function') {
      (this.listMcubeNebulaTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

