// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The member ID. You must specify only one of the following parameters: UserId and MemberId.
   * 
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You can call [ListWorkspaceUsers](https://help.aliyun.com/document_detail/449133.html) to obtain the ID of the Alibaba Cloud account. You must specify only one of the following parameters: UserId and MemberId.
   * 
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

