// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OAuth2TokenEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * UJMiksSwuMJvwXrJLULMykSw6qZ6VqaxOkN4qd5cW1Q4HhsLxvUR5xVOIv1WB3br5LoP20lPa8xiYLSMbt8JqHACXdSdw7fNkhRTIHnadxWW5jfDg7BELUB0FcFfPiv0
   */
  accessToken?: string;
  /**
   * @example
   * 604799
   */
  expiresIn?: number;
  /**
   * @example
   * zsEcmaUeb8-NZW4IIUDD7qdgBNflrj6fH8BXJYbW9iXihZTgvbcr1_utC9p5HJLn_lXVwhfivBTgUQZBCGvGl5lxqaxFhmFtt-OrBduFQKL9x8p2lpEMKlxuKHZZZJ3A
   */
  refreshToken?: string;
  /**
   * @example
   * 4070039E-5822-1F32-9295-1D2883E48BA5
   */
  requestId?: string;
  /**
   * @example
   * aligenie:user:basic:read aligenie:iot:scene:read
   */
  scope?: string;
  /**
   * @example
   * Bearer
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      expiresIn: 'ExpiresIn',
      refreshToken: 'RefreshToken',
      requestId: 'RequestId',
      scope: 'Scope',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresIn: 'number',
      refreshToken: 'string',
      requestId: 'string',
      scope: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

