// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { User } from "./User";


export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. A null value indicates that this is the last page of results.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The users.
   */
  users?: User[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      users: { 'type': 'array', 'itemType': User },
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

