// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList extends $dara.Model {
  /**
   * @remarks
   * The host ID in the dedicated cluster.
   * 
   * @example
   * ch-bp13vf0y9gx3c****
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The instance ID.
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
   * * **db**: Data node.
   * * **proxy**: Proxy node.
   * * **normal**: Regular node. This value is returned for instances that use the standard architecture.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The port of the node.
   * 
   * @example
   * 3001
   */
  port?: number;
  /**
   * @remarks
   * The node role. Valid values:
   * * **master**: Primary node.
   * * **slave**: Secondary node.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The zone to which the node belongs.
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
   * The default bandwidth of the instance. Unit: MB/s.
   * 
   * @example
   * 24
   */
  bandWidth?: number;
  /**
   * @remarks
   * The architecture type. Valid values:
   * * **logic**: Cluster architecture.
   * * **normal**: Standard architecture.
   * 
   * @example
   * logic
   */
  characterType?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
   * 
   * @example
   * dhg-rx71fc5ndh9o****
   */
  clusterId?: string;
  /**
   * @remarks
   * The dedicated cluster name.
   * 
   * @example
   * testname
   */
  clusterName?: string;
  /**
   * @remarks
   * The direct connection endpoint.
   * 
   * @example
   * r-t4ncdi1dgi0ja8****.redis.hangzhou.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-06T07:09:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current bandwidth of the instance. Unit: MB/s. The value is the sum of the default bandwidth and the increased bandwidth.
   * 
   * @example
   * 50
   */
  currentBandWidth?: number;
  /**
   * @remarks
   * An internal parameter used for instance maintenance.
   * 
   * @example
   * 4652****
   */
  customId?: string;
  /**
   * @remarks
   * The database engine. The value is fixed as **redis**.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. The value is fixed as **5.0**.
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
   * The instance ID.
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
   * The list of node information.
   */
  instanceNodeList?: DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList[];
  /**
   * @remarks
   * The instance status. Valid values:
   * * **Normal**: Normal.
   * * **Creating**: Creating.
   * * **Changing**: Changing.
   * * **Inactive**: Disabled.
   * * **Flushing**: Purge in progress.
   * * **Released**: Released.
   * * **Transforming**: Transforming.
   * * **Unavailable**: Unavailable.
   * * **Error**: Creation failed.
   * * **Migrating**: Migrating.
   * * **BackupRecovering**: Restoring from backup.
   * * **MinorVersionUpgrading**: Minor version upgrade in progress.
   * * **NetworkModifying**: Changing the network.
   * * **SSLModifying**: Changing SSL configurations.
   * * **MajorVersionUpgrading**: Major engine version upgrade in progress. The instance remains accessible.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time is in the <i>HH:mm</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 17:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is in the <i>HH:mm</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 16:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The number of proxy nodes.
   * > * A value of **0** indicates that the proxy mode is disabled for the instance. A value greater than **0** (such as **1**) indicates that the proxy mode is enabled for the instance.
   * > * This parameter is returned only when the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @example
   * 1
   */
  proxyCount?: number;
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
   * The number of data shards.
   * > This parameter is returned only when the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html).
   * 
   * @example
   * 3
   */
  shardCount?: number;
  /**
   * @remarks
   * The storage type. The value is fixed as LOCAL_SSD ([ESSD cloud disk (standard SSD)](https://help.aliyun.com/document_detail/122389.html)).
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
   * The list of instance information.
   */
  instances?: DescribeDedicatedClusterInstanceListResponseBodyInstances[];
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
   * The number of entries returned per page.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 712CCF2A-16BD-411B-93F7-E978BEF2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
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

