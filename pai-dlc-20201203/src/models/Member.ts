// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Member extends $dara.Model {
  /**
   * @example
   * ken_12345
   */
  memberId?: string;
  /**
   * @example
   * WorkspaceAdmin
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

