// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityWatchTasksRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The business date filter.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The business unit names.
   */
  bizUnitNameList?: string[];
  /**
   * @remarks
   * Specifies whether to query only the quality monitoring node objects owned by the current user.
   */
  currentUserOwned?: boolean;
  /**
   * @remarks
   * The data source IDs.
   */
  dataSourceIdList?: string[];
  /**
   * @remarks
   * The data source owners.
   */
  dataSourceOwnerList?: string[];
  /**
   * @remarks
   * The data source scopes. Valid values:
   * - STREAMING: real-time only.
   * - OFFLINE: offline only.
   * - ALL: real-time and offline.
   */
  dataSourceScopeList?: string[];
  /**
   * @remarks
   * The data source types, such as MAX_COMPUTE, HADOOP, and MYSQL.
   */
  dataSourceTypeList?: string[];
  /**
   * @remarks
   * The rule exception types. Valid values:
   * - STRONG: strong.
   * - WEAK: weak.
   */
  errorRuleStrengthList?: string[];
  /**
   * @remarks
   * The search keyword, which is the name of the monitored table.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project names.
   */
  projectNameList?: string[];
  /**
   * @remarks
   * The quality owners.
   */
  qualityOwnerList?: string[];
  /**
   * @remarks
   * The task statuses. Valid values:
   * - NOT_RUN: not executed.
   * - WAITING: waiting.
   * - RUNNING: running.
   * - SUCCESS: succeeded.
   * - FAILED: failed.
   * - CANCEL: canceled.
   * - TIMEOUT: timed out.
   * - OFFLINE: offline.
   */
  statusList?: string[];
  /**
   * @remarks
   * The table owners.
   */
  tableOwnerList?: string[];
  /**
   * @remarks
   * The table types. Valid values:
   * - LOGIC_DIM_TABLE: logical dimension table.
   * - LOGIC_FACT_TABLE: logical fact table.
   * - LOGIC_SUM_TABLE: logical aggregate table.
   * - LOGIC_LABEL_TABLE: logical label table.
   * - PHYSICAL_TABLE: physical table.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   */
  tableTypeList?: string[];
  /**
   * @remarks
   * The monitored object types. Valid values:
   * - TABLE: Dataphin table.
   * - DATASOURCE_TABLE: global table.
   * - DATASOURCE: data source.
   * - INDEX: metric.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   */
  watchTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      bizUnitNameList: 'BizUnitNameList',
      currentUserOwned: 'CurrentUserOwned',
      dataSourceIdList: 'DataSourceIdList',
      dataSourceOwnerList: 'DataSourceOwnerList',
      dataSourceScopeList: 'DataSourceScopeList',
      dataSourceTypeList: 'DataSourceTypeList',
      errorRuleStrengthList: 'ErrorRuleStrengthList',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectNameList: 'ProjectNameList',
      qualityOwnerList: 'QualityOwnerList',
      statusList: 'StatusList',
      tableOwnerList: 'TableOwnerList',
      tableTypeList: 'TableTypeList',
      watchTypeList: 'WatchTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      currentUserOwned: 'boolean',
      dataSourceIdList: { 'type': 'array', 'itemType': 'string' },
      dataSourceOwnerList: { 'type': 'array', 'itemType': 'string' },
      dataSourceScopeList: { 'type': 'array', 'itemType': 'string' },
      dataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      errorRuleStrengthList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectNameList: { 'type': 'array', 'itemType': 'string' },
      qualityOwnerList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      tableOwnerList: { 'type': 'array', 'itemType': 'string' },
      tableTypeList: { 'type': 'array', 'itemType': 'string' },
      watchTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitNameList)) {
      $dara.Model.validateArray(this.bizUnitNameList);
    }
    if(Array.isArray(this.dataSourceIdList)) {
      $dara.Model.validateArray(this.dataSourceIdList);
    }
    if(Array.isArray(this.dataSourceOwnerList)) {
      $dara.Model.validateArray(this.dataSourceOwnerList);
    }
    if(Array.isArray(this.dataSourceScopeList)) {
      $dara.Model.validateArray(this.dataSourceScopeList);
    }
    if(Array.isArray(this.dataSourceTypeList)) {
      $dara.Model.validateArray(this.dataSourceTypeList);
    }
    if(Array.isArray(this.errorRuleStrengthList)) {
      $dara.Model.validateArray(this.errorRuleStrengthList);
    }
    if(Array.isArray(this.projectNameList)) {
      $dara.Model.validateArray(this.projectNameList);
    }
    if(Array.isArray(this.qualityOwnerList)) {
      $dara.Model.validateArray(this.qualityOwnerList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    if(Array.isArray(this.tableOwnerList)) {
      $dara.Model.validateArray(this.tableOwnerList);
    }
    if(Array.isArray(this.tableTypeList)) {
      $dara.Model.validateArray(this.tableTypeList);
    }
    if(Array.isArray(this.watchTypeList)) {
      $dara.Model.validateArray(this.watchTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query conditions.
   */
  listQuery?: ListQualityWatchTasksRequestListQuery;
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
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListQualityWatchTasksRequestListQuery,
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

