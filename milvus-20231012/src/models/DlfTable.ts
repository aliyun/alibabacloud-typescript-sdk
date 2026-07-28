// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DlfTable extends $dara.Model {
  /**
   * @remarks
   * A description of the table.
   * 
   * @example
   * Test table
   */
  description?: string;
  /**
   * @remarks
   * The location of the table data, specified as an Object Storage Service (OSS) URI.
   * 
   * @example
   * oss://bucket/path
   */
  location?: string;
  /**
   * @remarks
   * The table format, such as `PAIMON`.
   * 
   * @example
   * PAIMON
   */
  tableFormat?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * my_table
   */
  tableName?: string;
  /**
   * @remarks
   * The table type. For example, `MANAGED` indicates that DLF manages the data and metadata lifecycle.
   * 
   * @example
   * MANAGED
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      location: 'location',
      tableFormat: 'tableFormat',
      tableName: 'tableName',
      tableType: 'tableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      location: 'string',
      tableFormat: 'string',
      tableName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

