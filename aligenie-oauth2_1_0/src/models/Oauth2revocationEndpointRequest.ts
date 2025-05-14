// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OAuth2RevocationEndpointRequest extends $dara.Model {
  /**
   * @example
   * UJMiksSwuMJvwXrJLULMykSw6qZ6VqaxOkN4qd5cW1Q4HhsLxvUR5xVOIv1WB3br5LoP20lPa8xiYLSMbt8JqHACXdSdw7fNkhRTIHnadxWW5jfDg7BELUB0FcFfPiv0
   */
  token?: string;
  /**
   * @example
   * refresh_token
   */
  tokenTypeHint?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      tokenTypeHint: 'TokenTypeHint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      tokenTypeHint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

