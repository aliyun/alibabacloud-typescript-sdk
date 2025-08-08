// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList extends $dara.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  memo?: string;
  packageId?: number;
  platform?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  status?: string;
  taskStatus?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      status: 'Status',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      status: 'string',
      taskStatus: 'number',
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

export class ListMcubeMiniTasksResponseBodyListMiniTaskResult extends $dara.Model {
  miniTaskList?: ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList[];
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskList: 'MiniTaskList',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskList: { 'type': 'array', 'itemType': ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList },
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.miniTaskList)) {
      $dara.Model.validateArray(this.miniTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseBody extends $dara.Model {
  listMiniTaskResult?: ListMcubeMiniTasksResponseBodyListMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniTaskResult: 'ListMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniTaskResult: ListMcubeMiniTasksResponseBodyListMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listMiniTaskResult && typeof (this.listMiniTaskResult as any).validate === 'function') {
      (this.listMiniTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

