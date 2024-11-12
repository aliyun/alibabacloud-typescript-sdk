// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateHiTSDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone in which you want to create the instance.
   * 
   * @example
   * None
   */
  appKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk type of TSDB for InfluxDB️®️.
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD cloud_auto: ESSD AutoPL disk
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * tsdb_test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * tsdb.1x.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  instanceStorage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the VPC in which the instances reside.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If PricingCycle is set to Month, set this parameter to an integer that ranges from 1 to 9.
   * *   If PricingCycle is set to Year, set this parameter to an integer that ranges from 1 to 3.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance connects to.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9ydz3vg93s1ozsd****
   */
  VPCId?: string;
  /**
   * @remarks
   * The unit of the subscription duration of the instance. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-wz9kv78f9cp47yadu****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the instance .
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      diskCategory: 'DiskCategory',
      duration: 'Duration',
      instanceAlias: 'InstanceAlias',
      instanceClass: 'InstanceClass',
      instanceStorage: 'InstanceStorage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      diskCategory: 'string',
      duration: 'string',
      instanceAlias: 'string',
      instanceClass: 'string',
      instanceStorage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * ts-wz99vz6u8jg39****
   */
  instanceId?: string;
  /**
   * @remarks
   * Creates a Time Series Database (TSDB) instance.
   * 
   * @example
   * 211110656240000
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 587BCA54-50DA-4885-ADE9-80A848339151
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHiTSDBInstanceResponseBody;
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
      body: CreateHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHiTSDBInstanceResponseBody;
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
      body: DeleteHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance that uses the subscription billing method.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY and POSTPAY. The PREPAY value indicates the subscription billing method. The POSTPAY value indicates the pay-as-you-go billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The endpoint of the database.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx.hitsdb.tsdb.aliyuncs.com:8242
   */
  connectionString?: string;
  /**
   * @remarks
   * The number of CPU cores of the instance.
   * 
   * @example
   * 2
   */
  cpuNumber?: string;
  /**
   * @remarks
   * The timestamp when the instance is created.
   * 
   * @example
   * 1603426323000
   */
  createTime?: number;
  /**
   * @remarks
   * The disk type of the instance. For a TSDB for InfluxDB®️ instance, the valid values are cloud_efficiency and cloud_ssd. The cloud_efficiency value indicates ultra disks. The cloud_ssd value indicates standard SSDs.
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The engine type of the instance. Valid values: tsdb_tsdb, tsdb_influxdb, and tsdb1.5. The tsdb_tsdb value indicates the OpenTSDB engine. The tsdb_influxdb value indicates the InfluxDB®️ engine. The tsdb1.5 value indicates the tsdb1.5 engine.
   * 
   * @example
   * tsdb_tsdb
   */
  engineType?: string;
  /**
   * @remarks
   * The timestamp when the instance expires. This parameter is returned only when the instance uses the subscription billing method.
   * 
   * @example
   * 1611417600000
   */
  expiredTime?: number;
  /**
   * @remarks
   * The time when the instance is created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-11-16 16:22:56
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the instance expires. This parameter is returned only when the instance uses the subscription billing method. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-12-17 00:00:00
   */
  gmtExpire?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * tsdb_test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * tsdb.96x.large_lindorm
   */
  instanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values: ACTIVATION, CREATING, NET_CREATING, CLASS_CHANGING, LOCKED, and DELETED. ACTIVATION indicates that the instance is running. CREATING indicates that the instance is being created. NET_CREATING indicates that a network connection to the instance is being created. CLASS_CHANGING indicates that the configuration of the instance is being modified. LOCKED indicates that the instance is locked. DELETED indicates that the instance is deleted.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 320
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The transactions per second (TPS) of the instance. Unit: TPS.
   * 
   * @example
   * 960000
   */
  instanceTps?: string;
  /**
   * @remarks
   * The number of time series supported by the instance. This parameter is returned only if the instance is a TSDB instance.
   * 
   * @example
   * 2400000
   */
  maxTimelineLimit?: string;
  /**
   * @remarks
   * The memory size of the instance. This parameter is returned only if the instance is a TSDB for InfluxDB®️ instance.
   * 
   * @example
   * 8
   */
  memSize?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY and POSTPAY. The PREPAY value indicates the subscription billing method. The POSTPAY value indicates the pay-as-you-go billing method.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The public endpoint of the instance. You can use the public endpoint to access the instance over the Internet.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx.influxdata.rds.aliyuncs.com:3242
   */
  publicConnectionString?: string;
  /**
   * @remarks
   * The ID of the region in which the instance is located.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8D156621-1FCB-414A-BD29-361C3CA4DD56
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance.
   */
  securityIpList?: DescribeHiTSDBInstanceResponseBodySecurityIpList[];
  /**
   * @remarks
   * The edition of the TSDB for InfluxDB®️ instance. Valid values: 0 and 1. The 0 value indicates the Standard Edition. The 1 value indicates the High-availability Edition.
   * 
   * @example
   * 1
   */
  series?: number;
  /**
   * @remarks
   * The status of the instance. Valid values: ACTIVATION, CREATING, NET_CREATING, CLASS_CHANGING, LOCKED, and DELETED. ACTIVATION indicates that the instance is running. CREATING indicates that the instance is being created. NET_CREATING indicates that a network connection to the instance is being created. CLASS_CHANGING indicates that the configuration of the instance is being modified. LOCKED indicates that the instance is locked. DELETED indicates that the instance is deleted.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-xxxxxxxxxxxxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance connects.
   * 
   * @example
   * vsw-xxxxxxxxxxxxxxxxxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is deployed.
   * 
   * @example
   * cn-shanghai-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      connectionString: 'ConnectionString',
      cpuNumber: 'CpuNumber',
      createTime: 'CreateTime',
      diskCategory: 'DiskCategory',
      engineType: 'EngineType',
      expiredTime: 'ExpiredTime',
      gmtCreated: 'GmtCreated',
      gmtExpire: 'GmtExpire',
      instanceAlias: 'InstanceAlias',
      instanceClass: 'InstanceClass',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      instanceTps: 'InstanceTps',
      maxTimelineLimit: 'MaxTimelineLimit',
      memSize: 'MemSize',
      networkType: 'NetworkType',
      paymentType: 'PaymentType',
      publicConnectionString: 'PublicConnectionString',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
      series: 'Series',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      autoRenew: 'string',
      chargeType: 'string',
      connectionString: 'string',
      cpuNumber: 'string',
      createTime: 'number',
      diskCategory: 'string',
      engineType: 'string',
      expiredTime: 'number',
      gmtCreated: 'string',
      gmtExpire: 'string',
      instanceAlias: 'string',
      instanceClass: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      instanceTps: 'string',
      maxTimelineLimit: 'string',
      memSize: 'string',
      networkType: 'string',
      paymentType: 'string',
      publicConnectionString: 'string',
      regionId: 'string',
      requestId: 'string',
      securityIpList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceResponseBodySecurityIpList },
      series: 'number',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHiTSDBInstanceResponseBody;
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
      body: DescribeHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * tsdb_tsdb
   */
  engineType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of instances to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The engine type of the instances that you want to query. Valid values: tsdb_tsdb and tsdb_influxdb. The tsdb_tsdb value indicates the OpenTSDB engine. The tsdb_influxdb value indicates the InfluxDB®️ engine.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The states of the instances you want to query. Specify this parameter in the JSON format. The InstanceStatus parameter enumerates the instances of the specified states.
   * 
   * @example
   * test
   */
  queryStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * ["ACTIVATION", "DELETED"]
   */
  statusList?: string;
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryStr: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      statusList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status of the instance. Valid values: ACTIVATION, CREATING, NET_CREATING, CLASS_CHANGING, LOCKED, and DELETED. ACTIVATION: The instance is running. CREATING: The instance is being created. NET_CREATING: A network connection is being established. CLASS_CHANGING: The configuration of the instance is being modified. LOCKED: The instance is locked. DELETED: The instance is deleted.
   */
  instanceList?: DescribeHiTSDBInstanceListResponseBodyInstanceList[];
  /**
   * @remarks
   * The number of instances returned on each page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The total number of returned instances.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 0A7153E4-8354-497E-87E5-5D0EBEF5AEB1
   */
  requestId?: string;
  /**
   * @remarks
   * The list of queried instances.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      instanceList: 'InstanceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      instanceList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceListResponseBodyInstanceList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHiTSDBInstanceListResponseBody;
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
      body: DescribeHiTSDBInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the group to which the instance belongs. The group name can contain only letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance.
   * 
   * @example
   * F2DFDC0B-FE4F-4696-9FD1-2EFDEE8D6C7C
   */
  requestId?: string;
  /**
   * @remarks
   * The IP address in the whitelist.
   */
  securityIpList?: DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
      securityIpList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHiTSDBInstanceSecurityIpListResponseBody;
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
      body: DescribeHiTSDBInstanceSecurityIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the values to return. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * Default value: en-US
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The collection of regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDDB1954-002B-4249-B2DF-2CDDA0259668
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * zh_CN
   */
  language?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of available zones.
   * 
   * @example
   * F67BFFF3-F5C2-45B5-9C28-6E4A1E51449B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the zone.
   */
  zoneList?: DescribeZonesResponseBodyZoneList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: DescribeZonesResponseBodyZoneList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
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
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassRequest extends $tea.Model {
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * tsdb.1x.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 500
   */
  instanceStorage?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceStorage: 'InstanceStorage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      instanceId: 'string',
      instanceStorage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Modifies the type of a Time Series Database (TSDB) instance.
   * 
   * @example
   * 57540985-3C11-4588-96FD-93413C6282EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHiTSDBInstanceClassResponseBody;
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
      body: ModifyHiTSDBInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceSecurityIpListRequest extends $tea.Model {
  /**
   * @remarks
   * auditing
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the group to which the instance belongs. The group name can contain only letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * [“127.0.0.1”, “192.168.0.1/24”]
   */
  securityIpList?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpList: 'SecurityIpList',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpList: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceSecurityIpListResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Configures the whitelist of a Time Series Database (TSDB) instance. The IP addresses in the whitelist are allowed to connect to the instance.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceSecurityIpListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHiTSDBInstanceSecurityIpListResponseBody;
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
      body: ModifyHiTSDBInstanceSecurityIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasRequest extends $tea.Model {
  /**
   * @remarks
   * Instance Alias
   * 
   * This parameter is required.
   * 
   * @example
   * vme
   */
  instanceAlias?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAlias: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameHiTSDBInstanceAliasResponseBody;
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
      body: RenameHiTSDBInstanceAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The subscription duration of the instance. If you set PricingCycle to Month, set Duration to an integer that ranges from 1 to 9. If you set PricingCycle to Year, set Duration to an integer that ranges from 1 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values: Month and Year. This parameter is valid only for an instance that uses the subscription billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 100000000000000
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57540985-3C11-4588-96FD-93413C6282EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewTSDBInstanceResponseBody;
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
      body: RenewTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHiTSDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHiTSDBInstanceResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHiTSDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartHiTSDBInstanceResponseBody;
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
      body: RestartHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHiTSDBInstancePublicNetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ts-ufxxxxxxxxxxxxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * *   **1**: enables access to the instance from the Internet.
   * *   **0**: disables access to the instance from the Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  switchAction?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchAction: 'SwitchAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHiTSDBInstancePublicNetResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC6A17BC-B326-4626-B3BE-932B003DB3A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHiTSDBInstancePublicNetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchHiTSDBInstancePublicNetResponseBody;
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
      body: SwitchHiTSDBInstancePublicNetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBodySecurityIpList extends $tea.Model {
  /**
   * @remarks
   * The IP address in the whitelist of the instance.
   * 
   * @example
   * 0.0.0.0/0
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBodyInstanceList extends $tea.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY and POSTPAY. The PREPAY value indicates the subscription billing method. The POSTPAY value indicates the pay-as-you-go billing method.
   * 
   * @example
   * 1603426323000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * tsdb_tsdb
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is deployed.
   * 
   * @example
   * 1611417600000
   */
  expiredTime?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * 2020-11-16 16:22:56
   */
  gmtCreated?: string;
  /**
   * @remarks
   * Queries the list of Time Series Database (TSDB) instances.
   * 
   * @example
   * 2020-12-17 00:00:00
   */
  gmtExpire?: string;
  /**
   * @remarks
   * The transactions per second (TPS) of the instance. Unit: TPS.
   * 
   * @example
   * test_tsdb
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The timestamp when the instance was created.
   * 
   * @example
   * tsdb.1x.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * test
   */
  instanceDescription?: string;
  /**
   * @remarks
   * Indicates whether the instance is locked. Valid values: 0 and 1. The value 0 indicates that the instance is not locked. The value 1 indicates that the instance is locked.
   * 
   * @example
   * ts-xxxxxxxxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the instance expires. This parameter is returned only when the instance uses the subscription billing method. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The network type of the instance. The VPC value indicates a virtual private cloud (VPC).
   * 
   * @example
   * 50
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The timestamp when the instance expires. This parameter is returned only when the instance uses the subscription billing method.
   * 
   * @example
   * 960000
   */
  instanceTps?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 0
   */
  lockMode?: string;
  /**
   * @remarks
   * The engine type of the instance. Valid values: tsdb_tsdb and tsdb_influxdb. The tsdb_tsdb value indicates the OpenTSDB engine. The tsdb_influxdb value indicates the InfluxDB®️ engine.
   * 
   * @example
   * 10000
   */
  maxSeriesPerDatabase?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The maximum number of time series that can be stored in a database.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 1000000000000000
   */
  userId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values: PREPAY and POSTPAY. The PREPAY value indicates the subscription billing method. The POSTPAY value indicates the pay-as-you-go billing method.
   * 
   * @example
   * vpc-bp1xxxxxxxxxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * vsw-bp1xxxxxxxxxxxxxxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The state of the instance. The value of this parameter is an enumerated string.
   * 
   * @example
   * cn-hongkong-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      engineType: 'EngineType',
      expiredTime: 'ExpiredTime',
      gmtCreated: 'GmtCreated',
      gmtExpire: 'GmtExpire',
      instanceAlias: 'InstanceAlias',
      instanceClass: 'InstanceClass',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      instanceTps: 'InstanceTps',
      lockMode: 'LockMode',
      maxSeriesPerDatabase: 'MaxSeriesPerDatabase',
      networkType: 'NetworkType',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'number',
      engineType: 'string',
      expiredTime: 'number',
      gmtCreated: 'string',
      gmtExpire: 'string',
      instanceAlias: 'string',
      instanceClass: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      instanceTps: 'string',
      lockMode: 'string',
      maxSeriesPerDatabase: 'string',
      networkType: 'string',
      paymentType: 'string',
      regionId: 'string',
      status: 'string',
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList extends $tea.Model {
  /**
   * @remarks
   * auditing
   * 
   * @example
   * 0.0.0.0/0
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * hitsdb.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZoneListZoneModel extends $tea.Model {
  /**
   * @remarks
   * Shanghai Zone B
   * 
   * @example
   * Queries zones that are available in a specified region.
   */
  localName?: string;
  /**
   * @remarks
   * The name of the zone
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZoneList extends $tea.Model {
  zoneModel?: DescribeZonesResponseBodyZoneListZoneModel[];
  static names(): { [key: string]: string } {
    return {
      zoneModel: 'ZoneModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneModel: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZoneListZoneModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hitsdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - CreateHiTSDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHiTSDBInstanceResponse
   */
  async createHiTSDBInstanceWithOptions(request: CreateHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceStorage)) {
      query["InstanceStorage"] = request.instanceStorage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHiTSDBInstance",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHiTSDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateHiTSDBInstanceResponse({}));
  }

  /**
   * @param request - CreateHiTSDBInstanceRequest
   * @returns CreateHiTSDBInstanceResponse
   */
  async createHiTSDBInstance(request: CreateHiTSDBInstanceRequest): Promise<CreateHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHiTSDBInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Time Series Database (TSDB) instance.
   * 
   * @param request - DeleteHiTSDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHiTSDBInstanceResponse
   */
  async deleteHiTSDBInstanceWithOptions(request: DeleteHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHiTSDBInstance",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHiTSDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteHiTSDBInstanceResponse({}));
  }

  /**
   * Deletes a Time Series Database (TSDB) instance.
   * 
   * @param request - DeleteHiTSDBInstanceRequest
   * @returns DeleteHiTSDBInstanceResponse
   */
  async deleteHiTSDBInstance(request: DeleteHiTSDBInstanceRequest): Promise<DeleteHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHiTSDBInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details about a Time Series Database (TSDB) instance.
   * 
   * @param request - DescribeHiTSDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHiTSDBInstanceResponse
   */
  async describeHiTSDBInstanceWithOptions(request: DescribeHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHiTSDBInstance",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHiTSDBInstanceResponse>(await this.callApi(params, req, runtime), new DescribeHiTSDBInstanceResponse({}));
  }

  /**
   * Queries the details about a Time Series Database (TSDB) instance.
   * 
   * @param request - DescribeHiTSDBInstanceRequest
   * @returns DescribeHiTSDBInstanceResponse
   */
  async describeHiTSDBInstance(request: DescribeHiTSDBInstanceRequest): Promise<DescribeHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeHiTSDBInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHiTSDBInstanceListResponse
   */
  async describeHiTSDBInstanceListWithOptions(request: DescribeHiTSDBInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryStr)) {
      query["QueryStr"] = request.queryStr;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHiTSDBInstanceList",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHiTSDBInstanceListResponse>(await this.callApi(params, req, runtime), new DescribeHiTSDBInstanceListResponse({}));
  }

  /**
   * @param request - DescribeHiTSDBInstanceListRequest
   * @returns DescribeHiTSDBInstanceListResponse
   */
  async describeHiTSDBInstanceList(request: DescribeHiTSDBInstanceListRequest): Promise<DescribeHiTSDBInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeHiTSDBInstanceSecurityIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHiTSDBInstanceSecurityIpListResponse
   */
  async describeHiTSDBInstanceSecurityIpListWithOptions(request: DescribeHiTSDBInstanceSecurityIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceSecurityIpListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHiTSDBInstanceSecurityIpList",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHiTSDBInstanceSecurityIpListResponse>(await this.callApi(params, req, runtime), new DescribeHiTSDBInstanceSecurityIpListResponse({}));
  }

  /**
   * @param request - DescribeHiTSDBInstanceSecurityIpListRequest
   * @returns DescribeHiTSDBInstanceSecurityIpListResponse
   */
  async describeHiTSDBInstanceSecurityIpList(request: DescribeHiTSDBInstanceSecurityIpListRequest): Promise<DescribeHiTSDBInstanceSecurityIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceSecurityIpListWithOptions(request, runtime);
  }

  /**
   * Queries the regions in which Time Series Database (TSDB) instances can be deployed.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries the regions in which Time Series Database (TSDB) instances can be deployed.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyHiTSDBInstanceClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHiTSDBInstanceClassResponse
   */
  async modifyHiTSDBInstanceClassWithOptions(request: ModifyHiTSDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHiTSDBInstanceClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceStorage)) {
      query["InstanceStorage"] = request.instanceStorage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHiTSDBInstanceClass",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHiTSDBInstanceClassResponse>(await this.callApi(params, req, runtime), new ModifyHiTSDBInstanceClassResponse({}));
  }

  /**
   * @param request - ModifyHiTSDBInstanceClassRequest
   * @returns ModifyHiTSDBInstanceClassResponse
   */
  async modifyHiTSDBInstanceClass(request: ModifyHiTSDBInstanceClassRequest): Promise<ModifyHiTSDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHiTSDBInstanceClassWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyHiTSDBInstanceSecurityIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHiTSDBInstanceSecurityIpListResponse
   */
  async modifyHiTSDBInstanceSecurityIpListWithOptions(request: ModifyHiTSDBInstanceSecurityIpListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHiTSDBInstanceSecurityIpListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityIpList)) {
      query["SecurityIpList"] = request.securityIpList;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHiTSDBInstanceSecurityIpList",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHiTSDBInstanceSecurityIpListResponse>(await this.callApi(params, req, runtime), new ModifyHiTSDBInstanceSecurityIpListResponse({}));
  }

  /**
   * @param request - ModifyHiTSDBInstanceSecurityIpListRequest
   * @returns ModifyHiTSDBInstanceSecurityIpListResponse
   */
  async modifyHiTSDBInstanceSecurityIpList(request: ModifyHiTSDBInstanceSecurityIpListRequest): Promise<ModifyHiTSDBInstanceSecurityIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHiTSDBInstanceSecurityIpListWithOptions(request, runtime);
  }

  /**
   * Invoke RenameHiTSDBInstanceAlias to modify the instance alias.
   * 
   * @param request - RenameHiTSDBInstanceAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameHiTSDBInstanceAliasResponse
   */
  async renameHiTSDBInstanceAliasWithOptions(request: RenameHiTSDBInstanceAliasRequest, runtime: $Util.RuntimeOptions): Promise<RenameHiTSDBInstanceAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameHiTSDBInstanceAlias",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameHiTSDBInstanceAliasResponse>(await this.callApi(params, req, runtime), new RenameHiTSDBInstanceAliasResponse({}));
  }

  /**
   * Invoke RenameHiTSDBInstanceAlias to modify the instance alias.
   * 
   * @param request - RenameHiTSDBInstanceAliasRequest
   * @returns RenameHiTSDBInstanceAliasResponse
   */
  async renameHiTSDBInstanceAlias(request: RenameHiTSDBInstanceAliasRequest): Promise<RenameHiTSDBInstanceAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameHiTSDBInstanceAliasWithOptions(request, runtime);
  }

  /**
   * @param request - RenewTSDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewTSDBInstanceResponse
   */
  async renewTSDBInstanceWithOptions(request: RenewTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewTSDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewTSDBInstance",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewTSDBInstanceResponse>(await this.callApi(params, req, runtime), new RenewTSDBInstanceResponse({}));
  }

  /**
   * @param request - RenewTSDBInstanceRequest
   * @returns RenewTSDBInstanceResponse
   */
  async renewTSDBInstance(request: RenewTSDBInstanceRequest): Promise<RenewTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewTSDBInstanceWithOptions(request, runtime);
  }

  /**
   * Restarts a Time Series Database (TSDB) instance.
   * 
   * @param request - RestartHiTSDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartHiTSDBInstanceResponse
   */
  async restartHiTSDBInstanceWithOptions(request: RestartHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartHiTSDBInstance",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartHiTSDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartHiTSDBInstanceResponse({}));
  }

  /**
   * Restarts a Time Series Database (TSDB) instance.
   * 
   * @param request - RestartHiTSDBInstanceRequest
   * @returns RestartHiTSDBInstanceResponse
   */
  async restartHiTSDBInstance(request: RestartHiTSDBInstanceRequest): Promise<RestartHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartHiTSDBInstanceWithOptions(request, runtime);
  }

  /**
   * Switches the Internet connection status of a Time Series Database (TSDB) instance.
   * 
   * @param request - SwitchHiTSDBInstancePublicNetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchHiTSDBInstancePublicNetResponse
   */
  async switchHiTSDBInstancePublicNetWithOptions(request: SwitchHiTSDBInstancePublicNetRequest, runtime: $Util.RuntimeOptions): Promise<SwitchHiTSDBInstancePublicNetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.switchAction)) {
      query["SwitchAction"] = request.switchAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchHiTSDBInstancePublicNet",
      version: "2017-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchHiTSDBInstancePublicNetResponse>(await this.callApi(params, req, runtime), new SwitchHiTSDBInstancePublicNetResponse({}));
  }

  /**
   * Switches the Internet connection status of a Time Series Database (TSDB) instance.
   * 
   * @param request - SwitchHiTSDBInstancePublicNetRequest
   * @returns SwitchHiTSDBInstancePublicNetResponse
   */
  async switchHiTSDBInstancePublicNet(request: SwitchHiTSDBInstancePublicNetRequest): Promise<SwitchHiTSDBInstancePublicNetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchHiTSDBInstancePublicNetWithOptions(request, runtime);
  }

}
