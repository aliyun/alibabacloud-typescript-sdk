// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OAuth2TokenEndpointRequest extends $dara.Model {
  /**
   * @example
   * rf3mi4JOU-xRIX2zEuRLHi-U9mPnvISeSphbwiBHJ5mEKZtG-xJsbBWrq8RmhQEPRYh0JOd3DaS_VZ90soD_YrsT4OBtgD06DmdIKL2_5KFfI6p_SjXX2-UMJuGfXDkB
   */
  code?: string;
  /**
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @example
   * https://xxx.xxx.com/xxx
   */
  redirectUri?: string;
  /**
   * @example
   * zsEcmaUeb8-NZW4IIUDD7qdgBNflrj6fH8BXJYbW9iXihZTgvbcr1_utC9p5HJLn_lXVwhfivBTgUQZBCGvGl5lxqaxFhmFtt-OrBduFQKL9x8p2lpEMKlxuKHZZZJ3A
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      grantType: 'GrantType',
      redirectUri: 'RedirectUri',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      grantType: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

