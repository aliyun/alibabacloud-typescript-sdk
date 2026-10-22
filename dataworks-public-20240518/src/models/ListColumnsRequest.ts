// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The comment on the column. Fuzzy match is supported.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to return extended properties. If you set this parameter to `true`, extended properties are returned. If you set this parameter to `false`, extended properties are not returned.
   * 
   * @example
   * true
   */
  includeExtendedProperties?: boolean;
  /**
   * @remarks
   * The name of the column. Fuzzy match is supported.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * - Asc: Ascending order.
   * - Desc: Descending order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: Position. Valid values:
   * - Name: Name.
   * - Position: Position.
   * 
   * @example
   * Position
   */
  sortBy?: string;
  /**
   * @remarks
   * The table ID. You can obtain the ID from the response of the ListTables operation. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
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
      includeExtendedProperties: 'IncludeExtendedProperties',
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
      includeExtendedProperties: 'boolean',
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

