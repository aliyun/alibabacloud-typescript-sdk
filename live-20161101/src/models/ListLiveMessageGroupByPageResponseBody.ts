// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveMessageGroupByPageResponseBodyGroupList extends $dara.Model {
  /**
   * @remarks
   * The list of administrator user IDs.
   */
  adminList?: string[];
  /**
   * @remarks
   * The creation time, expressed as a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698299727
   */
  createtime?: number;
  /**
   * @remarks
   * The creator ID.
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
   * The group ID.
   * 
   * @example
   * cU9MeBqf****
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

export class ListLiveMessageGroupByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group list.
   */
  groupList?: ListLiveMessageGroupByPageResponseBodyGroupList[];
  /**
   * @remarks
   * The current page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B5D95365-5A46-1A6A-BBF5-C7B6BDED****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupList: 'GroupList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupList: { 'type': 'array', 'itemType': ListLiveMessageGroupByPageResponseBodyGroupList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

