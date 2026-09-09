// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * usr-123456
   */
  agentCoreUserId?: string;
  /**
   * @remarks
   * The authentication method of the user. password indicates local password authentication within the workspace. dingtalk and feishu indicate that the user is synchronized and authenticated by the corresponding external identity provider.
   * 
   * @example
   * password
   */
  authMethod?: string;
  /**
   * @remarks
   * The creation time in UTC, formatted in RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The display name of the user. The name is 1 to 32 characters in length.
   * 
   * @example
   * John
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The address can be up to 256 characters in length.
   * 
   * @example
   * user-01@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username. The name must be unique within the workspace and can contain only lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or digit. The name must be 1 to 32 characters in length.
   * 
   * @example
   * user-01
   */
  name?: string;
  /**
   * @remarks
   * The note for the user. The note can be up to 1,024 characters in length.
   * 
   * @example
   * Agent operations team member
   */
  note?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user status. Valid values: Creating, Active, Updating, Deleting, Failed, and DeleteFailed.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time of the last modification in UTC, formatted in RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The updated user information.
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
   * The response message. An error description is returned if the request fails.
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
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

