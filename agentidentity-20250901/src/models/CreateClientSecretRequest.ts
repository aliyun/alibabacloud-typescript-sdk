// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientSecretRequest extends $dara.Model {
  clientId?: string;
  clientName?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

