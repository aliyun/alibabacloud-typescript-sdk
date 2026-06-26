// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. If the response does not return this parameter, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * role_name
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

