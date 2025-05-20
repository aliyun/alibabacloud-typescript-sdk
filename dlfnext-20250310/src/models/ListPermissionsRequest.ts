// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsRequest extends $dara.Model {
  /**
   * @example
   * database_name
   */
  database?: string;
  /**
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  principal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CATALOG
   */
  resourceType?: string;
  /**
   * @example
   * table_name
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      principal: 'principal',
      resourceType: 'resourceType',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      maxResults: 'number',
      pageToken: 'string',
      principal: 'string',
      resourceType: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

