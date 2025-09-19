// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **MYSQL**
   * *   **MSSQL**
   * *   **Oracle**
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The name of the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The condition that is used to query the database. Valid values:
   * 
   * *   **create**: newly created
   * *   **restore**: restored
   * 
   * @example
   * create
   */
  queryType?: string;
  /**
   * @remarks
   * The region ID of the server that hosts the database.
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

