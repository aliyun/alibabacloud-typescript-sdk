// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspaceUsersResponseBodyUsers } from "./ListWorkspaceUsersResponseBodyUsers";


export class ListWorkspaceUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The number of users who meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The users.
   */
  users?: ListWorkspaceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListWorkspaceUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

