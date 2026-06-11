// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDataAgentWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the workspace. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765960516
   */
  joinTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud UID of the user.
   * 
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @remarks
   * The name of the user\\"s role in the workspace.
   * 
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @remarks
   * The number of tasks that the user is running in the workspace.
   * 
   * @example
   * 2
   */
  runningTaskNumber?: number;
  /**
   * @remarks
   * The total number of tasks that the user initiated in the workspace.
   * 
   * @example
   * 5
   */
  totalTaskNumber?: number;
  /**
   * @remarks
   * The RAM username.
   * 
   * @example
   * agentTest
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

export class AddUserToDataAgentWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  data?: AddUserToDataAgentWorkspaceResponseBodyData;
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
   * 67E910F2-***-695C
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
      data: AddUserToDataAgentWorkspaceResponseBodyData,
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

