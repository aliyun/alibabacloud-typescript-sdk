// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserOwnedResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_name
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database instance. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   **product**: production environment.
   * *   **dev**: development environment.
   * *   **pre**: pre-release environment.
   * *   **test**: test environment.
   * *   **sit**: system integration testing (SIT) environment.
   * *   **uat**: user acceptance testing (UAT) environment.
   * *   **pet**: stress testing environment.
   * *   **stag**: staging environment.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true.**: The database is a logical database
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * *   INSTANCE: an owner of an instance.
   * *   DATABASE: an owner of a physical database.
   * *   TABLE: an owner of a physical table.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  ownerType?: string;
  /**
   * @remarks
   * The page number.
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
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerType: 'OwnerType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      ownerType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

