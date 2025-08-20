// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. The date is in the yyyyMMdd format.
   * 
   * @example
   * 20221124
   */
  adviceDate?: string;
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * dcd04135-0925-4aed-a5a7-e7d92cb1****
   */
  adviceId?: string;
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **INDEX**: index optimization.
   * *   **TIERING**: hot and cold data optimization.
   * 
   * @example
   * INDEX
   */
  adviceType?: string;
  /**
   * @remarks
   * The benefit of the suggestion.
   * 
   * @example
   * 0.4 GB of storage saved
   */
  benefit?: string;
  indexFields?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The reason why the suggestion was generated.
   * 
   * @example
   * Unused for 15 days, historical usage less than 1%
   */
  reason?: string;
  /**
   * @remarks
   * The SQL statement that is used to apply the suggestion.
   * 
   * @example
   * alter table `schema1`.`table1` drop key col1_1_idx
   */
  SQL?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10192
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      adviceType: 'AdviceType',
      benefit: 'Benefit',
      indexFields: 'IndexFields',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reason: 'Reason',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'string',
      adviceId: 'string',
      adviceType: 'string',
      benefit: 'string',
      indexFields: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reason: 'string',
      SQL: 'string',
      schemaName: 'string',
      tableName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableAdvicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried suggestions.
   */
  items?: DescribeAvailableAdvicesResponseBodyItems[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 96A55627-28E9-5E47-B8F6-D786BE551349
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the table in the DatabaseName.TableName format.
   */
  schemaTableNames?: string[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10192
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaTableNames: 'SchemaTableNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAvailableAdvicesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schemaTableNames: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.schemaTableNames)) {
      $dara.Model.validateArray(this.schemaTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

