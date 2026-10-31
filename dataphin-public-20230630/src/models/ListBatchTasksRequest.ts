// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchTasksRequestBatchTaskQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable conditional scheduling. If not specified, no filtering is applied.
   */
  conditionScheduleEnable?: boolean;
  /**
   * @remarks
   * The start time of the creation time range, in milliseconds. Must be specified together with CreateEndTime.
   * 
   * @example
   * 1785930337435
   */
  createBeginTime?: number;
  /**
   * @remarks
   * The end time of the creation time range, in milliseconds. Must be specified together with CreateBeginTime.
   * 
   * @example
   * 1788608737435
   */
  createEndTime?: number;
  /**
   * @remarks
   * The list of developer IDs. If multiple IDs are specified, the union is used. If empty or not specified, no filtering is applied.
   */
  developOwnerList?: string[];
  /**
   * @remarks
   * The list of task directories, such as ["/"]. If empty or not specified, no filtering is applied.
   */
  directoryList?: string[];
  /**
   * @remarks
   * Specifies whether to include tasks in the subdirectories of the directories specified in DirectoryList. Default value: false.
   */
  includeSubDirectory?: boolean;
  /**
   * @remarks
   * The search keyword for fuzzy matching by task name or node ID. If empty or not specified, no filtering is applied.
   * 
   * @example
   * dwd_order
   */
  keyword?: string;
  /**
   * @remarks
   * The list of recent submit statuses. Valid values: SUBMITTING, SUCCESS, FAILED, and WARNING. If empty or not specified, no filtering is applied.
   */
  lastSubmitStatusList?: string[];
  /**
   * @remarks
   * The list of locker IDs. If multiple IDs are specified, the union is used. If empty or not specified, no filtering by locker is applied.
   */
  lockUserList?: string[];
  /**
   * @remarks
   * The start time of the last modification time range, in milliseconds. Must be specified together with ModifiedEndTime.
   * 
   * @example
   * 1785930337435
   */
  modifiedBeginTime?: number;
  /**
   * @remarks
   * The end time of the last modification time range, in milliseconds. Must be specified together with ModifiedBeginTime.
   * 
   * @example
   * 1788608737435
   */
  modifiedEndTime?: number;
  /**
   * @remarks
   * The list of scheduling types. Valid values: 0 (Manual), 1 (Normal), 2 (Paused), and 3 (Dry run). If empty or not specified, no filtering is applied.
   */
  nodeStatusList?: number[];
  /**
   * @remarks
   * The list of O&M owner IDs. If multiple IDs are specified, the union is used. If empty or not specified, no filtering is applied.
   */
  opsOwnerList?: string[];
  /**
   * @remarks
   * The list of output table names for exact matching. If multiple table names are specified, the OR logical operator is used. If empty or not specified, no filtering is applied.
   */
  outputTableNameList?: string[];
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID. The query scope is limited to this project.
   * 
   * This parameter is required.
   * 
   * @example
   * 7086194564164288
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether the task is published to the production environment. If not specified, no filtering is applied.
   */
  published?: boolean;
  /**
   * @remarks
   * The ID of the referenced offline code template. If empty or not specified, no filtering is applied.
   * 
   * @example
   * 7305621095333696
   */
  refCodeTemplateId?: string;
  /**
   * @remarks
   * The list of scheduling intervals. Valid values: MINUTELY, HOURLY, DAILY, WEEKLY, and MONTHLY. If empty or not specified, no filtering is applied.
   */
  scheduleIntervalTypeList?: string[];
  /**
   * @remarks
   * The list of task statuses. Valid values: 0 (Draft), 1 (Submitting), 2 (Submitted), and 100 (In development). If empty or not specified, no filtering is applied.
   */
  taskStatusList?: number[];
  /**
   * @remarks
   * The list of task tag names. If empty or not specified, no filtering is applied.
   */
  taskTagList?: string[];
  /**
   * @remarks
   * The list of task type codes. If empty or not specified, no filtering is applied.
   */
  taskTypeList?: number[];
  static names(): { [key: string]: string } {
    return {
      conditionScheduleEnable: 'ConditionScheduleEnable',
      createBeginTime: 'CreateBeginTime',
      createEndTime: 'CreateEndTime',
      developOwnerList: 'DevelopOwnerList',
      directoryList: 'DirectoryList',
      includeSubDirectory: 'IncludeSubDirectory',
      keyword: 'Keyword',
      lastSubmitStatusList: 'LastSubmitStatusList',
      lockUserList: 'LockUserList',
      modifiedBeginTime: 'ModifiedBeginTime',
      modifiedEndTime: 'ModifiedEndTime',
      nodeStatusList: 'NodeStatusList',
      opsOwnerList: 'OpsOwnerList',
      outputTableNameList: 'OutputTableNameList',
      page: 'Page',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      published: 'Published',
      refCodeTemplateId: 'RefCodeTemplateId',
      scheduleIntervalTypeList: 'ScheduleIntervalTypeList',
      taskStatusList: 'TaskStatusList',
      taskTagList: 'TaskTagList',
      taskTypeList: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionScheduleEnable: 'boolean',
      createBeginTime: 'number',
      createEndTime: 'number',
      developOwnerList: { 'type': 'array', 'itemType': 'string' },
      directoryList: { 'type': 'array', 'itemType': 'string' },
      includeSubDirectory: 'boolean',
      keyword: 'string',
      lastSubmitStatusList: { 'type': 'array', 'itemType': 'string' },
      lockUserList: { 'type': 'array', 'itemType': 'string' },
      modifiedBeginTime: 'number',
      modifiedEndTime: 'number',
      nodeStatusList: { 'type': 'array', 'itemType': 'number' },
      opsOwnerList: { 'type': 'array', 'itemType': 'string' },
      outputTableNameList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      projectId: 'number',
      published: 'boolean',
      refCodeTemplateId: 'string',
      scheduleIntervalTypeList: { 'type': 'array', 'itemType': 'string' },
      taskStatusList: { 'type': 'array', 'itemType': 'number' },
      taskTagList: { 'type': 'array', 'itemType': 'string' },
      taskTypeList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.developOwnerList)) {
      $dara.Model.validateArray(this.developOwnerList);
    }
    if(Array.isArray(this.directoryList)) {
      $dara.Model.validateArray(this.directoryList);
    }
    if(Array.isArray(this.lastSubmitStatusList)) {
      $dara.Model.validateArray(this.lastSubmitStatusList);
    }
    if(Array.isArray(this.lockUserList)) {
      $dara.Model.validateArray(this.lockUserList);
    }
    if(Array.isArray(this.nodeStatusList)) {
      $dara.Model.validateArray(this.nodeStatusList);
    }
    if(Array.isArray(this.opsOwnerList)) {
      $dara.Model.validateArray(this.opsOwnerList);
    }
    if(Array.isArray(this.outputTableNameList)) {
      $dara.Model.validateArray(this.outputTableNameList);
    }
    if(Array.isArray(this.scheduleIntervalTypeList)) {
      $dara.Model.validateArray(this.scheduleIntervalTypeList);
    }
    if(Array.isArray(this.taskStatusList)) {
      $dara.Model.validateArray(this.taskStatusList);
    }
    if(Array.isArray(this.taskTagList)) {
      $dara.Model.validateArray(this.taskTagList);
    }
    if(Array.isArray(this.taskTypeList)) {
      $dara.Model.validateArray(this.taskTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The task query conditions.
   * 
   * This parameter is required.
   */
  batchTaskQuery?: ListBatchTasksRequestBatchTaskQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      batchTaskQuery: 'BatchTaskQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskQuery: ListBatchTasksRequestBatchTaskQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.batchTaskQuery && typeof (this.batchTaskQuery as any).validate === 'function') {
      (this.batchTaskQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

