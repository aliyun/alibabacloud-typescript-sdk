// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1765960516
   */
  createTime?: number;
  /**
   * @example
   * 20282*****7591
   */
  creator?: string;
  /**
   * @example
   * 1765961516
   */
  modifyTime?: number;
  /**
   * @example
   * owner
   */
  roleName?: string;
  /**
   * @example
   * 11
   */
  totalMember?: number;
  /**
   * @example
   * space for test
   */
  workspaceDesc?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @example
   * active
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      modifyTime: 'ModifyTime',
      roleName: 'RoleName',
      totalMember: 'TotalMember',
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
      modifyTime: 'number',
      roleName: 'string',
      totalMember: 'number',
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
  data?: CreateDataAgentWorkspaceResponseBodyData;
  /**
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @example
   * E0D2-*****-A63B6
   */
  requestId?: string;
  /**
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

