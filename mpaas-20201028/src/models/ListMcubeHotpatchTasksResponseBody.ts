// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResultHotpatchTaskInfo extends $dara.Model {
  appCode?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  memo?: string;
  modifier?: string;
  packageId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  releaseVersion?: string;
  resIds?: string;
  taskStatus?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      releaseVersion: 'ReleaseVersion',
      resIds: 'ResIds',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      releaseVersion: 'string',
      resIds: 'string',
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

export class ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResult extends $dara.Model {
  errorCode?: string;
  hotpatchTaskInfo?: ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResultHotpatchTaskInfo[];
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      hotpatchTaskInfo: 'HotpatchTaskInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hotpatchTaskInfo: { 'type': 'array', 'itemType': ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResultHotpatchTaskInfo },
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.hotpatchTaskInfo)) {
      $dara.Model.validateArray(this.hotpatchTaskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeHotpatchTasksResponseBody extends $dara.Model {
  listHotpatchTasksResult?: ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listHotpatchTasksResult: 'ListHotpatchTasksResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listHotpatchTasksResult: ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listHotpatchTasksResult && typeof (this.listHotpatchTasksResult as any).validate === 'function') {
      (this.listHotpatchTasksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

