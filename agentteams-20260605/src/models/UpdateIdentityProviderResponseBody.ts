// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The binding ID.
   * 
   * @example
   * binding-xxx
   */
  bindingId?: number;
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
   * The instance ID.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
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
   * Indicates whether synchronization is enabled.
   * 
   * @example
   * false
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindingId: 'BindingId',
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
      loginEnabled: 'LoginEnabled',
      syncEnabled: 'SyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingId: 'number',
      identityProviderType: 'string',
      instanceId: 'string',
      loginEnabled: 'boolean',
      syncEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderResponseBody extends $dara.Model {
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
   * The response data.
   * 
   * @example
   * {}
   */
  data?: UpdateIdentityProviderResponseBodyData;
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
      data: UpdateIdentityProviderResponseBodyData,
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

