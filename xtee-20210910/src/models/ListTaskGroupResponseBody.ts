// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskGroupResponseBodyResultObjectSubTaskList extends $dara.Model {
  /**
   * @remarks
   * Job end time.
   * 
   * @example
   * 2026-01-12 15:47:23
   */
  finishTime?: number;
  /**
   * @remarks
   * Group name.
   * 
   * @example
   * pts-demo
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether to hide.
   * 
   * @example
   * true
   */
  hideViewResultButton?: boolean;
  /**
   * @remarks
   * Indicates whether the subtask is charged.
   * 
   * @example
   * true
   */
  isCharge?: boolean;
  /**
   * @remarks
   * Model scenario.
   * 
   * @example
   * rfs
   */
  modelScene?: string;
  /**
   * @remarks
   * Sample ID.
   * 
   * @example
   * 4
   */
  sampleId?: number;
  /**
   * @remarks
   * Sample name.
   * 
   * @example
   * fs
   */
  sampleName?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * anti_fraud_riskscreening
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * 申请反欺诈V5（分值版）
   */
  serviceName?: string;
  /**
   * @remarks
   * Subtask ID.
   * 
   * @example
   * 3
   */
  subTaskId?: number;
  /**
   * @remarks
   * Indicates whether the job can be canceled. Valid values:  
   * - true: The job can be canceled.  
   * - false: The job cannot be canceled.
   * 
   * @example
   * true
   */
  supportCancel?: boolean;
  /**
   * @remarks
   * Supports download.
   * 
   * @example
   * true
   */
  supportDownload?: boolean;
  /**
   * @remarks
   * Indicates whether merge download is supported.
   * 
   * @example
   * false
   */
  supportMergeSelect?: boolean;
  /**
   * @remarks
   * Indicates whether viewing is supported.
   * 
   * @example
   * true
   */
  supportView?: boolean;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * Task group ID.
   * 
   * @example
   * 4
   */
  taskGroupId?: number;
  /**
   * @remarks
   * The execution status of the import job:  
   * - DOING: running  
   * - FINISH: execution completed.
   * 
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
   * @remarks
   * Creation Time.
   * 
   * @example
   * 1588820785212
   */
  createTime?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 324253
   */
  creatorUserId?: number;
  /**
   * @remarks
   * Audience group status.
   * 
   * @example
   * RUNNING
   */
  groupStatus?: string;
  /**
   * @remarks
   * Task group name.
   */
  sampleNames?: string[];
  /**
   * @remarks
   * Number of subtasks parsed and split from the task.
   * 
   * @example
   * 4
   */
  subTaskCount?: number;
  /**
   * @remarks
   * Subtask.
   */
  subTaskList?: ListTaskGroupResponseBodyResultObjectSubTaskList[];
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * Task group ID.
   * 
   * @example
   * g-uf62fwvw2f8dx88xo2lt
   */
  taskGroupId?: number;
  /**
   * @remarks
   * Task group name.
   * 
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
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Request result.
   */
  resultObject?: ListTaskGroupResponseBodyResultObject[];
  /**
   * @remarks
   * Total number of returned items.
   * 
   * @example
   * 1
   */
  totalItem?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
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

