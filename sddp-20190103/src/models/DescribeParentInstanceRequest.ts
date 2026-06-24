// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the data asset instance.
   * 
   * - **0**: Unauthorized.
   * 
   * - **1**: Authorized.
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * The connection status of the instance or a database in the instance. Valid values:
   * 
   * - **-3**: The database is not created.
   * 
   * - **-2**: Released.
   * 
   * - **-1**: Not connected.
   * 
   * - **2**: Testing connectivity.
   * 
   * - **3**: Connected.
   * 
   * - **4**: Connection failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The instance status.
   * 
   * - **Running**: Running.
   * 
   * - **Released**: Released.
   * 
   * - **DatabaseNotCreated**: Database not created.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The number of the page to return for a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db_**t
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * - **MySQL**.
   * 
   * - **MariaDB**.
   * 
   * - **Oracle**.
   * 
   * - **PostgreSQL**.
   * 
   * - **SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the data asset instance.
   * 
   * @example
   * rm-*******xx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese. This is the default value.
   * 
   * - **en_us**: U.S. English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required. The type of the product. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: TableStore
   * 
   * - **5**: RDS
   * 
   * - **6**: Self-managed database
   * 
   * - **7**: PolarDB-X
   * 
   * - **8**: PolarDB
   * 
   * - **9**: ADB-PG
   * 
   * - **10**: OceanBase
   * 
   * - **11**: MongoDB
   * 
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The region where the asset resides. Valid values:
   * 
   * - **cn-beijing**: China (Beijing).
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * 
   * - **cn-huhehaote**: China (Hohhot).
   * 
   * - **cn-hangzhou**: China (Hangzhou).
   * 
   * - **cn-shanghai**: China (Shanghai).
   * 
   * - **cn-shenzhen**: China (Shenzhen).
   * 
   * - **cn-hongkong**: China (Hong Kong).
   * 
   * @example
   * cn-shanghai
   */
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      checkStatus: 'CheckStatus',
      clusterStatus: 'ClusterStatus',
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'number',
      checkStatus: 'number',
      clusterStatus: 'string',
      currentPage: 'number',
      dbName: 'string',
      engineType: 'string',
      instanceId: 'string',
      lang: 'string',
      memberAccount: 'number',
      pageSize: 'number',
      resourceType: 'number',
      serviceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

