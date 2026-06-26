// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPoolClientShrinkRequest extends $dara.Model {
  accessTokenValidity?: string;
  clientName?: string;
  enforcePKCE?: boolean;
  redirectURIsShrink?: string;
  refreshTokenValidity?: string;
  secretRequired?: boolean;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      clientName: 'ClientName',
      enforcePKCE: 'EnforcePKCE',
      redirectURIsShrink: 'RedirectURIs',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'string',
      clientName: 'string',
      enforcePKCE: 'boolean',
      redirectURIsShrink: 'string',
      refreshTokenValidity: 'string',
      secretRequired: 'boolean',
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

