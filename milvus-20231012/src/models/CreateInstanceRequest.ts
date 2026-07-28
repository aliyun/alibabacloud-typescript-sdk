// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestBackupRestoreInfo extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * bt-xxxxx
   */
  backupId?: string;
  /**
   * @remarks
   * The backup name.
   * 
   * @example
   * Backup1
   */
  backupName?: string;
  /**
   * @remarks
   * The ID of the source backup cluster.
   * 
   * @example
   * c-xxxxxxx
   */
  sourceClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'backupId',
      backupName: 'backupName',
      sourceClusterId: 'sourceClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupName: 'string',
      sourceClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestComponentsDataDisk extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 100
   */
  size?: number;
  /**
   * @example
   * alicloud-disk-essd-pl1
   */
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

export class CreateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs).
   * 
   * This parameter is required.
   * 
   * @example
   * 8
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
  dataDisk?: CreateInstanceRequestComponentsDataDisk;
  /**
   * @remarks
   * The disk size type for Query Node. Set to Large for storage-optimized, and Normal for compute-optimized or other configurations.
   * 
   * @example
   * Normal
   */
  diskSizeType?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * The component type.
   * 
   * This parameter is required.
   * 
   * @example
   * standalone
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cuNum: 'cuNum',
      cuType: 'cuType',
      dataDisk: 'dataDisk',
      diskSizeType: 'diskSizeType',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      cuType: 'string',
      dataDisk: CreateInstanceRequestComponentsDataDisk,
      diskSizeType: 'string',
      replica: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.dataDisk && typeof (this.dataDisk as any).validate === 'function') {
      (this.dataDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * value
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

export class CreateInstanceRequestVSwitchIds extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID configuration in the zone.
   * 
   * @example
   * vsw-xxx
   */
  vswId?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-shanghai-a
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

export class CreateInstanceRequest extends $dara.Model {
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
   * Specifies whether to enable AI function.
   */
  aiFunction?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic backup.
   * 
   * @example
   * true
   */
  autoBackup?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the payment type is set to Subscription.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The backup and restoration information.
   */
  backupRestoreInfo?: CreateInstanceRequestBackupRestoreInfo;
  /**
   * @remarks
   * The component information.
   */
  components?: CreateInstanceRequestComponents[];
  /**
   * @remarks
   * The configuration items.
   * 
   * @example
   * rootCoord:
   *     maxDatabaseNum: 64 # Maximum number of database
   *     maxPartitionNum: 4096
   */
  configuration?: string;
  /**
   * @remarks
   * The database administrator password.
   * 
   * @example
   * test12
   */
  dbAdminPassword?: string;
  /**
   * @remarks
   * The Milvus version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.4
   */
  dbVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable OSS encryption.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Specifies whether to enable high availability.
   * 
   * @example
   * true
   */
  ha?: boolean;
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
   * Specifies whether to enable multi-zone storage.
   */
  isMultiAzStorage?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used for encryption.
   * 
   * @example
   * key-xxx
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The number of load replicas.
   * 
   * @example
   * 2
   */
  loadReplicas?: number;
  /**
   * @remarks
   * The zone configuration.
   * 
   * @example
   * Single
   */
  multiZoneMode?: string;
  /**
   * @remarks
   * The payment duration.
   * 
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @remarks
   * The payment duration unit.
   * 
   * @example
   * month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The payment type.
   * 
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 22120151****
   */
  promotionNo?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * The vSwitches.
   * 
   * @example
   * ["vsw-123xxx"]
   */
  vSwitchIds?: CreateInstanceRequestVSwitchIds[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-123xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aiFunction: 'aiFunction',
      autoBackup: 'autoBackup',
      autoPay: 'autoPay',
      autoRenew: 'autoRenew',
      backupRestoreInfo: 'backupRestoreInfo',
      components: 'components',
      configuration: 'configuration',
      dbAdminPassword: 'dbAdminPassword',
      dbVersion: 'dbVersion',
      encrypted: 'encrypted',
      ha: 'ha',
      instanceName: 'instanceName',
      isMultiAzStorage: 'isMultiAzStorage',
      kmsKeyId: 'kmsKeyId',
      loadReplicas: 'loadReplicas',
      multiZoneMode: 'multiZoneMode',
      paymentDuration: 'paymentDuration',
      paymentDurationUnit: 'paymentDurationUnit',
      paymentType: 'paymentType',
      promotionNo: 'promotionNo',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aiFunction: 'boolean',
      autoBackup: 'boolean',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      backupRestoreInfo: CreateInstanceRequestBackupRestoreInfo,
      components: { 'type': 'array', 'itemType': CreateInstanceRequestComponents },
      configuration: 'string',
      dbAdminPassword: 'string',
      dbVersion: 'string',
      encrypted: 'boolean',
      ha: 'boolean',
      instanceName: 'string',
      isMultiAzStorage: 'boolean',
      kmsKeyId: 'string',
      loadReplicas: 'number',
      multiZoneMode: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      promotionNo: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
      vSwitchIds: { 'type': 'array', 'itemType': CreateInstanceRequestVSwitchIds },
      vpcId: 'string',
      zoneId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.backupRestoreInfo && typeof (this.backupRestoreInfo as any).validate === 'function') {
      (this.backupRestoreInfo as any).validate();
    }
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
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

