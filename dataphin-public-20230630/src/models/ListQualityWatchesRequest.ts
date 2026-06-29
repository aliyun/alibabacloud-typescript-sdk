// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityWatchesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The business unit names.
   */
  bizUnitNameList?: string[];
  /**
   * @remarks
   * Specifies whether to query only monitored objects owned by the current user.
   */
  currentUserOwned?: boolean;
  /**
   * @remarks
   * The data source IDs.
   */
  dataSourceIdList?: number[];
  /**
   * @remarks
   * The data source owners.
   */
  dataSourceOwnerList?: string[];
  /**
   * @remarks
   * The data source scope. Valid values:
   * - STREAMING: real-time only
   * - OFFLINE: offline only
   * - ALL: real-time and offline.
   */
  dataSourceScopeList?: string[];
  /**
   * @remarks
   * The data source type, such as MAX_COMPUTE, HADOOP, or MYSQL.
   */
  dataSourceTypeList?: string[];
  /**
   * @remarks
   * The metric computation type. Valid values:
   * - AUTO: automated coding
   * - CUSTOM: expert coding
   * - MOUNT: external table registration
   * - COMBINE: derived metric specific.
   */
  indexComputeTypeList?: string[];
  /**
   * @remarks
   * The metric owners.
   */
  indexOwnerList?: string[];
  /**
   * @remarks
   * The search keyword. This is the name of the monitored table.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - NOT_RUN: not executed
   * - WAITING: waiting
   * - RUNNING: executing
   * - SUCCESS: executed successfully
   * - FAILED: execution failed
   * - CANCEL: canceled
   * - TIMEOUT: timed out
   * - OFFLINE: offline.
   */
  latestWatchTaskStatusList?: string[];
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
   * The number of records per page. Default value: 20.
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
   * The status of the monitored object. Valid values:
   * - ENABLE: enabled
   * - DISABLE: disabled.
   */
  statusList?: string[];
  /**
   * @remarks
   * The table owners.
   */
  tableOwnerList?: string[];
  /**
   * @remarks
   * The table type. Valid values:
   * - LOGIC_DIM_TABLE: logical dimension table
   * - LOGIC_FACT_TABLE: logical fact table
   * - LOGIC_SUM_TABLE: logical aggregate table
   * - LOGIC_LABEL_TABLE: logical label table
   * - PHYSICAL_TABLE: physical table
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   */
  tableTypeList?: string[];
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - TABLE: Dataphin table
   * - DATASOURCE_TABLE: full-domain table
   * - DATASOURCE: data source
   * - INDEX: metric
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   */
  watchTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizUnitNameList: 'BizUnitNameList',
      currentUserOwned: 'CurrentUserOwned',
      dataSourceIdList: 'DataSourceIdList',
      dataSourceOwnerList: 'DataSourceOwnerList',
      dataSourceScopeList: 'DataSourceScopeList',
      dataSourceTypeList: 'DataSourceTypeList',
      indexComputeTypeList: 'IndexComputeTypeList',
      indexOwnerList: 'IndexOwnerList',
      keyword: 'Keyword',
      latestWatchTaskStatusList: 'LatestWatchTaskStatusList',
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
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      currentUserOwned: 'boolean',
      dataSourceIdList: { 'type': 'array', 'itemType': 'number' },
      dataSourceOwnerList: { 'type': 'array', 'itemType': 'string' },
      dataSourceScopeList: { 'type': 'array', 'itemType': 'string' },
      dataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      indexComputeTypeList: { 'type': 'array', 'itemType': 'string' },
      indexOwnerList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      latestWatchTaskStatusList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.indexComputeTypeList)) {
      $dara.Model.validateArray(this.indexComputeTypeList);
    }
    if(Array.isArray(this.indexOwnerList)) {
      $dara.Model.validateArray(this.indexOwnerList);
    }
    if(Array.isArray(this.latestWatchTaskStatusList)) {
      $dara.Model.validateArray(this.latestWatchTaskStatusList);
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

export class ListQualityWatchesRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query conditions.
   */
  listQuery?: ListQualityWatchesRequestListQuery;
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
      listQuery: ListQualityWatchesRequestListQuery,
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

