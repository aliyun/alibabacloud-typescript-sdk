// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of administrators.
   */
  adminList?: string[];
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1698305471
   */
  createtime?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * uid1
   */
  creatorId?: string;
  /**
   * @remarks
   * The deletion time. This parameter is returned only when the group has been deleted. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1698299827
   */
  deletatime?: number;
  /**
   * @remarks
   * Indicates whether the group has been deleted.
   * 
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @remarks
   * The user who deleted the group. This parameter is returned only when the group has been deleted.
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
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The extended information of the group.
   * 
   * @example
   * testgroupinfo
   */
  groupInfo?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * mytestgroup
   */
  groupName?: string;
  /**
   * @remarks
   * The message count statistics by category. This parameter is returned only when the group exists.
   */
  msgAmount?: { [key: string]: number };
  /**
   * @remarks
   * The number of online users in the group. This parameter is returned only when the group exists.
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
   * 1815A27D-BAE2-10E6-89FD-D477951C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the group is a super large group. Valid values:
   * - True: The group is a super large group.
   * - False: The group is not a super large group.
   * 
   * @example
   * False
   */
  superLargeGroup?: boolean;
  /**
   * @remarks
   * The total number of sessions. This parameter is returned only when the group exists.
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

