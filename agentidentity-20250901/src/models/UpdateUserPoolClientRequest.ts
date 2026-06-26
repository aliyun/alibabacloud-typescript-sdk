// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPoolClientRequest extends $dara.Model {
  accessTokenValidity?: string;
  clientName?: string;
  enforcePKCE?: boolean;
  redirectURIs?: string[];
  refreshTokenValidity?: string;
  secretRequired?: boolean;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      clientName: 'ClientName',
      enforcePKCE: 'EnforcePKCE',
      redirectURIs: 'RedirectURIs',
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
      redirectURIs: { 'type': 'array', 'itemType': 'string' },
      refreshTokenValidity: 'string',
      secretRequired: 'boolean',
      userPoolName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.redirectURIs)) {
      $dara.Model.validateArray(this.redirectURIs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

