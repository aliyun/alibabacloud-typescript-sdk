// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyDataBaseWorkspaces extends $dara.Model {
  /**
   * @example
   * true
   */
  alreadyJoined?: boolean;
  /**
   * @example
   * 123
   */
  creatorId?: number;
  /**
   * @example
   * work*****
   */
  creatorNickName?: string;
  /**
   * @example
   * 1344****
   */
  creatorUid?: string;
  /**
   * @example
   * Test
   */
  description?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * workspace-xxxx
   */
  name?: string;
  /**
   * @example
   * 123****
   */
  ownerId?: number;
  /**
   * @example
   * hel****
   */
  ownerNickName?: string;
  /**
   * @example
   * 15608564799****
   */
  ownerUid?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 12345
   */
  serviceAccountId?: number;
  /**
   * @example
   * testname
   */
  serviceAccountNickName?: string;
  /**
   * @example
   * 1422****
   */
  serviceAccountUid?: string;
  /**
   * @example
   * 23456
   */
  tenantId?: number;
  /**
   * @example
   * vpc-25fl3qjqb****
   */
  vpcId?: string;
  /**
   * @example
   * 8652340494****
   */
  workspaceId?: number;
  /**
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
  data?: ListWorkspacesResponseBodyData;
  /**
   * @example
   * UserNotExist
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
   * @example
   * EE214ECD-4330-503A-82F0-FFB03975****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

