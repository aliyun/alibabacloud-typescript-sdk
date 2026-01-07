// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddUserToDataAgentWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1765960516
   */
  joinTime?: number;
  /**
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @example
   * 2
   */
  runningTaskNumber?: number;
  /**
   * @example
   * 5
   */
  totalTaskNumber?: number;
  /**
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
  data?: AddUserToDataAgentWorkspaceResponseBodyData;
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
   * 67E910F2-***-695C
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

