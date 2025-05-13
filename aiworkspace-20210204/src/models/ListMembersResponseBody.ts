// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMembersResponseBodyMembers } from "./ListMembersResponseBodyMembers";


export class ListMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The members.
   */
  members?: ListMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of members that meet the filter conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

