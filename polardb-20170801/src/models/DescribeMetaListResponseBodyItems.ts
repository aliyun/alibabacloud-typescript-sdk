// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database that can be restored.
   * 
   * @example
   * test_db
   */
  database?: string;
  /**
   * @remarks
   * The name of the table that can be restored.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

