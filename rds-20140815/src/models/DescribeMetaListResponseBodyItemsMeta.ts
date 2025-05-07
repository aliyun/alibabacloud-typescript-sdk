// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListResponseBodyItemsMeta extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testdb1
   */
  database?: string;
  /**
   * @remarks
   * The table size. Unit: KB.
   * 
   * @example
   * 64
   */
  size?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test1
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

