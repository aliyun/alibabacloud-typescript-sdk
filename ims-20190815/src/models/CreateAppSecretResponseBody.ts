// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppSecretResponseBodyAppSecret extends $dara.Model {
  appId?: string;
  appSecretId?: string;
  appSecretValue?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      appSecretValue: 'AppSecretValue',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      appSecretValue: 'string',
      createDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponseBody extends $dara.Model {
  appSecret?: CreateAppSecretResponseBodyAppSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: CreateAppSecretResponseBodyAppSecret,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecret && typeof (this.appSecret as any).validate === 'function') {
      (this.appSecret as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

