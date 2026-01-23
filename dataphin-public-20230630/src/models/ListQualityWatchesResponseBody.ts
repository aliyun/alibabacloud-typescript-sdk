// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityWatchesResponseBodyPageResultQualityWatchListDataSourceInfo extends $dara.Model {
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 1
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  /**
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

export class ListQualityWatchesResponseBodyPageResultQualityWatchListIndexInfo extends $dara.Model {
  /**
   * @example
   * 1121
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  catalog?: string;
  /**
   * @example
   * dws_all
   */
  cellSumLogicTableName?: string;
  /**
   * @example
   * AUTO
   */
  computeType?: string;
  /**
   * @example
   * bigint
   */
  dateType?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * logic
   */
  displayName?: string;
  /**
   * @example
   * 全站汇总表
   */
  granularityDisplayName?: string;
  /**
   * @example
   * 18755764
   */
  granularityId?: number;
  /**
   * @example
   * 1121
   */
  guid?: string;
  /**
   * @example
   * 11
   */
  id?: string;
  /**
   * @example
   * logic
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @example
   * 1121
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
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

export class ListQualityWatchesResponseBodyPageResultQualityWatchListTableInfo extends $dara.Model {
  /**
   * @example
   * 1121
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  catalog?: string;
  /**
   * @example
   * 22
   */
  dataSourceId?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  dataSourceType?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * test
   */
  id?: string;
  isPartitionTable?: boolean;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @example
   * 1121
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
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

export class ListQualityWatchesResponseBodyPageResultQualityWatchList extends $dara.Model {
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  dataSourceInfo?: ListQualityWatchesResponseBodyPageResultQualityWatchListDataSourceInfo;
  /**
   * @example
   * 1
   */
  enabledRuleCount?: number;
  /**
   * @example
   * 11
   */
  id?: number;
  indexInfo?: ListQualityWatchesResponseBodyPageResultQualityWatchListIndexInfo;
  /**
   * @example
   * 1
   */
  latestWatchTaskId?: number;
  /**
   * @example
   * SUCCESS
   */
  latestWatchTaskStatus?: string;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 30012011
   */
  qualityOwner?: string;
  /**
   * @example
   * test
   */
  qualityOwnerName?: string;
  /**
   * @example
   * 11
   */
  ruleCount?: number;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  tableInfo?: ListQualityWatchesResponseBodyPageResultQualityWatchListTableInfo;
  /**
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
      dataSourceInfo: ListQualityWatchesResponseBodyPageResultQualityWatchListDataSourceInfo,
      enabledRuleCount: 'number',
      id: 'number',
      indexInfo: ListQualityWatchesResponseBodyPageResultQualityWatchListIndexInfo,
      latestWatchTaskId: 'number',
      latestWatchTaskStatus: 'string',
      modifier: 'string',
      modifyTime: 'string',
      name: 'string',
      qualityOwner: 'string',
      qualityOwnerName: 'string',
      ruleCount: 'number',
      status: 'string',
      tableInfo: ListQualityWatchesResponseBodyPageResultQualityWatchListTableInfo,
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

export class ListQualityWatchesResponseBodyPageResult extends $dara.Model {
  qualityWatchList?: ListQualityWatchesResponseBodyPageResultQualityWatchList[];
  /**
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      qualityWatchList: 'QualityWatchList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityWatchList: { 'type': 'array', 'itemType': ListQualityWatchesResponseBodyPageResultQualityWatchList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityWatchList)) {
      $dara.Model.validateArray(this.qualityWatchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListQualityWatchesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListQualityWatchesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

