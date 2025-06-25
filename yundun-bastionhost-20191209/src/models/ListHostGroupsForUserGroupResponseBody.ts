// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHostGroupsForUserGroupResponseBodyHostGroups } from "./ListHostGroupsForUserGroupResponseBodyHostGroups";


export class ListHostGroupsForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The host groups returned.
   */
  hostGroups?: ListHostGroupsForUserGroupResponseBodyHostGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of host groups returned.
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
      hostGroups: { 'type': 'array', 'itemType': ListHostGroupsForUserGroupResponseBodyHostGroups },
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

