// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityWatchByObjectIdResponseBodyQualityWatchInfoDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - PROD
   * - DEV.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The datasource name.
   * 
   * @example
   * 1
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The datasource type. Valid values:
   * - MAX_COMPUTE
   * - HADOOP.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      env: 'Env',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      env: 'string',
      id: 'string',
      modifyTime: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityWatchByObjectIdResponseBodyQualityWatchInfoIndexInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 1121
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The metric catalog.
   * 
   * @example
   * test
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the cell aggregate table.
   * 
   * @example
   * dws_all
   */
  cellSumLogicTableName?: string;
  /**
   * @remarks
   * The computation type of the metric. Valid values:
   * - AUTO
   * - CUSTOM
   * - MOUNT
   * - COMBINE.
   * 
   * @example
   * AUTO
   */
  computeType?: string;
  /**
   * @remarks
   * The data type of the metric.
   * 
   * @example
   * bigint
   */
  dateType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the metric.
   * 
   * @example
   * logic
   */
  displayName?: string;
  /**
   * @remarks
   * The display name of the statistical granularity.
   * 
   * @example
   * 全站汇总表
   */
  granularityDisplayName?: string;
  /**
   * @remarks
   * The statistical granularity ID.
   * 
   * @example
   * 18755764
   */
  granularityId?: number;
  /**
   * @remarks
   * The metric GUID.
   * 
   * @example
   * 1121
   */
  guid?: string;
  /**
   * @remarks
   * The metric ID.
   * 
   * @example
   * 11
   */
  id?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * logic
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1121
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * - INDEX.
   * 
   * @example
   * INDEX
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      catalog: 'Catalog',
      cellSumLogicTableName: 'CellSumLogicTableName',
      computeType: 'ComputeType',
      dateType: 'DateType',
      description: 'Description',
      displayName: 'DisplayName',
      granularityDisplayName: 'GranularityDisplayName',
      granularityId: 'GranularityId',
      guid: 'Guid',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      bizUnitName: 'string',
      catalog: 'string',
      cellSumLogicTableName: 'string',
      computeType: 'string',
      dateType: 'string',
      description: 'string',
      displayName: 'string',
      granularityDisplayName: 'string',
      granularityId: 'number',
      guid: 'string',
      id: 'string',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      projectId: 'number',
      projectName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityWatchByObjectIdResponseBodyQualityWatchInfoTableInfo extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 1121
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The table catalog.
   * 
   * @example
   * test
   */
  catalog?: string;
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * 22
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The datasource type.
   * 
   * @example
   * MAX_COMPUTE
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV
   * - PROD.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * test
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1121
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - LOGIC_DIM_TABLE: logical dimension table.
   * - LOGIC_FACT_TABLE: logical fact table.
   * - LOGIC_SUM_TABLE: logical aggregate table.
   * - LOGIC_LABEL_TABLE: logical label table.
   * - PHYSICAL_TABLE: physical table.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   * 
   * @example
   * LOGIC_DIM_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      catalog: 'Catalog',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      env: 'Env',
      id: 'Id',
      isPartitionTable: 'IsPartitionTable',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      bizUnitName: 'string',
      catalog: 'string',
      dataSourceId: 'string',
      dataSourceType: 'string',
      description: 'string',
      env: 'string',
      id: 'string',
      isPartitionTable: 'boolean',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      projectId: 'number',
      projectName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityWatchByObjectIdResponseBodyQualityWatchInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @remarks
   * The datasource details.
   */
  dataSourceInfo?: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoDataSourceInfo;
  /**
   * @remarks
   * The number of enabled rules.
   * 
   * @example
   * 1
   */
  enabledRuleCount?: number;
  /**
   * @remarks
   * The monitoring ID.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The metric details.
   */
  indexInfo?: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoIndexInfo;
  /**
   * @remarks
   * The ID of the most recent quality watchtask for the monitored object.
   * 
   * @example
   * 1
   */
  latestWatchTaskId?: number;
  /**
   * @remarks
   * The status of the most recent quality watchtask for the monitored object.
   * 
   * @example
   * SUCCESS
   */
  latestWatchTaskStatus?: string;
  /**
   * @remarks
   * The user ID of the last modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The monitoring name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the quality owner.
   * 
   * @example
   * 30012011
   */
  qualityOwner?: string;
  /**
   * @remarks
   * The display name of the quality owner.
   * 
   * @example
   * test
   */
  qualityOwnerName?: string;
  /**
   * @remarks
   * The number of rules.
   * 
   * @example
   * 11
   */
  ruleCount?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - ENABLE
   * - DISABLE.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The monitored table object.
   */
  tableInfo?: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoTableInfo;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - TABLE: Dataphin table.
   * - DATASOURCE_TABLE: global table.
   * - DATASOURCE: datasource.
   * - INDEX: metric.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataSourceInfo: 'DataSourceInfo',
      enabledRuleCount: 'EnabledRuleCount',
      id: 'Id',
      indexInfo: 'IndexInfo',
      latestWatchTaskId: 'LatestWatchTaskId',
      latestWatchTaskStatus: 'LatestWatchTaskStatus',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
      name: 'Name',
      qualityOwner: 'QualityOwner',
      qualityOwnerName: 'QualityOwnerName',
      ruleCount: 'RuleCount',
      status: 'Status',
      tableInfo: 'TableInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      creatorName: 'string',
      dataSourceInfo: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoDataSourceInfo,
      enabledRuleCount: 'number',
      id: 'number',
      indexInfo: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoIndexInfo,
      latestWatchTaskId: 'number',
      latestWatchTaskStatus: 'string',
      modifier: 'string',
      modifyTime: 'string',
      name: 'string',
      qualityOwner: 'string',
      qualityOwnerName: 'string',
      ruleCount: 'number',
      status: 'string',
      tableInfo: GetQualityWatchByObjectIdResponseBodyQualityWatchInfoTableInfo,
      type: 'string',
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.indexInfo && typeof (this.indexInfo as any).validate === 'function') {
      (this.indexInfo as any).validate();
    }
    if(this.tableInfo && typeof (this.tableInfo as any).validate === 'function') {
      (this.tableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityWatchByObjectIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error details from the backend.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The details of the monitored object.
   */
  qualityWatchInfo?: GetQualityWatchByObjectIdResponseBodyQualityWatchInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      qualityWatchInfo: 'QualityWatchInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityWatchInfo: GetQualityWatchByObjectIdResponseBodyQualityWatchInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityWatchInfo && typeof (this.qualityWatchInfo as any).validate === 'function') {
      (this.qualityWatchInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

