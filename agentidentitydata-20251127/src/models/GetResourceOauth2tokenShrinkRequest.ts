// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOAuth2TokenShrinkRequest extends $dara.Model {
  /**
   * @example
   * app
   */
  audience?: string;
  customParametersShrink?: string;
  customState?: string;
  forceAuthentication?: boolean;
  OAuth2Flow?: string;
  resourceCredentialProviderName?: string;
  resourceOAuth2ReturnURL?: string;
  scopesShrink?: string;
  sessionURI?: string;
  tokenVaultName?: string;
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      audience: 'Audience',
      customParametersShrink: 'CustomParameters',
      customState: 'CustomState',
      forceAuthentication: 'ForceAuthentication',
      OAuth2Flow: 'OAuth2Flow',
      resourceCredentialProviderName: 'ResourceCredentialProviderName',
      resourceOAuth2ReturnURL: 'ResourceOAuth2ReturnURL',
      scopesShrink: 'Scopes',
      sessionURI: 'SessionURI',
      tokenVaultName: 'TokenVaultName',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audience: 'string',
      customParametersShrink: 'string',
      customState: 'string',
      forceAuthentication: 'boolean',
      OAuth2Flow: 'string',
      resourceCredentialProviderName: 'string',
      resourceOAuth2ReturnURL: 'string',
      scopesShrink: 'string',
      sessionURI: 'string',
      tokenVaultName: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

