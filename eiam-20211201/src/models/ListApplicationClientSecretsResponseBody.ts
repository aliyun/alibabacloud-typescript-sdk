// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationClientSecretsResponseBodyApplicationClientSecrets extends $dara.Model {
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
   * The client secret of the application. The returned ClientSecret is masked.
   * 
   * @example
   * eyJh*****************************************************************************************************OQ
   */
  clientSecret?: string;
  /**
   * @remarks
   * The expiration time of the client secret. This is a UNIX timestamp in milliseconds.
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
   * idaas_wdziy4vnjt33ehhf7z2o2nxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The last time the client secret was used. This is a UNIX timestamp in milliseconds.
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
   * - enabled: The client secret is enabled.
   * 
   * - disabled: The client secret is disabled.
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

export class ListApplicationClientSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the client secrets.
   */
  applicationClientSecrets?: ListApplicationClientSecretsResponseBodyApplicationClientSecrets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecrets: 'ApplicationClientSecrets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecrets: { 'type': 'array', 'itemType': ListApplicationClientSecretsResponseBodyApplicationClientSecrets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationClientSecrets)) {
      $dara.Model.validateArray(this.applicationClientSecrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

