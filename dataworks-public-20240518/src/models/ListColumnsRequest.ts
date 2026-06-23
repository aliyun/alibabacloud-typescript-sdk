// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The column comment. Supports fuzzy match.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * The column name. Supports fuzzy match.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default: Asc. Valid values:
   * 
   * - Asc
   * 
   * - Desc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Default: Position. Valid values:
   * 
   * - Name
   * 
   * - Position
   * 
   * @example
   * Position
   */
  sortBy?: string;
  /**
   * @remarks
   * The table ID. Call the ListTables operation or refer to [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html) to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

