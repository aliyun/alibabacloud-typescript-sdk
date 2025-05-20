// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRolesRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * ""
   */
  pageToken?: string;
  /**
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
      maxResults: 'string',
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

