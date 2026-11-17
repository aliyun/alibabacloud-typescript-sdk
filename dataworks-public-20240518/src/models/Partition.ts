// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  /**
   * @remarks
   * The creation time (millisecond timestamp).
   * 
   * @example
   * 1700192563000
   */
  createTime?: number;
  /**
   * @remarks
   * The storage size of the partition, in bytes.
   * 
   * @example
   * 4096
   */
  dataSize?: number;
  /**
   * @remarks
   * The modification time (millisecond timestamp).
   * 
   * @example
   * 1700192563000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @remarks
   * The number of records in the partition.
   * 
   * @example
   * 1000000
   */
  recordCount?: number;
  /**
   * @remarks
   * The ID of the parent data table. Refer to the `Table` object.
   * 
   * @example
   * maxcompute-table:::project_name:[schema_name]:table_name
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      modifyTime: 'ModifyTime',
      name: 'Name',
      recordCount: 'RecordCount',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSize: 'number',
      modifyTime: 'number',
      name: 'string',
      recordCount: 'number',
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

