// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOAuth2TokenRequest extends $dara.Model {
  /**
   * @example
   * {"param1": "test-param", "param2": "test-param2"}
   */
  customParameters?: { [key: string]: any };
  /**
   * @example
   * user-defined-value
   */
  customState?: string;
  /**
   * @example
   * False
   */
  forceAuthentication?: boolean;
  /**
   * @example
   * USER_FEDERATION
   */
  OAuth2Flow?: string;
  /**
   * @example
   * oauth_credential_provider
   */
  resourceCredentialProviderName?: string;
  /**
   * @example
   * https://example.com
   */
  resourceOAuth2ReturnURL?: string;
  scopes?: string[];
  /**
   * @example
   * urn:ietf:params:oauth:request_uri:43b7df1a-****-****-****-709375a44d8a
   */
  sessionURI?: string;
  /**
   * @example
   * eyAgImFsZyI6ICJSUzI1N****
   */
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      customParameters: 'CustomParameters',
      customState: 'CustomState',
      forceAuthentication: 'ForceAuthentication',
      OAuth2Flow: 'OAuth2Flow',
      resourceCredentialProviderName: 'ResourceCredentialProviderName',
      resourceOAuth2ReturnURL: 'ResourceOAuth2ReturnURL',
      scopes: 'Scopes',
      sessionURI: 'SessionURI',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      customState: 'string',
      forceAuthentication: 'boolean',
      OAuth2Flow: 'string',
      resourceCredentialProviderName: 'string',
      resourceOAuth2ReturnURL: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      sessionURI: 'string',
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

