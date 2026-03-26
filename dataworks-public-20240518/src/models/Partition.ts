// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1700192563000
   */
  createTime?: number;
  /**
   * @remarks
   * The storage size of the partition. Unit: bytes.
   * 
   * @example
   * 4096
   */
  dataSize?: number;
  /**
   * @remarks
   * The modification time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1700192563000
   */
  modifyTime?: number;
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
   * The number of records in the partition.
   * 
   * @example
   * 1000000
   */
  recordCount?: number;
  /**
   * @remarks
   * The ID of the table to which the partition belongs. You can configure this parameter by referring to the `Table` topic.
   * 
   * @example
   * maxcompute-table:accountId::project::table
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

