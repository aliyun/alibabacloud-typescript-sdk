// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvDetailModelBaseTableInfos extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the base table is a materialized view.
   * 
   * @example
   * false
   */
  baseTableIsMv?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The table engine.
   * 
   * @example
   * XUANWU
   */
  tableEngine?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_tbl
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      baseTableIsMv: 'BaseTableIsMv',
      schemaName: 'SchemaName',
      tableEngine: 'TableEngine',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTableIsMv: 'boolean',
      schemaName: 'string',
      tableEngine: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenStructMvDetailModel extends $dara.Model {
  /**
   * @remarks
   * All direct parent base tables of the current materialized view.
   */
  baseTableInfos?: OpenStructMvDetailModelBaseTableInfos[];
  /**
   * @remarks
   * All direct parent base tables of the current materialized view.
   */
  baseTableNames?: string[][];
  /**
   * @remarks
   * Specifies whether to enable the refresh delay alert. Valid values:
   * 
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 0
   */
  enableDelayAlert?: number;
  /**
   * @remarks
   * Specifies whether to enable the refresh task failure alert. Valid values:
   * 
   * - 1: Yes.
   * - 0: No.
   * 
   * @example
   * 0
   */
  enableFailureAlert?: number;
  /**
   * @remarks
   * The total number of explicit query hits in the last 7 days.
   * 
   * @example
   * 5
   */
  explicitHit?: number;
  /**
   * @remarks
   * The time of the first refresh.
   * 
   * @example
   * 2025-01-01 09:00:00
   */
  firstRefreshTime?: string;
  /**
   * @remarks
   * The total number of implicit query hits in the last 7 days.
   * 
   * @example
   * 20
   */
  implicitHit?: number;
  /**
   * @remarks
   * Indicates whether the current materialized view has not been accessed (including explicit and implicit queries) for more than 30 days since its creation.
   * 
   * @example
   * false
   */
  isInactive?: boolean;
  /**
   * @remarks
   * The refresh delay tolerance, in minutes.
   * 
   * @example
   * 2
   */
  latencyTolerance?: number;
  /**
   * @remarks
   * The hot data disk space occupied by the materialized view, in bytes.
   * 
   * @example
   * 1234
   */
  localSize?: number;
  /**
   * @remarks
   * Specifies whether query rewrite is enabled for the current materialized view.
   * 
   * @example
   * false
   */
  queryRewriteEnabled?: boolean;
  /**
   * @remarks
   * The refresh interval.
   * 
   * @example
   * (now() + INTERVAL \"10\" SECOND)
   */
  refreshInterval?: string;
  /**
   * @remarks
   * The refresh model of the materialized view.
   * 
   * @example
   * FAST
   */
  refreshState?: string;
  /**
   * @remarks
   * The cold data disk space occupied by the materialized view, in bytes.
   * 
   * @example
   * 1234
   */
  remoteSize?: number;
  /**
   * @remarks
   * The resource group that the refresh depends on.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The table engine.
   * 
   * @example
   * XUANWU
   */
  tableEngine?: string;
  /**
   * @remarks
   * The time of the last refresh.
   * 
   * @example
   * 2025-01-01 10:00:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      baseTableInfos: 'BaseTableInfos',
      baseTableNames: 'BaseTableNames',
      enableDelayAlert: 'EnableDelayAlert',
      enableFailureAlert: 'EnableFailureAlert',
      explicitHit: 'ExplicitHit',
      firstRefreshTime: 'FirstRefreshTime',
      implicitHit: 'ImplicitHit',
      isInactive: 'IsInactive',
      latencyTolerance: 'LatencyTolerance',
      localSize: 'LocalSize',
      queryRewriteEnabled: 'QueryRewriteEnabled',
      refreshInterval: 'RefreshInterval',
      refreshState: 'RefreshState',
      remoteSize: 'RemoteSize',
      resourceGroup: 'ResourceGroup',
      tableEngine: 'TableEngine',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTableInfos: { 'type': 'array', 'itemType': OpenStructMvDetailModelBaseTableInfos },
      baseTableNames: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      enableDelayAlert: 'number',
      enableFailureAlert: 'number',
      explicitHit: 'number',
      firstRefreshTime: 'string',
      implicitHit: 'number',
      isInactive: 'boolean',
      latencyTolerance: 'number',
      localSize: 'number',
      queryRewriteEnabled: 'boolean',
      refreshInterval: 'string',
      refreshState: 'string',
      remoteSize: 'number',
      resourceGroup: 'string',
      tableEngine: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseTableInfos)) {
      $dara.Model.validateArray(this.baseTableInfos);
    }
    if(Array.isArray(this.baseTableNames)) {
      $dara.Model.validateArray(this.baseTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

