// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowNodesResponseBodyWorkflowNodesWorkflowNodeAuditUsersAuditUser extends $dara.Model {
  /**
   * @remarks
   * The nickname of the approver.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The real name of the approver.
   * 
   * @example
   * test
   */
  realName?: string;
  /**
   * @remarks
   * The ID of the approver. The ID is different from the ID of the Alibaba Cloud account of the approver.
   * 
   * @example
   * 123
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

