// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskGroupResponseBodyResultObjectSubTaskList extends $dara.Model {
  /**
   * @example
   * 2026-01-12 15:47:23
   */
  finishTime?: number;
  /**
   * @example
   * pts-demo
   */
  groupName?: string;
  /**
   * @example
   * true
   */
  hideViewResultButton?: boolean;
  /**
   * @example
   * true
   */
  isCharge?: boolean;
  /**
   * @example
   * rfs
   */
  modelScene?: string;
  /**
   * @example
   * 4
   */
  sampleId?: number;
  /**
   * @example
   * fs
   */
  sampleName?: string;
  /**
   * @example
   * anti_fraud_riskscreening
   */
  serviceCode?: string;
  serviceName?: string;
  /**
   * @example
   * 3
   */
  subTaskId?: number;
  /**
   * @example
   * true
   */
  supportCancel?: boolean;
  /**
   * @example
   * true
   */
  supportDownload?: boolean;
  /**
   * @example
   * false
   */
  supportMergeSelect?: boolean;
  /**
   * @example
   * true
   */
  supportView?: boolean;
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * 4
   */
  taskGroupId?: number;
  /**
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      groupName: 'GroupName',
      hideViewResultButton: 'HideViewResultButton',
      isCharge: 'IsCharge',
      modelScene: 'ModelScene',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      subTaskId: 'SubTaskId',
      supportCancel: 'SupportCancel',
      supportDownload: 'SupportDownload',
      supportMergeSelect: 'SupportMergeSelect',
      supportView: 'SupportView',
      tab: 'Tab',
      taskGroupId: 'TaskGroupId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      groupName: 'string',
      hideViewResultButton: 'boolean',
      isCharge: 'boolean',
      modelScene: 'string',
      sampleId: 'number',
      sampleName: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      subTaskId: 'number',
      supportCancel: 'boolean',
      supportDownload: 'boolean',
      supportMergeSelect: 'boolean',
      supportView: 'boolean',
      tab: 'string',
      taskGroupId: 'number',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1588820785212
   */
  createTime?: number;
  creatorUserId?: number;
  /**
   * @example
   * RUNNING
   */
  groupStatus?: string;
  sampleNames?: string[];
  /**
   * @example
   * 4
   */
  subTaskCount?: number;
  subTaskList?: ListTaskGroupResponseBodyResultObjectSubTaskList[];
  /**
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @example
   * g-uf62fwvw2f8dx88xo2lt
   */
  taskGroupId?: number;
  /**
   * @example
   * GroupTest
   */
  taskGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creatorUserId: 'CreatorUserId',
      groupStatus: 'GroupStatus',
      sampleNames: 'SampleNames',
      subTaskCount: 'SubTaskCount',
      subTaskList: 'SubTaskList',
      tab: 'Tab',
      taskGroupId: 'TaskGroupId',
      taskGroupName: 'TaskGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creatorUserId: 'number',
      groupStatus: 'string',
      sampleNames: { 'type': 'array', 'itemType': 'string' },
      subTaskCount: 'number',
      subTaskList: { 'type': 'array', 'itemType': ListTaskGroupResponseBodyResultObjectSubTaskList },
      tab: 'string',
      taskGroupId: 'number',
      taskGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sampleNames)) {
      $dara.Model.validateArray(this.sampleNames);
    }
    if(Array.isArray(this.subTaskList)) {
      $dara.Model.validateArray(this.subTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  resultObject?: ListTaskGroupResponseBodyResultObject[];
  /**
   * @example
   * 1
   */
  totalItem?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'string',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': ListTaskGroupResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

