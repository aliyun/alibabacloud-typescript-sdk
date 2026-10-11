// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. If this parameter is not specified, 10 records are returned by default.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The filter condition for exact match on the username.
   * 
   * @example
   * user-01
   */
  name?: string;
  /**
   * @remarks
   * The filter condition for fuzzy match on the username. The value can be up to 128 characters in length.
   * 
   * @example
   * user
   */
  nameLike?: string;
  /**
   * @remarks
   * The cursor for querying the next page. Do not specify this parameter in the first call. In subsequent calls, specify the nextToken value returned in the previous call.
   * 
   * @example
   * dXNlci1vZmZzZXQ6MTA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nameLike: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

