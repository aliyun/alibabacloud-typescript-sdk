// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList extends $dara.Model {
  /**
   * @example
   * sms_pre
   */
  database?: string;
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

