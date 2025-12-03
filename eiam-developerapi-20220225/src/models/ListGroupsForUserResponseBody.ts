// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserResponseBodyData extends $dara.Model {
  /**
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  /**
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
  data?: ListGroupsForUserResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NTxxx
   */
  nextToken?: string;
  /**
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

