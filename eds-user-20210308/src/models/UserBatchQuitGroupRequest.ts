// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserBatchQuitGroupRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-lkuvalovhnlxvv****
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      endUserIds: 'EndUserIds',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

