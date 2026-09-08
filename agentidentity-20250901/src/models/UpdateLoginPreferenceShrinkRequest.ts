// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginPreferenceShrinkRequest extends $dara.Model {
  allowedPostLogoutRedirectUrisShrink?: string;
  loginPreferenceShrink?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPostLogoutRedirectUrisShrink: 'AllowedPostLogoutRedirectUris',
      loginPreferenceShrink: 'LoginPreference',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPostLogoutRedirectUrisShrink: 'string',
      loginPreferenceShrink: 'string',
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

