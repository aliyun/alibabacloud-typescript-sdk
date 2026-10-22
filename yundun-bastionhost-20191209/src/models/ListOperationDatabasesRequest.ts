// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the database instance.
   * 
   * @example
   * 10.167.XX.XX
   */
  databaseAddress?: string;
  /**
   * @remarks
   * The name of the database instance. Exact match is used.
   * 
   * @example
   * aaa
   */
  databaseName?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * - **SQLServer**
   * - **Oracle**
   * - **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-tl32wdd
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query.  
   * The maximum value of the PageSize parameter is 100. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave the PageSize parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * - **Local**: on-premises database
   * - **Rds**: ApsaraDB RDS database
   * - **PolarDB**: PolarDB database
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS instance. Exact match.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * Filters database instances by instance status. Valid values:
   * 
   * - **Normal**: normal
   * - **RemoteRelease**: released
   * 
   * @example
   * Normal
   */
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAddress: 'DatabaseAddress',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAddress: 'string',
      databaseName: 'string',
      databaseType: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'number',
      regionId: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

