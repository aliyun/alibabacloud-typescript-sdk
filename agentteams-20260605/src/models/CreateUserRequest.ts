// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * password
   */
  authMethod?: string;
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Demo User
   */
  displayName?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * demo@example.com
   */
  email?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-test-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The note.
   * 
   * @example
   * TestUser.
   */
  note?: string;
  /**
   * @remarks
   * The password. If not specified, the system automatically generates an initial password.
   * 
   * @example
   * P@ssw0rd123
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      clientToken: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
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

