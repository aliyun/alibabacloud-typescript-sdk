// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMonitorGroupInstancesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the name of the service to which the instances to be added to the application group belong. Valid values:
   * 
   * *   ECS: Elastic Compute Service (ECS) instances provided by Alibaba Cloud and hosts not provided by Alibaba Cloud
   * 
   * *   RDS: ApsaraDB for RDS
   * 
   * *   ADS: AnalyticDB
   * 
   * *   SLB: Server Load Balancer (SLB)
   * 
   * *   VPC: Virtual Private Cloud (VPC)
   * 
   * *   APIGATEWAY: API Gateway
   * 
   * *   CDN: Alibaba Cloud Content Delivery Network (CDN)
   * 
   * *   CS: Container Service for Swarm
   * 
   * *   DCDN: Dynamic Route for CDN
   * 
   * *   DDoS: Anti-DDoS Pro
   * 
   * *   EIP: Elastic IP Address (EIP)
   * 
   * *   ELASTICSEARCH: Elasticsearch
   * 
   * *   EMR: E-MapReduce
   * 
   * *   ESS: Auto Scaling
   * 
   * *   HBASE: ApsaraDB for Hbase
   * 
   * *   IOT_EDGE: IoT Edge
   * 
   * *   K8S_POD: pods in Container Service for Kubernetes
   * 
   * *   KVSTORE_SHARDING: ApsaraDB for Redis of the cluster architecture
   * 
   * *   KVSTORE_SPLITRW: ApsaraDB for Redis of the read/write splitting architecture
   * 
   * *   KVSTORE_STANDARD: ApsaraDB for Redis of the standard architecture
   * 
   * *   MEMCACHE: ApsaraDB for Memcache
   * 
   * *   MNS: Message Service (MNS)
   * 
   * *   MONGODB: ApsaraDB for MongoDB of the replica set architecture
   * 
   * *   MONGODB_CLUSTER: ApsaraDB for MongoDB of the cluster architecture
   * 
   * *   MONGODB_SHARDING: ApsaraDB for MongoDB of the sharded cluster architecture
   * 
   * *   MQ_TOPIC: MNS topics
   * 
   * *   OCS: ApsaraDB for Memcache of earlier versions
   * 
   * *   OPENSEARCH: Open Search
   * 
   * *   OSS: Object Storage Service (OSS)
   * 
   * *   POLARDB: PolarDB
   * 
   * *   PETADATA: HybridDB for MySQL
   * 
   * *   SCDN: Secure Content Delivery Network (SCDN)
   * 
   * *   SHAREBANDWIDTHPACKAGES: EIP Bandwidth Plan
   * 
   * *   SLS: Log Service
   * 
   * *   VPN: VPN Gateway
   * 
   *     Valid values of N: 1 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  category?: string;
  /**
   * @remarks
   * The ID of the instance. Valid values of N: 1 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * i-a2d5q7pm12****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance. Valid values of N: 1 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * HostName
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. Valid values of N: 1 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
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

export class ModifyMonitorGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: ModifyMonitorGroupInstancesRequestInstances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instances: { 'type': 'array', 'itemType': ModifyMonitorGroupInstancesRequestInstances },
      regionId: 'string',
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

