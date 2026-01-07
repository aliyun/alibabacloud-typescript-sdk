// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataAgentSpaceInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1765960516
   */
  createTime?: string;
  /**
   * @example
   * 20282*****7591
   */
  creator?: string;
  /**
   * @example
   * space for test new
   */
  description?: string;
  /**
   * @example
   * 1765962516
   */
  modifyTime?: string;
  /**
   * @example
   * active
   */
  roleName?: string;
  /**
   * @example
   * 20
   */
  totalMember?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  /**
   * @example
   * yunqitest_v2
   */
  workspaceName?: string;
  /**
   * @example
   * space for test new
   */
  workspaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
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
      createTime: 'string',
      creator: 'string',
      description: 'string',
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
  data?: UpdateDataAgentSpaceInfoResponseBodyData;
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

