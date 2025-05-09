// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Partition extends $dara.Model {
  /**
   * @example
   * 1700192563000
   */
  createTime?: number;
  /**
   * @example
   * 4096
   */
  dataSize?: number;
  /**
   * @example
   * 1700192563000
   */
  modifyTime?: number;
  /**
   * @example
   * ds=20250101
   */
  name?: string;
  /**
   * @example
   * 1000000
   */
  recordCount?: number;
  /**
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

