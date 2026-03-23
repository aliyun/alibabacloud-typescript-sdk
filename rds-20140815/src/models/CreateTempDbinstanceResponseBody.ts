// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempDBInstanceResponseBody extends $dara.Model {
  requestId?: string;
  tempDBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tempDBInstanceId: 'TempDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tempDBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

