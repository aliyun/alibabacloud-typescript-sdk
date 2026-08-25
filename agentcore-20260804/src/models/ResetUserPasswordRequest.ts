// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordRequestBody extends $dara.Model {
  /**
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @example
   * Example@2026
   */
  password?: string;
  /**
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

