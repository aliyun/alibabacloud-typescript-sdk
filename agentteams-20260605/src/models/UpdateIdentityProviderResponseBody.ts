// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderResponseBodyData extends $dara.Model {
  bindingId?: number;
  identityProviderType?: string;
  instanceId?: string;
  loginEnabled?: boolean;
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
  code?: string;
  data?: UpdateIdentityProviderResponseBodyData;
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

