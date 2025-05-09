// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db_name
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   product: production environment
   * *   dev: development environment
   * *   pre: staging environment
   * *   test: test environment
   * *   sit: SIT environment
   * *   uat: user acceptance testing (UAT) environment
   * *   pet: stress testing environment
   * *   stag: STAG environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   true: The database is a logical database.
   * *   false: The database is a physical database.
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The permissions on a specific type of resources that you want to query. Valid values:
   * 
   * *   DATABASE: permissions on databases
   * *   TABLE: permissions on tables
   * *   COLUMN: permissions on fields
   * *   INSTANCE: permissions on instances
   * 
   * This parameter is required.
   * 
   * @example
   * DATABASE
   */
  permType?: string;
  /**
   * @remarks
   * The keyword used in the query. For example, if you want to query permissions on an instance, you can specify the endpoint of the instance, such as rm-bp144d5ky4l4r****.
   * 
   * @example
   * rm-bp144d5ky4l4r****
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user. You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the ID of the user.
   * 
   * >  The user ID is different from the ID of your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      permType: 'PermType',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      permType: 'string',
      searchKey: 'string',
      tid: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

