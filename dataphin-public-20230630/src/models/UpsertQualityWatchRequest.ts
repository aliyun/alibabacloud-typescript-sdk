// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityWatchRequestUpsertCommandDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchRequestUpsertCommandIndexInfo extends $dara.Model {
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
   * The cell aggregate table name.
   * 
   * @example
   * dws_all
   */
  cellSumLogicTableName?: string;
  /**
   * @remarks
   * The metric computation type. Valid values:
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
   * The metric data type.
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
   * The metric display name.
   * 
   * @example
   * logic
   */
  displayName?: string;
  /**
   * @remarks
   * The statistical granularity name.
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
   * test_idx_
   */
  name?: string;
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
      cellSumLogicTableName: 'CellSumLogicTableName',
      computeType: 'ComputeType',
      dateType: 'DateType',
      description: 'Description',
      displayName: 'DisplayName',
      granularityDisplayName: 'GranularityDisplayName',
      granularityId: 'GranularityId',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      cellSumLogicTableName: 'string',
      computeType: 'string',
      dateType: 'string',
      description: 'string',
      displayName: 'string',
      granularityDisplayName: 'string',
      granularityId: 'number',
      id: 'string',
      name: 'string',
      projectId: 'number',
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

export class UpsertQualityWatchRequestUpsertCommandTableInfo extends $dara.Model {
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * test
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The data source details.
   */
  dataSourceInfo?: UpsertQualityWatchRequestUpsertCommandDataSourceInfo;
  /**
   * @remarks
   * The monitored object ID. If this parameter is specified, the object is updated. If this parameter is not specified, a new object is created.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The monitoring metrics object.
   */
  indexInfo?: UpsertQualityWatchRequestUpsertCommandIndexInfo;
  /**
   * @remarks
   * The quality owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  qualityOwner?: string;
  /**
   * @remarks
   * The monitored table object.
   */
  tableInfo?: UpsertQualityWatchRequestUpsertCommandTableInfo;
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - TABLE: Dataphin table.
   * - DATASOURCE_TABLE: global table.
   * - DATASOURCE: data source.
   * - INDEX: metric.
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceInfo: 'DataSourceInfo',
      id: 'Id',
      indexInfo: 'IndexInfo',
      qualityOwner: 'QualityOwner',
      tableInfo: 'TableInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceInfo: UpsertQualityWatchRequestUpsertCommandDataSourceInfo,
      id: 'number',
      indexInfo: UpsertQualityWatchRequestUpsertCommandIndexInfo,
      qualityOwner: 'string',
      tableInfo: UpsertQualityWatchRequestUpsertCommandTableInfo,
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

export class UpsertQualityWatchRequest extends $dara.Model {
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
   * The update instruction.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityWatchRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      upsertCommand: UpsertQualityWatchRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

