// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewWorkflowResponseBodyWorkflowDetailWorkflowNodeListWorkflowNodeAuditUserListAuditUser extends $dara.Model {
  /**
   * @example
   * Owner
   */
  nickName?: string;
  /**
   * @example
   * db_test
   */
  realName?: string;
  /**
   * @example
   * 16***
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

