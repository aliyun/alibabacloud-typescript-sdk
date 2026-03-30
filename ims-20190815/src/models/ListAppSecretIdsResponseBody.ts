// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppSecretIdsResponseBodyAppSecretsAppSecret extends $dara.Model {
  appId?: string;
  appSecretId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
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

export class ListAppSecretIdsResponseBodyAppSecrets extends $dara.Model {
  appSecret?: ListAppSecretIdsResponseBodyAppSecretsAppSecret[];
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: { 'type': 'array', 'itemType': ListAppSecretIdsResponseBodyAppSecretsAppSecret },
    };
  }

  validate() {
    if(Array.isArray(this.appSecret)) {
      $dara.Model.validateArray(this.appSecret);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsResponseBody extends $dara.Model {
  appSecrets?: ListAppSecretIdsResponseBodyAppSecrets;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F2FD500-7173-47D6-BD2F-EB60879B4F16
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecrets: 'AppSecrets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecrets: ListAppSecretIdsResponseBodyAppSecrets,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecrets && typeof (this.appSecrets as any).validate === 'function') {
      (this.appSecrets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

