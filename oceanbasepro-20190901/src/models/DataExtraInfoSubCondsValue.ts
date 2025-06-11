// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataExtraInfoSubCondsValue extends $dara.Model {
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  /**
   * @example
   * db_name
   */
  database?: string;
  /**
   * @example
   * dest_db
   */
  destDatabase?: string;
  /**
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @example
   * dest_name
   */
  destName?: string;
  /**
   * @example
   * id>1
   */
  whereClause?: string;
  filterColumns?: string[];
  shardColumns?: string[];
  /**
   * @example
   * null
   */
  logicTableId?: string;
  /**
   * @example
   * null
   */
  sourceEndpointId?: string;
  /**
   * @example
   * null
   */
  sourceClientId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantName: 'TenantName',
      database: 'Database',
      destDatabase: 'DestDatabase',
      tableName: 'TableName',
      destName: 'DestName',
      whereClause: 'WhereClause',
      filterColumns: 'FilterColumns',
      shardColumns: 'ShardColumns',
      logicTableId: 'LogicTableId',
      sourceEndpointId: 'SourceEndpointId',
      sourceClientId: 'SourceClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantName: 'string',
      database: 'string',
      destDatabase: 'string',
      tableName: 'string',
      destName: 'string',
      whereClause: 'string',
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      logicTableId: 'string',
      sourceEndpointId: 'string',
      sourceClientId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterColumns)) {
      $dara.Model.validateArray(this.filterColumns);
    }
    if(Array.isArray(this.shardColumns)) {
      $dara.Model.validateArray(this.shardColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

