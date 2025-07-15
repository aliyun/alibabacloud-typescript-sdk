// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the group administrators.
   */
  adminList?: string[];
  /**
   * @remarks
   * The time when the group was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698305471
   */
  createtime?: number;
  /**
   * @remarks
   * The ID of the group creator.
   * 
   * @example
   * uid1
   */
  creatorId?: string;
  /**
   * @remarks
   * The time when the group was deleted. This parameter is returned only if the group was deleted.
   * 
   * @example
   * 1698299827
   */
  deletatime?: number;
  /**
   * @remarks
   * Indicates whether the group was deleted.
   * 
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @remarks
   * The ID of the user who deleted the group. This parameter is returned only if the group was deleted.
   * 
   * @example
   * uid1
   */
  deletor?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * grouptest1
   */
  groupId?: string;
  /**
   * @remarks
   * Additional information about the group.
   * 
   * @example
   * testgroupinfo
   */
  groupInfo?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * mytestgroup
   */
  groupName?: string;
  /**
   * @remarks
   * The categorized message statistics. This parameter is returned only if the group exists.
   */
  msgAmount?: { [key: string]: number };
  /**
   * @remarks
   * The number of online users in the group. This parameter is returned only if the group exists.
   * 
   * @example
   * 2
   */
  onlineUserCounts?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1815A27D-BAE2-10E6-89FD-D477951C67C7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the group is a super group. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * False
   */
  superLargeGroup?: boolean;
  /**
   * @remarks
   * The total number of sessions. This parameter is returned only if the group exists.
   * 
   * @example
   * 50
   */
  totalTimes?: number;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      createtime: 'Createtime',
      creatorId: 'CreatorId',
      deletatime: 'Deletatime',
      delete: 'Delete',
      deletor: 'Deletor',
      groupId: 'GroupId',
      groupInfo: 'GroupInfo',
      groupName: 'GroupName',
      msgAmount: 'MsgAmount',
      onlineUserCounts: 'OnlineUserCounts',
      requestId: 'RequestId',
      superLargeGroup: 'SuperLargeGroup',
      totalTimes: 'TotalTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': 'string' },
      createtime: 'number',
      creatorId: 'string',
      deletatime: 'number',
      delete: 'boolean',
      deletor: 'string',
      groupId: 'string',
      groupInfo: 'string',
      groupName: 'string',
      msgAmount: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      onlineUserCounts: 'number',
      requestId: 'string',
      superLargeGroup: 'boolean',
      totalTimes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    if(this.msgAmount) {
      $dara.Model.validateMap(this.msgAmount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

