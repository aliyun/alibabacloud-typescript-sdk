// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterUsersResponseBodyUsers } from "./FilterUsersResponseBodyUsers";


export class FilterUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBD276B5-00FF-5E04-8EF7-5CBA09BF112A
   */
  requestId?: string;
  /**
   * @remarks
   * The convenience accounts.
   */
  users?: FilterUsersResponseBodyUsers[];
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
      users: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsers },
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

