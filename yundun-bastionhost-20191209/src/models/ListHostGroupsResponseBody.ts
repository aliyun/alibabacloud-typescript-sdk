// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsResponseBodyHostGroups extends $dara.Model {
  /**
   * @remarks
   * The remarks of the asset group.
   * 
   * @example
   * Description
   */
  comment?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The name of the asset group.
   * 
   * @example
   * Host group 1
   */
  hostGroupName?: string;
  /**
   * @remarks
   * The number of hosts in the asset group.
   * 
   * @example
   * 1
   */
  memberCount?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      memberCount: 'MemberCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      memberCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset groups returned.
   */
  hostGroups?: ListHostGroupsResponseBodyHostGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of asset groups returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostGroups: 'HostGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsResponseBodyHostGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostGroups)) {
      $dara.Model.validateArray(this.hostGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

