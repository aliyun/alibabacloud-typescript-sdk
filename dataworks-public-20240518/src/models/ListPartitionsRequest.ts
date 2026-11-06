// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPartitionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the partition. Fuzzy match is supported. This parameter is valid only for MaxCompute tables.
   * 
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * 
   * 
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Default value: CreateTime. Valid values:
   * 
   * 
   * - CreateTime: the creation time. Only MaxCompute tables are supported.
   * - ModifyTime: the modification time. Only MaxCompute tables are supported.
   * - Name: the name. Used for HMS tables.
   * - RecordCount: the number of records. Only MaxCompute tables are supported.
   * - DataSize: the storage size. Only MaxCompute tables are supported.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the table. You can refer to the response of the ListTables API operation and [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
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

