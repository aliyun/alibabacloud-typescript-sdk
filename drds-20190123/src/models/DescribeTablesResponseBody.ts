// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether full table scanning is allowed.
   * 
   * @example
   * false
   */
  allowFullTableScan?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a replicated table.
   * 
   * @example
   * false
   */
  broadcast?: boolean;
  /**
   * @remarks
   * The type of the PolarDB-X 1.0 instance. Valid values:
   * 
   * *   0: The instance is a dedicated instance.
   * *   1: The instance is a shard instance.
   * 
   * @example
   * 0
   */
  dbInstType?: number;
  /**
   * @remarks
   * Indicates whether the table is locked.
   * 
   * @example
   * false
   */
  isLocked?: boolean;
  /**
   * @remarks
   * Indicates whether the table is sharded.
   * 
   * @example
   * false
   */
  isShard?: boolean;
  /**
   * @remarks
   * The shard key of the table.
   * 
   * @example
   * null
   */
  shardKey?: string;
  /**
   * @remarks
   * Indicates whether sharding tasks are performed on the table. Valid values:
   * 
   * *   0: No sharding task is performed on the table.
   * *   1: Sharding tasks are performed on the table.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      broadcast: 'Broadcast',
      dbInstType: 'DbInstType',
      isLocked: 'IsLocked',
      isShard: 'IsShard',
      shardKey: 'ShardKey',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
      broadcast: 'boolean',
      dbInstType: 'number',
      isLocked: 'boolean',
      isShard: 'boolean',
      shardKey: 'string',
      status: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned tables.
   */
  list?: DescribeTablesResponseBodyList[];
  /**
   * @remarks
   * The number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tables returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 83AC3D7E-461C-4D87-8ACD-6CC295******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned tables.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTablesResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

