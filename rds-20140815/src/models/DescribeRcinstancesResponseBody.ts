// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstancesResponseBodyRCInstancesTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * rc-t8q22a87745hf8******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
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
   * The tag key.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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
   * The resource ID.
   * 
   * @example
   * rc-t8q22a87745hf8******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
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
   * The tag key.
   * 
   * @example
   * testRC
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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
   * A reserved parameter.
   * 
   * @example
   * None
   */
  natIpAddress?: string;
  /**
   * @remarks
   * The private IP address.
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
   * The VPC ID.
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
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled for the instance.
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the RDS Custom container cluster to which the instance belongs.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * testrdscustom
   */
  clusterName?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: number;
  /**
   * @remarks
   * Specifies whether the instance is allowed to join an ACK cluster. If the parameter settings are **1**, the created instance can be added to an ACK cluster by calling the **AttachRCInstances** API operation to efficiently manage containerized applications. Valid values:
   * 
   * - **1**: yes
   * - **0** (default): no
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
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHostName
   */
  ecsHostName?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard and uses the UTC+0 time zone in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * > The expiration time displayed in the console is 8 hours ahead of this time.
   * 
   * @example
   * 2025-05-02T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the task was created in GMT.
   * 
   * @example
   * 2023-03-22 07:56:53.0
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The IP address of the host.
   * 
   * @example
   * 172.16.XX.XX
   */
  hostIp?: string;
  /**
   * @remarks
   * The hostname of the host.
   * 
   * @example
   * i-2zeaiz4g9u23f40m****
   */
  hostName?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20250117.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The instance name.
   * 
   * @example
   * k8s-node
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * For more information, see [RDS Custom instance types](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * mysql.x2.xlarge.6cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * For more information, see [RDS Custom instance types](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * x.6cm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * The node type. A value of **rds_vnode** indicates that the node is a container node.
   * 
   * @example
   * rds_vnode
   */
  nodeType?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * CentOS 7.4 64-bit
   */
  OSName?: string;
  /**
   * @remarks
   * The type of the operating system. The operating system can be Windows Server or Linux. Valid values:
   * 
   * - windows
   * - linux
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The public IP address of the instance.
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
   * The bidding strategy for the pay-as-you-go instance. Valid values:
   * 
   * - **NoSpot**: The instance is a regular pay-as-you-go instance.
   * - **SpotAsPriceGo**: The system automatically places bids based on the current market price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The last start time of the instance. The time is displayed in UTC and follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  startTime?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **Pending**: The instance is being created.
   * - **Running**: The instance is running.
   * - **Starting**: The instance is starting.
   * - **Stopping**: The instance is being stopped.
   * - **Stopped**: The instance is stopped.
   * 
   * > The instance status returned by this operation may be delayed. If the status differs from the value returned by the **DescribeRCInstanceAttribute** operation, the value returned by the **DescribeRCInstanceAttribute** operation prevails.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The stop mode of the instance. KeepCharging indicates the standard mode. StopCharging indicates the economical mode. Not-applicable indicates that the instance does not support the economical mode.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  /**
   * @remarks
   * The queried instance and tag details.
   */
  tagResources?: DescribeRCInstancesResponseBodyRCInstancesTagResources[];
  /**
   * @remarks
   * The tag details.
   */
  tags?: DescribeRCInstancesResponseBodyRCInstancesTags[];
  /**
   * @remarks
   * The VPC attributes.
   * 
   * **if can be null:**
   * true
   */
  vpcAttributes?: DescribeRCInstancesResponseBodyRCInstancesVpcAttributes;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6f7l4fg90****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
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
      clusterId: 'string',
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
   * The instance information.
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
   * The total number of entries.
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

