// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Business Type
   * 
   * - SCRIPT: Script Instance
   * - LOGICAL_TABLE: Logical Table
   * 
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @remarks
   * Business unit ID. Required when querying summary logical tables.
   * 
   * @example
   * 6232322111
   */
  bizUnitId?: number;
  /**
   * @remarks
   * Workflow ID
   * 
   * @example
   * 1021
   */
  flowId?: string;
  /**
   * @remarks
   * End business date and time. The time format must conform to the partition format specified by the business unit.
   * 
   * @example
   * 2024-05-31
   */
  maxBizDate?: string;
  /**
   * @remarks
   * Maximum instance run time
   * 
   * @example
   * 2024-05-31
   */
  maxRunDate?: string;
  /**
   * @remarks
   * Start business date and time. The time format must conform to the partition format specified by the business unit.
   * 
   * @example
   * 2024-05-30
   */
  minBizDate?: string;
  /**
   * @remarks
   * Minimum instance run time
   * 
   * @example
   * 2024-05-30
   */
  minRunDate?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * n_23131
   */
  nodeId?: string;
  /**
   * @remarks
   * Node Owner
   */
  ownerList?: string[];
  /**
   * @remarks
   * Page Number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Page Size
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Priority
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST
   */
  priorityList?: string[];
  /**
   * @remarks
   * Project ID
   * 
   * This parameter is required.
   * 
   * @example
   * 131311111321
   */
  projectId?: number;
  /**
   * @remarks
   * Running status
   * - INIT: Initialized
   * - WAIT_SUBMISSION: Waiting for Submission
   * - WAIT_SCHEDULE: Waiting for Schedule Time
   * - DISPATCH_BLOCKED: Throttled
   * - WAIT_RESOURCE: Waiting for Scheduling Resources
   * - RUNNING: Running
   * - SUCCESS: Succeeded
   * - FAILED: Failed
   */
  runStatusList?: string[];
  /**
   * @remarks
   * Whether scheduling is paused
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * Schedule Period
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * Instance schedule type
   * - NORMAL (Periodic Instance)
   * - MANUAL (Manual Instance)
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @remarks
   * Fuzzy match by node name or exact match by node ID
   * 
   * @example
   * xx
   */
  searchText?: string;
  /**
   * @remarks
   * Sub-business Type
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL
   */
  subBizTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizUnitId: 'BizUnitId',
      flowId: 'FlowId',
      maxBizDate: 'MaxBizDate',
      maxRunDate: 'MaxRunDate',
      minBizDate: 'MinBizDate',
      minRunDate: 'MinRunDate',
      nodeId: 'NodeId',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      runStatusList: 'RunStatusList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
      subBizTypeList: 'SubBizTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizUnitId: 'number',
      flowId: 'string',
      maxBizDate: 'string',
      maxRunDate: 'string',
      minBizDate: 'string',
      minRunDate: 'string',
      nodeId: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      runStatusList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
      subBizTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.runStatusList)) {
      $dara.Model.validateArray(this.runStatusList);
    }
    if(Array.isArray(this.schedulePeriodList)) {
      $dara.Model.validateArray(this.schedulePeriodList);
    }
    if(Array.isArray(this.subBizTypeList)) {
      $dara.Model.validateArray(this.subBizTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Environment identifier
   * - DEV: Development environment
   * - PROD (default): Production environment
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Query Request
   */
  listQuery?: ListInstancesRequestListQuery;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListInstancesRequestListQuery,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

