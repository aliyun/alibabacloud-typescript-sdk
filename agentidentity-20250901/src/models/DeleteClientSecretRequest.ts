// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientSecretRequest extends $dara.Model {
  clientId?: string;
  clientName?: string;
  clientSecretId?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientSecretId: 'ClientSecretId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      clientSecretId: 'string',
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

