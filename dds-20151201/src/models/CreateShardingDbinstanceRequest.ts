// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShardingDBInstanceRequestConfigServer extends $dara.Model {
  /**
   * @remarks
   * The specifications of the Configserver node. Valid values:
   * - **mdb.shard.2x.xlarge.d**: 4 cores, 8 GB (dedicated). This specification is supported only by instances of version 4.4 or later.
   * - **dds.cs.mid**: 1 core, 2 GB (general-purpose). This specification is supported only by instances of version 4.2 or earlier.
   * 
   * This parameter is required.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  class?: string;
  /**
   * @remarks
   * The storage capacity of the Configserver node. Unit: GB.
   * 
   * > The valid values are subject to the instance specifications. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestMongos extends $dara.Model {
  /**
   * @remarks
   * The specifications of the mongos node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > - **N** in the parameter name specifies the Nth mongos node. For example, **Mongos.2.Class** specifies the specifications of the second mongos node.
   * > - Valid values of **N**: **2** to **32**.
   * 
   * This parameter is required.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestReplicaSet extends $dara.Model {
  /**
   * @remarks
   * The specifications of the shard node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > - **N** in the parameter name specifies the Nth shard node. For example, **ReplicaSet.2.Class** specifies the specifications of the second shard node.
   * > - Valid values of **N**: **2** to **32**.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.standard
   */
  class?: string;
  /**
   * @remarks
   * The number of read-only nodes in the shard node.
   * 
   * Valid values: **0** to **5**. Default value: **0**.
   * > **N** in the parameter name specifies the Nth shard node. For example, **ReplicaSet.2.ReadonlyReplicas** specifies the number of read-only nodes in the second shard node.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: number;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * > - The valid values are subject to the instance specifications. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * > - **N** in the parameter name specifies the Nth shard node. For example, **ReplicaSet.2.Storage** specifies the storage capacity of the second shard node.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      readonlyReplicas: 'ReadonlyReplicas',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      readonlyReplicas: 'number',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * > **N** in the parameter name specifies the Nth tag. For example, **Tag.1.Key** specifies the key of the first tag, and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > **N** in the parameter name specifies the Nth tag. For example, **Tag.1.Value** specifies the value of the first tag, and **Tag.2.Value** specifies the value of the second tag.
   * 
   * @example
   * apitest
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

export class CreateShardingDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the root account. The password must meet the following requirements:
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include !@#$%^&*()_+-=.
   * - It must be 8 to 32 characters in length.
   * 
   * > For more information about how to troubleshoot connection failures caused by special characters in database connection string, see [What do I do if a connection failure occurs because the username or password in database connection string contains special characters?](https://help.aliyun.com/document_detail/471568.html).
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal. In this case, you must manually renew the instance. This is the default value.
   * 
   * > This parameter is valid and optional only when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The cluster backup ID.
   * 
   * > - This parameter is required only when RestoreType is set to 2 or 3.
   * 
   * @example
   * cb-xxx
   */
  backupId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PostPaid**: pay-as-you-go. This is the default value.
   * - **PrePaid**: subscription.
   * 
   * > If you set this parameter to **PrePaid**, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the Configserver node.
   * 
   * This parameter is required.
   */
  configServer?: CreateShardingDBInstanceRequestConfigServer[];
  /**
   * @remarks
   * The instance name. The name must meet the following requirements:
   * - It must start with a letter.
   * - It can contain digits, letters, underscores (_), periods (.), and hyphens (-).
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The region of the geo-redundant backup.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run without executing the actual request. The system checks the request parameters, request format, service limits, and available resources. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the DryRunOperation error code.
   * - false: sends a normal request and executes the operation after the request passes the dry run. This is the default value.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The custom key ID.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine. Set the value to **MongoDB**.
   * 
   * This parameter is required.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database version. Valid values:
   * - **8.0**
   * - **7.0**
   * - **6.0**
   * - **5.0**
   * - **4.4**
   * - **4.2**
   * - **4.0**
   * 
   * > - For more information about the constraints on storage engines and versions, see [Versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * > - When you call this operation to clone an instance, the value of this parameter must be the same as that of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist templates of the instance. Separate multiple templates with commas (,). Each template must be unique.
   * 
   * @example
   * g-qxieqf40xjst1ngpr3jz
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The secondary zone 2 for multi-zone deployment. Valid values:
   * - **cn-hangzhou-g**: Hangzhou Zone G.
   * - **cn-hangzhou-h**: Hangzhou Zone H.
   * - **cn-hangzhou-i**: Hangzhou Zone I.
   * - **cn-hongkong-b**: Hong Kong (China) Zone B.
   * - **cn-hongkong-c**: Hong Kong (China) Zone C.
   * - **cn-hongkong-d**: Hong Kong (China) Zone D.
   * - **cn-wulanchabu-a**: Ulanqab Zone A.
   * - **cn-wulanchabu-b**: Ulanqab Zone B.
   * - **cn-wulanchabu-c**: Ulanqab Zone C.
   * - **ap-southeast-1a**: Singapore Zone A.
   * - **ap-southeast-1b**: Singapore Zone B.
   * - **ap-southeast-1c**: Singapore Zone C.
   * - **ap-southeast-5a**: Jakarta Zone A.
   * - **ap-southeast-5b**: Jakarta Zone B.
   * - **ap-southeast-5c**: Jakarta Zone C.
   * - **eu-central-1a**: Frankfurt Zone A.
   * - **eu-central-1b**: Frankfurt Zone B.
   * - **eu-central-1c**: Frankfurt Zone C.
   * 
   * > - This parameter is valid only when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the value of **ZoneId** or **SecondaryZoneId**.
   * > - For more information about the multi-zone deployment policy for sharded cluster instances, see [Create a multi-zone sharded cluster instance](https://help.aliyun.com/document_detail/117865.html).
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The maintenance end time.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The maintenance start time.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The information about the mongos nodes.
   * 
   * This parameter is required.
   */
  mongos?: CreateShardingDBInstanceRequestMongos[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: months.
   * 
   * Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * > This parameter is required and valid only when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The access protocol type. Valid values:
   * - **mongodb**: MongoDB protocol.
   * - **dynamodb**: DynamoDB protocol.
   * 
   * @example
   * mongodb
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned IOPS.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information about the shard nodes.
   * 
   * This parameter is required.
   */
  replicaSet?: CreateShardingDBInstanceRequestReplicaSet[];
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore the instance. You can specify any point in time within the last seven days. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > You must specify this parameter only when you call this operation to clone an instance. You must also specify the **SrcDBInstanceId** parameter.
   * 
   * @example
   * 2022-03-08T02:30:25Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The backup restoration type. Valid values:
   * 
   * - 1: restore the instance to a specified point in time.
   * - 2: restore a released instance to a specified backup set.
   * - 3: restore the instance to a specified geo-redundant backup set.
   * 
   * @example
   * 1
   */
  restoreType?: string;
  /**
   * @remarks
   * The secondary zone 1 for multi-zone deployment. Valid values:
   * - **cn-hangzhou-g**: Hangzhou Zone G.
   * - **cn-hangzhou-h**: Hangzhou Zone H.
   * - **cn-hangzhou-i**: Hangzhou Zone I.
   * - **cn-hongkong-b**: Hong Kong (China) Zone B.
   * - **cn-hongkong-c**: Hong Kong (China) Zone C.
   * - **cn-hongkong-d**: Hong Kong (China) Zone D.
   * - **cn-wulanchabu-a**: Ulanqab Zone A.
   * - **cn-wulanchabu-b**: Ulanqab Zone B.
   * - **cn-wulanchabu-c**: Ulanqab Zone C.
   * - **ap-southeast-1a**: Singapore Zone A.
   * - **ap-southeast-1b**: Singapore Zone B.
   * - **ap-southeast-1c**: Singapore Zone C.
   * - **ap-southeast-5a**: Jakarta Zone A.
   * - **ap-southeast-5b**: Jakarta Zone B.
   * - **ap-southeast-5c**: Jakarta Zone C.
   * - **eu-central-1a**: Frankfurt Zone A.
   * - **eu-central-1b**: Frankfurt Zone B.
   * - **eu-central-1c**: Frankfurt Zone C.
   * > - This parameter is valid only when the instance uses cloud disks.
   * > - The value of this parameter cannot be the same as the value of **ZoneId** or **HiddenZoneId**.
   * > - For more information about the multi-zone deployment policy for sharded cluster instances, see [Create a multi-zone sharded cluster instance](https://help.aliyun.com/document_detail/117865.html).
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,). Each IP address must be unique. The following formats are supported:
   * - 0.0.0.0/0
   * - IP addresses, such as 10.23.12.24.
   * - CIDR blocks, such as 10.23.12.0/24. 24 indicates the length of the prefix in the CIDR block, and the prefix length ranges from 1 to 32.
   * 
   * > - You can add up to 1,000 IP addresses or CIDR blocks to the whitelist of an instance. The total number of IP addresses and CIDR blocks in all whitelist groups cannot exceed 1,000.
   * > - 0.0.0.0/0 indicates that all IP addresses can access the databases of the instance. This is a high-risk setting. Configure this setting with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * > You must specify this parameter only when you call this operation to clone an instance. You must also specify the **RestoreTime** parameter.
   * 
   * @example
   * dds-bp11483712c1****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region of the source instance.
   * 
   * > - This parameter is required when the backup restoration type is rebuilding a deleted instance.
   * > - This parameter is required when the backup restoration type is cloning from a geo-redundant backup.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Set the value to **WiredTiger**.
   * 
   * > - When you call this operation to clone an instance, the value of this parameter must be the same as that of the source instance.
   * > - For more information about the constraints on storage engines and versions, see [Versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type. Valid values: 
   * 
   * - **cloud_essd1**: PL1 ESSD.
   * - **cloud_essd2**: PL2 ESSD.
   * - **cloud_essd3**: PL3 ESSD.
   * - **local_ssd**: Local SSD.
   * 
   * > - Instances of version 4.4 or later support only cloud disks. If you do not specify this parameter, **cloud_essd1** is selected by default.
   * > - Instances of version 4.2 or earlier support only local disks. If you do not specify this parameter, **local_ssd** is selected by default.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * Specifies whether to enable TTL index cleanup for the restored instance. A value of true or an empty value indicates that cleanup is enabled.
   */
  TTLEnabled?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateShardingDBInstanceRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      autoRenew: 'AutoRenew',
      backupId: 'BackupId',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      configServer: 'ConfigServer',
      DBInstanceDescription: 'DBInstanceDescription',
      destRegion: 'DestRegion',
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      hiddenZoneId: 'HiddenZoneId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      mongos: 'Mongos',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      protocolType: 'ProtocolType',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      replicaSet: 'ReplicaSet',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      secondaryZoneId: 'SecondaryZoneId',
      securityIPList: 'SecurityIPList',
      srcDBInstanceId: 'SrcDBInstanceId',
      srcRegion: 'SrcRegion',
      storageEngine: 'StorageEngine',
      storageType: 'StorageType',
      TTLEnabled: 'TTLEnabled',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      autoRenew: 'string',
      backupId: 'string',
      chargeType: 'string',
      clientToken: 'string',
      configServer: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestConfigServer },
      DBInstanceDescription: 'string',
      destRegion: 'string',
      dryRun: 'boolean',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalSecurityGroupIds: 'string',
      hiddenZoneId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      mongos: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestMongos },
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      protocolType: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      replicaSet: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestReplicaSet },
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      secondaryZoneId: 'string',
      securityIPList: 'string',
      srcDBInstanceId: 'string',
      srcRegion: 'string',
      storageEngine: 'string',
      storageType: 'string',
      TTLEnabled: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configServer)) {
      $dara.Model.validateArray(this.configServer);
    }
    if(Array.isArray(this.mongos)) {
      $dara.Model.validateArray(this.mongos);
    }
    if(Array.isArray(this.replicaSet)) {
      $dara.Model.validateArray(this.replicaSet);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

