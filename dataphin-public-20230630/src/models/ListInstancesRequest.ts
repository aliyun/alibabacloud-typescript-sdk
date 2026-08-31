// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - SCRIPT: Script instance.
   * - LOGICAL_TABLE: Logical table.
   * 
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @remarks
   * The business unit ID. Required when querying aggregate logical tables.
   * 
   * @example
   * 6232322111
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 1021
   */
  flowId?: string;
  /**
   * @remarks
   * The end business date and time. The time format must match the partition format specified by the business unit.
   * 
   * @example
   * 2024-05-31
   */
  maxBizDate?: string;
  /**
   * @remarks
   * The maximum instance run time.
   * 
   * @example
   * 2024-05-31
   */
  maxRunDate?: string;
  /**
   * @remarks
   * The start business date and time. The time format must match the partition format specified by the business unit.
   * 
   * @example
   * 2024-05-30
   */
  minBizDate?: string;
  /**
   * @remarks
   * The minimum instance run time.
   * 
   * @example
   * 2024-05-30
   */
  minRunDate?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_23131
   */
  nodeId?: string;
  /**
   * @remarks
   * The node owners.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority. Valid values:
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST
   */
  priorityList?: string[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 131311111321
   */
  projectId?: number;
  /**
   * @remarks
   * The run status. Valid values:
   * - INIT: Init.
   * - WAIT_SUBMISSION: Waiting for submission.
   * - WAIT_SCHEDULE: Waiting for schedule time.
   * - DISPATCH_BLOCKED: Throttled.
   * - WAIT_RESOURCE: Waiting for schedule resource.
   * - RUNNING: Running.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   */
  runStatusList?: string[];
  /**
   * @remarks
   * Specifies whether scheduling is paused.
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * The scheduling period. Valid values:
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
   * The instance scheduling type. Valid values:
   * - NORMAL: Periodic instance.
   * - MANUAL: Manual instance.
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @remarks
   * Fuzzy match by node name or exact match by node ID.
   * 
   * @example
   * xx
   */
  searchText?: string;
  /**
   * @remarks
   * The sub-business type. Valid values:
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL
   */
  subBizTypeList?: string[];
  /**
   * @remarks
   * The node tag filter list. Each element is a numeric string of a node tag ID (such as "123"). Filters the instance list by node tags. If not specified or empty, no filtering is applied and all instances are returned. Multiple tags use OR logic. Invalid elements (non-numeric or overflow) are ignored.
   */
  tagList?: string[];
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
      tagList: 'TagList',
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
      tagList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
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
   * The environment identifier. Valid values:
   * - DEV: Development environment. 
   * - PROD (default): Production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The query request.
   */
  listQuery?: ListInstancesRequestListQuery;
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
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListInstancesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
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

