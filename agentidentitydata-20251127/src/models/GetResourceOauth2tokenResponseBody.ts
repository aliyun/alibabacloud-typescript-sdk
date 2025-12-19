// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOAuth2TokenResponseBody extends $dara.Model {
  /**
   * @example
   * 66a1a2****0b93v3
   */
  accessToken?: string;
  /**
   * @example
   * https://agentidentity.cn-beijing.aliyuncs.com/*****
   */
  authorizationURL?: string;
  /**
   * @example
   * 173C69C9-9C07-5B25-9477-603A33E5DA32
   */
  requestId?: string;
  /**
   * @example
   * IN_PROGRESS
   */
  sessionStatus?: string;
  /**
   * @example
   * urn:ietf:params:oauth:request_uri:43b7df1a-****-****-****-709375a44d8a
   */
  sessionURI?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authorizationURL: 'AuthorizationURL',
      requestId: 'RequestId',
      sessionStatus: 'SessionStatus',
      sessionURI: 'SessionURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authorizationURL: 'string',
      requestId: 'string',
      sessionStatus: 'string',
      sessionURI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

