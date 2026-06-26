// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSpecificIdentityProviderRequest extends $dara.Model {
  IDPMetadata?: string;
  identityProviderType?: string;
  SSOStatus?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      IDPMetadata: 'IDPMetadata',
      identityProviderType: 'IdentityProviderType',
      SSOStatus: 'SSOStatus',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IDPMetadata: 'string',
      identityProviderType: 'string',
      SSOStatus: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

