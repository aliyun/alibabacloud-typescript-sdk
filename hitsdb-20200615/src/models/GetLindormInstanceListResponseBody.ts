// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceListResponseBodyInstanceListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The 16-digit ID of the Alibaba Cloud account.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  /**
   * @remarks
   * The reason why the instance failed to be created.
   * 
   * @example
   * Resource is not enough
   */
  createErrorCode?: string;
  /**
   * @remarks
   * The timestamp of when the instance was created. The value is the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1631772842000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The time when the instance was created.
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
   * 
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
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether the LTS engine is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableLts?: boolean;
  /**
   * @remarks
   * Indicates whether the messaging engine is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableMessage?: boolean;
  /**
   * @remarks
   * Indicates whether the LindormTable 3.0 engine is enabled. Valid values:
   * 
   * true: Enabled.
   * false: Not enabled.
   * 
   * @example
   * true
   */
  enableRow?: boolean;
  /**
   * @remarks
   * Indicates whether the stream engine is enabled for the instance. Valid values:
   * 
   * - **true**: The stream engine is enabled.
   * 
   * - **false**: The stream engine is not enabled.
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
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableVector?: boolean;
  /**
   * @remarks
   * The types of engines supported by the instance. The value of this parameter is the sum of the values of the supported engines.
   * 
   * - **1**: search engine.
   * 
   * - **2**: LindormTSDB.
   * 
   * - **4**: LindormTable.
   * 
   * - **8**: file engine.
   * 
   * > For example, a value of 15 (8 + 4 + 2 + 1) indicates that the instance supports the file engine, LindormTable, LindormTSDB, and the search engine. A value of 6 (4 + 2) indicates that the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * > This parameter is returned only for subscription instances.
   * 
   * @example
   * 2022-04-26 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp of when the instance expires. The value is the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1650902400000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ld-bp17pwu1541ia****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **ACTIVATION**: The instance is running.
   * 
   * - **COLD_EXPANDING**: The capacity of the storage-optimized instance is being expanded.
   * 
   * - **MINOR_VERSION_TRANSING**: The minor version of the instance is being upgraded.
   * 
   * - **RESIZING**: The instance is scaling up.
   * 
   * - **SHRINKING**: The instance is scaling down.
   * 
   * - **CLASS_CHANGING**: The instance class is being changed.
   * 
   * - **SSL_SWITCHING**: The SSL certificate is being changed.
   * 
   * - **CDC_OPENING**: The data subscription feature is being enabled.
   * 
   * - **TRANSFER**: Data migration is in progress.
   * 
   * - **DATABASE_TRANSFER**: Data is being migrated to the database.
   * 
   * - **GUARD_CREATING**: A disaster recovery instance is being created.
   * 
   * - **BACKUP_RECOVERING**: A backup is being restored.
   * 
   * - **DATABASE_IMPORTING**: Data is being imported.
   * 
   * - **NET_MODIFYING**: The network settings are being modified.
   * 
   * - **NET_SWITCHING**: The network type is being switched.
   * 
   * - **NET_CREATING**: A network connection is being created.
   * 
   * - **NET_DELETING**: A network connection is being deleted.
   * 
   * - **DELETING**: The instance is being deleted.
   * 
   * - **RESTARTING**: The instance is being restarted.
   * 
   * - **LOCKED**: The instance has expired and is locked.
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
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzledqeat****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * - **lindorm**: a Lindorm instance.
   * 
   * - **serverless_lindorm**: a Lindorm Serverless instance.
   * 
   * - **lindorm_standalone**: a Lindorm standalone instance.
   * 
   * - **lts**: the Lindorm Tunnel Service type.
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
   * The ID of the virtual private cloud (VPC) in which the instance is deployed.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CA1FAFD-E8DC-51C2-AA7E-CA6E2D049BA0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances found.
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

