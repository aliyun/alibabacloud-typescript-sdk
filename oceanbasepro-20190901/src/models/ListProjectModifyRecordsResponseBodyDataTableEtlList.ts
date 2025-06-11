// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectModifyRecordsResponseBodyDataTableEtlList extends $dara.Model {
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
   * dest_name
   */
  destName?: string;
  filterColumns?: string[];
  /**
   * @example
   * null
   */
  logicTableId?: string;
  shardColumns?: string[];
  /**
   * @example
   * null
   */
  sourceEndpointId?: string;
  /**
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  /**
   * @example
   * id>1
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      destDatabase: 'DestDatabase',
      destName: 'DestName',
      filterColumns: 'FilterColumns',
      logicTableId: 'LogicTableId',
      shardColumns: 'ShardColumns',
      sourceEndpointId: 'SourceEndpointId',
      tableName: 'TableName',
      tenantName: 'TenantName',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      destDatabase: 'string',
      destName: 'string',
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      logicTableId: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      sourceEndpointId: 'string',
      tableName: 'string',
      tenantName: 'string',
      whereClause: 'string',
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

