// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceNetTypeResponseBody extends $dara.Model {
  newConnectionString?: string;
  oldConnectionString?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newConnectionString: 'NewConnectionString',
      oldConnectionString: 'OldConnectionString',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newConnectionString: 'string',
      oldConnectionString: 'string',
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

