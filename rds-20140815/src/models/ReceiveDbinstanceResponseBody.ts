// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveDBInstanceResponseBody extends $dara.Model {
  guardDBInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      guardDBInstanceId: 'GuardDBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guardDBInstanceId: 'string',
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

