// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentInstanceResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Audit authorization status. The values are as follows:
   * - **1**: Authorized
   * - **0**: Unauthorized
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Authorization status of the data asset instance.
   * - **0**: Unauthorized
   * - **1**: Authorized
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Instance authorization time, in milliseconds.
   * 
   * @example
   * 1719882941000
   */
  authTime?: number;
  /**
   * @remarks
   * Instance status.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * Connection node type, valid only for MongoDB assets.
   * 
   * @example
   * Primary
   */
  connectNode?: string;
  /**
   * @remarks
   * Number of databases under the instance.
   * 
   * @example
   * 3
   */
  dbNum?: string;
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
   * Description of the instance.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rm-*******t2vz
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance space size, valid only for OSS assets. Unit: bytes.
   * 
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @remarks
   * Region name. The values are as follows:
   * 
   * - **China (Hangzhou)**
   * - **China (Shanghai)**
   * - **China (Beijing)**
   * - **China (Zhangjiakou)**
   * - **China (Shenzhen)**
   * - **China (Guangzhou)**
   * - **China (Hong Kong)**
   * - **Singapore**
   * - **US (Silicon Valley)**
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
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
   * Identifier for the authorized asset. For structured data, it is identified by `instanceID.databaseName`.
   * 
   * @example
   * rm-******xxx.**st
   */
  parentId?: string;
  /**
   * @remarks
   * The region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Asset type name. The values are as follows:
   * - **MaxCompute**
   * - **OSS**
   * - **ADB-MYSQL**
   * - **TableStore**
   * - **RDS**
   * - **SelfDB**
   * - **PolarDB-X**
   * - **PolarDB**
   * - **ADB-PG**
   * - **OceanBase**
   * - **MongoDB**
   * - **Redis**
   * 
   * @example
   * RDS
   */
  resourceType?: string;
  /**
   * @remarks
   * Supported connection nodes, separated by commas.
   * 
   * @example
   * Primary,Secondary
   */
  supportConnectNodes?: string;
  /**
   * @remarks
   * Tenant ID, valid only for OceanBase assets.
   * 
   * @example
   * HB***-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * Tenant name, valid only for OceanBase assets.
   * 
   * @example
   * user1
   */
  tenantName?: string;
  /**
   * @remarks
   * Number of unconnected databases under the instance.
   * 
   * @example
   * 1
   */
  unConnectDbCount?: string;
  /**
   * @remarks
   * Reason for not supporting one-click authorization.
   * 
   * @example
   * engine type not support
   */
  unSupportOneClickAuthReason?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authStatus: 'AuthStatus',
      authTime: 'AuthTime',
      clusterStatus: 'ClusterStatus',
      connectNode: 'ConnectNode',
      dbNum: 'DbNum',
      engineType: 'EngineType',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceSize: 'InstanceSize',
      localName: 'LocalName',
      memberAccount: 'MemberAccount',
      parentId: 'ParentId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      supportConnectNodes: 'SupportConnectNodes',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      unConnectDbCount: 'UnConnectDbCount',
      unSupportOneClickAuthReason: 'UnSupportOneClickAuthReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      authStatus: 'number',
      authTime: 'number',
      clusterStatus: 'string',
      connectNode: 'string',
      dbNum: 'string',
      engineType: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceSize: 'number',
      localName: 'string',
      memberAccount: 'number',
      parentId: 'string',
      regionId: 'string',
      resourceType: 'string',
      supportConnectNodes: 'string',
      tenantId: 'string',
      tenantName: 'string',
      unConnectDbCount: 'string',
      unSupportOneClickAuthReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParentInstanceResponseBody extends $dara.Model {
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
   * The assets.
   */
  items?: DescribeParentInstanceResponseBodyItems[];
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances displayed per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID of the result.
   * 
   * @example
   * ACEF9334-BB50-525D-8CF3-6CF504E4D1B3
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data items in the result.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeParentInstanceResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

