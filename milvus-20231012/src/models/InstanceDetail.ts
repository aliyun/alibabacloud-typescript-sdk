// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceDetailComponentsDataDisk extends $dara.Model {
  enabled?: boolean;
  performanceLevel?: string;
  size?: number;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      performanceLevel: 'performanceLevel',
      size: 'size',
      storageClass: 'storageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      performanceLevel: 'string',
      size: 'number',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceDetailComponentsPodsList extends $dara.Model {
  podId?: string;
  podName?: string;
  static names(): { [key: string]: string } {
    return {
      podId: 'podId',
      podName: 'podName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podId: 'string',
      podName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceDetailComponents extends $dara.Model {
  /**
   * @remarks
   * The number of CUs.
   * 
   * @example
   * 4
   */
  cuNum?: number;
  /**
   * @remarks
   * The CU type.
   * 
   * @example
   * general
   */
  cuType?: string;
  dataDisk?: InstanceDetailComponentsDataDisk;
  /**
   * @remarks
   * The disk size type for the Query Node. Set this parameter to Large for storage-optimized configurations, and to Normal for other configurations.
   * 
   * @example
   * Normal
   */
  diskSizeType?: string;
  payType?: string;
  podsList?: InstanceDetailComponentsPodsList[];
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * data
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cuNum: 'cuNum',
      cuType: 'cuType',
      dataDisk: 'dataDisk',
      diskSizeType: 'diskSizeType',
      payType: 'payType',
      podsList: 'podsList',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      cuType: 'string',
      dataDisk: InstanceDetailComponentsDataDisk,
      diskSizeType: 'string',
      payType: 'string',
      podsList: { 'type': 'array', 'itemType': InstanceDetailComponentsPodsList },
      replica: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.dataDisk && typeof (this.dataDisk as any).validate === 'function') {
      (this.dataDisk as any).validate();
    }
    if(Array.isArray(this.podsList)) {
      $dara.Model.validateArray(this.podsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceDetailTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class InstanceDetailVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-xxx
   */
  vswId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'vswId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: 'string',
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

export class InstanceDetail extends $dara.Model {
  /**
   * @remarks
   * The automatic backup configuration.
   * 
   * @example
   * true
   */
  autoBackup?: boolean;
  /**
   * @remarks
   * The component information.
   */
  components?: InstanceDetailComponents[];
  /**
   * @remarks
   * The configuration.
   * 
   * @example
   * rootCoord:
   *     maxDatabaseNum: 64 # Maximum number of database
   *     maxPartitionNum: 4096
   */
  configuration?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-04-27T02:04:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 2.5
   */
  dbVersion?: string;
  /**
   * @remarks
   * Indicates whether data encryption is enabled.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The expiration time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-04-27T02:04:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether high availability is enabled.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * milvus-test
   */
  instanceName?: string;
  /**
   * @remarks
   * kms key Id。
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The multi-zone deployment mode.
   * 
   * @example
   * Single
   */
  multiZoneMode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 4751
   */
  orderId?: string;
  /**
   * @remarks
   * The billing method. Valid values: PayAsYouGo: pay-as-you-go billing method. Subscription: subscription.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek3dcgyq7pnqwa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The running time.
   * 
   * @example
   * 1
   */
  runningTime?: number;
  /**
   * @remarks
   * The security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - creating: Being created.
   * - running: Running.
   * - updating: Being upgraded. This includes specification changes, configuration changes, and public network access changes.
   * - disable: Unavailable. The cluster has expired and requires renewal to reactivate.
   * - deleting: Being deleted.
   * - deleted: Deleted.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: InstanceDetailTags[];
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: InstanceDetailVSwitchIds[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBackup: 'autoBackup',
      components: 'components',
      configuration: 'configuration',
      createTime: 'createTime',
      dbVersion: 'dbVersion',
      encrypted: 'encrypted',
      expireTime: 'expireTime',
      ha: 'ha',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      kmsKeyId: 'kmsKeyId',
      multiZoneMode: 'multiZoneMode',
      orderId: 'orderId',
      paymentType: 'paymentType',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      runningTime: 'runningTime',
      securityGroupIds: 'securityGroupIds',
      status: 'status',
      tags: 'tags',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBackup: 'boolean',
      components: { 'type': 'array', 'itemType': InstanceDetailComponents },
      configuration: 'string',
      createTime: 'string',
      dbVersion: 'string',
      encrypted: 'boolean',
      expireTime: 'string',
      ha: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      kmsKeyId: 'string',
      multiZoneMode: 'string',
      orderId: 'string',
      paymentType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'number',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tags: { 'type': 'array', 'itemType': InstanceDetailTags },
      vSwitchIds: { 'type': 'array', 'itemType': InstanceDetailVSwitchIds },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

