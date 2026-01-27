// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesResponseBodyRCInstancesTagResources extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class DescribeRCInstancesResponseBodyRCInstancesTags extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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

export class DescribeRCInstancesResponseBodyRCInstancesVpcAttributes extends $dara.Model {
  natIpAddress?: string;
  privateIpAddress?: string[];
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpAddress: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstancesResponseBodyRCInstances extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * testrdscustom
   */
  clusterName?: string;
  cpu?: number;
  createMode?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * rds_custom
   */
  dbType?: string;
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  expiredTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in GMT.
   * 
   * @example
   * 2023-03-22 07:56:53.0
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The host IP address.
   * 
   * @example
   * 172.30.XXX.XXX
   */
  hostIp?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * i-2zeaiz4g9u23f40m****
   */
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze704f*****
   */
  instanceId?: string;
  /**
   * @example
   * k8s-node
   */
  instanceName?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  memory?: number;
  nodeType?: string;
  publicIp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  securityGroupId?: string;
  spotStrategy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **Pending**
   * *   **Running**
   * *   **Starting**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * >  If the value returned for the DescribeRCInstances operation is different from the value that is returned for the **DescribeRCInstanceAttribute** operation, the value returned for the **DescribeRCInstanceAttribute** operation shall prevail.
   * 
   * @example
   * Running
   */
  status?: string;
  tagResources?: DescribeRCInstancesResponseBodyRCInstancesTagResources[];
  tags?: DescribeRCInstancesResponseBodyRCInstancesTags[];
  /**
   * **if can be null:**
   * true
   */
  vpcAttributes?: DescribeRCInstancesResponseBodyRCInstancesVpcAttributes;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      cpu: 'Cpu',
      createMode: 'CreateMode',
      dbType: 'DbType',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      gmtCreated: 'GmtCreated',
      hostIp: 'HostIp',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      memory: 'Memory',
      nodeType: 'NodeType',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      tagResources: 'TagResources',
      tags: 'Tags',
      vpcAttributes: 'VpcAttributes',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      cpu: 'number',
      createMode: 'string',
      dbType: 'string',
      deploymentSetId: 'string',
      description: 'string',
      expiredTime: 'string',
      gmtCreated: 'string',
      hostIp: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      memory: 'number',
      nodeType: 'string',
      publicIp: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      status: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstancesTagResources },
      tags: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstancesTags },
      vpcAttributes: DescribeRCInstancesResponseBodyRCInstancesVpcAttributes,
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstancesResponseBody extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the instance.
   */
  RCInstances?: DescribeRCInstancesResponseBodyRCInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      RCInstances: 'RCInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      RCInstances: { 'type': 'array', 'itemType': DescribeRCInstancesResponseBodyRCInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.RCInstances)) {
      $dara.Model.validateArray(this.RCInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

