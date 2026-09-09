// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestBody extends $dara.Model {
  /**
   * @remarks
   * The display name of the user. The display name must be 1 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * John Smith
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The email address can be up to 256 characters in length.
   * 
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username. The username must be unique within the workspace and can contain only lowercase letters, digits, and hyphens. It must start and end with a lowercase letter or digit and be 1 to 32 characters in length. Reserved names such as manager, admin, or names starting with worker- cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * user-01
   */
  name?: string;
  /**
   * @remarks
   * The remarks of the user. The remarks can be up to 1024 characters in length.
   * 
   * @example
   * Member of the agent operations team
   */
  note?: string;
  /**
   * @remarks
   * The initial password of the user. The password must be 8 to 32 characters in length and contain uppercase letters, lowercase letters, digits, and special characters. The password cannot contain the username. If this parameter is not specified, the server generates a random password and returns it in the initialPassword field of the response.
   * 
   * @example
   * Example@2026
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      email: 'email',
      name: 'name',
      note: 'note',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      name: 'string',
      note: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a user.
   */
  body?: CreateUserRequestBody;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateUserRequestBody,
      clientToken: 'string',
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

