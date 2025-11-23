// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedInstancesForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The type of databases. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **Oracle**
   * *   **DRDS**
   * *   **OceanBase**
   * *   **Mongo**
   * *   **Redis**
   * 
   * @example
   * MySQL
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * policy_test
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user. You can call the [GetUser](https://help.aliyun.com/document_detail/465816.html) operation to query the user ID.
   * 
   * > If IdentityType is set to USER, this parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

