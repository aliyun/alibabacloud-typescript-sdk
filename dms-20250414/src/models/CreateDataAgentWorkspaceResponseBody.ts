// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the workspace. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765960516
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the workspace creator.
   * 
   * @example
   * 20282*****7591
   */
  creator?: string;
  /**
   * @remarks
   * Indicates whether session sharing is enabled within the workspace.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The most recent modification time of the workspace. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765961516
   */
  modifyTime?: number;
  /**
   * @remarks
   * The role name of the user in the workspace.
   * 
   * @example
   * owner
   */
  roleName?: string;
  /**
   * @remarks
   * The total number of members in the workspace.
   * 
   * @example
   * 11
   */
  totalMember?: number;
  /**
   * @remarks
   * The workspace type. Valid values:
   * 
   * - personal: personal workspace.
   * - common/null: multi-user collaborative workspace.
   * 
   * @example
   * personal/common
   */
  type?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * space for test
   */
  workspaceDesc?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * active
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      modifyTime: 'ModifyTime',
      roleName: 'RoleName',
      totalMember: 'TotalMember',
      type: 'Type',
      workspaceDesc: 'WorkspaceDesc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceStatus: 'WorkspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      isSessionShareEnabled: 'boolean',
      modifyTime: 'number',
      roleName: 'string',
      totalMember: 'number',
      type: 'string',
      workspaceDesc: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      workspaceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: CreateDataAgentWorkspaceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0D2-*****-A63B6
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDataAgentWorkspaceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

