// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the host in the dedicated cluster.
   * 
   * @example
   * ch-bp13vf0y9gx3c****
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1e7vl6ygf1yq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 17921111
   */
  nodeId?: number;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.33.***
   */
  nodeIp?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **db**: data node.
   * *   **proxy**: proxy node.
   * *   **normal**: regular node. This value is returned when the instance runs in the standard architecture.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the node.
   * 
   * @example
   * 3001
   */
  port?: number;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **master**: master node
   * *   **slave**: replica node
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostName: 'DedicatedHostName',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeIp: 'NodeIp',
      nodeType: 'NodeType',
      port: 'Port',
      role: 'Role',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostName: 'string',
      instanceId: 'string',
      nodeId: 'number',
      nodeIp: 'string',
      nodeType: 'string',
      port: 'number',
      role: 'string',
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

export class DescribeDedicatedClusterInstanceListResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The default bandwidth of the instance. Unit: Mbit/s.
   * 
   * @example
   * 24
   */
  bandWidth?: number;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **logic**: cluster
   * *   **normal**: standard
   * 
   * @example
   * logic
   */
  characterType?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the instance belongs.
   * 
   * @example
   * dhg-rx71fc5ndh9o****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs.
   * 
   * @example
   * testname
   */
  clusterName?: string;
  /**
   * @remarks
   * The private endpoint of the instance.
   * 
   * @example
   * r-t4ncdi1dgi0ja8****.redis.hangzhou.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-06T07:09:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current bandwidth of the instance, which is the sum of the default bandwidth and any extra bandwidth that is purchased. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  currentBandWidth?: number;
  /**
   * @remarks
   * An internal parameter used for the maintenance and management of instances.
   * 
   * @example
   * 4652****
   */
  customId?: string;
  /**
   * @remarks
   * The database engine. The return value is **redis**.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. The return value is **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * redis.cluster.sharding.common.ce
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1e7vl6ygf1yq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * testdb
   */
  instanceName?: string;
  /**
   * @remarks
   * Details about the nodes.
   */
  instanceNodeList?: DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList[];
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Inactive**: The instance is disabled.
   * *   **Flushing**: The instance is being released.
   * *   **Released**: The instance is released.
   * *   **Transforming**: The billing method of the instance is being changed.
   * *   **Unavailable**: The instance is unavailable.
   * *   **Error**: The instance failed to be created.
   * *   **Migrating**: The instance is being migrated.
   * *   **BackupRecovering**: The instance is being restored from a backup.
   * *   **MinorVersionUpgrading**: The minor version of the instance is being updated.
   * *   **NetworkModifying**: The network type of the instance is being changed.
   * *   **SSLModifying**: The SSL configurations of the instance are being changed.
   * *   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time is in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 17:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 16:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The number of proxy nodes.
   * 
   * > 
   * 
   * *   If the return value is **0**, the proxy mode is disabled for the instance. If the return value is an integer greater than **0**, such as **1**, the proxy mode is enabled for the instance.
   * 
   * *   This parameter is returned only when the instance is a [cluster](https://help.aliyun.com/document_detail/52228.html) instance.
   * 
   * @example
   * 1
   */
  proxyCount?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * >  This parameter is returned only when the instance is a [cluster](https://help.aliyun.com/document_detail/52228.html) instance.
   * 
   * @example
   * 3
   */
  shardCount?: number;
  /**
   * @remarks
   * The storage type of the instance. The return value is LOCAL_SSD, which indicates [enhanced SSDs (ESSDs)](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * LOCAL_SSD
   */
  storageType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-t4n2clc70t3hqwsrr****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-t4nvrca24dczppq44****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      characterType: 'CharacterType',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      connectionDomain: 'ConnectionDomain',
      createTime: 'CreateTime',
      currentBandWidth: 'CurrentBandWidth',
      customId: 'CustomId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNodeList: 'InstanceNodeList',
      instanceStatus: 'InstanceStatus',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      proxyCount: 'ProxyCount',
      regionId: 'RegionId',
      shardCount: 'ShardCount',
      storageType: 'StorageType',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      characterType: 'string',
      clusterId: 'string',
      clusterName: 'string',
      connectionDomain: 'string',
      createTime: 'string',
      currentBandWidth: 'number',
      customId: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNodeList: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList },
      instanceStatus: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      proxyCount: 'number',
      regionId: 'string',
      shardCount: 'number',
      storageType: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceNodeList)) {
      $dara.Model.validateArray(this.instanceNodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instances.
   */
  instances?: DescribeDedicatedClusterInstanceListResponseBodyInstances[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 712CCF2A-16BD-411B-93F7-E978BEF2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

