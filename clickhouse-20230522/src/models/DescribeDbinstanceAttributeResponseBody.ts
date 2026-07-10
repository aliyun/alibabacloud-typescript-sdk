// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDataMultiZones extends $dara.Model {
  /**
   * @remarks
   * An array of vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
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

export class DescribeDBInstanceAttributeResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * active
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * id
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ck
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

export class DescribeDBInstanceAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 140692647406****
   */
  aliUid?: number;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * PD39050615820269****
   */
  bid?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid value:
   * 
   * - `enterprise`: enterprise edition
   * 
   * @example
   * enterprise
   */
  category?: string;
  /**
   * @remarks
   * The billing method of the cluster.
   * enterprise edition clusters are billed on a pay-as-you-go basis.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The status of the ClickObserve service.
   * 
   * @example
   * activation
   */
  clickObserveServiceStatus?: string;
  /**
   * @remarks
   * The creation time of the cluster, in `YYYY-MM-DDTHH:mm:ssZ` format.
   * 
   * @example
   * 2023-09-14T08:14:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Whether deletion protection is enabled.
   * 
   * @example
   * 0/1
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment architecture of the cluster. Valid values: `single_az` and `multi_az`.
   * 
   * - `single_az`: The nodes are deployed in the primary zone specified by `ZoneId`.
   * 
   * - `multi_az`: The nodes are deployed across the zones specified in `MultiZones`.
   * 
   * Keeper nodes are always deployed across the zones specified in `MultiZones`.
   * 
   * @example
   * single_az
   */
  deploySchema?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * cluster test
   */
  description?: string;
  /**
   * @remarks
   * A comma-separated list of disabled database ports.
   * 
   * @example
   * 9001,8123
   */
  disabledPorts?: string;
  /**
   * @remarks
   * The engine.
   * 
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The minor version of the cluster engine.
   * 
   * @example
   * 23.8.1.41495_6
   */
  engineMinorVersion?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 23.8
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster, in `YYYY-MM-DDTHH:mm:ssZ` format.
   * 
   * > Pay-as-you-go clusters do not expire. An empty string is returned.
   * 
   * @example
   * 2024-04-17T08:14:48Z
   */
  expireTime?: string;
  /**
   * @remarks
   * A list of Langfuse instance IDs.
   */
  langfuseInstanceIds?: string[];
  /**
   * @remarks
   * The latest minor version of the cluster engine.
   * 
   * @example
   * 23.8.1.41495_6
   */
  latestEngineMinorVersion?: string;
  /**
   * @remarks
   * The lock mode of the cluster.
   * 
   * @example
   * 0
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason for the lock.
   * 
   * @example
   * nolock
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 12:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 11:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The zones for a multi-zone deployment.
   */
  multiZones?: DescribeDBInstanceAttributeResponseBodyDataMultiZones[];
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: string;
  /**
   * @remarks
   * The maximum number of nodes for auto scaling of a serverless cluster.
   * 
   * @example
   * 32
   */
  nodeScaleMax?: string;
  /**
   * @remarks
   * The minimum number of nodes for auto scaling of a serverless cluster.
   * 
   * @example
   * 4
   */
  nodeScaleMin?: string;
  /**
   * @remarks
   * The cluster nodes.
   */
  nodes?: DescribeDBInstanceAttributeResponseBodyDataNodes[];
  /**
   * @remarks
   * The storage capacity of Object Storage Service (OSS).
   * 
   * @example
   * 13
   */
  objectStoreSize?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmzygvt54****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum value for serverless auto scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum value for serverless auto scaling.
   * 
   * @example
   * 8
   */
  scaleMin?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The provisioned storage, in GB.
   * 
   * @example
   * 100
   */
  storageQuota?: string;
  /**
   * @remarks
   * The storage space, in GB.
   * 
   * @example
   * 12
   */
  storageSize?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * 100
   */
  storageType?: string;
  /**
   * @remarks
   * The cluster tags.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyDataTags[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf67ij56zm9x4uc6hmilg
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz9duj8xd6r1gzhsg*****
   */
  vpcId?: string;
  /**
   * @example
   * active
   */
  webUISnatStatus?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      category: 'Category',
      chargeType: 'ChargeType',
      clickObserveServiceStatus: 'ClickObserveServiceStatus',
      createTime: 'CreateTime',
      DBInstanceId: 'DBInstanceId',
      deletionProtection: 'DeletionProtection',
      deploySchema: 'DeploySchema',
      description: 'Description',
      disabledPorts: 'DisabledPorts',
      engine: 'Engine',
      engineMinorVersion: 'EngineMinorVersion',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      langfuseInstanceIds: 'LangfuseInstanceIds',
      latestEngineMinorVersion: 'LatestEngineMinorVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      multiZones: 'MultiZones',
      nodeCount: 'NodeCount',
      nodeScaleMax: 'NodeScaleMax',
      nodeScaleMin: 'NodeScaleMin',
      nodes: 'Nodes',
      objectStoreSize: 'ObjectStoreSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      status: 'Status',
      storageQuota: 'StorageQuota',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      webUISnatStatus: 'WebUISnatStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bid: 'string',
      category: 'string',
      chargeType: 'string',
      clickObserveServiceStatus: 'string',
      createTime: 'string',
      DBInstanceId: 'string',
      deletionProtection: 'boolean',
      deploySchema: 'string',
      description: 'string',
      disabledPorts: 'string',
      engine: 'string',
      engineMinorVersion: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      langfuseInstanceIds: { 'type': 'array', 'itemType': 'string' },
      latestEngineMinorVersion: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      multiZones: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDataMultiZones },
      nodeCount: 'string',
      nodeScaleMax: 'string',
      nodeScaleMin: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDataNodes },
      objectStoreSize: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      status: 'string',
      storageQuota: 'string',
      storageSize: 'number',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDataTags },
      vSwitchId: 'string',
      vpcId: 'string',
      webUISnatStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.langfuseInstanceIds)) {
      $dara.Model.validateArray(this.langfuseInstanceIds);
    }
    if(Array.isArray(this.multiZones)) {
      $dara.Model.validateArray(this.multiZones);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
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

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeDBInstanceAttributeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
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
      data: DescribeDBInstanceAttributeResponseBodyData,
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

