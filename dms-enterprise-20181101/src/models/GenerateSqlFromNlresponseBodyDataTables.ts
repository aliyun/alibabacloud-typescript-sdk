// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlFromNLResponseBodyDataTables extends $dara.Model {
  /**
   * @example
   * ins_1.db1.table1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

