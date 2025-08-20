// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkBatchSQL } from "./SparkBatchSql";


export class ListSparkWarehouseBatchSQLResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried Spark SQL statements.
   */
  queries?: SparkBatchSQL[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queries: 'Queries',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queries: { 'type': 'array', 'itemType': SparkBatchSQL },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkWarehouseBatchSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkWarehouseBatchSQLResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSparkWarehouseBatchSQLResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

