// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.    
   * You cannot use reserved keywords, such as test and mysql.
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * ob****n0abo9uo
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page returned.  
   * - Start value: 1   
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows returned on each page.  
   * - Maximum value: 100.  
   * - Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * pay
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * Specifies whether to return the information about tables in the database.
   * Default value: false. 
   * > The operation may time out if the database contains a large number of tables.
   * 
   * @example
   * true
   */
  withTables?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tenantId: 'TenantId',
      withTables: 'WithTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tenantId: 'string',
      withTables: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

