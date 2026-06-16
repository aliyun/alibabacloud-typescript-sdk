// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskGroupResponseBodyResultObjectSubTaskList extends $dara.Model {
  /**
   * @remarks
   * The reviewer.
   * 
   * @example
   * 303872
   */
  checker?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * model_test_enorl_202606040953+10.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The number of rows in the file.
   * 
   * @example
   * 12
   */
  fileRows?: string;
  /**
   * @remarks
   * The task end time.
   * 
   * @example
   * 2026-01-12 15:47:23
   */
  finishTime?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * pts-demo
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether the task is billed.
   * 
   * @example
   * true
   */
  isCharge?: string;
  /**
   * @remarks
   * The model scenario.
   * 
   * @example
   * rfs
   */
  modelScene?: string;
  /**
   * @remarks
   * The sample IDs.
   * 
   * @example
   * 4
   */
  sampleId?: string;
  /**
   * @remarks
   * The sample name.
   * 
   * @example
   * fs
   */
  sampleName?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * anti_fraud_customed
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 多头风险前筛
   */
  serviceName?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * 3
   */
  subTaskId?: number;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * The task group ID.
   * 
   * @example
   * 4
   */
  taskGroupId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 阿里多头_68629_20260115
   */
  taskName?: string;
  /**
   * @remarks
   * The execution status of the import task. Valid values:
   * - DOING: Running.
   * - FINISH: Completed.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checker: 'Checker',
      fileName: 'FileName',
      fileRows: 'FileRows',
      finishTime: 'FinishTime',
      groupName: 'GroupName',
      isCharge: 'IsCharge',
      modelScene: 'ModelScene',
      sampleId: 'SampleId',
      sampleName: 'SampleName',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      subTaskId: 'SubTaskId',
      tab: 'Tab',
      taskGroupId: 'TaskGroupId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checker: 'string',
      fileName: 'string',
      fileRows: 'string',
      finishTime: 'string',
      groupName: 'string',
      isCharge: 'string',
      modelScene: 'string',
      sampleId: 'string',
      sampleName: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      subTaskId: 'number',
      tab: 'string',
      taskGroupId: 'string',
      taskName: 'string',
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

export class CreateTaskGroupResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1750645267000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator user ID.
   * 
   * @example
   * 345298
   */
  creatorUserId?: number;
  /**
   * @remarks
   * The group status.
   * 
   * @example
   * RUNNING
   */
  groupStatus?: string;
  /**
   * @remarks
   * The task group name.
   */
  sampleNames?: string[];
  /**
   * @remarks
   * The number of subtasks generated from task parsing and splitting.
   * 
   * @example
   * 3
   */
  subTaskCount?: number;
  /**
   * @remarks
   * The subtask list.
   */
  subTaskList?: CreateTaskGroupResponseBodyResultObjectSubTaskList[];
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  /**
   * @remarks
   * The task group ID.
   * 
   * > This parameter is in invitational preview. When this parameter is used, other query conditions become invalid.
   * 
   * @example
   * g-0jlcreertd0p471l6f72
   */
  taskGroupId?: number;
  /**
   * @remarks
   * The task group name.
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
      subTaskList: { 'type': 'array', 'itemType': CreateTaskGroupResponseBodyResultObjectSubTaskList },
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

export class CreateTaskGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: CreateTaskGroupResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CreateTaskGroupResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

