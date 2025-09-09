// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBroadcastTablesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a table is a broadcast table.
   * 
   * @example
   * true
   */
  broadcast?: boolean;
  /**
   * @remarks
   * Indicates the type of the broadcast table. Valid values:
   * 
   * *   **1**: multi-write mode
   * *   **2**: synchronous mode
   * 
   * @example
   * 1
   */
  broadcastType?: string;
  /**
   * @remarks
   * Indicates the storage type of the database. Valid values:
   * 
   * *   **0**: RDS
   * *   **4**: PolarDB
   * 
   * @example
   * 0
   */
  dbInstType?: number;
  /**
   * @remarks
   * Indicates whether the broadcast table was sharded.
   * 
   * @example
   * false
   */
  isShard?: boolean;
  /**
   * @remarks
   * Indicates the activation state of the broadcast table. Valid values:
   * 
   * *   **1**: The broadcast table is activated.
   * *   **2**: The broadcast table is being activated.
   * *   **3**: An exception occurs when the broadcast table is being activated.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * nation
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      broadcast: 'Broadcast',
      broadcastType: 'BroadcastType',
      dbInstType: 'DbInstType',
      isShard: 'IsShard',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      broadcast: 'boolean',
      broadcastType: 'string',
      dbInstType: 'number',
      isShard: 'boolean',
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

export class DescribeBroadcastTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is sharded.
   * 
   * @example
   * true
   */
  isShard?: boolean;
  /**
   * @remarks
   * Indicates information about broadcast tables.
   */
  list?: DescribeBroadcastTablesResponseBodyList[];
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 40
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 86E420ED-43F2-4788-A58C-921849******
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
   * Indicates the total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      isShard: 'IsShard',
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
      isShard: 'boolean',
      list: { 'type': 'array', 'itemType': DescribeBroadcastTablesResponseBodyList },
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

