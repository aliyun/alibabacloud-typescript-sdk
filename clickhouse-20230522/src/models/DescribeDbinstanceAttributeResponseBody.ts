// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDataMultiZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch IDs.
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
   * The node status.
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
   * The key of the tag.
   * 
   * @example
   * id
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The ID of the Alibaba Cloud account.
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
   * @example
   * enterprise
   */
  category?: string;
  /**
   * @remarks
   * The billing method. Enterprise Edition clusters use the pay-as-you-go billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * activation
   */
  clickObserveServiceStatus?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
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
   * Indicates whether the release protection feature is enabled for the cluster.
   * 
   * @example
   * 0/1
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment mode of the cluster. Valid values: single_az and multi_az.
   * 
   * *   single_az: indicates that the server nodes are deployed in the primary zone. The ID of the primary zone is specified by the ZoneID parameter.
   * *   multi_az: indicates that the server nodes are deployed in multiple zones. The information about the zones is specified by the MultiZones parameter.
   * 
   * The keeper nodes are deployed in multiple zones.
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
   * Used for test
   */
  description?: string;
  /**
   * @remarks
   * The disabled database ports. Multiple database ports are separated by commas (,).
   * 
   * @example
   * 9001,8123
   */
  disabledPorts?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The minor engine version of the cluster.
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
   * The time when the cluster expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * >  Pay-as-you-go clusters never expire. If the cluster is a pay-as-you-go cluster, an empty string is returned for this parameter.
   * 
   * @example
   * 2024-04-17T08:14:48Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The latest minor engine version.
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
   * The reason why the cluster was locked.
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
   * 21:00
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 12:00
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The information about the zones.
   */
  multiZones?: DescribeDBInstanceAttributeResponseBodyDataMultiZones[];
  /**
   * @example
   * 2
   */
  nodeCount?: string;
  /**
   * @example
   * 32
   */
  nodeScaleMax?: string;
  /**
   * @example
   * 4
   */
  nodeScaleMin?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: DescribeDBInstanceAttributeResponseBodyDataNodes[];
  /**
   * @remarks
   * The size of the object storage space.
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
   * The resource ID.
   * 
   * @example
   * rg-acfmzygvt54****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum capacity for elastic scaling.
   * 
   * @example
   * 32
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum capacity for elastic scaling.
   * 
   * @example
   * 8
   */
  scaleMin?: number;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 100
   */
  storageQuota?: string;
  /**
   * @remarks
   * The size of the storage space. Unit: GB.
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
   * The details of the tags.
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
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-wz9duj8xd6r1gzhsg*****
   */
  vpcId?: string;
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
      zoneId: 'string',
    };
  }

  validate() {
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
   * The result returned.
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

