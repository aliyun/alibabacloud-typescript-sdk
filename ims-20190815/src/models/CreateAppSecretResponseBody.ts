// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppSecretResponseBodyAppSecret extends $dara.Model {
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
   * The content of the application secret. This value can be used as the client secret for open authorization (OAuth).
   * 
   * @example
   * ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****
   */
  appSecretValue?: string;
  /**
   * @remarks
   * The creation time.
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
   * The details of the application secret.
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

