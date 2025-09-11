// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 6
   */
  accessCount?: string;
  /**
   * @remarks
   * The ID of the cluster to which the table belongs.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  instanceName?: string;
  /**
   * @remarks
   * The date when the table was used.
   * 
   * @example
   * 2021-08-30
   */
  reportDate?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  /**
   * @remarks
   * The database to which the table belongs.
   * 
   * @example
   * tpch
   */
  tableSchema?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      instanceName: 'InstanceName',
      reportDate: 'ReportDate',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'string',
      instanceName: 'string',
      reportDate: 'string',
      tableName: 'string',
      tableSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the table usage.
   */
  items?: DescribeTableAccessCountResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C242707A-01D1-54DA-A5F6-671557******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeTableAccessCountResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

