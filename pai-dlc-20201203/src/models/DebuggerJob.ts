// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebuggerJob extends $dara.Model {
  /**
   * @example
   * dlc20210126170216-mtl37ge7gkvdz
   */
  debuggerJobId?: string;
  /**
   * @example
   * dlc debugger test
   */
  displayName?: string;
  /**
   * @example
   * 2932
   */
  duration?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  gmtFailedTime?: string;
  gmtFinishTime?: string;
  gmtRunningTime?: string;
  gmtStoppedTime?: string;
  gmtSubmittedTime?: string;
  gmtSucceedTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 12344556
   */
  userId?: string;
  /**
   * @example
   * workspace01
   */
  workspaceId?: string;
  /**
   * @example
   * public
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerJobId: 'DebuggerJobId',
      displayName: 'DisplayName',
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSucceedTime: 'GmtSucceedTime',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerJobId: 'string',
      displayName: 'string',
      duration: 'string',
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSucceedTime: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
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

