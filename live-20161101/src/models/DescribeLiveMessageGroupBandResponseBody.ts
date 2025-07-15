// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveMessageGroupBandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of users that were muted separately, but not by muting the entire group.
   */
  bannedUserList?: string[];
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether all users in the interactive messaging group are muted.
   * 
   * @example
   * false
   */
  isbannedAll?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 021D1FE7-2E87-16AC-9364-4E7EA47C****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of users who were not muted when the entire group was muted.
   */
  unbannedUserList?: string[];
  static names(): { [key: string]: string } {
    return {
      bannedUserList: 'BannedUserList',
      groupId: 'GroupId',
      isbannedAll: 'IsbannedAll',
      requestId: 'RequestId',
      unbannedUserList: 'UnbannedUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bannedUserList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      isbannedAll: 'boolean',
      requestId: 'string',
      unbannedUserList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bannedUserList)) {
      $dara.Model.validateArray(this.bannedUserList);
    }
    if(Array.isArray(this.unbannedUserList)) {
      $dara.Model.validateArray(this.unbannedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

