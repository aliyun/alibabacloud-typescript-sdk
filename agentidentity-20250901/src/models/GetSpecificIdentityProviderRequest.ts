// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSpecificIdentityProviderRequest extends $dara.Model {
  identityProviderType?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'IdentityProviderType',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
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

