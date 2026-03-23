// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesResponseBodyRCInstancesTagResources extends $dara.Model {
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * rc-t8q22a87745hf8******
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type.  
   * 
   * - `ALIYUN::RDS::INSTANCE`: ApsaraDB RDS instance  
   * - `ALIYUN::RDS::CUSTOM`: RDS Custom instance
   * 
   * @example
   * ALIYUN::RDS::CUSTOM
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test01
   */
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
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * rc-t8q22a87745hf8******
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * - `ALIYUN::RDS::INSTANCE`: ApsaraDB RDS instance  
   * - `ALIYUN::RDS::CUSTOM`: RDS Custom instance
   * 
   * @example
   * ALIYUN::RDS::CUSTOM
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test01
   */
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
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  natIpAddress?: string;
  /**
   * @remarks
   * The private IP addresses.
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1nb3pv03878tgnj****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
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
  autoRenew?: boolean;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * testrdscustom
   */
  clusterName?: string;
  /**
   * @remarks
   * Number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance can be added to an ACK cluster. When this parameter is set to **1**, the created instance can be added to an ACK cluster by using the **AttachRCInstances** API operation, enabling efficient management of container applications.  
   * 
   * - **1**: Yes  
   * - **0** (default): No
   * 
   * @example
   * 0
   */
  createMode?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * rds_custom
   */
  dbType?: string;
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp14k1xvolvsy4z3****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * testHostName
   */
  ecsHostName?: string;
  /**
   * @remarks
   * Instance Expiration Time. It is represented in ISO 8601 format using UTC+0 time, with the pattern `yyyy-MM-ddTHH:mm:ssZ`.  
   * 
   * > The expiration time displayed in the console is 8 hours later.
   * 
   * @example
   * 2025-05-02T16:00:00Z
   */
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
   * 172.16.XX.XX
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
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20250117.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Billing method. Valid values:  
   * * **PrePaid**: subscription  
   * * **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
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
   * @remarks
   * Instance name
   * 
   * @example
   * k8s-node
   */
  instanceName?: string;
  /**
   * @remarks
   * Instance Type.  
   * 
   * For more information, see [RDS Custom Instance Type List](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * mysql.x2.xlarge.6cm
   */
  instanceType?: string;
  /**
   * @remarks
   * Instance family.  
   * 
   * For more information, see [RDS Custom instance type list](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * x.6cm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * Memory size, in MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * File Type. When **rds_vnode** is returned, it indicates that the node is a container node.
   * 
   * @example
   * rds_vnode
   */
  nodeType?: string;
  /**
   * @example
   * CentOS  7.4 64 位
   */
  OSName?: string;
  /**
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * Public IP address of the instance.
   * 
   * @example
   * 121.89.XX.XX
   */
  publicIp?: string;
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
   * The security group ID.
   * 
   * @example
   * sg-2vcbcivwfxiozhtp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Spot strategy for pay-as-you-go instances. The return value is as follows:  
   * 
   * - **NoSpot**: Normal pay-as-you-go instance.  
   * - **SpotAsPriceGo**: System automatically bids based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * 2017-12-10T04:04Z
   */
  startTime?: string;
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
  stoppedMode?: string;
  /**
   * @remarks
   * The queried instances and tag details.
   */
  tagResources?: DescribeRCInstancesResponseBodyRCInstancesTagResources[];
  /**
   * @remarks
   * Tag Details.
   */
  tags?: DescribeRCInstancesResponseBodyRCInstancesTags[];
  /**
   * @remarks
   * The virtual private cloud (VPC) attributes.
   * 
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
  /**
   * @remarks
   * Zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterName: 'ClusterName',
      cpu: 'Cpu',
      createMode: 'CreateMode',
      dbType: 'DbType',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      ecsHostName: 'EcsHostName',
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
      OSName: 'OSName',
      OSType: 'OSType',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      startTime: 'StartTime',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      tagResources: 'TagResources',
      tags: 'Tags',
      vpcAttributes: 'VpcAttributes',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clusterName: 'string',
      cpu: 'number',
      createMode: 'string',
      dbType: 'string',
      deploymentSetId: 'string',
      description: 'string',
      ecsHostName: 'string',
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
      OSName: 'string',
      OSType: 'string',
      publicIp: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      startTime: 'string',
      status: 'string',
      stoppedMode: 'string',
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

