// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableMeta extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * paimon
   */
  catalogName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * paimon-ods
   */
  databaseName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * order-table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      databaseName: 'databaseName',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      databaseName: 'string',
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

