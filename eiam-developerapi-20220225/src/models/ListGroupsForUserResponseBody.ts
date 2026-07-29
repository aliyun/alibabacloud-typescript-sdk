// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The source ID of the group membership.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @remarks
   * The source type of the group membership.
   * 
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupMemberRelationSourceId: 'groupMemberRelationSourceId',
      groupMemberRelationSourceType: 'groupMemberRelationSourceType',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: ListGroupsForUserResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * NTxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

