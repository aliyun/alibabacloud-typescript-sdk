// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDirectoryUsersResponseBodyUsers } from "./ListDirectoryUsersResponseBodyUsers";


export class ListDirectoryUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query. If the value of this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The usernames corresponding to the AD directory. If the AD directory contains only the Administrator and Guest accounts, the Users array will be empty.
   */
  users?: ListDirectoryUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListDirectoryUsersResponseBodyUsers },
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

