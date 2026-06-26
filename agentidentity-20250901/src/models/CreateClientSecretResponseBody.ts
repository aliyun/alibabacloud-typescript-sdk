// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientSecretResponseBodyClientSecret extends $dara.Model {
  clientId?: string;
  clientName?: string;
  clientSecretId?: string;
  clientSecretValue?: string;
  createTime?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientSecretId: 'ClientSecretId',
      clientSecretValue: 'ClientSecretValue',
      createTime: 'CreateTime',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientName: 'string',
      clientSecretId: 'string',
      clientSecretValue: 'string',
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

export class CreateClientSecretResponseBody extends $dara.Model {
  clientSecret?: CreateClientSecretResponseBodyClientSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientSecret: 'ClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecret: CreateClientSecretResponseBodyClientSecret,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clientSecret && typeof (this.clientSecret as any).validate === 'function') {
      (this.clientSecret as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

