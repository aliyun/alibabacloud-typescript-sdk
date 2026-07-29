// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTokenByAuthorizationServerRequest extends $dara.Model {
  /**
   * @remarks
   * Federated application credential name.
   * 
   * @example
   * testxxxxx
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * Client assertion.
   * 
   * @example
   * eyJraWQiOiJLRVlLZ0Iyxxxxx
   */
  clientAssertion?: string;
  /**
   * @remarks
   * Client assertion type.
   * 
   * @example
   * urn:ietf:params:oauth:client-assertion-type:jwt-bearer
   */
  clientAssertionType?: string;
  /**
   * @remarks
   * Client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * Client key.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRxxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * Client certificate.
   * 
   * @example
   * testxxxxx
   */
  clientX509?: string;
  /**
   * @remarks
   * Intermediate certificate list.
   * 
   * @example
   * testxxxxx
   */
  clientX509Chain?: string;
  /**
   * @remarks
   * Authorization code. Required when grant_type is authorization_code.
   * 
   * @example
   * CO541xY59EsKniV2wvWDXZ4jiKxxxxx
   */
  code?: string;
  /**
   * @remarks
   * You can validate the code.
   * 
   * @example
   * xxxxx
   */
  codeVerifier?: string;
  /**
   * @remarks
   * Device code. Required when grant_type is urn:ietf:params:oauth:grant-type:device_code.
   * 
   * @example
   * DCxxxxxx
   */
  deviceCode?: string;
  /**
   * @remarks
   * Grant type.
   * 
   * This parameter is required.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * Password.
   * 
   * @example
   * testxxxxx
   */
  password?: string;
  /**
   * @remarks
   * Redirection URI. Required when grant_type is authorization_code. Must match the redirect_uri used in the authorization code request.
   * 
   * @example
   * https://example.com/xxxxx
   */
  redirectUri?: string;
  /**
   * @remarks
   * Refresh token.
   * 
   * @example
   * RTxxxxx
   */
  refreshToken?: string;
  /**
   * @remarks
   * Scope.
   * 
   * @example
   * openid
   */
  scope?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * userxxxxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialName: 'application_federated_credential_name',
      clientAssertion: 'client_assertion',
      clientAssertionType: 'client_assertion_type',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      clientX509: 'client_x509',
      clientX509Chain: 'client_x509_chain',
      code: 'code',
      codeVerifier: 'code_verifier',
      deviceCode: 'device_code',
      grantType: 'grant_type',
      password: 'password',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
      scope: 'scope',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialName: 'string',
      clientAssertion: 'string',
      clientAssertionType: 'string',
      clientId: 'string',
      clientSecret: 'string',
      clientX509: 'string',
      clientX509Chain: 'string',
      code: 'string',
      codeVerifier: 'string',
      deviceCode: 'string',
      grantType: 'string',
      password: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
      scope: 'string',
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

