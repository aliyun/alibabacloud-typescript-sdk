// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResultHotpatchTaskInfo extends $dara.Model {
  /**
   * @example
   * ALIPUB40DB571101207-default
   */
  appCode?: string;
  /**
   * @example
   * ***
   */
  creator?: string;
  /**
   * @example
   * 1751594649000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-29 18:01:32
   */
  gmtModified?: string;
  /**
   * @example
   * 2024-10-29 18:01:32
   */
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  /**
   * @example
   * 2020-03-18 20:12:26
   */
  greyEndtime?: string;
  greyEndtimeData?: string;
  /**
   * @example
   * 10
   */
  greyNum?: number;
  /**
   * @example
   * 1486
   */
  id?: number;
  memo?: string;
  /**
   * @example
   * xxxx
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
   * ALIPUB40DB571101207_ANDROID-default
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
   * 3
   */
  publishType?: number;
  /**
   * @example
   * 81c90a2cafdc6dfc54201e70845b5708
   */
  releaseVersion?: string;
  /**
   * @example
   * 1786
   */
  resIds?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 825827
   */
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
  /**
   * @example
   * OK
   */
  errorCode?: string;
  hotpatchTaskInfo?: ListMcubeHotpatchTasksResponseBodyListHotpatchTasksResultHotpatchTaskInfo[];
  /**
   * @example
   * 6BD4C876-47B4-56CF-84C5-57389EE1EDFE
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
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  /**
   * @example
   * success
   */
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

