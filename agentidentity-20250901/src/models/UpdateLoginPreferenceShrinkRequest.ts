// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginPreferenceShrinkRequest extends $dara.Model {
  loginPreferenceShrink?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreferenceShrink: 'LoginPreference',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

