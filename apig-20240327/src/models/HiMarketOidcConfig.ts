// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketOidcConfigAuthCodeConfig extends $dara.Model {
  authorizationEndpoint?: string;
  clientId?: string;
  clientSecret?: string;
  issuer?: string;
  jwkSetUri?: string;
  redirectUri?: string;
  scopes?: string;
  tokenEndpoint?: string;
  userInfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'authorizationEndpoint',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      issuer: 'issuer',
      jwkSetUri: 'jwkSetUri',
      redirectUri: 'redirectUri',
      scopes: 'scopes',
      tokenEndpoint: 'tokenEndpoint',
      userInfoEndpoint: 'userInfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientId: 'string',
      clientSecret: 'string',
      issuer: 'string',
      jwkSetUri: 'string',
      redirectUri: 'string',
      scopes: 'string',
      tokenEndpoint: 'string',
      userInfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketOidcConfigIdentityMapping extends $dara.Model {
  customFields?: { [key: string]: string };
  emailField?: string;
  userIdField?: string;
  userNameField?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      emailField: 'emailField',
      userIdField: 'userIdField',
      userNameField: 'userNameField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      emailField: 'string',
      userIdField: 'string',
      userNameField: 'string',
    };
  }

  validate() {
    if(this.customFields) {
      $dara.Model.validateMap(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketOidcConfig extends $dara.Model {
  authCodeConfig?: HiMarketOidcConfigAuthCodeConfig;
  enabled?: boolean;
  grantType?: string;
  identityMapping?: HiMarketOidcConfigIdentityMapping;
  logoUrl?: string;
  name?: string;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      authCodeConfig: 'authCodeConfig',
      enabled: 'enabled',
      grantType: 'grantType',
      identityMapping: 'identityMapping',
      logoUrl: 'logoUrl',
      name: 'name',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCodeConfig: HiMarketOidcConfigAuthCodeConfig,
      enabled: 'boolean',
      grantType: 'string',
      identityMapping: HiMarketOidcConfigIdentityMapping,
      logoUrl: 'string',
      name: 'string',
      provider: 'string',
    };
  }

  validate() {
    if(this.authCodeConfig && typeof (this.authCodeConfig as any).validate === 'function') {
      (this.authCodeConfig as any).validate();
    }
    if(this.identityMapping && typeof (this.identityMapping as any).validate === 'function') {
      (this.identityMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

