// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event subscription callback URL.
   * 
   * @example
   * https://example.com/callback
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The identity provider type.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The identity provider metadata.
   * 
   * @example
   * {}
   */
  idpMetadata?: { [key: string]: string };
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon callback URL.
   * 
   * @example
   * https://example.com/login
   */
  loginCallbackUrl?: string;
  /**
   * @remarks
   * Indicates whether logon is enabled.
   * 
   * @example
   * true
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether synchronization is enabled.
   * 
   * @example
   * false
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      eventSubscriptionCallbackUrl: 'EventSubscriptionCallbackUrl',
      identityProviderType: 'IdentityProviderType',
      idpMetadata: 'IdpMetadata',
      instanceId: 'InstanceId',
      loginCallbackUrl: 'LoginCallbackUrl',
      loginEnabled: 'LoginEnabled',
      status: 'Status',
      syncEnabled: 'SyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSubscriptionCallbackUrl: 'string',
      identityProviderType: 'string',
      idpMetadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      instanceId: 'string',
      loginCallbackUrl: 'string',
      loginEnabled: 'boolean',
      status: 'string',
      syncEnabled: 'boolean',
    };
  }

  validate() {
    if(this.idpMetadata) {
      $dara.Model.validateMap(this.idpMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetIdentityProviderResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityProviderResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

