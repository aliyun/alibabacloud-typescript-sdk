// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyDataBaseWorkspaces extends $dara.Model {
  /**
   * @remarks
   * Whether the current user has joined the workspace.
   * 
   * @example
   * true
   */
  alreadyJoined?: boolean;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 123
   */
  creatorId?: number;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * work*****
   */
  creatorNickName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID of the creator.
   * 
   * @example
   * 1344****
   */
  creatorUid?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-xxxx
   */
  name?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 123****
   */
  ownerId?: number;
  /**
   * @remarks
   * The nickname of the owner.
   * 
   * @example
   * hel****
   */
  ownerNickName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the owner.
   * 
   * @example
   * 15608564799****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the service account.
   * 
   * @example
   * 12345
   */
  serviceAccountId?: number;
  /**
   * @remarks
   * The nickname of the service account.
   * 
   * @example
   * testname
   */
  serviceAccountNickName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID of the service account.
   * 
   * @example
   * 1422****
   */
  serviceAccountUid?: string;
  /**
   * @remarks
   * The ID of the tenant to which the workspace belongs.
   * 
   * @example
   * 23456
   */
  tenantId?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-25fl3qjqb****
   */
  vpcId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 8652340494****
   */
  workspaceId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyJoined: 'AlreadyJoined',
      creatorId: 'CreatorId',
      creatorNickName: 'CreatorNickName',
      creatorUid: 'CreatorUid',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerNickName: 'OwnerNickName',
      ownerUid: 'OwnerUid',
      region: 'Region',
      serviceAccountId: 'ServiceAccountId',
      serviceAccountNickName: 'ServiceAccountNickName',
      serviceAccountUid: 'ServiceAccountUid',
      tenantId: 'TenantId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyJoined: 'boolean',
      creatorId: 'number',
      creatorNickName: 'string',
      creatorUid: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      ownerId: 'number',
      ownerNickName: 'string',
      ownerUid: 'string',
      region: 'string',
      serviceAccountId: 'number',
      serviceAccountNickName: 'string',
      serviceAccountUid: 'string',
      tenantId: 'number',
      vpcId: 'string',
      workspaceId: 'number',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyData extends $dara.Model {
  baseWorkspaces?: ListWorkspacesResponseBodyDataBaseWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      baseWorkspaces: 'BaseWorkspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseWorkspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyDataBaseWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.baseWorkspaces)) {
      $dara.Model.validateArray(this.baseWorkspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset.
   */
  data?: ListWorkspacesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UserNotExist
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The total number of workspaces that meet the condition, which is the same as the TotalCount parameter.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * NextToken does not take effect.
   * 
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE214ECD-4330-503A-82F0-FFB03975****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The request succeeded.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of workspaces that meet the conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListWorkspacesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

