// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ThirdAppOidcSsoConfigEndpoints } from "./ThirdAppOidcSsoConfigEndpoints";


export class ThirdAppOidcSsoConfig extends $dara.Model {
  accessTokenEffectiveTime?: number;
  codeEffectiveTime?: number;
  enableAuthLogin?: boolean;
  endpoints?: ThirdAppOidcSsoConfigEndpoints;
  grantScopes?: string[];
  grantTypes?: string[];
  idTokenAlgorithmType?: string;
  idTokenEffectiveTime?: number;
  redirectUris?: string[];
  refreshTokenEffective?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      enableAuthLogin: 'EnableAuthLogin',
      endpoints: 'Endpoints',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenAlgorithmType: 'IdTokenAlgorithmType',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      enableAuthLogin: 'boolean',
      endpoints: ThirdAppOidcSsoConfigEndpoints,
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenAlgorithmType: 'string',
      idTokenEffectiveTime: 'number',
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    if(Array.isArray(this.grantTypes)) {
      $dara.Model.validateArray(this.grantTypes);
    }
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

