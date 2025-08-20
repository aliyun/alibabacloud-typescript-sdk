// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvDetailModelBaseTableInfos extends $dara.Model {
  baseTableIsMv?: boolean;
  schemaName?: string;
  tableEngine?: string;
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
  baseTableInfos?: OpenStructMvDetailModelBaseTableInfos[];
  baseTableNames?: string[][];
  explicitHit?: number;
  firstRefreshTime?: string;
  implicitHit?: number;
  isInactive?: boolean;
  localSize?: number;
  queryRewriteEnabled?: boolean;
  refreshInterval?: string;
  refreshState?: string;
  remoteSize?: number;
  resourceGroup?: string;
  tableEngine?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      baseTableInfos: 'BaseTableInfos',
      baseTableNames: 'BaseTableNames',
      explicitHit: 'ExplicitHit',
      firstRefreshTime: 'FirstRefreshTime',
      implicitHit: 'ImplicitHit',
      isInactive: 'IsInactive',
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
      explicitHit: 'number',
      firstRefreshTime: 'string',
      implicitHit: 'number',
      isInactive: 'boolean',
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

