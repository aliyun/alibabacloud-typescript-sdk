// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityWatchRequestUpsertCommandDataSourceInfo extends $dara.Model {
  /**
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
   * @example
   * 1121
   */
  bizUnitId?: number;
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
   * 11
   */
  id?: string;
  /**
   * @example
   * test_idx_
   */
  name?: string;
  /**
   * @example
   * 1121
   */
  projectId?: number;
  /**
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
  dataSourceInfo?: UpsertQualityWatchRequestUpsertCommandDataSourceInfo;
  /**
   * @example
   * 1
   */
  id?: number;
  indexInfo?: UpsertQualityWatchRequestUpsertCommandIndexInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  qualityOwner?: string;
  tableInfo?: UpsertQualityWatchRequestUpsertCommandTableInfo;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

