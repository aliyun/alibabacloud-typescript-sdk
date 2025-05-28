// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorkspaceUserListResponseBodyResultDataRole } from "./QueryWorkspaceUserListResponseBodyResultDataRole";


export class QueryWorkspaceUserListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud account ID.
   * 
   * @example
   * 16020915****8429
   */
  accountId?: string;
  /**
   * @remarks
   * Alibaba Cloud account name.
   * 
   * @example
   * pop****@aliyunid.test
   */
  accountName?: string;
  /**
   * @remarks
   * Nickname.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * Preset role information for the workspace member.
   */
  role?: QueryWorkspaceUserListResponseBodyResultDataRole;
  /**
   * @remarks
   * Quick BI user ID.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      nickName: 'NickName',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      nickName: 'string',
      role: QueryWorkspaceUserListResponseBodyResultDataRole,
      userId: 'string',
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

