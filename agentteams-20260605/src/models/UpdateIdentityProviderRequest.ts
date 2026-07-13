// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  identityProviderType?: string;
  idpMetadata?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  loginEnabled?: boolean;
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      identityProviderType: 'IdentityProviderType',
      idpMetadata: 'IdpMetadata',
      instanceId: 'InstanceId',
      loginEnabled: 'LoginEnabled',
      syncEnabled: 'SyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identityProviderType: 'string',
      idpMetadata: 'string',
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

