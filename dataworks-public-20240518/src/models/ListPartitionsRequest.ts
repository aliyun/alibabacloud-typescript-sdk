// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionsRequest extends $dara.Model {
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default: Asc. Valid values:
   * 
   * *   Asc: Ascending order.
   * *   Desc: Descending order.
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
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Default value: CreateTime. Valid values:
   * 
   * *   CreateTime: Creation time. Supported only for MaxCompute tables.
   * *   ModifyTime: Modification time. Supported only for MaxCompute tables.
   * *   Name: Name. Used for HMS-type tables.
   * *   RecordCount: Record count. Supported only for MaxCompute tables.
   * *   DataSize: Storage size. Supported only for MaxCompute tables.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the data table.You can refer to the ListTables API response and [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
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

