// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database_name
   */
  database?: string;
  /**
   * @remarks
   * The function name.
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
   * The pagination token used to retrieve the next page of data. If the response does not include this token, pass an empty string ("") or an empty character (\\"\\").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The user resource descriptor.
   * 
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  principal?: string;
  /**
   * @remarks
   * The permission resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * CATALOG
   */
  resourceType?: string;
  /**
   * @remarks
   * The data table name.
   * 
   * @example
   * table_name
   */
  table?: string;
  /**
   * @remarks
   * The view name.
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

