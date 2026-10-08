// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database names, in the format of "db1,db2".
   * 
   * @example
   * db1,db2
   */
  databaseNames?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08A3B71B-FE08-xxxx-974F-CC7EA6DBxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNames: 'DatabaseNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNames: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

