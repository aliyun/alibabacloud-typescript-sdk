// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainApplicationClientSecretResponseBodyApplicationClientSecret extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
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
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The expiration time of the client secret. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1749830226000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The last time the client secret was used. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The client secret ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the client secret. Valid values:
   * 
   * - enabled: The secret is enabled.
   * 
   * - disabled: The secret is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      secretId: 'SecretId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      lastUsedTime: 'number',
      secretId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The secret information.
   */
  applicationClientSecret?: ObtainApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The request ID.
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
      applicationClientSecret: ObtainApplicationClientSecretResponseBodyApplicationClientSecret,
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

