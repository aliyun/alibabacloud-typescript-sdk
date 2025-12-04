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
   * The 16-digit AliUid of the Alibaba Cloud account that owns the instance.
   * 
   * @example
   * 164901546557****
   */
  aliUid?: number;
  createErrorCode?: string;
  /**
   * @remarks
   * The time when the instance is created. This value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1631772842000
   */
  createMilliseconds?: number;
  /**
   * @remarks
   * The time when the instance is created.
   * 
   * @example
   * 2021-09-16 14:13:13
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the column storage engine is enabled, returning:
   * - **true**: Enabled. - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableColumn?: boolean;
  /**
   * @remarks
   * Indicates whether LDPS is activated for the instance. Valid values:
   * 
   * *   **true**: LDPS is activated for the instance.
   * *   **false**: LDPS is not activated for the instance.
   * 
   * @example
   * true
   */
  enableCompute?: boolean;
  /**
   * @remarks
   * Indicates whether the LTS engine is enabled, returning:
   * - **true**: Enabled. - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableLts?: boolean;
  /**
   * @remarks
   * Indicates whether the message engine is enabled, returning:
   * - **true**: Enabled. - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableMessage?: boolean;
  /**
   * @remarks
   * Indicates whether the table 3.0 storage engine is enabled, returning:
   * 
   * true: Enabled. - false: Not enabled.
   * 
   * @example
   * true
   */
  enableRow?: boolean;
  /**
   * @remarks
   * Indicates whether the Lindorm streaming engine is activated for the instance. Valid values:
   * 
   * *   **true**: The Lindorm streaming engine is activated for the instance.
   * *   **false**: The Lindorm streaming engine is not activated for the instance.
   * 
   * @example
   * true
   */
  enableStream?: boolean;
  /**
   * @remarks
   * Whether the vector engine is enabled, returns:
   * - **true**: Enabled. - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enableVector?: boolean;
  /**
   * @remarks
   * The engine supported by the instance. The engines are indicated by different numbers:
   * 
   * *   **1**: LindormSearch.
   * *   **2**: LindormTSDB.
   * *   **4**: LindormTable.
   * *   **8**: LindormDFS.
   * 
   * > The value of this parameter is the sum of all numbers that indicate the engines supported by the instance. For example, if the value of this parameter is 15, which is the sum of 1, 2, 4, and 8, the instance supports all four engines. If the value of this parameter is 6, which is the sum of 2 and 4, the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  engineType?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * > This parameter is returned only if the billing method of the instance is subscription.
   * 
   * @example
   * 2022-04-26 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1650902400000
   */
  expiredMilliseconds?: number;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * test
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * ld-bp17pwu1541ia****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **CREATING**: The instance is being created.
   * *   **ACTIVATION**: The instance is running.
   * *   **COLD_EXPANDING**: The Capacity storage of the instance is being scaled up.
   * *   **MINOR_VERSION_TRANSING**: The minor version of the instance is being updated.
   * *   **RESIZING**: The nodes in the instance are being scaled up.
   * *   **SHRINKING**: The nodes in the instance are being scaled down.
   * *   **CLASS_CHANGING**: The specification of the instance is being changed.
   * *   **SSL_SWITCHING: SSL**: The SSL configurations of the instance are being changed.
   * *   **CDC_OPENING**: Data subscription is being enabled for the instance.
   * *   **TRANSFER**: The data of the instance is being transferred.
   * *   **DATABASE_TRANSFER**: The data of the instance is being transferred to databases.
   * *   **GUARD_CREATING**: A disaster recovery instance is being created.
   * *   **BACKUP_RECOVERING**: The data of the instance is being restored from a backup.
   * *   **DATABASE_IMPORTING**: Data is being imported to the instance.
   * *   **NET_MODIFYING**: The network configurations of the instance are being changed.
   * *   **NET_SWITCHING**: The network of the instance is being switched between a virtual private cloud (VPC) and the Internet.
   * *   **NET_CREATING**: The connection to the instance is being created.
   * *   **NET_DELETING**: The connection to the instance is being deleted.
   * *   **DELETING**: The instance is being deleted.
   * *   **RESTARTING**: The instance is restarting.
   * *   **LOCKED**: The instance is locked because it expires.
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
   * *   **PREPAY**: subscription.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzledqeat****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The series of the instance. Valid values:
   * 
   * *   **lindorm**: The instance is a Lindorm instance.
   * *   **serverless_lindorm**: The instance is a Lindorm Serverless instance.
   * *   **lindorm_standalone**: The instance is a single-node Lindorm instance.
   * *   **lts**: The instance is an LTS instance.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of tags associated with the specified instances.
   */
  tags?: GetLindormInstanceListResponseBodyInstanceListTags[];
  /**
   * @remarks
   * The ID of the VPC in which the instance is deployed.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is created.
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
   * The instances.
   */
  instanceList?: GetLindormInstanceListResponseBodyInstanceList[];
  /**
   * @remarks
   * The number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances that are returned on each page.
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
   * The total number of returned instances.
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

