// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateSecurityIPModeResponseBody extends $dara.Model {
  DBInstanceId?: string;
  requestId?: string;
  securityIPMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      securityIPMode: 'SecurityIPMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      securityIPMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

