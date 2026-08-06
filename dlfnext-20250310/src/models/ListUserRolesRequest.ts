// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data. If the response does not provide this token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The resource descriptor for the user.
   * 
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  userPrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      userPrincipal: 'userPrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      userPrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

