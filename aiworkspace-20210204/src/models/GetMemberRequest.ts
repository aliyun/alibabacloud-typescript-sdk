// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The member UID. You must specify either UserId or MemberId. You cannot specify both.
   * 
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @remarks
   * The user UID. For more information about how to view the user UID, see [ListWorkspaceUsers](https://help.aliyun.com/document_detail/449133.html). You must specify either UserId or MemberId. You cannot specify both.
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

