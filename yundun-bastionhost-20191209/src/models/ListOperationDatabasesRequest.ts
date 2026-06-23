// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the database.
   * 
   * @example
   * 10.167.XX.XX
   */
  databaseAddress?: string;
  /**
   * @remarks
   * The name of the database. This parameter supports only exact matches.
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
   * 
   * - **SQLServer**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-tl32wdd
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.<br>The maximum value is 100. The default value is 20. If you do not specify this parameter, 20 entries are returned.<br>
   * 
   * > Specify a value for this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the database. Valid values:
   * 
   * - **Local**: a local database
   * 
   * - **Rds**: an ApsaraDB RDS database
   * 
   * - **PolarDB**: a PolarDB database
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source instance. This parameter supports only exact matches.
   * 
   * @example
   * i-bp19ienyt0yax748****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The status of the source instance. You can use this parameter to filter the results.
   * 
   * - **Normal**: The instance is running.
   * 
   * - **RemoteRelease**: The instance is released.
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

