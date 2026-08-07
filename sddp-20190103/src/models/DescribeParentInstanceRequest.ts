// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization status of the data asset instance. Valid values:
   * - **0**: Unauthorized.
   * - **1**: Authorized.
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * The database connection status of the instance or the database under the instance. Valid values:
   * - **-3**: The database is not created.
   * - **-2**: Released.
   * - **-1**: Not connected.
   * - **2**: Connectivity test in progress.
   * - **3**: Connected.
   * - **4**: Connection failed.
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * - **Running**: Running.
   * - **Released**: Released.
   * - **DatabaseNotCreated**: The database is not created.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The page number when paging is used. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_**t
   */
  dbName?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - **MySQL**
   * - **MariaDB**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The instance ID of the asset to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-*******xx
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh_cn**: Chinese (Simplified). This is the default value.
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the member accounts.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The number of entries per page when paging is used. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Required. The product type. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SelfDB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  resourceType?: number;
  /**
   * @remarks
   * The region where the asset resides. Valid values:
   * - **cn-beijing**: China (Beijing).
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * - **cn-huhehaote**: China (Hohhot).
   * - **cn-hangzhou**: China (Hangzhou).
   * - **cn-shanghai**: China (Shanghai).
   * - **cn-shenzhen**: China (Shenzhen).
   * - **cn-hongkong**: Hong Kong (China).
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

