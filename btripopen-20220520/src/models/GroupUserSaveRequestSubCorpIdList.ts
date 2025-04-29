// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupUserSaveRequestSubCorpIdList extends $dara.Model {
  departIds?: string[];
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 123
   */
  managerUserId?: string;
  /**
   * @example
   * 10
   */
  positionLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * btrip123
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      departIds: 'depart_ids',
      email: 'email',
      leaveStatus: 'leave_status',
      managerUserId: 'manager_user_id',
      positionLevel: 'position_level',
      subCorpId: 'sub_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departIds: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      leaveStatus: 'number',
      managerUserId: 'string',
      positionLevel: 'string',
      subCorpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departIds)) {
      $dara.Model.validateArray(this.departIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

