// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountCredentialDTO extends $dara.Model {
  accountId?: string;
  callerIdentity?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      callerIdentity: 'callerIdentity',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      callerIdentity: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

