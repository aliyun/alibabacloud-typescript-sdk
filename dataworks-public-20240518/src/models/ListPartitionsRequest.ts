// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionsRequest extends $dara.Model {
  /**
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * maxcompute-column:11075xxxx::test_project:test_schema:test_table
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
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

