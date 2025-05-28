// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySharesToUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e53****5ba4b679ee22e2a2927****
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

