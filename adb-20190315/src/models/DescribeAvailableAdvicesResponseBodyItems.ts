// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the suggestion was generated. The time follows the ISO 8601 standard in the yyyyMMdd format. The time is displayed in UTC.
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
   * *   **Index**: index optimization.
   * *   **Tiering**: hot and cold data optimization.
   * 
   * @example
   * Index
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
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * The name of the schema.
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
   * The total number of entries returned. Minimum value: 0. Default value: 0.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      adviceType: 'AdviceType',
      benefit: 'Benefit',
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

