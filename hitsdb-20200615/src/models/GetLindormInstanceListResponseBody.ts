// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceListResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 2.2.18
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

export class GetLindormInstanceListResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The 16-character AliUid of the Alibaba Cloud account.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * The cause of the creation failure.
   * 
   * @example
   * Resource is not enough
   */
  createErrorCode?: string;
  /**
   * @remarks
   * The number of milliseconds between the instance creation time and 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1631772842000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The creation time of the instance. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2021-09-16 14:13:13
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the column store engine is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableColumn?: boolean;
  /**
   * @remarks
   * Indicates whether the compute engine is enabled for the instance. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether Lindorm Tunnel Service (LTS) is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableLts?: boolean;
  /**
   * @remarks
   * Indicates whether the message engine is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableMessage?: boolean;
  /**
   * @remarks
   * Indicates whether LindormTable 3.0 is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableRow?: boolean;
  /**
   * @remarks
   * Indicates whether the streaming engine is enabled for the instance. Valid values:
   * 
   * - **true**: The streaming engine is enabled.
   * - **false**: The streaming engine is not enabled.
   * 
   * @example
   * true
   */
  enableStream?: boolean;
  /**
   * @remarks
   * Indicates whether the vector engine is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableVector?: boolean;
  /**
   * @remarks
   * The engine types supported by the instance. The return value is the sum of the following engine type values:
   * 
   * - **1**: Search engine
   * - **2**: LindormTSDB
   * - **4**: LindormTable
   * - **8**: File engine
   * 
   * > For example, if the value is 15 (15 = 8 + 4 + 2 + 1), the instance supports the search engine, LindormTSDB, LindormTable, and file engine. If the value is 6 (6 = 4 + 2), the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * > This parameter is returned only when the billing method of the instance is subscription.
   * 
   * @example
   * 2022-04-26 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The number of milliseconds between the time when the instance expires and 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1650902400000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-bp17pwu1541ia****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - **CREATING**: Creating.
   * - **ACTIVATION**: Running.
   * - **COLD_EXPANDING**: Performing storage expansion for storage-optimized cloud storage.
   * - **MINOR_VERSION_TRANSING**: Upgrading the minor version.
   * - **RESIZING**: Scaling out nodes.
   * - **SHRINKING**: Scaling in nodes.
   * - **CLASS_CHANGING**: Upgrading or downgrading specifications.
   * - **SSL_SWITCHING**: Modifying SSL configurations.
   * - **CDC_OPENING**: Enabling the data subscription feature.
   * - **TRANSFER**: Migrating data.
   * - **DATABASE_TRANSFER**: Migrating data to the database.
   * - **GUARD_CREATING**: Creating a disaster recovery instance.
   * - **BACKUP_RECOVERING**: Restoring from a backup.
   * - **DATABASE_IMPORTING**: Importing data.
   * - **NET_MODIFYING**: Modifying network configurations.
   * - **NET_SWITCHING**: Switching between the internal network and the Internet.
   * - **NET_CREATING**: Creating a network connection.
   * - **NET_DELETING**: Performing a delete operation on the network connection.
   * - **DELETING**: Performing a delete operation.
   * - **RESTARTING**: Restarting.
   * - **LOCKED**: Locked because the instance has expired.
   * 
   * @example
   * ACTIVATION
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 960
   */
  instanceStorage?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: Subscription
   * - **POSTPAY**: Pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  payType?: string;
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
   * rg-aekzledqeat****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **lindorm**: Lindorm instance
   * - **serverless_lindorm**: Lindorm Serverless instance
   * - **lindorm_standalone**: Lindorm single-node instance
   * - **lts**: Lindorm Tunnel Service
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetLindormInstanceListResponseBodyInstanceListTags[];
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
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
      createErrorCode: 'CreateErrorCode',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
      enableColumn: 'EnableColumn',
      enableCompute: 'EnableCompute',
      enableLts: 'EnableLts',
      enableMessage: 'EnableMessage',
      enableRow: 'EnableRow',
      enableStream: 'EnableStream',
      enableVector: 'EnableVector',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expiredMilliseconds: 'ExpiredMilliseconds',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createErrorCode: 'string',
      createMilliseconds: 'number',
      createTime: 'string',
      enableColumn: 'boolean',
      enableCompute: 'boolean',
      enableLts: 'boolean',
      enableMessage: 'boolean',
      enableRow: 'boolean',
      enableStream: 'boolean',
      enableVector: 'boolean',
      engineType: 'string',
      expireTime: 'string',
      expiredMilliseconds: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': GetLindormInstanceListResponseBodyInstanceListTags },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  instanceList?: GetLindormInstanceListResponseBodyInstanceList[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CA1FAFD-E8DC-51C2-AA7E-CA6E2D049BA0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': GetLindormInstanceListResponseBodyInstanceList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

