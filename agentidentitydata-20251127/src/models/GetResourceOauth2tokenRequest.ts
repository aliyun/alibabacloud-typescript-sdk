// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOAuth2TokenRequest extends $dara.Model {
  /**
   * @example
   * app
   */
  audience?: string;
  customParameters?: { [key: string]: any };
  customState?: string;
  forceAuthentication?: boolean;
  OAuth2Flow?: string;
  resourceCredentialProviderName?: string;
  resourceOAuth2ReturnURL?: string;
  scopes?: string[];
  sessionURI?: string;
  tokenVaultName?: string;
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      audience: 'Audience',
      customParameters: 'CustomParameters',
      customState: 'CustomState',
      forceAuthentication: 'ForceAuthentication',
      OAuth2Flow: 'OAuth2Flow',
      resourceCredentialProviderName: 'ResourceCredentialProviderName',
      resourceOAuth2ReturnURL: 'ResourceOAuth2ReturnURL',
      scopes: 'Scopes',
      sessionURI: 'SessionURI',
      tokenVaultName: 'TokenVaultName',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audience: 'string',
      customParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      customState: 'string',
      forceAuthentication: 'boolean',
      OAuth2Flow: 'string',
      resourceCredentialProviderName: 'string',
      resourceOAuth2ReturnURL: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      sessionURI: 'string',
      tokenVaultName: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    if(this.customParameters) {
      $dara.Model.validateMap(this.customParameters);
    }
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

