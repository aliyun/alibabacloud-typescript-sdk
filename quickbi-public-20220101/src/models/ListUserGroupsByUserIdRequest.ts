// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The UserID of the Quick BI is used instead of the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

