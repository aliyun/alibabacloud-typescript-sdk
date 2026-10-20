// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceOAuth2TokenResponseBody extends $dara.Model {
  accessToken?: string;
  authorizationURL?: string;
  expiresIn?: number;
  requestId?: string;
  sessionStatus?: string;
  sessionURI?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authorizationURL: 'AuthorizationURL',
      expiresIn: 'ExpiresIn',
      requestId: 'RequestId',
      sessionStatus: 'SessionStatus',
      sessionURI: 'SessionURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authorizationURL: 'string',
      expiresIn: 'number',
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

