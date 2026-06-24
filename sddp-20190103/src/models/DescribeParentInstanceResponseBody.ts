// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentInstanceResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The audit authorization status. Valid values:
   * 
   * - **1**: Authorized.
   * 
   * - **0**: Unauthorized.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The authorization status of the data asset instance.
   * 
   * - **0**: Unauthorized.
   * 
   * - **1**: Authorized.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * The time when the instance was authorized. Unit: milliseconds.
   * 
   * @example
   * 1719882941000
   */
  authTime?: number;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The type of the connection node. This parameter is valid only for MongoDB assets.
   * 
   * @example
   * Primary
   */
  connectNode?: string;
  /**
   * @remarks
   * The number of databases in the instance.
   * 
   * @example
   * 3
   */
  dbNum?: string;
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
   * The description of the instance.
   * 
   * @example
   * instance description
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-*******t2vz
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage space of the instance. This parameter is valid only for OSS assets. Unit: bytes.
   * 
   * @example
   * 409600
   */
  instanceSize?: number;
  /**
   * @remarks
   * The name of the region. The following list describes the valid values:
   * 
   * - **China (Hangzhou)**
   * 
   * - **China (Shanghai)**
   * 
   * - **China (Beijing)**
   * 
   * - **China (Zhangjiakou)**
   * 
   * - **China (Shenzhen)**
   * 
   * - **China (Guangzhou)**
   * 
   * - **China (Hong Kong)**
   * 
   * - **Singapore**
   * 
   * - **US (Silicon Valley)**
   * 
   * @example
   * cn-hangzhou
   */
  localName?: string;
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
   * The identifier of the authorized asset. If the asset is structured data, the identifier is in the format of \\`Instance ID.Database name\\`.
   * 
   * @example
   * rm-******xxx.**st
   */
  parentId?: string;
  /**
   * @remarks
   * The region where the asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the asset type. Valid values:
   * 
   * - **MaxCompute**
   * 
   * - **OSS**
   * 
   * - **ADB-MYSQL**
   * 
   * - **TableStore**
   * 
   * - **RDS**
   * 
   * - **SelfDB**
   * 
   * - **PolarDB-X**
   * 
   * - **PolarDB**
   * 
   * - **ADB-PG**
   * 
   * - **OceanBase**
   * 
   * - **MongoDB**
   * 
   * - **Redis**
   * 
   * @example
   * RDS
   */
  resourceType?: string;
  /**
   * @remarks
   * The supported connection nodes. Multiple nodes are separated by commas.
   * 
   * @example
   * Primary,Secondary
   */
  supportConnectNodes?: string;
  /**
   * @remarks
   * The tenant ID. This parameter is valid only for OceanBase assets.
   * 
   * @example
   * HB***-zh_CN
   */
  tenantId?: string;
  /**
   * @remarks
   * The tenant name. This parameter is valid only for OceanBase assets.
   * 
   * @example
   * user1
   */
  tenantName?: string;
  /**
   * @remarks
   * The number of unconnected databases in the instance.
   * 
   * @example
   * 1
   */
  unConnectDbCount?: string;
  /**
   * @remarks
   * The reason why one-click authorization is not supported.
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
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of queried data assets.
   */
  items?: DescribeParentInstanceResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of data asset instances returned on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ACEF9334-BB50-525D-8CF3-6CF504E4D1B3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

