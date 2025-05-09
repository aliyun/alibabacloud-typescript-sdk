// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseUserPermssionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  dbId?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the permission. Valid values:
   * 
   * *   DATABASE: permissions on databases
   * *   TABLE: permissions on tables
   * *   COLUMN: permissions on fields
   * 
   * This parameter is required.
   * 
   * @example
   * DATABASE
   */
  permType?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * search_user_name
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      permType: 'PermType',
      tid: 'Tid',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      permType: 'string',
      tid: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

