// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationRoleUsersResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Nickname of the organization member.
   * 
   * @example
   * Test User
   */
  nickName?: string;
  /**
   * @remarks
   * UserID of the organization member in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
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

