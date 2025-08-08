// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo extends $dara.Model {
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

export class QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult extends $dara.Model {
  miniTaskInfo?: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskInfo: 'MiniTaskInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskInfo: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.miniTaskInfo && typeof (this.miniTaskInfo as any).validate === 'function') {
      (this.miniTaskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseBody extends $dara.Model {
  queryMiniTaskResult?: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMiniTaskResult: 'QueryMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMiniTaskResult: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.queryMiniTaskResult && typeof (this.queryMiniTaskResult as any).validate === 'function') {
      (this.queryMiniTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

