// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvBaseTableDetailModel extends $dara.Model {
  /**
   * @remarks
   * The data volume.
   * 
   * @example
   * 321233
   */
  dataVolumn?: string;
  /**
   * @remarks
   * Indicates whether binary logging is enabled for the table.
   * 
   * @example
   * true
   */
  enableBinlog?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataVolumn: 'DataVolumn',
      enableBinlog: 'EnableBinlog',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVolumn: 'string',
      enableBinlog: 'boolean',
      schemaName: 'string',
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

