// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTDEResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test02
   */
  DBName?: string;
  /**
   * @remarks
   * The TDE status at the database level. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

