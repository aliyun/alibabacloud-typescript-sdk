// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MYSQL**
   * - **MSSQL**
   * - **Oracle**.
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query type for the database. Valid values:
   * 
   * - **create**: create
   * - **restore**: restore.
   * 
   * @example
   * create
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID of the database server.
   * 
   * @example
   * cn-hongkong
   */
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      databaseType: 'DatabaseType',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      databaseType: 'string',
      instanceName: 'string',
      pageSize: 'number',
      queryType: 'string',
      uniRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

