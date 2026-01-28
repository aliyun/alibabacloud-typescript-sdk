// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationClientSecretResponseBodyApplicationClientSecret extends $dara.Model {
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the client key.
   */
  applicationClientSecret?: CreateApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecret: 'ApplicationClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecret: CreateApplicationClientSecretResponseBodyApplicationClientSecret,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationClientSecret && typeof (this.applicationClientSecret as any).validate === 'function') {
      (this.applicationClientSecret as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

