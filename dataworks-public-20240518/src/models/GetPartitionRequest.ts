// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPartitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @remarks
   * The table ID. For more details, refer to the response of the ListTables operation and [description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
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
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

