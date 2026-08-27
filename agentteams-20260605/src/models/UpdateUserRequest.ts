// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
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
   * Demo User Updated
   */
  displayName?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * demo.updated@example.com
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
   * The remarks.
   * 
   * @example
   * Test user updated.
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

