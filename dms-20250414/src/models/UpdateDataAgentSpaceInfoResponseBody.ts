// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentSpaceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workspace configuration items.
   * 
   * @example
   * {sql_config:null}
   */
  config?: string;
  /**
   * @remarks
   * The creation time of the session (UNIX timestamp in seconds).
   * 
   * @example
   * 1765960516
   */
  createTime?: string;
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
   * The description of the table.
   * 
   * @example
   * space for test new
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether session sharing within the workspace is supported.
   * 
   * @example
   * true
   */
  isSessionShareEnabled?: boolean;
  /**
   * @remarks
   * The last modification time of the workspace (UNIX timestamp in seconds).
   * 
   * @example
   * 1765962516
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the removed user role.
   * 
   * @example
   * active
   */
  roleName?: string;
  /**
   * @remarks
   * The total number of members in the workspace.
   * 
   * @example
   * 20
   */
  totalMember?: string;
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
   * The updated name of the workspace.
   * 
   * @example
   * yunqitest_v2
   */
  workspaceName?: string;
  /**
   * @remarks
   * The updated status of the workspace.
   * 
   * @example
   * space for test new
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      isSessionShareEnabled: 'IsSessionShareEnabled',
      modifyTime: 'ModifyTime',
      roleName: 'RoleName',
      totalMember: 'TotalMember',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      workspaceStatus: 'WorkspaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      isSessionShareEnabled: 'boolean',
      modifyTime: 'string',
      roleName: 'string',
      totalMember: 'string',
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

export class UpdateDataAgentSpaceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: UpdateDataAgentSpaceInfoResponseBodyData;
  /**
   * @remarks
   * The error code returned when a request exception occurs.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
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
   * 67E910F2-***-695C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: UpdateDataAgentSpaceInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
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

