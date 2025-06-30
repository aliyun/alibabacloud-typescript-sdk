// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization status of the data asset instance.
   * - **0**: Unauthorized
   * - **1**: Authorized
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * Connection status of the instance or the database under the instance. Values:
   * - **-3**: Database not created
   * - **-2**: Released
   * - **-1**: Not connected
   * - **2**: Connectivity test in progress
   * - **3**: Connected
   * - **4**: Connection failed
   * 
   * @example
   * 3
   */
  checkStatus?: number;
  /**
   * @remarks
   * Instance status.
   * - **Running**: Running
   * - **Released**: Released
   * - **DatabaseNotCreated**: Database not created
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * When performing a paginated query, set the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * db_**t
   */
  dbName?: string;
  /**
   * @remarks
   * Engine type. Values:
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
   * The instance ID to which the data in the data asset table belongs.
   * 
   * @example
   * rm-*******xx
   */
  instanceId?: string;
  /**
   * @remarks
   * Language type for request and response messages. Values:
   * - **zh_cn**: Default, Simplified Chinese
   * - **en_us**: English (US)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Member account ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * When performing a paginated query, set the number of rows per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Valid values:
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
   * The region where the asset is located. Values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * - **cn-huhehaote**: China (Hohhot)
   * - **cn-hangzhou**: China (Hangzhou)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **cn-hongkong**:  China (Hong Kong)
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

