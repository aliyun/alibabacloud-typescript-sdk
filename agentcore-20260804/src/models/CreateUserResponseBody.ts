// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyData extends $dara.Model {
  /**
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @example
   * password
   */
  authMethod?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @example
   * Example@2026
   */
  initialPassword?: string;
  /**
   * @example
   * user-01
   */
  name?: string;
  /**
   * @example
   * 智能体运营组成员
   */
  note?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentCoreUserId: 'agentCoreUserId',
      authMethod: 'authMethod',
      createdAt: 'createdAt',
      displayName: 'displayName',
      email: 'email',
      initialPassword: 'initialPassword',
      name: 'name',
      note: 'note',
      regionId: 'regionId',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCoreUserId: 'string',
      authMethod: 'string',
      createdAt: 'string',
      displayName: 'string',
      email: 'string',
      initialPassword: 'string',
      name: 'string',
      note: 'string',
      regionId: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: CreateUserResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-123456
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateUserResponseBodyData,
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

