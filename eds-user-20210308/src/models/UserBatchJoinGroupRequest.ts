// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserBatchJoinGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

