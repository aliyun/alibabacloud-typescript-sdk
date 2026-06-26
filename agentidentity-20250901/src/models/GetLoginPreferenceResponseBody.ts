// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginPreferenceResponseBodyLoginPreference extends $dara.Model {
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

export class GetLoginPreferenceResponseBodyPasswordPolicy extends $dara.Model {
  hardExpire?: boolean;
  maxLoginAttempts?: number;
  maxPasswordAge?: number;
  maxPasswordLength?: number;
  minPasswordLength?: number;
  passwordNotContainUserName?: boolean;
  requireLowerCaseChars?: boolean;
  requireNumbers?: boolean;
  requireSymbols?: boolean;
  requireUpperCaseChars?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttempts: 'MaxLoginAttempts',
      maxPasswordAge: 'MaxPasswordAge',
      maxPasswordLength: 'MaxPasswordLength',
      minPasswordLength: 'MinPasswordLength',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      requireLowerCaseChars: 'RequireLowerCaseChars',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUpperCaseChars: 'RequireUpperCaseChars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttempts: 'number',
      maxPasswordAge: 'number',
      maxPasswordLength: 'number',
      minPasswordLength: 'number',
      passwordNotContainUserName: 'boolean',
      requireLowerCaseChars: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUpperCaseChars: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPreferenceResponseBody extends $dara.Model {
  loginPreference?: GetLoginPreferenceResponseBodyLoginPreference;
  passwordPolicy?: GetLoginPreferenceResponseBodyPasswordPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreference: 'LoginPreference',
      passwordPolicy: 'PasswordPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginPreference: GetLoginPreferenceResponseBodyLoginPreference,
      passwordPolicy: GetLoginPreferenceResponseBodyPasswordPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginPreference && typeof (this.loginPreference as any).validate === 'function') {
      (this.loginPreference as any).validate();
    }
    if(this.passwordPolicy && typeof (this.passwordPolicy as any).validate === 'function') {
      (this.passwordPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

