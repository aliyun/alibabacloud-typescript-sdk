// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateDBClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-1ls3sg0po0****
   */
  clusterId?: string;
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 219543646290345
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestMultiZone extends $dara.Model {
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21137950671****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The time when the scheduled scaling rule is executed.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 5465
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 220088764060782
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDBInstanceClassResponseBodyClassCodeList extends $dara.Model {
  /**
   * @example
   * selectdb.xlarge
   */
  classCode?: string;
  /**
   * @example
   * 4
   */
  cpuCores?: number;
  /**
   * @example
   * 200
   */
  defaultStorageInGB?: number;
  /**
   * @example
   * 2000
   */
  maxStorageInGB?: number;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 32
   */
  memoryInGB?: number;
  /**
   * @example
   * 100
   */
  minStorageInGB?: number;
  /**
   * @example
   * 100
   */
  stepStorageInGB?: number;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      cpuCores: 'CpuCores',
      defaultStorageInGB: 'DefaultStorageInGB',
      maxStorageInGB: 'MaxStorageInGB',
      memoryInGB: 'MemoryInGB',
      minStorageInGB: 'MinStorageInGB',
      stepStorageInGB: 'StepStorageInGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      cpuCores: 'number',
      defaultStorageInGB: 'number',
      maxStorageInGB: 'number',
      memoryInGB: 'number',
      minStorageInGB: 'number',
      stepStorageInGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponseBodyDataParams extends $dara.Model {
  /**
   * @remarks
   * The comments on the parameter.
   */
  comment?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 15
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter immediately takes effect without requiring a restart.
   * 
   * @example
   * true
   */
  isDynamic?: number;
  /**
   * @remarks
   * Indicates whether the parameter is modifiable.
   * 
   * @example
   * true
   */
  isUserModifiable?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * doris_scanner_thread_pool_thread_num
   */
  name?: string;
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * @example
   * [0-20000]
   */
  optional?: string;
  /**
   * @remarks
   * The category of the parameter.
   */
  paramCategory?: string;
  /**
   * @remarks
   * The current value of the parameter.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      defaultValue: 'DefaultValue',
      isDynamic: 'IsDynamic',
      isUserModifiable: 'IsUserModifiable',
      name: 'Name',
      optional: 'Optional',
      paramCategory: 'ParamCategory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      defaultValue: 'string',
      isDynamic: 'number',
      isUserModifiable: 'number',
      name: 'string',
      optional: 'string',
      paramCategory: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The numeric ID of the instance.
   * 
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The details about each parameter returned.
   */
  params?: DescribeDBClusterConfigResponseBodyDataParams[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 107841167
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      params: 'Params',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      params: { 'type': 'array', 'itemType': DescribeDBClusterConfigResponseBodyDataParams },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs extends $dara.Model {
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-03-08T10:08Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the change log.
   * 
   * @example
   * 617975
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the modification has taken effect.
   * 
   * @example
   * false
   */
  isApplied?: boolean;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * cumulative_compaction_rounds_for_each_base_compaction_round
   */
  name?: string;
  /**
   * @example
   * 12
   */
  newValue?: string;
  /**
   * @example
   * 10
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isApplied: 'IsApplied',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isApplied: 'boolean',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02-be
   */
  dbClusterId?: string;
  /**
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The parameter change logs.
   */
  paramChangeLogs?: DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 107841167
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      paramChangeLogs: 'ParamChangeLogs',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      paramChangeLogs: { 'type': 'array', 'itemType': DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paramChangeLogs)) {
      $dara.Model.validateArray(this.paramChangeLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBClusterList extends $dara.Model {
  /**
   * @remarks
   * The cache size. Unit: GB.
   * 
   * @example
   * 200
   */
  cacheStorageSizeGB?: string;
  /**
   * @remarks
   * The cache type.
   * 
   * @example
   * cloud_essd
   */
  cacheStorageType?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  clusterBinding?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 8
   */
  cpuCores?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The specifications of the cluster. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory.
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory.
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory.
   * *   **selectdb.8xlarge**: 32 CPU cores and 256 GB of memory.
   * *   **selectdb.16xlarge**: 64 CPU cores and 512 GB of memory.
   * *   **selectdb.24xlarge**: 96 CPU cores and 768 GB of memory.
   * *   **selectdb.32xlarge**: 128 CPU cores and 1,024 GB of memory.
   * 
   * @example
   * selectdb.2xlarge
   */
  dbClusterClass?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * selectdb-cn-h033cjs****-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test01
   */
  dbClusterName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test instance
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 64
   */
  memory?: number;
  /**
   * @remarks
   * The modified time.
   * 
   * @example
   * 2024-07-02T16:35:44+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The performance level.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  scalingRulesEnable?: boolean;
  /**
   * @remarks
   * The time when the cluster started.
   * 
   * @example
   * 2023-08-14T09:24:13Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **CREATING**: The cluster is being created.
   * *   **ACTIVATION**: The cluster is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the cluster is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the cluster is being changed and the cluster is write-locked.
   * *   **DELETING**: The cluster is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  subDomain?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheStorageSizeGB: 'CacheStorageSizeGB',
      cacheStorageType: 'CacheStorageType',
      chargeType: 'ChargeType',
      clusterBinding: 'ClusterBinding',
      cpuCores: 'CpuCores',
      createdTime: 'CreatedTime',
      dbClusterClass: 'DbClusterClass',
      dbClusterId: 'DbClusterId',
      dbClusterName: 'DbClusterName',
      dbInstanceName: 'DbInstanceName',
      memory: 'Memory',
      modifiedTime: 'ModifiedTime',
      performanceLevel: 'PerformanceLevel',
      scalingRulesEnable: 'ScalingRulesEnable',
      startTime: 'StartTime',
      status: 'Status',
      subDomain: 'SubDomain',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheStorageSizeGB: 'string',
      cacheStorageType: 'string',
      chargeType: 'string',
      clusterBinding: 'string',
      cpuCores: 'number',
      createdTime: 'string',
      dbClusterClass: 'string',
      dbClusterId: 'string',
      dbClusterName: 'string',
      dbInstanceName: 'string',
      memory: 'number',
      modifiedTime: 'string',
      performanceLevel: 'string',
      scalingRulesEnable: 'boolean',
      startTime: 'string',
      status: 'string',
      subDomain: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyMultiZone extends $dara.Model {
  availableIpCount?: number;
  cidr?: string;
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpCount: 'AvailableIpCount',
      cidr: 'Cidr',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpCount: 'number',
      cidr: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * The port that is used to connect to the BE cluster.
   * 
   * @example
   * MySQLPort/HttpPort
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port.
   * 
   * @example
   * 9030/8080
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-****-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection string of the BE cluster.
   * 
   * @example
   * selectdb-cn-****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 8.131.***.***
   */
  ip?: string;
  /**
   * @remarks
   * The network type of the BE cluster.
   * 
   * @example
   * VPC/PUBLIC
   */
  netType?: string;
  portList?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the network information is visible to users.
   * 
   * @example
   * true/false
   */
  userVisible?: boolean;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * selectdb-cn-****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionString: 'ConnectionString',
      ip: 'Ip',
      netType: 'NetType',
      portList: 'PortList',
      userVisible: 'UserVisible',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionString: 'string',
      ip: 'string',
      netType: 'string',
      portList: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList },
      userVisible: 'boolean',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * MySQLPort
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port. Valid values:
   * 
   * *   **HttpPort**: HTTP port.
   * *   **MySQLPort**: MySQL port.
   * 
   * @example
   * 9030
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-****-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection string of the instance.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: indicates a virtual private cloud (VPC)-connected instance.
   * *   **PUBLIC**: indicates an Internet-connected instance.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The ports.
   */
  portList?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList[];
  /**
   * @remarks
   * Indicates whether the network information is visible to users. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  userVisible?: boolean;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz90scxq6ods388ft****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * @example
   * selectdb-cn-h033cnd****-fe-20230816101006
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6mlqti065rer6m0****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionString: 'ConnectionString',
      ip: 'Ip',
      netType: 'NetType',
      portList: 'PortList',
      userVisible: 'UserVisible',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionString: 'string',
      ip: 'string',
      netType: 'string',
      portList: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList },
      userVisible: 'boolean',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequestTag extends $dara.Model {
  /**
   * @example
   * testKey
   */
  key?: string;
  /**
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsMultiZone extends $dara.Model {
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsTags extends $dara.Model {
  /**
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The edition of the instance. Default value: basic.
   * 
   * @example
   * basic
   */
  category?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 1
   */
  clusterCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  deployScheme?: string;
  /**
   * @remarks
   * The description of the instance.
   */
  description?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  engineMinorVersion?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * >  A specific value is returned only for subscription clusters whose billing method is **Prepaid**. For pay-as-you-go clusters whose billing method is **Postpaid**, no value is returned.
   * 
   * @example
   * 2024-03-29T03:47:05Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-12T04:14Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-12T19:05Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Instance
   */
  instanceUsedType?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The lock mode of the instance.
   * 
   * @example
   * 0
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason why the instance is locked.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The end timestamp of the maintenance window.
   */
  maintainEndTimeStr?: string;
  /**
   * @remarks
   * The end time of the instance maintenance window.
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start timestamp of the maintenance window.
   */
  maintainStartTimeStr?: string;
  /**
   * @remarks
   * The start time of the instance maintenance window.
   */
  maintainStarttime?: string;
  multiZone?: DescribeDBInstancesResponseBodyItemsMultiZone[];
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 200
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The time when the instance was created.
   */
  parentInstance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The ID of the resource group.
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The memory capacity of the instance.
   * 
   * @example
   * 64
   */
  resourceMemory?: number;
  /**
   * @remarks
   * The maximum number of RCUs.
   * 
   * @example
   * 0
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum number of RDS capacity units (RCUs).
   * 
   * @example
   * 0
   */
  scaleMin?: number;
  /**
   * @remarks
   * This parameter is not returned.
   */
  scaleReplica?: number;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the instance is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the instance is being changed and the instance is write-locked.
   * *   **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The cache size.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The details about each tag returned.
   */
  tags?: DescribeDBInstancesResponseBodyItemsTags[];
  /**
   * @remarks
   * The ID of the cluster that is monitored by Managed Service for Prometheus.
   */
  tenantClusterId?: string;
  /**
   * @remarks
   * The token that is used to access Managed Service for Prometheus.
   */
  tenantToken?: string;
  /**
   * @remarks
   * The ID of the account that uses Managed Service for Prometheus.
   */
  tenantUserId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  /**
   * @remarks
   * The connection string of the instance.
   */
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      chargeType: 'ChargeType',
      clusterCount: 'ClusterCount',
      DBInstanceId: 'DBInstanceId',
      deployScheme: 'DeployScheme',
      description: 'Description',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instanceUsedType: 'InstanceUsedType',
      isDeleted: 'IsDeleted',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTimeStr: 'MaintainEndTimeStr',
      maintainEndtime: 'MaintainEndtime',
      maintainStartTimeStr: 'MaintainStartTimeStr',
      maintainStarttime: 'MaintainStarttime',
      multiZone: 'MultiZone',
      objectStoreSize: 'ObjectStoreSize',
      parentInstance: 'ParentInstance',
      regionId: 'RegionId',
      resourceCpu: 'ResourceCpu',
      resourceGroupId: 'ResourceGroupId',
      resourceMemory: 'ResourceMemory',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleReplica: 'ScaleReplica',
      status: 'Status',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      tenantClusterId: 'TenantClusterId',
      tenantToken: 'TenantToken',
      tenantUserId: 'TenantUserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
      connectionString: 'connectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      chargeType: 'string',
      clusterCount: 'number',
      DBInstanceId: 'string',
      deployScheme: 'string',
      description: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      instanceUsedType: 'string',
      isDeleted: 'boolean',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTimeStr: 'string',
      maintainEndtime: 'string',
      maintainStartTimeStr: 'string',
      maintainStarttime: 'string',
      multiZone: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsMultiZone },
      objectStoreSize: 'number',
      parentInstance: 'string',
      regionId: 'string',
      resourceCpu: 'number',
      resourceGroupId: 'string',
      resourceMemory: 'number',
      scaleMax: 'number',
      scaleMin: 'number',
      scaleReplica: 'number',
      status: 'string',
      storageSize: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsTags },
      tenantClusterId: 'string',
      tenantToken: 'string',
      tenantUserId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
      connectionString: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The time when you want to execute the scheduled scaling rule.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 5467
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The details of the rules.
   */
  rules?: DescribeElasticRulesResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeElasticRulesResponseBodyDataRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionModelListZones extends $dara.Model {
  /**
   * @remarks
   * The zone description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the VPC is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The zone name.
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * cn-beijing-h-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * Indicates whether the VPC is enabled.
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual private cloud (VPC) is available.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disabled: 'Disabled',
      label: 'Label',
      name: 'Name',
      regionId: 'RegionId',
      subDomain: 'SubDomain',
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disabled: 'boolean',
      label: 'string',
      name: 'string',
      regionId: 'string',
      subDomain: 'string',
      vpcEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionModelList extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * An array of zones.
   */
  zones?: DescribeRegionsResponseBodyRegionModelListZones[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModelListZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBodyGroupItems extends $dara.Model {
  /**
   * @remarks
   * The IP address type. Valid values:
   * 
   * *   ipv4
   * *   ipv6 (not supported)
   * 
   * @example
   * ipv4
   */
  aecurityIPType?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * ""
   */
  groupTag?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      aecurityIPType: 'AecurityIPType',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      securityIPList: 'SecurityIPList',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aecurityIPType: 'string',
      groupName: 'string',
      groupTag: 'string',
      securityIPList: 'string',
      whitelistNetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnDisableScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-pe33jc1nd01-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the scheduled scaling policy is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  scalingRulesEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      scalingRulesEnable: 'ScalingRulesEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      scalingRulesEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateBEClusterInquiryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of money.
   * 
   * @example
   * 1.76
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      tradeAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModifyBEClusterInquiryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of money.
   * 
   * @example
   * 1.76
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      tradeAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  DBClusterId?: string;
  /**
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @example
   * 219396937240838
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-wny3li00g02-be
   */
  dbClusterId?: string;
  /**
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @example
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @example
   * 107878719
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-zpr3if5wq03-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The time when the scheduled scaling rule is executed.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 29252
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-7213c8y****-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the endpoint. Set the parameter to the prefix of the value of **ConnectionString**.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-h033cn****-pub-i3
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the endpoint to be applied for. Set the value to Public.
   * 
   * This parameter is required.
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      netType: 'NetType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      netType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   */
  instanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5ED62C81-9948-5612-81E1-EA3853752306
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 498115273
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateInstancePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateInstancePublicConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory.
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory.
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory.
   * *   **selectdb.8xlarge**: 32 CPU cores and 256 GB of memory.
   * *   **selectdb.16xlarge**: 64 CPU cores and 512 GB of memory.
   * *   **selectdb.24xlarge**: 96 CPU cores and 768 GB of memory.
   * *   **selectdb.32xlarge**: 128 CPU cores and 1,024 GB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * SelectDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 172.16.XX.XX/12,192.168.XX.XX/22
   */
  securityIPList?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * *   If Period is set to Year, valid values of UsedTime are 1, 2, 3, 4, and 5.
   * *   If Period is set to Month, valid values of UsedTime are 1 to 12.
   * 
   * >  This parameter takes effect and is required only if ChargeType is set to Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clientToken: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      engine: 'string',
      engineVersion: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateDBInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCreateDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckCreateDBInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleRequest extends $dara.Model {
  ownerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @example
   * False
   */
  hasServiceLinkedRole?: boolean;
  /**
   * @example
   * 1F455133-981E-5AD0-80EB-26EA1EF3C65F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckServiceLinkedRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'string',
      chargeType: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      period: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponseBody extends $dara.Model {
  data?: CreateDBClusterResponseBodyData;
  /**
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDBClusterResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size.
   * 
   * This parameter is required.
   * 
   * @example
   * 200GB
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * The instance is created for testing.
   */
  DBInstanceDescription?: string;
  deployScheme?: string;
  /**
   * @remarks
   * The database engine of the instance. Default value: **selectdb**.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Default value: **2.4**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * **if can be null:**
   * false
   */
  multiZone?: CreateDBInstanceRequestMultiZone[];
  /**
   * @remarks
   * The unit of the subscription duration of the cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzt2zaluvuvqa_fake
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 192.168.1.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   Valid values when Period is set to Year: 1, 2, 3, and 5 (integer)
   * *   Valid values when Period is set to Month: 1 to 9 (integer)
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      deployScheme: 'DeployScheme',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZone: 'MultiZone',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      tag: 'Tag',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clientToken: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      deployScheme: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZone: { 'type': 'array', 'itemType': CreateDBInstanceRequestMultiZone },
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved cache size.
   * 
   * This parameter is required.
   * 
   * @example
   * 200GB
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AB
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance endpoint.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   **selectdb.xlarge**: 4 CPU cores and 32 GB of memory
   * *   **selectdb.2xlarge**: 8 CPU cores and 64 GB of memory
   * *   **selectdb.4xlarge**: 16 CPU cores and 128 GB of memory
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.xlarge
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * The instance is created for testing.
   */
  DBInstanceDescription?: string;
  deployScheme?: string;
  /**
   * @remarks
   * The database engine of the instance. Default value: **selectdb**.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Default value: **2.4**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * **if can be null:**
   * false
   */
  multiZoneShrink?: string;
  /**
   * @remarks
   * The unit of the subscription duration of the cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzt2zaluvuvqa_fake
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 192.168.1.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   Valid values when Period is set to Year: 1, 2, 3, and 5 (integer)
   * *   Valid values when Period is set to Month: 1 to 9 (integer)
   * 
   * >  This parameter takes effect and is required only when **ChargeType** is set to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      connectionString: 'ConnectionString',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      deployScheme: 'DeployScheme',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      multiZoneShrink: 'MultiZone',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
      tagShrink: 'Tag',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clientToken: 'string',
      connectionString: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      deployScheme: 'string',
      engine: 'string',
      engineVersion: 'string',
      multiZoneShrink: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
      tagShrink: 'string',
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateDBInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDBInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The time when you want to execute the scheduled scaling rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * This parameter is required.
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateElasticRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateElasticRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateElasticRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateElasticRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForSelectDBRequest extends $dara.Model {
  ownerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForSelectDBResponseBody extends $dara.Model {
  /**
   * @example
   * F203FA74-3041-589F-BE66-E570793A0C91
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForSelectDBResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleForSelectDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceLinkedRoleForSelectDBResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBody extends $dara.Model {
  data?: DeleteDBClusterResponseBodyData;
  /**
   * @example
   * F203FA74-3041-589F-BE66-E570793A0C91
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDBClusterResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * BD0D0B17-C145-5B91-BFC2-6791927EE973
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-xxx302i5-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100458
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the deletion is successful.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteElasticRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteElasticRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDBInstanceClassRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDBInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance specifications.
   */
  classCodeList?: DescribeAllDBInstanceClassResponseBodyClassCodeList[];
  /**
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      classCodeList: 'ClassCodeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCodeList: { 'type': 'array', 'itemType': DescribeAllDBInstanceClassResponseBodyClassCodeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.classCodeList)) {
      $dara.Model.validateArray(this.classCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDBInstanceClassResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllDBInstanceClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllDBInstanceClassResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration file to be modified.
   * 
   * *   For a compute cluster, set the value to be.conf.
   * *   For a frontend (FE) cluster, set the value to fe.conf.
   * 
   * This parameter is required.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) authentication failed.
   * 
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The information returned.
   */
  data?: DescribeDBClusterConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not returned.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeDBClusterConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration file that you want to modify. For a compute cluster, set the value to be.conf. For a frontend (FE) cluster, set the value to fe.conf.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-jia3ma3b003
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-08T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-25T09:48:23Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponseBody extends $dara.Model {
  /**
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The information returned.
   */
  data?: DescribeDBClusterConfigChangeLogsResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not returned.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: DescribeDBClusterConfigChangeLogsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigChangeLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterConfigChangeLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterConfigChangeLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  canUpgradeVersions?: string[];
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2023-08-14T03:00:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The information about each cluster returned.
   */
  DBClusterList?: DescribeDBInstanceAttributeResponseBodyDBClusterList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  deployScheme?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * The minor kernel version number of the instance.
   * 
   * @example
   * 3.0.1
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2023-09-17T00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance was last modified, such as when you restarted the instance or applied for a public endpoint for the instance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * @example
   * 2023-08-17T09:58Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The lock mode of the instance. Set the value to **lock**, which specifies that the instance is locked when it automatically expires or has an overdue payment.
   * 
   * @example
   * lock
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason why the instance is locked.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the instance maintenance window.
   * 
   * @example
   * 1970-01-01T05:00Z
   */
  maintainEndtime?: string;
  /**
   * @remarks
   * The start time of the instance maintenance window.
   * 
   * @example
   * 1970-01-01T02:00Z
   */
  maintainStarttime?: string;
  /**
   * **if can be null:**
   * true
   */
  multiZone?: DescribeDBInstanceAttributeResponseBodyMultiZone[];
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 0
   */
  objectStoreSize?: number;
  /**
   * @remarks
   * The Region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  resourceCpu?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzbck4asz3dsa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the instance is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the instance is being changed and the instance is write-locked.
   * *   **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The cache size.
   * 
   * @example
   * 400
   */
  storageSize?: number;
  /**
   * @remarks
   * The subdomain zone ID.
   * 
   * @example
   * cn-beijing-h-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * The tags that are added to the instances. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. Format: `{"key1":"value1"}`.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyTags[];
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      canUpgradeVersions: 'CanUpgradeVersions',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      DBClusterList: 'DBClusterList',
      DBInstanceId: 'DBInstanceId',
      deployScheme: 'DeployScheme',
      description: 'Description',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      gmtModified: 'GmtModified',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndtime: 'MaintainEndtime',
      maintainStarttime: 'MaintainStarttime',
      multiZone: 'MultiZone',
      objectStoreSize: 'ObjectStoreSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceCpu: 'ResourceCpu',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageSize: 'StorageSize',
      subDomain: 'SubDomain',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUpgradeVersions: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
      createTime: 'string',
      DBClusterList: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBClusterList },
      DBInstanceId: 'string',
      deployScheme: 'string',
      description: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      gmtModified: 'string',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndtime: 'string',
      maintainStarttime: 'string',
      multiZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyMultiZone },
      objectStoreSize: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceCpu: 'number',
      resourceGroupId: 'string',
      status: 'string',
      storageSize: 'number',
      subDomain: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyTags },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canUpgradeVersions)) {
      $dara.Model.validateArray(this.canUpgradeVersions);
    }
    if(Array.isArray(this.DBClusterList)) {
      $dara.Model.validateArray(this.DBClusterList);
    }
    if(Array.isArray(this.multiZone)) {
      $dara.Model.validateArray(this.multiZone);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network information about the backend (BE) clusters.
   */
  DBClustersNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos[];
  /**
   * @remarks
   * The network information about the instance.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClustersNetInfos: 'DBClustersNetInfos',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClustersNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos },
      DBInstanceNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBClustersNetInfos)) {
      $dara.Model.validateArray(this.DBClustersNetInfos);
    }
    if(Array.isArray(this.DBInstanceNetInfos)) {
      $dara.Model.validateArray(this.DBInstanceNetInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBInstanceNetInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the instance is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the instance is being changed and the instance is write-locked.
   * *   **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  tag?: DescribeDBInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceStatus: 'DBInstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceIds?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **RESOURCE_CHANGING**: The resource configuration of the instance is being changed.
   * *   **ORDER_PREPARING**: The order is being confirmed.
   * *   **READONLY_RESOURCE_CHANGING**: The resource configuration of the instance is being changed and the instance is write-locked.
   * *   **DELETING**: The instance is being deleted.
   * 
   * @example
   * ACTIVATION
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceIds: 'DBInstanceIds',
      DBInstanceStatus: 'DBInstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceIds: 'string',
      DBInstanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about each instance returned.
   */
  items?: DescribeDBInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

export class DescribeDBInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeElasticRulesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeElasticRulesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of regions.
   */
  regionModelList?: DescribeRegionsResponseBodyRegionModelList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModelList: 'RegionModelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModelList: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModelList)) {
      $dara.Model.validateArray(this.regionModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The details about each IP address whitelist returned.
   */
  groupItems?: DescribeSecurityIPListResponseBodyGroupItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CBE044D-4594-525D-AC65-E988553D853E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIPListResponseBodyGroupItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityIPListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityIPListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnDisableScalingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling policy.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  scalingRulesEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRulesEnable: 'ScalingRulesEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      scalingRulesEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnDisableScalingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: EnDisableScalingRulesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: EnDisableScalingRulesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnDisableScalingRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnDisableScalingRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnDisableScalingRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateBEClusterInquiryRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the elastic cache.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values:
   * 
   * *   selectdb_pre_public_intl: subscription commodity on the international site (alibabacloud.com)
   * *   selectdb_go_public_cn: pay-as-you-go commodity on the China site (aliyun.com)
   * *   selectdb_go_public_intl: pay-as-you-go commodity on the international site (alibabacloud.com)
   * *   selectdb_pre_public_cn: subscription commodity on the China site (aliyun.com).
   * 
   * @example
   * selectdb_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of elastic CPU cores.
   * 
   * @example
   * 4
   */
  computeSize?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-xxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The size of the reserved cache.
   * 
   * @example
   * 200
   */
  preCacheSize?: number;
  /**
   * @remarks
   * The number of reserved CPU cores.
   * 
   * @example
   * 4
   */
  preComputeSize?: number;
  /**
   * @remarks
   * The billing cycle.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Minute
   * *   Hour
   * *   Day
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The number of clusters to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      computeSize: 'ComputeSize',
      dbInstanceId: 'DbInstanceId',
      preCacheSize: 'PreCacheSize',
      preComputeSize: 'PreComputeSize',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      commodityCode: 'string',
      computeSize: 'number',
      dbInstanceId: 'string',
      preCacheSize: 'number',
      preComputeSize: 'number',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateBEClusterInquiryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: GetCreateBEClusterInquiryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCreateBEClusterInquiryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateBEClusterInquiryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCreateBEClusterInquiryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCreateBEClusterInquiryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModifyBEClusterInquiryRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the elastic cache.
   * 
   * @example
   * 200
   */
  cacheSize?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-xxx-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values:
   * 
   * *   selectdb_pre_public_intl: subscription commodity on the international site (alibabacloud.com)
   * *   selectdb_go_public_cn: pay-as-you-go commodity on the China site (aliyun.com)
   * *   selectdb_go_public_intl: pay-as-you-go commodity on the international site (alibabacloud.com)
   * *   selectdb_pre_public_cn: subscription commodity on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb_go_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of elastic CPU cores.
   * 
   * @example
   * 4
   */
  computeSize?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-xxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The size of the reserved cache.
   * 
   * @example
   * 200
   */
  preCacheSize?: number;
  /**
   * @remarks
   * The number of reserved CPU cores.
   * 
   * @example
   * 4
   */
  preComputeSize?: number;
  /**
   * @remarks
   * The billing cycle.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Minute
   * *   Hour
   * *   Day
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The number of clusters whose specifications are to be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      chargeType: 'ChargeType',
      clusterId: 'ClusterId',
      commodityCode: 'CommodityCode',
      computeSize: 'ComputeSize',
      dbInstanceId: 'DbInstanceId',
      preCacheSize: 'PreCacheSize',
      preComputeSize: 'PreComputeSize',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'number',
      chargeType: 'string',
      clusterId: 'string',
      commodityCode: 'string',
      computeSize: 'number',
      dbInstanceId: 'string',
      preCacheSize: 'number',
      preComputeSize: 'number',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModifyBEClusterInquiryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: GetModifyBEClusterInquiryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06758CAB-1204-5852-A471-29C87D5C1D0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModifyBEClusterInquiryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModifyBEClusterInquiryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModifyBEClusterInquiryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetModifyBEClusterInquiryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBEClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The attribute type of the instance. Set this parameter to DBInstanceDescription.
   * 
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  instanceAttributeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      instanceAttributeType: 'InstanceAttributeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      instanceAttributeType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBEClusterAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 58E21E11-90FF-50F8-A615-8DEB193676E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBEClusterAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBEClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBEClusterAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the reserved cache.
   * 
   * @example
   * 200
   */
  cacheSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb.2xlarge
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to selectdb.
   * 
   * @example
   * selectdb
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheSize: 'CacheSize',
      DBClusterClass: 'DBClusterClass',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheSize: 'string',
      DBClusterClass: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  data?: ModifyDBClusterResponseBodyData;
  /**
   * @example
   * 0BF61F90-ACED-55DF-A6FE-56714B2BFCF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      data: ModifyDBClusterResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxd8a5h60y
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform parallel operations on the cluster node.
   * 
   * @example
   * false
   */
  parallelOperation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"param1\\",\\"value\\":\\"1234577777\\"},{\\"name\\":\\"param2\\",\\"value\\":\\"${yyyyMMdd}\\"}]
   */
  parameters?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      parallelOperation: 'ParallelOperation',
      parameters: 'Parameters',
      regionId: 'RegionId',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      parallelOperation: 'boolean',
      parameters: 'string',
      regionId: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponseBody extends $dara.Model {
  /**
   * @example
   * failed
   */
  accessDeniedDetail?: string;
  data?: ModifyDBClusterConfigResponseBodyData;
  /**
   * @remarks
   * The dynamic code. This parameter is not returned.
   * 
   * @example
   * 0
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message. This parameter is not returned.
   * 
   * @example
   * An error occurred while processing your request.
   */
  dynamicMessage?: string;
  /**
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: ModifyDBClusterConfigResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance parameter to be modified. Valid values:
   * 
   * *   **MaintainTime**: Modify the maintenance window of the instance in the hh:mm-hh:mm format.
   * *   **DBInstanceDescription**: Modify the description of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  instanceAttributeType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new value of the instance parameter to be modified. Examples:
   * 
   * *   If InstanceAttributeType is set to MaintainTime, you can set Value to 00:00-06:00.
   * *   If InstanceAttributeType is set to DBInstanceDescription, you can set Value to testdb.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb01
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceAttributeType: 'InstanceAttributeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceAttributeType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DB29DEE-52E4-57EE-BF68-2C95C20E6658
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBInstanceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The time when you want to execute the scheduled scaling rule.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5467
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyElasticRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5ED62C81-9948-5612-81E1-EA3853752306
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyElasticRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyElasticRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist. Default value: **Default**.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The mode in which you want to modify the whitelist. Valid values:
   * 
   * *   **0**: overwrites the IP addresses in the whitelist.
   * *   **1**: adds IP addresses to the whitelist.
   * *   **2**: removes IP addresses from the whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  modifyMode?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.XX.XX,127.2.XX.XX
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      groupName: 'string',
      modifyMode: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the whitelist.
   * 
   * @example
   * group1
   */
  groupName?: string;
  /**
   * @remarks
   * The tag of the whitelist.
   * 
   * @example
   * grouptag
   */
  groupTag?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 195F64C2-8F11-532B-A436-FC08A221D756
   */
  requestId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.XX.XX,127.2.XX.XX
   */
  securityIPList?: string;
  /**
   * @remarks
   * The IP address type.
   * 
   * @example
   * ipv4
   */
  securityIPType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 479095561
   */
  taskId?: number;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      groupTag: 'GroupTag',
      requestId: 'RequestId',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
      taskId: 'TaskId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupName: 'string',
      groupTag: 'string',
      requestId: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
      taskId: 'number',
      whitelistNetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityIPListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifySecurityIPListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The connection string of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8y****-public.selectdbfe.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstancePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstancePublicConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The database account of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. Requirements:
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   The following special characters can be used: ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4@
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58E21E11-90FF-50F8-A615-8DEB193676E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAccountPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform parallel operations on the cluster node.
   * 
   * @example
   * false
   */
  parallelOperation?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      parallelOperation: 'ParallelOperation',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      parallelOperation: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: RestartDBClusterResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD0D0B17-C145-5B91-BFC2-6791927EE973
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RestartDBClusterResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartDBClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBEClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBEClusterResponseBody extends $dara.Model {
  /**
   * @example
   * F203FA74-3041-589F-BE66-E570793A0C91
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBEClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartBEClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartBEClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBEClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBEClusterResponseBody extends $dara.Model {
  /**
   * @example
   * BC854513-E85E-54F3-9842-B9CCD3308CDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBEClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopBEClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopBEClusterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  engineVersion?: string;
  parallelOperation?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The update mode. If you do not specify this parameter, the system immediately updates the database engine version. If you set this parameter to 1, the system updates the database engine version during the maintenance window.
   * 
   * @example
   * 1
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      parallelOperation: 'ParallelOperation',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engineVersion: 'string',
      parallelOperation: 'boolean',
      regionId: 'string',
      resourceOwnerId: 'number',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4773E4EC-025D-509F-AEA9-D53123FDFB0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBInstanceEngineVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeDBInstanceEngineVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("selectdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Applies for a public endpoint for an ApsaraDB for SelectDB instance.
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateInstancePublicConnection",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AllocateInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateInstancePublicConnectionResponse({}));
    } else {
      return $dara.cast<AllocateInstancePublicConnectionResponse>(await this.execute(params, req, runtime), new AllocateInstancePublicConnectionResponse({}));
    }

  }

  /**
   * Applies for a public endpoint for an ApsaraDB for SelectDB instance.
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * SelectDB实例创建前检查
   * 
   * @param request - CheckCreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCreateDBInstanceResponse
   */
  async checkCreateDBInstanceWithOptions(request: CheckCreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CheckCreateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCreateDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckCreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CheckCreateDBInstanceResponse({}));
    } else {
      return $dara.cast<CheckCreateDBInstanceResponse>(await this.execute(params, req, runtime), new CheckCreateDBInstanceResponse({}));
    }

  }

  /**
   * SelectDB实例创建前检查
   * 
   * @param request - CheckCreateDBInstanceRequest
   * @returns CheckCreateDBInstanceResponse
   */
  async checkCreateDBInstance(request: CheckCreateDBInstanceRequest): Promise<CheckCreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCreateDBInstanceWithOptions(request, runtime);
  }

  /**
   * 检查服务关联角色
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CheckServiceLinkedRoleResponse({}));
    } else {
      return $dara.cast<CheckServiceLinkedRoleResponse>(await this.execute(params, req, runtime), new CheckServiceLinkedRoleResponse({}));
    }

  }

  /**
   * 检查服务关联角色
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * > : For an instance that uses the pay-as-you-go billing method, you can create only pay-as-you-go clusters. For an instance that uses the subscription billing method, you can create pay-as-you-go or subscription clusters.
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<CreateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDBClusterResponse>(await this.callApi(params, req, runtime), new CreateDBClusterResponse({}));
    } else {
      return $dara.cast<CreateDBClusterResponse>(await this.execute(params, req, runtime), new CreateDBClusterResponse({}));
    }

  }

  /**
   * Creates a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @remarks
   * > : For an instance that uses the pay-as-you-go billing method, you can create only pay-as-you-go clusters. For an instance that uses the subscription billing method, you can create pay-as-you-go or subscription clusters.
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraDB for SelectDB instance.
   * 
   * @param tmpReq - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(tmpReq: CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    tmpReq.validate();
    let request = new CreateDBInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multiZone)) {
      request.multiZoneShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiZone, "MultiZone", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.deployScheme)) {
      query["DeployScheme"] = request.deployScheme;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.multiZoneShrink)) {
      query["MultiZone"] = request.multiZoneShrink;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
    } else {
      return $dara.cast<CreateDBInstanceResponse>(await this.execute(params, req, runtime), new CreateDBInstanceResponse({}));
    }

  }

  /**
   * Creates an ApsaraDB for SelectDB instance.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled scaling rule.
   * 
   * @param request - CreateElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticRuleResponse
   */
  async createElasticRuleWithOptions(request: CreateElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterClass)) {
      query["ClusterClass"] = request.clusterClass;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.elasticRuleStartTime)) {
      query["ElasticRuleStartTime"] = request.elasticRuleStartTime;
    }

    if (!$dara.isNull(request.executionPeriod)) {
      query["ExecutionPeriod"] = request.executionPeriod;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateElasticRuleResponse>(await this.callApi(params, req, runtime), new CreateElasticRuleResponse({}));
    } else {
      return $dara.cast<CreateElasticRuleResponse>(await this.execute(params, req, runtime), new CreateElasticRuleResponse({}));
    }

  }

  /**
   * Creates a scheduled scaling rule.
   * 
   * @param request - CreateElasticRuleRequest
   * @returns CreateElasticRuleResponse
   */
  async createElasticRule(request: CreateElasticRuleRequest): Promise<CreateElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticRuleWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role for ApsaraDB for SelectDB.
   * 
   * @param request - CreateServiceLinkedRoleForSelectDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleForSelectDBResponse
   */
  async createServiceLinkedRoleForSelectDBWithOptions(request: CreateServiceLinkedRoleForSelectDBRequest, runtime: $dara.RuntimeOptions): Promise<CreateServiceLinkedRoleForSelectDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRoleForSelectDB",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceLinkedRoleForSelectDBResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleForSelectDBResponse({}));
    } else {
      return $dara.cast<CreateServiceLinkedRoleForSelectDBResponse>(await this.execute(params, req, runtime), new CreateServiceLinkedRoleForSelectDBResponse({}));
    }

  }

  /**
   * Creates a service-linked role for ApsaraDB for SelectDB.
   * 
   * @param request - CreateServiceLinkedRoleForSelectDBRequest
   * @returns CreateServiceLinkedRoleForSelectDBResponse
   */
  async createServiceLinkedRoleForSelectDB(request: CreateServiceLinkedRoleForSelectDBRequest): Promise<CreateServiceLinkedRoleForSelectDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleForSelectDBWithOptions(request, runtime);
  }

  /**
   * 释放实例下集群
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDBClusterResponse>(await this.callApi(params, req, runtime), new DeleteDBClusterResponse({}));
    } else {
      return $dara.cast<DeleteDBClusterResponse>(await this.execute(params, req, runtime), new DeleteDBClusterResponse({}));
    }

  }

  /**
   * 释放实例下集群
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * 删除DB实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstance",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteDBInstanceResponse({}));
    } else {
      return $dara.cast<DeleteDBInstanceResponse>(await this.execute(params, req, runtime), new DeleteDBInstanceResponse({}));
    }

  }

  /**
   * 删除DB实例
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled scaling rule.
   * 
   * @param request - DeleteElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticRuleResponse
   */
  async deleteElasticRuleWithOptions(request: DeleteElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteElasticRuleResponse>(await this.callApi(params, req, runtime), new DeleteElasticRuleResponse({}));
    } else {
      return $dara.cast<DeleteElasticRuleResponse>(await this.execute(params, req, runtime), new DeleteElasticRuleResponse({}));
    }

  }

  /**
   * Deletes a scheduled scaling rule.
   * 
   * @param request - DeleteElasticRuleRequest
   * @returns DeleteElasticRuleResponse
   */
  async deleteElasticRule(request: DeleteElasticRuleRequest): Promise<DeleteElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about all instance specifications.
   * 
   * @param request - DescribeAllDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDBInstanceClassResponse
   */
  async describeAllDBInstanceClassWithOptions(request: DescribeAllDBInstanceClassRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAllDBInstanceClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllDBInstanceClass",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeAllDBInstanceClassResponse>(await this.callApi(params, req, runtime), new DescribeAllDBInstanceClassResponse({}));
    } else {
      return $dara.cast<DescribeAllDBInstanceClassResponse>(await this.execute(params, req, runtime), new DescribeAllDBInstanceClassResponse({}));
    }

  }

  /**
   * Queries the information about all instance specifications.
   * 
   * @param request - DescribeAllDBInstanceClassRequest
   * @returns DescribeAllDBInstanceClassResponse
   */
  async describeAllDBInstanceClass(request: DescribeAllDBInstanceClassRequest): Promise<DescribeAllDBInstanceClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDBInstanceClassWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfigWithOptions(request: DescribeDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDBClusterConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterConfig",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDBClusterConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConfigResponse({}));
    } else {
      return $dara.cast<DescribeDBClusterConfigResponse>(await this.execute(params, req, runtime), new DescribeDBClusterConfigResponse({}));
    }

  }

  /**
   * Queries the configuration information about a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigRequest
   * @returns DescribeDBClusterConfigResponse
   */
  async describeDBClusterConfig(request: DescribeDBClusterConfigRequest): Promise<DescribeDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Queries the configuration change logs of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigChangeLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConfigChangeLogsResponse
   */
  async describeDBClusterConfigChangeLogsWithOptions(request: DescribeDBClusterConfigChangeLogsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDBClusterConfigChangeLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterConfigChangeLogs",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDBClusterConfigChangeLogsResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConfigChangeLogsResponse({}));
    } else {
      return $dara.cast<DescribeDBClusterConfigChangeLogsResponse>(await this.execute(params, req, runtime), new DescribeDBClusterConfigChangeLogsResponse({}));
    }

  }

  /**
   * Queries the configuration change logs of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBClusterConfigChangeLogsRequest
   * @returns DescribeDBClusterConfigChangeLogsResponse
   */
  async describeDBClusterConfigChangeLogs(request: DescribeDBClusterConfigChangeLogsRequest): Promise<DescribeDBClusterConfigChangeLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConfigChangeLogsWithOptions(request, runtime);
  }

  /**
   * Queries the details about an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
    } else {
      return $dara.cast<DescribeDBInstanceAttributeResponse>(await this.execute(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
    }

  }

  /**
   * Queries the details about an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceNetInfo",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDBInstanceNetInfoResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceNetInfoResponse({}));
    } else {
      return $dara.cast<DescribeDBInstanceNetInfoResponse>(await this.execute(params, req, runtime), new DescribeDBInstanceNetInfoResponse({}));
    }

  }

  /**
   * Queries the network information about an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about ApsaraDB for SelectDB instances.
   * 
   * @param tmpReq - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(tmpReq: DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    tmpReq.validate();
    let request = new DescribeDBInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!$dara.isNull(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstances",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDBInstancesResponse>(await this.execute(params, req, runtime), new DescribeDBInstancesResponse({}));
    }

  }

  /**
   * Queries the information about ApsaraDB for SelectDB instances.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries scheduled scaling rules.
   * 
   * @param request - DescribeElasticRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticRulesResponse
   */
  async describeElasticRulesWithOptions(request: DescribeElasticRulesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeElasticRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticRules",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeElasticRulesResponse>(await this.callApi(params, req, runtime), new DescribeElasticRulesResponse({}));
    } else {
      return $dara.cast<DescribeElasticRulesResponse>(await this.execute(params, req, runtime), new DescribeElasticRulesResponse({}));
    }

  }

  /**
   * Queries scheduled scaling rules.
   * 
   * @param request - DescribeElasticRulesRequest
   * @returns DescribeElasticRulesResponse
   */
  async describeElasticRules(request: DescribeElasticRulesRequest): Promise<DescribeElasticRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticRulesWithOptions(request, runtime);
  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries available regions and zones.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses in the whitelists of an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPListWithOptions(request: DescribeSecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSecurityIPListResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIPListResponse({}));
    } else {
      return $dara.cast<DescribeSecurityIPListResponse>(await this.execute(params, req, runtime), new DescribeSecurityIPListResponse({}));
    }

  }

  /**
   * Queries the IP addresses in the whitelists of an ApsaraDB for SelectDB instance.
   * 
   * @param request - DescribeSecurityIPListRequest
   * @returns DescribeSecurityIPListResponse
   */
  async describeSecurityIPList(request: DescribeSecurityIPListRequest): Promise<DescribeSecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityIPListWithOptions(request, runtime);
  }

  /**
   * Uses the scheduled scaling policy.
   * 
   * @param request - EnDisableScalingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnDisableScalingRulesResponse
   */
  async enDisableScalingRulesWithOptions(request: EnDisableScalingRulesRequest, runtime: $dara.RuntimeOptions): Promise<EnDisableScalingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingRulesEnable)) {
      query["ScalingRulesEnable"] = request.scalingRulesEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnDisableScalingRules",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnDisableScalingRulesResponse>(await this.callApi(params, req, runtime), new EnDisableScalingRulesResponse({}));
    } else {
      return $dara.cast<EnDisableScalingRulesResponse>(await this.execute(params, req, runtime), new EnDisableScalingRulesResponse({}));
    }

  }

  /**
   * Uses the scheduled scaling policy.
   * 
   * @param request - EnDisableScalingRulesRequest
   * @returns EnDisableScalingRulesResponse
   */
  async enDisableScalingRules(request: EnDisableScalingRulesRequest): Promise<EnDisableScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enDisableScalingRulesWithOptions(request, runtime);
  }

  /**
   * Queries the pricing for creating a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - GetCreateBEClusterInquiryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateBEClusterInquiryResponse
   */
  async getCreateBEClusterInquiryWithOptions(request: GetCreateBEClusterInquiryRequest, runtime: $dara.RuntimeOptions): Promise<GetCreateBEClusterInquiryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateBEClusterInquiry",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCreateBEClusterInquiryResponse>(await this.callApi(params, req, runtime), new GetCreateBEClusterInquiryResponse({}));
    } else {
      return $dara.cast<GetCreateBEClusterInquiryResponse>(await this.execute(params, req, runtime), new GetCreateBEClusterInquiryResponse({}));
    }

  }

  /**
   * Queries the pricing for creating a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - GetCreateBEClusterInquiryRequest
   * @returns GetCreateBEClusterInquiryResponse
   */
  async getCreateBEClusterInquiry(request: GetCreateBEClusterInquiryRequest): Promise<GetCreateBEClusterInquiryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateBEClusterInquiryWithOptions(request, runtime);
  }

  /**
   * Queries the pricing for changing the specifications of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - GetModifyBEClusterInquiryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModifyBEClusterInquiryResponse
   */
  async getModifyBEClusterInquiryWithOptions(request: GetModifyBEClusterInquiryRequest, runtime: $dara.RuntimeOptions): Promise<GetModifyBEClusterInquiryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModifyBEClusterInquiry",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetModifyBEClusterInquiryResponse>(await this.callApi(params, req, runtime), new GetModifyBEClusterInquiryResponse({}));
    } else {
      return $dara.cast<GetModifyBEClusterInquiryResponse>(await this.execute(params, req, runtime), new GetModifyBEClusterInquiryResponse({}));
    }

  }

  /**
   * Queries the pricing for changing the specifications of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - GetModifyBEClusterInquiryRequest
   * @returns GetModifyBEClusterInquiryResponse
   */
  async getModifyBEClusterInquiry(request: GetModifyBEClusterInquiryRequest): Promise<GetModifyBEClusterInquiryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModifyBEClusterInquiryWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyBEClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBEClusterAttributeResponse
   */
  async modifyBEClusterAttributeWithOptions(request: ModifyBEClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyBEClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceAttributeType)) {
      query["InstanceAttributeType"] = request.instanceAttributeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBEClusterAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyBEClusterAttributeResponse>(await this.callApi(params, req, runtime), new ModifyBEClusterAttributeResponse({}));
    } else {
      return $dara.cast<ModifyBEClusterAttributeResponse>(await this.execute(params, req, runtime), new ModifyBEClusterAttributeResponse({}));
    }

  }

  /**
   * Modifies the name of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyBEClusterAttributeRequest
   * @returns ModifyBEClusterAttributeResponse
   */
  async modifyBEClusterAttribute(request: ModifyBEClusterAttributeRequest): Promise<ModifyBEClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBEClusterAttributeWithOptions(request, runtime);
  }

  /**
   * 集群变配
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDBClusterResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterResponse({}));
    } else {
      return $dara.cast<ModifyDBClusterResponse>(await this.execute(params, req, runtime), new ModifyDBClusterResponse({}));
    }

  }

  /**
   * 集群变配
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfigWithOptions(request: ModifyDBClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDBClusterConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterConfig",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDBClusterConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterConfigResponse({}));
    } else {
      return $dara.cast<ModifyDBClusterConfigResponse>(await this.execute(params, req, runtime), new ModifyDBClusterConfigResponse({}));
    }

  }

  /**
   * Modifies the configurations of a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyDBClusterConfigRequest
   * @returns ModifyDBClusterConfigResponse
   */
  async modifyDBClusterConfig(request: ModifyDBClusterConfigRequest): Promise<ModifyDBClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window or description of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttributeWithOptions(request: ModifyDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceAttributeType)) {
      query["InstanceAttributeType"] = request.instanceAttributeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceAttribute",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceAttributeResponse({}));
    } else {
      return $dara.cast<ModifyDBInstanceAttributeResponse>(await this.execute(params, req, runtime), new ModifyDBInstanceAttributeResponse({}));
    }

  }

  /**
   * Modifies the maintenance window or description of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifyDBInstanceAttributeRequest
   * @returns ModifyDBInstanceAttributeResponse
   */
  async modifyDBInstanceAttribute(request: ModifyDBInstanceAttributeRequest): Promise<ModifyDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled scaling rule.
   * 
   * @param request - ModifyElasticRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticRuleResponse
   */
  async modifyElasticRuleWithOptions(request: ModifyElasticRuleRequest, runtime: $dara.RuntimeOptions): Promise<ModifyElasticRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterClass)) {
      query["ClusterClass"] = request.clusterClass;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.elasticRuleStartTime)) {
      query["ElasticRuleStartTime"] = request.elasticRuleStartTime;
    }

    if (!$dara.isNull(request.executionPeriod)) {
      query["ExecutionPeriod"] = request.executionPeriod;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticRule",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyElasticRuleResponse>(await this.callApi(params, req, runtime), new ModifyElasticRuleResponse({}));
    } else {
      return $dara.cast<ModifyElasticRuleResponse>(await this.execute(params, req, runtime), new ModifyElasticRuleResponse({}));
    }

  }

  /**
   * Modifies a scheduled scaling rule.
   * 
   * @param request - ModifyElasticRuleRequest
   * @returns ModifyElasticRuleResponse
   */
  async modifyElasticRule(request: ModifyElasticRuleRequest): Promise<ModifyElasticRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the IP addresses in a whitelist of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifySecurityIPListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPListWithOptions(request: ModifySecurityIPListRequest, runtime: $dara.RuntimeOptions): Promise<ModifySecurityIPListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIPList",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifySecurityIPListResponse>(await this.callApi(params, req, runtime), new ModifySecurityIPListResponse({}));
    } else {
      return $dara.cast<ModifySecurityIPListResponse>(await this.execute(params, req, runtime), new ModifySecurityIPListResponse({}));
    }

  }

  /**
   * Modifies the IP addresses in a whitelist of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ModifySecurityIPListRequest
   * @returns ModifySecurityIPListResponse
   */
  async modifySecurityIPList(request: ModifySecurityIPListRequest): Promise<ModifySecurityIPListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIPListWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseInstancePublicConnectionResponse({}));
    } else {
      return $dara.cast<ReleaseInstancePublicConnectionResponse>(await this.execute(params, req, runtime), new ReleaseInstancePublicConnectionResponse({}));
    }

  }

  /**
   * Releases the public endpoint of an ApsaraDB for SelectDB instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of an account for an ApsaraDB for SelectDB instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
    } else {
      return $dara.cast<ResetAccountPasswordResponse>(await this.execute(params, req, runtime), new ResetAccountPasswordResponse({}));
    }

  }

  /**
   * Resets the password of an account for an ApsaraDB for SelectDB instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - RestartDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBClusterResponse
   */
  async restartDBClusterWithOptions(request: RestartDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<RestartDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      body["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBCluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartDBClusterResponse>(await this.callApi(params, req, runtime), new RestartDBClusterResponse({}));
    } else {
      return $dara.cast<RestartDBClusterResponse>(await this.execute(params, req, runtime), new RestartDBClusterResponse({}));
    }

  }

  /**
   * Restarts a cluster in an ApsaraDB for SelectDB instance.
   * 
   * @param request - RestartDBClusterRequest
   * @returns RestartDBClusterResponse
   */
  async restartDBCluster(request: RestartDBClusterRequest): Promise<RestartDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBClusterWithOptions(request, runtime);
  }

  /**
   * 暂停后恢复集群
   * 
   * @param request - StartBEClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBEClusterResponse
   */
  async startBEClusterWithOptions(request: StartBEClusterRequest, runtime: $dara.RuntimeOptions): Promise<StartBEClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBECluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartBEClusterResponse>(await this.callApi(params, req, runtime), new StartBEClusterResponse({}));
    } else {
      return $dara.cast<StartBEClusterResponse>(await this.execute(params, req, runtime), new StartBEClusterResponse({}));
    }

  }

  /**
   * 暂停后恢复集群
   * 
   * @param request - StartBEClusterRequest
   * @returns StartBEClusterResponse
   */
  async startBECluster(request: StartBEClusterRequest): Promise<StartBEClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startBEClusterWithOptions(request, runtime);
  }

  /**
   * 暂停BE集群
   * 
   * @param request - StopBEClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBEClusterResponse
   */
  async stopBEClusterWithOptions(request: StopBEClusterRequest, runtime: $dara.RuntimeOptions): Promise<StopBEClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopBECluster",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopBEClusterResponse>(await this.callApi(params, req, runtime), new StopBEClusterResponse({}));
    } else {
      return $dara.cast<StopBEClusterResponse>(await this.execute(params, req, runtime), new StopBEClusterResponse({}));
    }

  }

  /**
   * 暂停BE集群
   * 
   * @param request - StopBEClusterRequest
   * @returns StopBEClusterResponse
   */
  async stopBECluster(request: StopBEClusterRequest): Promise<StopBEClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopBEClusterWithOptions(request, runtime);
  }

  /**
   * Updates the database engine version of an ApsaraDB for SelectDB instance.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersionWithOptions(request: UpgradeDBInstanceEngineVersionRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeDBInstanceEngineVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.parallelOperation)) {
      query["ParallelOperation"] = request.parallelOperation;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstanceEngineVersion",
      version: "2023-05-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeDBInstanceEngineVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceEngineVersionResponse({}));
    } else {
      return $dara.cast<UpgradeDBInstanceEngineVersionResponse>(await this.execute(params, req, runtime), new UpgradeDBInstanceEngineVersionResponse({}));
    }

  }

  /**
   * Updates the database engine version of an ApsaraDB for SelectDB instance.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersion(request: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

}
