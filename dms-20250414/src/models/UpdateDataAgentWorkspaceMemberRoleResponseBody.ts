// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentWorkspaceMemberRoleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the workspace. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765961516
   */
  joinTime?: number;
  /**
   * @remarks
   * The UID of the member whose role was changed.
   * 
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @remarks
   * The new role of the user.
   * 
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @remarks
   * The number of running tasks for the user in the workspace.
   * 
   * @example
   * 10
   */
  runningTaskNumber?: number;
  /**
   * @remarks
   * The total number of tasks for the user in the workspace.
   * 
   * @example
   * 20
   */
  totalTaskNumber?: number;
  /**
   * @remarks
   * The RAM username.
   * 
   * @example
   * yunqitest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      joinTime: 'JoinTime',
      memberId: 'MemberId',
      roleName: 'RoleName',
      runningTaskNumber: 'RunningTaskNumber',
      totalTaskNumber: 'TotalTaskNumber',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTime: 'number',
      memberId: 'string',
      roleName: 'string',
      runningTaskNumber: 'number',
      totalTaskNumber: 'number',
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

export class UpdateDataAgentWorkspaceMemberRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateDataAgentWorkspaceMemberRoleResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
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
      data: UpdateDataAgentWorkspaceMemberRoleResponseBodyData,
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

