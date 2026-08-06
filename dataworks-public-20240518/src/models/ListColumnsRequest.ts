// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Fuzzy match is supported.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to return extended properties. Set this parameter to `true` to return extended properties or `false` to not return them.
   * 
   * @example
   * true
   */
  includeExtendedProperties?: boolean;
  /**
   * @remarks
   * The name. Fuzzy match is supported.
   * 
   * @example
   * test_table
   */
  name?: string;
  /**
   * @remarks
   * The sort direction. Default value: Asc. Valid values:
   * - Asc: ascending order.
   * - Desc: descending order.
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
   * The page size. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Default value: Position. Valid values:
   * - Name: name.
   * - Position: position.
   * 
   * @example
   * Position
   */
  sortBy?: string;
  /**
   * @remarks
   * The table ID. You can obtain the ID from the response of the ListTables operation. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
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

