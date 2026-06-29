// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The node business type. Valid values:
   * - SCRIPT: script
   * - LOGICAL_TABLE: logical table.
   * 
   * This parameter is required.
   * 
   * @example
   * SCRIPT
   */
  nodeBizType?: string;
  /**
   * @remarks
   * The sub-business types. Valid values:
   * - MAX_COMPUTE_SQL
   * - HIVE_SQL
   * - SHELL
   * - PYTHON
   * - ONE_SERVICE_SQL
   * - DATABASE_SQL.
   * 
   * This parameter is required.
   */
  nodeSubBizTypeList?: string[];
  /**
   * @remarks
   * The user IDs of the owners.
   */
  ownerList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The node priorities. Valid values:
   * - HIGHEST
   * - HIGH
   * - MIDDLE
   * - LOW
   * - LOWEST.
   */
  priorityList?: string[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12111
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether scheduling is paused.
   * 
   * @example
   * true
   */
  schedulePaused?: boolean;
  /**
   * @remarks
   * The scheduling periods. Valid values:
   * - YEARLY
   * - MONTHLY
   * - WEEKLY
   * - DAILY
   * - HOURLY
   * - MINUTELY.
   */
  schedulePeriodList?: string[];
  /**
   * @remarks
   * The node scheduling type. Valid values:
   * - NORMAL: periodic scheduling
   * - SUPPLEMENT: data backfill
   * - MANUAL: manual scheduling.
   * 
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search by node name and exact search by node ID are supported.
   * 
   * @example
   * xx
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      nodeBizType: 'NodeBizType',
      nodeSubBizTypeList: 'NodeSubBizTypeList',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      nodeBizType: 'string',
      nodeSubBizTypeList: { 'type': 'array', 'itemType': 'string' },
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeSubBizTypeList)) {
      $dara.Model.validateArray(this.nodeSubBizTypeList);
    }
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.priorityList)) {
      $dara.Model.validateArray(this.priorityList);
    }
    if(Array.isArray(this.schedulePeriodList)) {
      $dara.Model.validateArray(this.schedulePeriodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListNodesRequestListQuery;
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
      listQuery: ListNodesRequestListQuery,
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

