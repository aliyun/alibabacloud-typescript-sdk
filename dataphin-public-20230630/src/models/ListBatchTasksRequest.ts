// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchTasksRequestBatchTaskQuery extends $dara.Model {
  conditionScheduleEnable?: boolean;
  /**
   * @example
   * 1785930337435
   */
  createBeginTime?: number;
  /**
   * @example
   * 1788608737435
   */
  createEndTime?: number;
  developOwnerList?: string[];
  directoryList?: string[];
  includeSubDirectory?: boolean;
  /**
   * @example
   * dwd_order
   */
  keyword?: string;
  lastSubmitStatusList?: string[];
  lockUserList?: string[];
  /**
   * @example
   * 1785930337435
   */
  modifiedBeginTime?: number;
  /**
   * @example
   * 1788608737435
   */
  modifiedEndTime?: number;
  nodeStatusList?: number[];
  opsOwnerList?: string[];
  outputTableNameList?: string[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7086194564164288
   */
  projectId?: number;
  published?: boolean;
  /**
   * @example
   * 7305621095333696
   */
  refCodeTemplateId?: string;
  scheduleIntervalTypeList?: string[];
  taskStatusList?: number[];
  taskTagList?: string[];
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
   * This parameter is required.
   */
  batchTaskQuery?: ListBatchTasksRequestBatchTaskQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
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

