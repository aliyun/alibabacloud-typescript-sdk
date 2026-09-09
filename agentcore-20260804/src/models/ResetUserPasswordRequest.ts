// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordRequestBody extends $dara.Model {
  /**
   * @remarks
   * The user ID. At least one of agentCoreUserId and username must be specified. If both are specified, agentCoreUserId takes precedence.
   * 
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @remarks
   * The new password after the reset. The password must be 8 to 32 characters in length and must contain uppercase letters, lowercase letters, digits, and special characters. The password cannot contain the username. If this parameter is not specified, the server generates a random password.
   * 
   * @example
   * Example@2026
   */
  password?: string;
  /**
   * @remarks
   * The username. At least one of username and agentCoreUserId must be specified.
   * 
   * @example
   * user-01
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentCoreUserId: 'agentCoreUserId',
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCoreUserId: 'string',
      password: 'string',
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

export class ResetUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for resetting the user password.
   */
  body?: ResetUserPasswordRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ResetUserPasswordRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

