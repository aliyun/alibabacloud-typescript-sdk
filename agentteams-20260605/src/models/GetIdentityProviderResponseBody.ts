// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyData extends $dara.Model {
  eventSubscriptionCallbackUrl?: string;
  identityProviderType?: string;
  idpMetadata?: { [key: string]: string };
  instanceId?: string;
  loginCallbackUrl?: string;
  loginEnabled?: boolean;
  status?: string;
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
  code?: string;
  data?: GetIdentityProviderResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

