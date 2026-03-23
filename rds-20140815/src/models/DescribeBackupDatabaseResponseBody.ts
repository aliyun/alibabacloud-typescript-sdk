// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDatabaseResponseBody extends $dara.Model {
  databaseNames?: string;
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

