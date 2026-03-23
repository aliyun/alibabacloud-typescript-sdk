// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupEncryptionResponseBody extends $dara.Model {
  DBInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

