// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CredentialPublicConfigRemoteConfig extends $dara.Model {
  timeout?: number;
  ttl?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      timeout: 'timeout',
      ttl: 'ttl',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeout: 'number',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialPublicConfigUsers extends $dara.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialPublicConfig extends $dara.Model {
  authConfig?: { [key: string]: string };
  authType?: string;
  headerKey?: string;
  provider?: string;
  remoteConfig?: CredentialPublicConfigRemoteConfig;
  users?: CredentialPublicConfigUsers[];
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      authType: 'authType',
      headerKey: 'headerKey',
      provider: 'provider',
      remoteConfig: 'remoteConfig',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authType: 'string',
      headerKey: 'string',
      provider: 'string',
      remoteConfig: CredentialPublicConfigRemoteConfig,
      users: { 'type': 'array', 'itemType': CredentialPublicConfigUsers },
    };
  }

  validate() {
    if(this.authConfig) {
      $dara.Model.validateMap(this.authConfig);
    }
    if(this.remoteConfig && typeof (this.remoteConfig as any).validate === 'function') {
      (this.remoteConfig as any).validate();
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

