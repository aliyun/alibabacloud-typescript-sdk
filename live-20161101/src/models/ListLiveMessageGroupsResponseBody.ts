// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupsResponseBodyGroupList extends $dara.Model {
  /**
   * @remarks
   * The list of the IDs of the group administrators.
   */
  adminList?: string[];
  /**
   * @remarks
   * The time when the group was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698299727
   */
  createtime?: number;
  /**
   * @remarks
   * The ID of the group creator.
   * 
   * @example
   * user_77
   */
  creatorId?: string;
  /**
   * @remarks
   * Indicates whether the group is deleted.
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * cU9MeBqf****
   */
  groupId?: string;
  /**
   * @remarks
   * The additional information about the group.
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
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      createtime: 'Createtime',
      creatorId: 'CreatorId',
      delete: 'Delete',
      groupId: 'GroupId',
      groupInfo: 'GroupInfo',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': 'string' },
      createtime: 'number',
      creatorId: 'string',
      delete: 'boolean',
      groupId: 'string',
      groupInfo: 'string',
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveMessageGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the groups.
   */
  groupList?: ListLiveMessageGroupsResponseBodyGroupList[];
  /**
   * @remarks
   * Indicates whether the current page is followed by another page.
   * 
   * @example
   * false
   */
  hasmore?: boolean;
  /**
   * @remarks
   * The starting page number for the next query. This parameter is returned only if the value of Hasmore is true.
   * 
   * @example
   * 1001
   */
  nextpageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B5D95365-5A46-1A6A-BBF5-C7B6BDED****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupList: 'GroupList',
      hasmore: 'Hasmore',
      nextpageToken: 'NextpageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupList: { 'type': 'array', 'itemType': ListLiveMessageGroupsResponseBodyGroupList },
      hasmore: 'boolean',
      nextpageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

