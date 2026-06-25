// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultWorkspaceResponseBodyConditions extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request was successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the status code is 200.
   * 
   * @example
   * Create Failed
   */
  message?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - CREATING: Creating.
   * 
   * - WORKSPACE_CREATED: The workspace is created.
   * 
   * - MEMBERS_ADDED: Members are added.
   * 
   * - ENABLED: The process is complete.
   * 
   * @example
   * CREATING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

export class GetDefaultWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 17915******4216
   */
  userId?: string;
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 17915******4216
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the creation stages of the default workspace.
   */
  conditions?: GetDefaultWorkspaceResponseBodyConditions[];
  /**
   * @remarks
   * The Alibaba Cloud account that created the workspace.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  /**
   * @remarks
   * The environments in the workspace.
   * 
   * - A workspace in basic mode contains only the production (prod) environment.
   * 
   * - A workspace in standard mode contains the development (dev) and production (prod) environments.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The time when the workspace was created. The time is in Coordinated Universal Time (UTC) and is formatted in ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was last modified. The time is in UTC and is formatted in ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that created the workspace.
   */
  owner?: GetDefaultWorkspaceResponseBodyOwner;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * 
   * - ENABLED: Normal.
   * 
   * - INITIALIZING: Initializing.
   * 
   * - FAILURE: Failed.
   * 
   * - DISABLED: Disabled.
   * 
   * - FROZEN: Frozen due to an overdue payment.
   * 
   * - UPDATING: The workspace is being updated.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace. The name must be unique within the same region.
   * 
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      owner: 'Owner',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetDefaultWorkspaceResponseBodyConditions },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      owner: GetDefaultWorkspaceResponseBodyOwner,
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

