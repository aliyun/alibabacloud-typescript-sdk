// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserResponseBodyData extends $dara.Model {
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
   * The time when the user was created.
   * 
   * @example
   * 2026-06-05T10:00:00
   */
  createdAt?: string;
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
   * @example
   * agentteams-test-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * demo-user
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
  /**
   * @remarks
   * The user status.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      createdAt: 'CreatedAt',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      createdAt: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      name: 'string',
      note: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: UpdateUserResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-update-user-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateUserResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

