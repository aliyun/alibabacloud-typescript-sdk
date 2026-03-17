// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTokenByAuthorizationServerRequest extends $dara.Model {
  /**
   * @example
   * testxxxxx
   */
  applicationFederatedCredentialName?: string;
  /**
   * @example
   * eyJraWQiOiJLRVlLZ0Iyxxxxx
   */
  clientAssertion?: string;
  /**
   * @example
   * urn:ietf:params:oauth:client-assertion-type:jwt-bearer
   */
  clientAssertionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRxxxxx
   */
  clientSecret?: string;
  /**
   * @example
   * testxxxxx
   */
  clientX509?: string;
  /**
   * @example
   * testxxxxx
   */
  clientX509Chain?: string;
  /**
   * @example
   * CO541xY59EsKniV2wvWDXZ4jiKxxxxx
   */
  code?: string;
  /**
   * @example
   * xxxxx
   */
  codeVerifier?: string;
  /**
   * @example
   * DCxxxxxx
   */
  deviceCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @example
   * testxxxxx
   */
  password?: string;
  /**
   * @example
   * https://example.com/xxxxx
   */
  redirectUri?: string;
  /**
   * @example
   * RTxxxxx
   */
  refreshToken?: string;
  /**
   * @example
   * openid
   */
  scope?: string;
  /**
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

