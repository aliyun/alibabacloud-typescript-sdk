// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributeTableListResponseBodyDataTables extends $dara.Model {
  /**
   * @example
   * id
   */
  dbKey?: string;
  /**
   * @example
   * sbtest1
   */
  tableName?: string;
  /**
   * @example
   * multi
   */
  tableType?: string;
  /**
   * @example
   * “”
   */
  tbKey?: string;
  static names(): { [key: string]: string } {
    return {
      dbKey: 'DbKey',
      tableName: 'TableName',
      tableType: 'TableType',
      tbKey: 'TbKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbKey: 'string',
      tableName: 'string',
      tableType: 'string',
      tbKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

