// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OAuthCredential extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716176924603
   */
  createdTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716263324603
   */
  expiration?: number;
  /**
   * @example
   * 4d77bfae284770d94ebeed6b0199ebfd65e3943ba4f1e44dc36d792a93ba0d13
   */
  refreshToken?: string;
  /**
   * @example
   * user_info projects pull_requests hook gists emails
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4e84246b6b3962cd3d207aad1ea2f911
   */
  token?: string;
  /**
   * @example
   * bearer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      expiration: 'expiration',
      refreshToken: 'refreshToken',
      scope: 'scope',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      expiration: 'number',
      refreshToken: 'string',
      scope: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

