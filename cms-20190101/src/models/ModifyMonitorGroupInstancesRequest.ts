// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMonitorGroupInstancesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The cloud service to which the resource instance belongs. The following cloud services are supported:
   * 
   * - ECS (including Alibaba Cloud and third-party hosts)
   * 
   * - ApsaraDB RDS
   * 
   * - AnalyticDB
   * 
   * - SLB
   * 
   * - VPC (Elastic IP)
   * 
   * - API Gateway
   * 
   * - Alibaba Cloud CDN
   * 
   * - Container Service for Swarm
   * 
   * - DCDN
   * 
   * - Anti-DDoS
   * 
   * - EIP
   * 
   * - Elasticsearch
   * 
   * - E-MapReduce
   * 
   * - Auto Scaling
   * 
   * - ApsaraDB for HBase
   * 
   * - IoT Edge
   * 
   * - Kubernetes pod
   * 
   * - ApsaraDB for Redis (sharded cluster)
   * 
   * - ApsaraDB for Redis (read/write splitting)
   * 
   * - ApsaraDB for Redis (Standard Edition)
   * 
   * - ApsaraDB for Memcache
   * 
   * - MNS
   * 
   * - ApsaraDB for MongoDB (replica set)
   * 
   * - ApsaraDB for MongoDB (sharded cluster)
   * 
   * - ApsaraDB for MongoDB (sharded cluster)
   * 
   * - MNS topic
   * 
   * - OCS (ApsaraDB for Memcache of earlier versions)
   * 
   * - OpenSearch
   * 
   * - OSS
   * 
   * - PolarDB
   * 
   * - HybridDB for MySQL
   * 
   * - Internet Shared Bandwidth
   * 
   * - SLS
   * 
   * - VPN Gateway
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  category?: string;
  /**
   * @remarks
   * The ID of the resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-a2d5q7pm12****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * HostName
   */
  instanceName?: string;
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
   * The list of instances. You can specify up to 2,000 instances.
   * 
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

