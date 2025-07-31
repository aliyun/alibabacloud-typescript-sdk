// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShardingDBInstanceRequestConfigServer extends $dara.Model {
  /**
   * @remarks
   * The instance type of the ConfigServer node. Valid values:
   * 
   * *   **mdb.shard.2x.xlarge.d**: 4 cores, 8 GB (dedicated). Only instances that run MongoDB 4.4 and later support this instance type.
   * *   **dds.cs.mid** :1 core, 2 GB (general-purpose). Only instances that run MongoDB 4.2 and earlier support this instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  class?: string;
  /**
   * @remarks
   * The storage space of the ConfigServer node. Unit: GB.
   * 
   * > The values that can be specified for this parameter vary based on the instance types. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
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
   * The instance type of the mongos node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > *   **N** specifies the serial number of the mongos node for which the instance type is specified. For example, **Mongos.2.Class** specifies the instance type of the second mongos node.
   * > *   Valid values for **N**: **2** to **32**.
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
   * The instance type of the shard component. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > 
   * 
   * *   **N** specifies the serial number of the shard component for which the instance type is specified. For example, **ReplicaSet.2.Class** specifies the instance type of the second shard component.
   * 
   * *   Valid values of **N**: **2** to **32**.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.standard
   */
  class?: string;
  /**
   * @remarks
   * The number of read-only nodes in the shard component.
   * 
   * Valid values: **0**, **1, 2, 3, 4, and 5**. Default value: **0**.
   * 
   * >  **N** specifies the serial number of the shard component for which you want to set the number of read-only nodes. **ReplicaSet.2.ReadonlyReplicas** specifies the number of read-only nodes in the second shard component.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: number;
  /**
   * @remarks
   * The storage capacity of the shard component. Unit: GB.
   * 
   * > 
   * 
   * *   The values that can be specified for this parameter vary based on the instance types. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * *   **N** specifies the serial number of the shard component for which the storage capacity is specified. For example, **ReplicaSet.2.Storage** specifies the storage capacity of the second shard component.
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
   * 
   * >  **N** specifies the serial number of the tag. For example, **Tag.1.Key** specifies the key of the first tag and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * >  **N** specifies the serial number of the tag. For example, **Tag.1.Value** specifies the value of the first tag and Tag.2.Value specifies the value of the second tag.
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
   * 
   * *   The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   The following special characters are supported: ! @ # $ % ^ & \\* ( ) _ + - =.
   * *   The password must be 8 to 32 characters in length.
   * 
   * >  For more information about how to resolve failed database connections due to special characters, see [What do I do if my instance is not connected due to special characters in the password in the connection string of the instance?](https://help.aliyun.com/document_detail/471568.html)
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > This parameter is available and optional if you set the value of **ChargeType** to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the backup set. 
   * 
   * > When you call this operation to clone an instance based on the backup set, this parameter is required. The **SrcDBInstanceId** parameter is also required.
   * 
   * @example
   * cb-xxx
   */
  backupId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PostPaid** (default): pay-as-you-go
   * *   **PrePaid**: subscription
   * 
   * >  If you set this parameter to **PrePaid**, you must also configure the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ConfigServer nodes of the instance.
   * 
   * This parameter is required.
   */
  configServer?: CreateShardingDBInstanceRequestConfigServer[];
  /**
   * @remarks
   * The name of the instance. The name of the instance must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   It can contain digits, letters, underscores (_), and hyphens (-).
   * *   It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The region of the backup set used for the cross-region backup and restoration.
   * 
   * >  This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * cn-hangzhou
   */
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * This parameter is required.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   **7.0**
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * 
   * > 
   * 
   * *   For more information about the limits on database versions and storage engines, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * *   If you call this operation to clone an instance, set the value of this parameter to the database engine version of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist template of the instance. Separate multiple templates with commas (,). The template name must be globally unique.
   * 
   * @example
   * g-qxieqf40xjst1ngp****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The ID of secondary zone 2 for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hong Kong Zone B
   * *   **cn-hongkong-c**: Hong Kong Zone C
   * *   **cn-hongkong-d**: Hong Kong Zone D
   * *   **cn-wulanchabu-a**: Ulanqab Zone A
   * *   **cn-wulanchabu-b**: Ulanqab Zone B
   * *   **cn-wulanchabu-c**: Ulanqab Zone C
   * *   **ap-southeast-1a**: Singapore Zone A
   * *   **ap-southeast-1b**: Singapore Zone B
   * *   **ap-southeast-1c**: Singapore Zone C
   * *   **ap-southeast-5a**: Jakarta Zone A
   * *   **ap-southeast-5b**: Jakarta Zone B
   * *   **ap-southeast-5c**: Jakarta Zone C
   * *   **eu-central-1a**: Frankfurt Zone A
   * *   **eu-central-1b**: Frankfurt Zone B
   * *   **eu-central-1c**: Frankfurt Zone C
   * 
   * > *   This parameter is available and required if you set the value of **EngineVersion** to **4.4** or **5.0**.
   * > *   The value of this parameter cannot be the same as the value of **ZoneId** or **SecondaryZoneId**.
   * > *   For more information about the multi-zone deployment policy of a sharded cluster instance, see [Create a multi-zone sharded cluster instance](https://help.aliyun.com/document_detail/117865.html).
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The mongos nodes of the instance.
   * 
   * This parameter is required.
   */
  mongos?: CreateShardingDBInstanceRequestMongos[];
  /**
   * @remarks
   * The network type of the instance. Set the value to VPC.
   * 
   * ****
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period of the instance. Unit: months.
   * 
   * Valid values: **1** to **9**, **12**, **24**, **36**, and **60**.
   * 
   * > When you set the **ChargeType** parameter to **PrePaid**, this parameter is valid and required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The access protocol type of the instance. Valid values:
   * 
   * *   **mongodb**
   * *   **dynamodb**
   * 
   * @example
   * mongodb
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned IOPS of the instance:
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information of the shard component.
   * 
   * This parameter is required.
   */
  replicaSet?: CreateShardingDBInstanceRequestReplicaSet[];
  /**
   * @remarks
   * The resource group ID. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to restore the instance, which must be within seven days. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in Coordinated Universal Time (UTC).
   * 
   * > This parameter is required only if you call this operation to clone an instance. If you specify this parameter, you must also specify **SrcDBInstanceId**.
   * 
   * @example
   * 2022-03-08T02:30:25Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration type of the instance. Valid values:
   * 
   * *   1: restores the instance data to the specified point in time.
   * *   2: restores the data of the released instance to the specified backup set.
   * *   3: restores the instance data to the specified cross-region backup set.
   * 
   * @example
   * 1
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of secondary zone 1 for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hong Kong Zone B
   * *   **cn-hongkong-c**: Hong Kong Zone C
   * *   **cn-hongkong-d**: Hong Kong Zone D
   * *   **cn-wulanchabu-a**: Ulanqab Zone A
   * *   **cn-wulanchabu-b**: Ulanqab Zone B
   * *   **cn-wulanchabu-c**: Ulanqab Zone C
   * *   **ap-southeast-1a**: Singapore Zone A
   * *   **ap-southeast-1b**: Singapore Zone B
   * *   **ap-southeast-1c**: Singapore Zone C
   * *   **ap-southeast-5a**: Jakarta Zone A
   * *   **ap-southeast-5b**: Jakarta Zone B
   * *   **ap-southeast-5c**: Jakarta Zone C
   * *   **eu-central-1a**: Frankfurt Zone A
   * *   **eu-central-1b**: Frankfurt Zone B
   * *   **eu-central-1c**: Frankfurt Zone C
   * 
   * > *   This parameter is available and required if you set the value of **EngineVersion** to **4.4** or **5.0**.
   * > *   The value of this parameter cannot be the same as the value of **ZoneId** or **HiddenZoneId**.
   * > *   For more information about the multi-zone deployment policy of a sharded cluster instance, see [Create a multi-zone sharded cluster instance](https://help.aliyun.com/document_detail/117865.html).
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP addresses in an IP address whitelist of the instance. Multiple IP addresses are separated by commas (,), and each IP address in the IP address whitelist must be unique. The following types of values are supported:
   * 
   * *   0.0.0.0/0
   * *   IP addresses, such as 10.23.12.24.
   * *   CIDR blocks, such as 10.23.12.0/24. In this case, 24 indicates that the prefix of each IP address is 24-bit long. You can replace 24 with a value within the range of 1 to 32.
   * 
   * > *   A maximum of 1,000 IP addresses and CIDR blocks can be configured for each instance.
   * > *   If you enter 0.0.0.0/0, all IP addresses can access the instance. This may introduce security risks to the instance. Proceed with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The source instance ID.
   * 
   * > This parameter is required only if you call this operation to clone an instance. If you specify this parameter, you must also specify **RestoreTime**.
   * 
   * @example
   * dds-bp11483712c1****
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > This parameter is required when restore type is set to 2 or 3.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Set the value to **WiredTiger**.
   * 
   * > 
   * 
   * *   If you call this operation to clone an instance, set the value of this parameter to the storage engine of the source instance.
   * 
   * *   For more information about the limits on database versions and storage engines, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd1**: ESSD PL1
   * *   **cloud_essd2**: ESSD PL2
   * *   **cloud_essd3**: ESSD PL3
   * *   **local_ssd**: local SSD
   * 
   * > *   Instances of MongoDB 4.4 and later support only cloud disks. **cloud_essd1** is selected if you leave this parameter empty.
   * > *   Instances of MongoDB 4.2 and earlier support only local disks. **local_ssd** is selected if you leave this parameter empty.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The custom tags that you want to add to the instance.
   */
  tag?: CreateShardingDBInstanceRequestTag[];
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent zone list.
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
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      hiddenZoneId: 'HiddenZoneId',
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
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalSecurityGroupIds: 'string',
      hiddenZoneId: 'string',
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

