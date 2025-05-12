// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUsersInGroupResponseBodyEndUsers } from "./DescribeUsersInGroupResponseBodyEndUsers";


export class DescribeUsersInGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized users.
   */
  endUsers?: DescribeUsersInGroupResponseBodyEndUsers[];
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of authorized users that are connected to cloud computers of the cloud computer share.
   * 
   * @example
   * 0
   */
  onlineUsersCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  userOuPath?: string;
  /**
   * @remarks
   * The total number of authorized users of the cloud computer share.
   * 
   * @example
   * 1
   */
  usersCount?: number;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      nextToken: 'NextToken',
      onlineUsersCount: 'OnlineUsersCount',
      requestId: 'RequestId',
      userOuPath: 'UserOuPath',
      usersCount: 'UsersCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsers },
      nextToken: 'string',
      onlineUsersCount: 'number',
      requestId: 'string',
      userOuPath: 'string',
      usersCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUsers)) {
      $dara.Model.validateArray(this.endUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

