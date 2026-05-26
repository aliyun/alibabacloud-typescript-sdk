// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientSecretResponseBodyClientSecret extends $dara.Model {
  /**
   * @example
   * client_xxxxxxxxxxxxxxxxxxxx
   */
  clientId?: string;
  /**
   * @example
   * my-web-app
   */
  clientName?: string;
  /**
   * @example
   * secret_xxxxxxxxxxxxxxxxxxxx
   */
  clientSecretId?: string;
  /**
   * @example
   * xxxxxxxxxxxxxxxx
   */
  clientSecretValue?: string;
  /**
   * @example
   * 2026-05-07T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * my-agent-userpool
   */
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
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
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

