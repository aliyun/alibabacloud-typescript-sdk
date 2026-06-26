// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleUsersRequest extends $dara.Model {
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
   * The token to retrieve the next page of results. If the response does not return a token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The resource descriptor for the DLF role.
   * 
   * @example
   * acs:dlf::[accountId]:role/role_name
   */
  rolePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      rolePrincipal: 'rolePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      rolePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

