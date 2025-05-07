// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossBackupMetaListResponseBodyItemsMeta extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb1
   */
  database?: string;
  /**
   * @remarks
   * The size of the table. Unit: KB. If the database contains more than one table, the names of these tables are separated by commas (,).
   * 
   * @example
   * 1000
   */
  size?: string;
  /**
   * @remarks
   * An array that consists of the names of the tables that the database contains. If the database contains more than one table, the names of these tables are separated by commas (,).
   * 
   * @example
   * test1,test2
   */
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      size: 'Size',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      size: 'string',
      tables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

