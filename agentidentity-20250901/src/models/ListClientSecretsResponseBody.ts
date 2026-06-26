// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientSecretsResponseBodyClientSecrets extends $dara.Model {
  clientId?: string;
  clientName?: string;
  clientSecretId?: string;
  createTime?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientSecretId: 'ClientSecretId',
      createTime: 'CreateTime',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      clientSecretId: 'string',
      createTime: 'string',
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

export class ListClientSecretsResponseBody extends $dara.Model {
  clientSecrets?: ListClientSecretsResponseBodyClientSecrets[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientSecrets: 'ClientSecrets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecrets: { 'type': 'array', 'itemType': ListClientSecretsResponseBodyClientSecrets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientSecrets)) {
      $dara.Model.validateArray(this.clientSecrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

