// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppSecretIdsResponseBodyAppSecretsAppSecret extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-26T03:18:39Z
   */
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
  /**
   * @remarks
   * The details of the application secret.
   */
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

