// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * database_name
   */
  database?: string;
  /**
   * @remarks
   * The name of the function.
   * 
   * @example
   * function_name
   */
  function?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If the response does not include this token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The resource descriptor of the user.
   * 
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  principal?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * CATALOG
   */
  resourceType?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_name
   */
  table?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * view_name
   */
  view?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      function: 'function',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      principal: 'principal',
      resourceType: 'resourceType',
      table: 'table',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      function: 'string',
      maxResults: 'number',
      pageToken: 'string',
      principal: 'string',
      resourceType: 'string',
      table: 'string',
      view: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

