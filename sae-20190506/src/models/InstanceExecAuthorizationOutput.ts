// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceExecAuthorizationOutput extends $dara.Model {
  accessKeyId?: string;
  accountId?: string;
  authorization?: string;
  date?: string;
  endpoint?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accountId: 'accountId',
      authorization: 'authorization',
      date: 'date',
      endpoint: 'endpoint',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accountId: 'string',
      authorization: 'string',
      date: 'string',
      endpoint: 'string',
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

