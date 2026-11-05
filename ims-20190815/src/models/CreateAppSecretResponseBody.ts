// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppSecretResponseBodyAppSecret extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The application secret ID.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  /**
   * @remarks
   * The application secret content. This value can be used as the client secret for OAuth.
   * 
   * @example
   * ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****
   */
  appSecretValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-26T02:52:31Z.
   * 
   * @example
   * 2020-10-26T02:52:31Z
   */
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
  /**
   * @remarks
   * The application secret information.
   */
  appSecret?: CreateAppSecretResponseBodyAppSecret;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE46FC3C-3BDE-4771-B531-27B7B6EB533D
   */
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

