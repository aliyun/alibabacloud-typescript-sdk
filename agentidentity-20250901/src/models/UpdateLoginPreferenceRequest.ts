// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginPreferenceRequestLoginPreference extends $dara.Model {
  enablePasswordLogin?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePasswordLogin: 'EnablePasswordLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePasswordLogin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginPreferenceRequest extends $dara.Model {
  loginPreference?: UpdateLoginPreferenceRequestLoginPreference;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreference: 'LoginPreference',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginPreference: UpdateLoginPreferenceRequestLoginPreference,
      userPoolName: 'string',
    };
  }

  validate() {
    if(this.loginPreference && typeof (this.loginPreference as any).validate === 'function') {
      (this.loginPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

