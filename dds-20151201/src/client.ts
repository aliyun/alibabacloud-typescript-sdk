// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateNodePrivateNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * > 
   * 
   * *   The username must be 4 to 16 characters in length and can contain lowercase letters, digits, and underscores (_). The username must start with a lowercase letter.
   * 
   * *   You must configure the account and password only when you apply for the endpoint of a shard or Configserver node for the first time. The account and password are required for all shard and Configserver nodes.
   * 
   * *   The permissions of this account are fixed to read-only.
   * 
   * @example
   * shardcsaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The password for the account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * @example
   * Test123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fa5efaa93****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or Configserver node.
   * 
   * >  You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the ID of the shard or Configserver node.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp124beeb0ac****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the zone to which the instance belongs.
   * 
   * >  You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateNodePrivateNetworkAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateNodePrivateNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateNodePrivateNetworkAddressResponseBody;
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
      body: AllocateNodePrivateNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos, shard, or Configserver node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the ID of the mongos, shard, or Configserver node.
   * 
   * > This parameter is required only when you specify the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * s-bp18e6d84ae3****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8AA45036-497F-52E7-B951-F9C7B239****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocatePublicNetworkAddressResponseBody;
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
      body: AllocatePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp18f7d6b6a7****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether KMS keys are authorized to ApsaraDB for MongoDB instances. Valid values:
   * 
   * *   **0**: KMS keys are not authorized.
   * *   **1**: KMS keys are authorized.
   * *   **2**: KMS is not enabled.
   * 
   * @example
   * 1
   */
  authorizationState?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A0181AC4-F186-46ED-87CA-100C70B86729
   */
  requestId?: string;
  /**
   * @remarks
   * The role information of the authorized Alibaba Resource Name (ARN).
   * 
   * >  This parameter is returned only when the value of the **AuthorizationState** parameter is **1**.
   * 
   * @example
   * acs:ram::140****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCloudResourceAuthorizedResponseBody;
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
      body: CheckCloudResourceAuthorizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionRequest extends $tea.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * > *   You must specify one of the **RestoreTime** and BackupId parameters.
   * > *   This parameter is not applicable to sharded cluster instances.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The name of the source database. The value is a JSON array.
   * 
   * >  If you do not specify this parameter, all databases are restored by default.
   * 
   * @example
   * ["db1","db2"]
   */
  databaseNames?: string;
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
   * The instance architecture. Valid values:
   * 
   * *   replicate
   * *   sharding
   * 
   * > * This parameter is required when you set the RestoreType parameter to 2.
   * > * This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * sg-bp179****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > *   The time can be a point in time within the past seven days. The time must be earlier than the current time, but later than the time when the instance was created.
   * > *   You must specify one of the RestoreTime and **BackupId** parameters.
   * 
   * @example
   * 2022-08-22T08:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration type.
   * 
   * > * 0: The data of the source instance is restored to a new instance in the same region.
   * > * 1: The data of the source instance is restored to an earlier point in time.
   * > * 2: The data of a deleted instance is restored to a new instance from the backup set.
   * > * 3: The data of a deleted instance is restored to a new instance in another region from the backup set.
   * 
   * @example
   * 0
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * dds-bp1378****
   */
  sourceDBInstance?: string;
  /**
   * @remarks
   * The region where the source instance resides.
   * 
   * > * This parameter is required when you set the RestoreType parameter to 2.
   * > * This parameter is required when you set the RestoreType parameter to 3.
   * 
   * @example
   * cn-beijing
   */
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      databaseNames: 'DatabaseNames',
      destRegion: 'DestRegion',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstance: 'SourceDBInstance',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      databaseNames: 'string',
      destRegion: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstance: 'string',
      srcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * dds-bp1378****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Indicates whether the data of the instance can be restored. Valid values:
   * 
   * *   **true**: The data of the instance can be restored.
   * *   **false**: The data of the instance cannot be restored.
   * 
   * @example
   * true
   */
  isValid?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D563A3E7-6010-45FE-A0CD-9283414C9657
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      isValid: 'IsValid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      isValid: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckRecoveryConditionResponseBody;
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
      body: CheckRecoveryConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the database account. The name must be 4 to 16 characters in length. It can contain lowercase letters, digits, and underscores (_). It must start with a lowercase letter. The account is granted read-only permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * admin1
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must be 8 to 32 characters in length. It can contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. Special characters include ! # $ % ^ & \\* ( ) _ + - =
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456!
   */
  accountPassword?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf6e9433e955xxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FEF1BEF-2842-5758-9126-415A297XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
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
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupRequest extends $tea.Model {
  /**
   * @remarks
   * The backup method of the instance. Valid values:
   * 
   * *   **Logical**
   * *   **Physical** (default)
   * 
   * > Only replica set instances and sharded cluster instances support this parameter. You do not need to specify this parameter for standalone instances. All standalone instances use snapshot backup.
   * 
   * @example
   * Logical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp2235****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7016B12F-7F64-40A4-BAFF-013F02AC82FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupResponseBody;
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
      body: CreateBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The password of the root account. The password must meet the following requirements:
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include ! # $ % ^ & \\* ( ) _ + - =
   * *   The password of the account must be 8 to 32 characters in length.
   * 
   * @example
   * 123456Aa
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Default value: false. Valid values:
   * 
   * *   **true**: The instance is automatically renewed.
   * *   **false**: The instance is manually renewed.
   * 
   * > This parameter is valid and optional when the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup set ID.
   * 
   * > When you call this operation to clone an instance based on the backup set, this parameter is required. The **SrcDBInstanceId** parameter is also required.
   * 
   * @example
   * 32994****
   */
  backupId?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PostPaid**: pay-as-you-go. This is the default value.
   * *   **PrePaid**: subscription.
   * 
   * > If you set this parameter to **PrePaid**, you must also specify the **Period** parameter.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the instance belongs.
   * 
   * @example
   * dhg-2x78****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * - **default** or **null**: uses coupons.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query the instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name of the instance must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain digits, letters, underscores (_), and hyphens (-).
   * *   The name must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * The values that can be specified for this parameter vary based on the instance types. For more information, see [Replica set instance types](https://help.aliyun.com/document_detail/311410.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * > When you call this operation to clone an instance, you can set this parameter to specify the database to clone. Otherwise, all databases of the instance are cloned.
   * 
   * @example
   * mongodbtest
   */
  databaseNames?: string;
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
   * The database engine of the instance. The value is fixed as **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * 
   * > When you call this operation to clone an instance or restore an instance from the recycle bin, set the value of this parameter to the engine version of the source instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The global IP address whitelist template name of the instance. Multiple IP address whitelist template names are separated by commas (,) and each template name must be unique. (The template feature is available only in canary release.)
   * 
   * @example
   * g-qxieqf40xjst1ngp****
   */
  globalSecurityGroupIds?: string;
  /**
   * @remarks
   * The zone where the hidden node resides for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G.
   * *   **cn-hangzhou-h**: Hangzhou Zone H.
   * *   **cn-hangzhou-i**: Hangzhou Zone I.
   * *   **cn-hongkong-b**: Hongkong Zone B.
   * *   **cn-hongkong-c**: Hongkong Zone C.
   * *   **cn-hongkong-d**: Hongkong Zone D.
   * *   **cn-wulanchabu-a**: Ulanqab Zone A.
   * *   **cn-wulanchabu-b**: Ulanqab Zone B.
   * *   **cn-wulanchabu-c**: Ulanqab Zone C.
   * *   **ap-southeast-1a**: Singapore Zone A.
   * *   **ap-southeast-1b**: Singapore Zone B.
   * *   **ap-southeast-1c**: Singapore Zone C.
   * *   **ap-southeast-5a**: Jakarta Zone A.
   * *   **ap-southeast-5b**: Jakarta Zone B.
   * *   **ap-southeast-5c**: Jakarta Zone C.
   * *   **eu-central-1a**: Frankfurt Zone A.
   * *   **eu-central-1b**: Frankfurt Zone B.
   * *   **eu-central-1c**: Frankfurt Zone C.
   * 
   * >  *   This parameter is valid and required when the **EngineVersion** parameter is set to **4.4** or **5.0**.
   * >  *   The value of this parameter cannot be the same as the value of the **ZoneId** or **SecondaryZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-i
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid value:
   * 
   * **VPC**: Virtual Private Cloud (VPC)
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
   * The provisioned IOPS. Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The number of **read-only nodes** in the replica set instance. Default value: **0**. Valid values: **0** to **5**.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: string;
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
   * The number of **nodes** in the replica set instance. Default value: 3. Valid values:
   * 
   * *   **3**
   * *   **5**
   * *   **7**
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored, which must be within seven days. The time is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format (UTC time).
   * 
   * > When you call this operation to restore an instance to the specified time, this parameter is required. The **SrcDBInstanceId** parameter is also required.
   * 
   * @example
   * 2022-03-13T12:11:14Z
   */
  restoreTime?: string;
  restoreType?: string;
  /**
   * @remarks
   * The zone where the secondary node resides for multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G.
   * *   **cn-hangzhou-h**: Hangzhou Zone H.
   * *   **cn-hangzhou-i**: Hangzhou Zone I.
   * *   **cn-hongkong-b**: Hongkong Zone B.
   * *   **cn-hongkong-c**: Hongkong Zone C.
   * *   **cn-hongkong-d**: Hongkong Zone D.
   * *   **cn-wulanchabu-a**: Ulanqab Zone A.
   * *   **cn-wulanchabu-b**: Ulanqab Zone B.
   * *   **cn-wulanchabu-c**: Ulanqab Zone C.
   * *   **ap-southeast-1a**: Singapore Zone A.
   * *   **ap-southeast-1b**: Singapore Zone B.
   * *   **ap-southeast-1c**: Singapore Zone C.
   * *   **ap-southeast-5a**: Jakarta Zone A.
   * *   **ap-southeast-5b**: Jakarta Zone B.
   * *   **ap-southeast-5c**: Jakarta Zone C.
   * *   **eu-central-1a**: Frankfurt Zone A.
   * *   **eu-central-1b**: Frankfurt Zone B.
   * *   **eu-central-1c**: Frankfurt Zone C.
   * 
   * >  *   This parameter is valid and required when the **EngineVersion** parameter is set to **4.4** or **5.0**.
   * >  *   The value of this parameter cannot be the same as the value of the **ZoneId** or **HiddenZoneId** parameter.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP addresses in an IP address whitelist. Multiple IP addresses are separated by commas (,), and each IP address in the IP address whitelist must be unique. The following types of values are supported:
   * 
   * *   0.0.0.0/0
   * *   IP addresses, such as 10.23.12.24.
   * *   Classless Inter-Domain Routing (CIDR) blocks, such as 10.23.12.0/24. In this case, /24 indicates that the prefix of each IP address is 24-bit long. You can replace 24 with a value within the range of 1 to 32.
   * 
   * > *   A maximum of 1,000 IP addresses or CIDR blocks can be configured for each instance.
   * > *   If you enter 0.0.0.0/0, all IP addresses can access the instance. This may introduce security risks to the instance. Proceed with caution.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
   */
  securityIPList?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * > When you call this operation to clone an instance, this parameter is required. The **BackupId** or **RestoreTime** parameter is also required. When you call this operation to restore an instance from the recycle bin, this parameter is required. The **BackupId** or **RestoreTime** parameter is not required.
   * 
   * @example
   * dds-bp1ee12ad351****
   */
  srcDBInstanceId?: string;
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Default value: WiredTiger. Valid values:
   * 
   * *   **WiredTiger**
   * *   **RocksDB**
   * *   **TerarkDB**
   * 
   * >  *   When you call this operation to clone an instance or restore an instance from the recycle bin, set the value of this parameter to the storage engine of the source instance.
   * >  *   For more information about the limits on database versions and storage engines, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd1** :ESSD PL1.
   * *   **cloud_essd2**: ESSD PL2.
   * *   **cloud_essd3**: ESSD PL3.
   * *   **local_ssd**: local SSD.
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The custom tags added to the instance.
   */
  tag?: CreateDBInstanceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1gzt31twhlo0sa5****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp175iuvg8nxqraf2****
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
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      databaseNames: 'DatabaseNames',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalSecurityGroupIds: 'GlobalSecurityGroupIds',
      hiddenZoneId: 'HiddenZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      provisionedIops: 'ProvisionedIops',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
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
      businessInfo: 'string',
      chargeType: 'string',
      clientToken: 'string',
      clusterId: 'string',
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceStorage: 'number',
      databaseNames: 'string',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalSecurityGroupIds: 'string',
      hiddenZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      provisionedIops: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replicationFactor: 'string',
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
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp144a7f2db8****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21077576248****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8F1D721-6439-4257-A89C-F1E8E9C9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBInstanceResponseBody;
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
      body: CreateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 27.18.86.18,183.92.40.129
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aizy
   */
  globalIgName?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

export class CreateGlobalSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The IP whitelist templates.
   */
  globalSecurityIPGroup?: CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGlobalSecurityIPGroupResponseBody;
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
      body: CreateGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the account. The username must meet the following requirements:
   * 
   * *   The username starts with a lowercase letter.
   * *   The username can contain lowercase letters, digits, and underscores (_).
   * *   The username must be 4 to 16 characters in length.
   * 
   * > 
   * 
   * *   Keywords cannot be used as accounts.
   * 
   * *   This account is granted the read-only permissions.
   * *   The username and password need to be set if you apply for an endpoint for the shard node for the first time.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * 
   * *   The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   These special characters include ! @ # $ % ^ & \\* ( ) _ + - =
   * *   The password is 8 to 32 characters in length.
   * 
   * >  ApsaraDB for MongoDB does not allow you to reset the password of an account.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > Orders. On the **Orders** page, find the order that you want to pay for and complete the payment.
   * 
   * >  This parameter is required only when the billing method of the instance is subscription.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: **youhuiquan_promotion_option_id_for_blank**.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11501cd7b5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance type of the shard or mongos node. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The disk capacity of the node. Unit: GB.
   * 
   * Valid values: **10** to **2000**. The value must be a multiple of 10.
   * 
   * >  This parameter is required only when the NodeType parameter is set to **shard**.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **shard**: shard node
   * *   **mongos**: mongos node
   * 
   * This parameter is required.
   * 
   * @example
   * shard
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node.
   * 
   * Valid values: **0**, 1, 2, 3, 4, and **5**. Default value: **0**.
   * 
   * >  This parameter is available only for ApsaraDB for MongoDB instances that are purchased on the China site (aliyun.com).
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to apply for an endpoint for the shard node. Valid values:
   * 
   * *   **true**: applies for an endpoint for the shard node.
   * *   **false** (default): does not apply for an endpoint for the shard node.
   * 
   * @example
   * false
   */
  shardDirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      nodeClass: 'NodeClass',
      nodeStorage: 'NodeStorage',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardDirect: 'ShardDirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      nodeClass: 'string',
      nodeStorage: 'number',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardDirect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * d-bp1b234bf7a4****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20951063702****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D48FB19-20CA-4725-A870-3D8F5CE6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeResponseBody;
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
      body: CreateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeBatchRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the account. The username must meet the following requirements:
   * - The username starts with a lowercase letter. 
   * - The username contains lowercase letters, digits, and underscores (_). 
   * - The username is 4 to 16 characters in length. 
   * 
   * > - Keywords cannot be used as account usernames. 
   * > - The permissions of this account are fixed at read-only. 
   * > - The username and password are required to be set only when you apply for an endpoint for the shard node for the first time.
   * 
   * @example
   * ceshi
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the account. The password must meet the following requirements:
   * - The password contains at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. 
   * - These special characters include ! @ # $ % ^ & * ( ) _ + - = 
   * - The password is 8 to 32 characters in length. 
   * > The account password of the shard node cannot be reset.
   * 
   * @example
   * 123+abc
   */
  accountPassword?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: true. Valid values:
   * - **true**: enables automatic payment. Make sure that you have sufficient balance within your account. 
   * - **false**: disables automatic payment. In this case, you must manually pay for the instance. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Orders**. On the Orders page, find the order and complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to add nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp18b0934e70****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * - **OpenApi**: ApsaraDB for MongoDB API 
   * - **mongo_buy**: ApsaraDB for MongoDB console
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the mongos or shard node that you want to add. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). 
   * 
   * > Up to 32 mongos or shard nodes are supported for each sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"mdb.shard.4x.large.d","Storage":20}]}
   */
  nodesInfo?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to apply for an endpoint for the shard node. Default value: false. Valid values:
   * - **true**: applies for an endpoint for the shard node. 
   * - **false**: does not apply for an endpoint for the shard node.
   * 
   * @example
   * false
   */
  shardDirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      fromApp: 'FromApp',
      nodesInfo: 'NodesInfo',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardDirect: 'ShardDirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      fromApp: 'string',
      nodesInfo: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardDirect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeBatchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the added mongos or shard node.
   * 
   * @example
   * d-bp18f7d6b6a7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 50179021707****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55D41A94-1ACE-55E8-8BC7-67D622E7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeBatchResponseBody;
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
      body: CreateNodeBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The password of the root account. The password must meet the following requirements:
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   The special characters include ! # $ % ^ & \\* ( ) _ + - =
   * *   The password of the account must be 8 to 32 characters in length.
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
  backupId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PostPaid** (default): pay-as-you-go
   * *   **PrePaid**: subscription
   * 
   * >  If you set this parameter to **PrePaid**, you must also specify the **Period** parameter.
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
   * The version of the database engine. Valid values:
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * > *   For more information about the limits on database versions and storage engines, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
   * > *   If you call this operation to clone an instance, set the value of this parameter to the engine version of the source instance.
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
   * *   **mongodb**: the MongoDB protocol
   * *   **dynamodb**: the DynamoDB protocol
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
   * The information of the shard node.
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
  srcRegion?: string;
  /**
   * @remarks
   * The storage engine of the instance. Set the value to **WiredTiger**.
   * 
   * > *   If you call this operation to clone an instance, set the value of this parameter to the storage engine of the source instance.
   * > *   For more information about the limits on database versions and storage engines, see [MongoDB versions and storage engines](https://help.aliyun.com/document_detail/61906.html).
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp114f14849d****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21010996721****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8F1D721-6439-4257-A89C-F1E8E9C9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateShardingDBInstanceResponseBody;
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
      body: CreateShardingDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72651AF9-7897-41A7-8B67-6C15C7F26A0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBInstanceResponseBody;
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
      body: DeleteDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * @example
   * corp
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-qxieqf40xjst1ngpr3jz
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

export class DeleteGlobalSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 2F42BB4E-461F-5B55-A37C-53B1141C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGlobalSecurityIPGroupResponseBody;
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
      body: DeleteGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the generated token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node that you want to delete. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/61923.html) operation to query node IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 111111111111111
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F9BDE64-BF30-41F3-BD29-C19CE4AB3404
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 111111111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodeResponseBody;
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
      body: DeleteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the account. Set the value to **root**.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fd530f271****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the account.
   */
  accounts?: DescribeAccountsResponseBodyAccounts;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B562A65B-39AB-4EE8-8635-5A222054FB35
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountsResponseBody;
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
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * sg-bp5689ac****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether any O\\&M tasks need pop-up windows to notify users actions. Valid values:
   * 
   * *   **0**: No O\\&M tasks need pop-up windows to notify users actions.
   * *   **1**: Some O\\&M tasks need pop-up windows to notify users actions.
   * 
   * @example
   * 0
   */
  needPop?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 770D7F11-21A2-402B-9DF6-D1A620570EF9
   */
  requestId?: string;
  /**
   * @remarks
   * The number of pending O\\&M tasks.
   * 
   * @example
   * 0
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      needPop: 'NeedPop',
      requestId: 'RequestId',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needPop: 'number',
      requestId: 'string',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveOperationTaskCountResponseBody;
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
      body: DescribeActiveOperationTaskCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return historical O\\&M tasks. Valid values:
   * 
   * *   **0** (default): The system returns only pending O\\&M tasks.
   * *   **1**: The system returns historical O\\&M tasks.
   * 
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID. You can call the [DescribeSecurityGroupConfiguration](https://help.aliyun.com/document_detail/146130.html) operation to query the resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EE83BF-7BA8-5087-BAC9-ED85ED54****
   */
  requestId?: string;
  /**
   * @remarks
   * The O\\&M tasks.
   */
  typeList?: DescribeActiveOperationTaskTypeResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribeActiveOperationTaskTypeResponseBodyTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveOperationTaskTypeResponseBody;
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
      body: DescribeActiveOperationTaskTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to allow the cancellation operation. Valid values:
   * 
   * *   **0**: The cancellation operation is not allowed.
   * *   **1**: The cancellation operation is allowed.
   * 
   * @example
   * ***
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether to allow the modification operation. Valid values:
   * 
   * *   **0**: The modification operation is not allowed.
   * *   **1**: The modification operation is allowed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The type of task configuration change. Valid values:
   * 
   * *   **all** (default): The configurations of all O\\&M tasks are changed.
   * *   **S0**: The configurations of tasks initiated to fix exceptions are changed.
   * *   **S1**: The configurations of system O\\&M tasks are changed.
   * 
   * @example
   * ***
   */
  changeLevel?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * ***
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * dds-bp16aaccfe10e3e4
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30, 50, and 100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * ***
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  If you set the Region parameter to **all**, all tasks created within your Alibaba Cloud account are queried. In this case, you must set the **taskType** parameter to **all**.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: waiting for execution
   * *   **1**: being executed
   * *   **2**: successful
   * *   **3**: failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ***
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The O\\&M tasks.
   */
  items?: DescribeActiveOperationTasksResponseBodyItems[];
  /**
   * @remarks
   * The number of the returned page.
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 111E7B16-0A87-4CBA-B271-F34AD61E099F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 727
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveOperationTasksResponseBody;
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
      body: DescribeActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node in the instance. Valid values:
   * 
   * * **mongos**: mongos node.
   * * **db** : shard node.
   * * **logic** : logical instance.
   * 
   * @example
   * logic
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The type of the audit log entries. Valid values:
   * 
   * *   **admin**: O\\&M and management operations
   * *   **slow**: slow query logs
   * *   **query**: query operations
   * *   **insert**: insert operations
   * *   **update**: update operations
   * *   **delete**: delete operations
   * *   **command**: protocol commands such as the aggregate method
   * 
   * @example
   * admin,slow,insert,query,update,delete,command
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7BAFB0B3-2A54-5B65-B13E-3937CF08FEE6
   */
  requestId?: string;
  /**
   * @remarks
   * The role of the node.
   * 
   * @example
   * logic
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      requestId: 'RequestId',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      requestId: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditLogFilterResponseBody;
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
      body: DescribeAuditLogFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the log audit feature is enabled. Valid values:
   * 
   * *   Enable
   * *   Disabled
   * 
   * Default value: Disabled.
   * 
   * @example
   * Enable
   */
  logAuditStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 111E7B16-0A87-4CBA-B271-F34AD61E099F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logAuditStatus: 'LogAuditStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAuditStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditPolicyResponseBody;
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
      body: DescribeAuditPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database to be queried. By default, all databases are queried.
   * 
   * @example
   * database****
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > The end time must be within 24 hours from the start time. Otherwise, the query fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T13:11:14Z
   */
  endTime?: string;
  /**
   * @remarks
   * The form of the audit log that the operation returns. Valid values:
   * 
   * *   **File**: triggers the generation of audit logs. If this parameter is set to File, only common parameters are returned.
   * *   **Stream** (default): returns data streams.
   * 
   * @example
   * Stream
   */
  form?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node in the instance.
   * 
   * > This parameter takes effect only when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order of time in which the log entries to return are sorted. Valid values:
   * 
   * *   **asc**: The log entries are sorted by time in ascending order.
   * *   **desc**: The log entries are sorted by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The valid value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 30. Valid values: **30**, **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * slow
   */
  queryKeywords?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  /**
   * @remarks
   * The user of the database. If you do not specify this parameter, this operation returns records of all users.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      endTime: 'EndTime',
      form: 'Form',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      endTime: 'string',
      form: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the information of audit log entries.
   */
  items?: DescribeAuditRecordsResponseBodyItems;
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
   * The maximum number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3278BEB8-503B-4E46-8F7E-D26E040C9769
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 40
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAuditRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditRecordsResponseBody;
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
      body: DescribeAuditRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailabilityZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the values of the returned **RegionName** and **ZoneName** parameters. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **normal**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * normal
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The secondary zone ID that is excluded from the query results. You can configure the ExcludeZoneId and ExcludeSecondaryZoneId parameters to specify the IDs of multiple zones that are excluded from the query results.
   * 
   * @example
   * cn-shanghai-b
   */
  excludeSecondaryZoneId?: string;
  /**
   * @remarks
   * The zone ID that is excluded from the query results.
   * 
   * @example
   * cn-shanghai-g
   */
  excludeZoneId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **PrePaid** (default): subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The edition of the instance. High-Available Edition and Preview Edition (dbfs) are supported.
   * 
   * @example
   * dbfs
   */
  mongoType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes. This parameter is available only for replica set instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmx2m4rqu7pry
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage type of the instance. 
   * - **cloud**: The system displays only zones in which cloud disk-based instances can be deployed. 
   * - **local**: The system displays only zones in which local disk-based instances can be deployed. 
   * - **default** or null: The system displays only zones in which cloud disk-based and local disk-based instances can be deployed.
   * 
   * @example
   * local
   */
  storageSupport?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd1**: PL1 enhanced SSD (ESSD)
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * *   **local_ssd**: Local SSD
   * 
   * > *   Instances that run MongoDB 4.4 or later support only cloud disks. **cloud_essd1** is selected if you leave this parameter empty.
   * > *   Instances that run MongoDB 4.2 and earlier support only local disks. **local_ssd** is selected if you leave this parameter empty.
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available zones.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      DBInstanceClass: 'DBInstanceClass',
      dbType: 'DbType',
      engineVersion: 'EngineVersion',
      excludeSecondaryZoneId: 'ExcludeSecondaryZoneId',
      excludeZoneId: 'ExcludeZoneId',
      instanceChargeType: 'InstanceChargeType',
      mongoType: 'MongoType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSupport: 'StorageSupport',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      DBInstanceClass: 'string',
      dbType: 'string',
      engineVersion: 'string',
      excludeSecondaryZoneId: 'string',
      excludeZoneId: 'string',
      instanceChargeType: 'string',
      mongoType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSupport: 'string',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailabilityZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the zones in which you can create ApsaraDB for MongoDB instances.
   */
  availableZones?: DescribeAvailabilityZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 19A13A33-0FAD-5120-8AE1-B1636F74DD80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeAvailabilityZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailabilityZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailabilityZonesResponseBody;
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
      body: DescribeAvailabilityZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEngineVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEngineVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of one or more engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * >  An empty string is returned if the latest version is being used.
   */
  engineVersions?: DescribeAvailableEngineVersionResponseBodyEngineVersions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52507B6B-003B-47A3-A0A3-9FE992C7A243
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersions: 'EngineVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersions: DescribeAvailableEngineVersionResponseBodyEngineVersions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEngineVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableEngineVersionResponseBody;
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
      body: DescribeAvailableEngineVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.standard
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **normal**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * sharding
   */
  dbType?: string;
  /**
   * @remarks
   * The major engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid** (default): subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes, only applicable to replica sets.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   local_ssd: local SSD
   * *   cloud_essd1: PL1 enhanced SSD (ESSD)
   * *   cloud_essd2: PL2 ESSD
   * *   cloud_essd3: PL3 ESSD
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * This parameter is empty by default, which indicates all types of storage resources are queried.
   * 
   * @example
   * local_ssd
   * 
   * **if can be null:**
   * true
   */
  storageType?: string;
  /**
   * @remarks
   * The ID of the zone. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the available zones.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      dbType: 'DbType',
      engineVersion: 'EngineVersion',
      instanceChargeType: 'InstanceChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      dbType: 'string',
      engineVersion: 'string',
      instanceChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 344EE51D-8850-4935-B68B-58A8F4DCE3BD
   */
  requestId?: string;
  /**
   * @remarks
   * The supported database types.
   */
  supportedDBTypes?: DescribeAvailableResourceResponseBodySupportedDBTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportedDBTypes: 'SupportedDBTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportedDBTypes: DescribeAvailableResourceResponseBodySupportedDBTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableResourceResponseBody;
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
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsRequest extends $tea.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * > 
   * 
   * *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/62172.html) operation to query the backup ID.
   * 
   * *   You must specify one of the **RestoreTime** and BackupId parameters.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 30. Valid values: **30**, **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ax68****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which the instance is restored. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The time can be a point in time within the previous seven days. The time must be earlier than the current time, but later than the time when the instance was created.
   * 
   * *   You must specify one of the RestoreTime and **BackupId** parameters.
   * 
   * @example
   * 2019-08-22T12:00:00Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * dds-bp2286****
   */
  sourceDBInstance?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      sourceDBInstance: 'SourceDBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      sourceDBInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  databases?: DescribeBackupDBsResponseBodyDatabases;
  /**
   * @remarks
   * The page number of the page returned.
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AF0AD89-ED4F-44AD-B65F-BFC1D5CD9455
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned databases.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeBackupDBsResponseBodyDatabases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupDBsResponseBody;
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
      body: DescribeBackupDBsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      srcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The frequency at which high-frequency backup is created. Valid values:
   * 
   * *   **-1**: High-frequency backup is disabled.
   * *   **15**: every 15 minutes.
   * *   **30**: every 30 minutes.
   * *   **60**: every hour.
   * *   **120**: every 2 hours.
   * *   **180**: every 3 hours.
   * *   **240**: every 4 hours.
   * *   **360**: every 6 hours.
   * *   **480**: every 8 hours.
   * *   **720**: every 12 hours.
   * 
   * @example
   * -1
   */
  backupInterval?: number;
  /**
   * @remarks
   * The retention period of the backup data. Unit: day.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: string;
  backupRetentionPolicyOnClusterDeletion?: number;
  crossBackupPeriod?: string;
  crossLogRetentionType?: string;
  crossLogRetentionValue?: number;
  crossRetentionType?: string;
  crossRetentionValue?: number;
  destRegion?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **0** (default): The log backup feature is disabled.
   * *   **1**: The log backup feature is enabled.
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The retention period of high-frequency backups. Unit: day.
   * 
   * @example
   * 1
   */
  highFrequencyBackupRetention?: string;
  /**
   * @remarks
   * The number of days for which log backups are retained. Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The day of a week on which to back up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * @example
   * Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range during which the backup was created. The time follows the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 09:00Z-10:00Z
   */
  preferredBackupTime?: string;
  preferredNextBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A9464CA-F7DC-5434-90B1-DF7F197C****
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * *   **Flash**: single-digit second backup
   * *   **Standard** (default): standard backup
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      crossBackupPeriod: 'CrossBackupPeriod',
      crossLogRetentionType: 'CrossLogRetentionType',
      crossLogRetentionValue: 'CrossLogRetentionValue',
      crossRetentionType: 'CrossRetentionType',
      crossRetentionValue: 'CrossRetentionValue',
      destRegion: 'DestRegion',
      enableBackupLog: 'EnableBackupLog',
      enableCrossLogBackup: 'EnableCrossLogBackup',
      highFrequencyBackupRetention: 'HighFrequencyBackupRetention',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
      snapshotBackupType: 'SnapshotBackupType',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'number',
      backupRetentionPeriod: 'string',
      backupRetentionPolicyOnClusterDeletion: 'number',
      crossBackupPeriod: 'string',
      crossLogRetentionType: 'string',
      crossLogRetentionValue: 'number',
      crossRetentionType: 'string',
      crossRetentionValue: 'number',
      destRegion: 'string',
      enableBackupLog: 'number',
      enableCrossLogBackup: 'number',
      highFrequencyBackupRetention: 'string',
      logBackupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
      snapshotBackupType: 'string',
      srcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPolicyResponseBody;
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
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStorageRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2zeb2d64cb46xxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * >  This parameter is required only when the **DBInstanceId** parameter is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-2zee48956b4axxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the most recent region list.
   * 
   * @example
   * cn-bejing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStorageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The free quota for the storage capacity used for backup. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  freeSize?: number;
  /**
   * @remarks
   * The storage capacity used for the full backup. Unit: bytes.
   * 
   * >  Instances that use cloud disks support snapshot backup. The size of the storage used for the current full backup is the size of the snapshot chain.
   * 
   * @example
   * 789221621
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The storage capacity used for the log backup. Unit: bytes.
   * 
   * @example
   * 7892216
   */
  logStorageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D648B367-15B6-1B42-BD4B-4XXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      freeSize: 'FreeSize',
      fullStorageSize: 'FullStorageSize',
      logStorageSize: 'LogStorageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeSize: 'number',
      fullStorageSize: 'number',
      logStorageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupStorageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupStorageResponseBody;
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
      body: DescribeBackupStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * >  If you call the [CreateBackup](https://help.aliyun.com/document_detail/61075.html) operation to perform a manual backup task, you can set this parameter to the returned backup ID to query the backup progress of the task.
   * 
   * @example
   * 170034
   */
  backupJobId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2zeb2d64cb46xxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      DBInstanceId: 'string',
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

export class DescribeBackupTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the backup task.
   */
  backupJobs?: DescribeBackupTasksResponseBodyBackupJobs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D648B367-15B6-1B42-BD4B-47507C9CC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobs: 'BackupJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobs: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyBackupJobs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupTasksResponseBody;
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
      body: DescribeBackupTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the [CreateBackup](https://help.aliyun.com/document_detail/62171.html) operation to query the backup set ID.
   * 
   * If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, the number of backup IDs is the same as the number of shard nodes. Multiple backup IDs are separated with commas (,).
   * 
   * @example
   * 2072****,2072****,2072****
   */
  backupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1a7009eb24****
   */
  DBInstanceId?: string;
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2022-01-14T13:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * > This parameter takes effect only when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-01-13T13:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srcRegion: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the backup set.
   */
  backups?: DescribeBackupsResponseBodyBackups;
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
   * The number of entries returned per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 275D43C3-F12F-5224-B375-0C6BF453BD56
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of backup sets.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: DescribeBackupsResponseBodyBackups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupsResponseBody;
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
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the cluster backup set.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region where cross-region backups reside.
   * 
   * >  This parameter is required if you want to query cross-region backups.
   * 
   * @example
   * cn-shanghai
   */
  destRegion?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2019-03-14T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query information about child nodes in the cluster backup. Valid values:
   * 
   * *   **true**: The system returns only the basic information of the cluster backup.
   * *   **false** (default): The system returns the backup information of all child nodes.
   * 
   * @example
   * true
   */
  isOnlyGetClusterBackUp?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**. The page number must be a positive integer.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > 
   * 
   * *   This parameter is required if you want to query the backup sets of a released instance.
   * 
   * *   This parameter is required if you want to query cross-region backups.
   * 
   * @example
   * cn-hangzhou
   */
  srcRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2019-03-13T12:11:14Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      endTime: 'EndTime',
      isOnlyGetClusterBackUp: 'IsOnlyGetClusterBackUp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcRegion: 'SrcRegion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      destRegion: 'string',
      endTime: 'string',
      isOnlyGetClusterBackUp: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srcRegion: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster backup sets. A cluster backup file contains the backup sets of each node.
   */
  clusterBackups?: DescribeClusterBackupsResponseBodyClusterBackups[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F42BB4E-461F-5B55-A37C-53B1141C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBackups: 'ClusterBackups',
      maxResults: 'MaxResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBackups: { 'type': 'array', 'itemType': DescribeClusterBackupsResponseBodyClusterBackups },
      maxResults: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterBackupsResponseBody;
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
      body: DescribeClusterBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRecoverTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp18f7d6b6a7****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRecoverTimeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
  /**
   * @remarks
   * The cluster backup sets of the instance. A cluster backup file contains the backup sets of each node.
   */
  restoreRanges?: DescribeClusterRecoverTimeResponseBodyRestoreRanges[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreRanges: 'RestoreRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreRanges: { 'type': 'array', 'itemType': DescribeClusterRecoverTimeResponseBodyRestoreRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRecoverTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterRecoverTimeResponseBody;
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
      body: DescribeClusterRecoverTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * Specifies whether to delete the instance. Valid values:
   * 
   * - **false**: queries the details of running instances.
   * - **true**: queries the details of deleted instances.
   * 
   * @example
   * false
   */
  isDelete?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * > This parameter is available only if you use the China site (aliyun.com).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      isDelete: 'IsDelete',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engine: 'string',
      isDelete: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of the instance.
   */
  DBInstances?: DescribeDBInstanceAttributeResponseBodyDBInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A935A8EE-A6CC-53DE-98BA-20ABAA7E632B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeDBInstanceAttributeResponseBodyDBInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceAttributeResponseBody;
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
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The custom key for the instance. You can call the [DescribeUserEncryptionKeyList](https://help.aliyun.com/document_detail/151729.html) operation to query the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      encryptionKey: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The UID of the key creator.
   * 
   * @example
   * 123456
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time when the key for the instance will be deleted. If the parameter is left empty, the key will not be deleted.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key for the instance.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The key for the instance.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Indicates whether the key for the instance is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The purpose of the key for the instance.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key for the instance. The time is displayed in UTC. If the parameter is left empty, the key for the instance will not expire.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the key for the instance.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 783C2062-A2D3-4EA8-88AD-E43F990C23BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceEncryptionKeyResponseBody;
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
      body: DescribeDBInstanceEncryptionKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1143f90ff3****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The collection frequency of monitoring data for the instance. Valid value: **5**. Unit: seconds.
   * 
   * @example
   * 5
   */
  granularity?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceMonitorResponseBody;
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
      body: DescribeDBInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2635****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which performance data is collected. Valid values: 5, 30, 60, 600, 1800, 3600, 86400.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metric. For more information about valid values, see [Monitoring items and metrics](https://help.aliyun.com/document_detail/216973.html).
   * 
   * >  If you need to specify multiple metrics, separate the metrics with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in a sharded cluster instance. You can specify this parameter to view the performance data of a single node.
   * 
   * >  This parameter is valid when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp2287****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The role of the node in the standalone or replica set instance. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * >  *  This parameter is valid only when you specify the **DBInstanceId** parameter to the ID of a standalone instance or a replica set instance.
   * > *  This parameter can be set only to **Primary** when you specify the **DBInstanceId** parameter to the ID of a standalone instance.
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node in a standalone or replica set instance. You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation to query the role ID of the node.
   * 
   * >  This parameter is available when you set the **DBInstanceId** parameter to the ID of a standalone instance or a replica set instance.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T10:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      replicaSetRole: 'ReplicaSetRole',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      replicaSetRole: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The end of the queried time range. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The details of performance metrics.
   */
  performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A300BC7-6D8F-527F-A2DB-A7768D26E9AC
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the queried time range. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-13T10:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      performanceKeys: DescribeDBInstancePerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancePerformanceResponseBody;
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
      body: DescribeDBInstancePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36BB1BC2-789C-4BBA-A519-C5B388E4B0D4
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the SSL certificate expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2020-03-11T02:28:25Z
   */
  SSLExpiredTime?: string;
  /**
   * @remarks
   * The status of the SSL feature. Valid values:
   * 
   * *   **Open**: The SSL feature is enabled.
   * *   **Closed**: The SSL feature is disabled.
   * 
   * @example
   * Open
   */
  SSLStatus?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      requestId: 'RequestId',
      SSLExpiredTime: 'SSLExpiredTime',
      SSLStatus: 'SSLStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      requestId: 'string',
      SSLExpiredTime: 'string',
      SSLStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceSSLResponseBody;
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
      body: DescribeDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * @example
   * 2023-05-28T02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0 and less than or equal to the maximum value supported by the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30, 50, and 100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2023-05-27T02:46Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The primary/secondary switchover logs.
   */
  logItems?: DescribeDBInstanceSwitchLogResponseBodyLogItems[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ECBCA991-XXXX-XXXX-834C-B3E8007F33AA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of primary/secondary switching entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      logItems: 'LogItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      logItems: { 'type': 'array', 'itemType': DescribeDBInstanceSwitchLogResponseBodyLogItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceSwitchLogResponseBody;
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
      body: DescribeDBInstanceSwitchLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * 实例的自定义密钥。
   * 
   * 目前仅以下地域支持BYOK（Bring Your Own Key，用户可以自行管理和拥有加密密钥）：
   * - 华东1（杭州）
   * - 华东2（上海）
   * - 华北2（北京）
   * - 华南1（深圳）
   * - 中国（香港）
   * - 新加坡
   * - 马来西亚（吉隆坡）
   * 
   * > 支持BYOK，用户可以管理且拥有密钥，系统将返回用户的自定义密钥；不支持BYOK，用户不可管理密钥，系统将返回字符串`NoActiveBYOK`。
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * 加密算法。
   * 
   * @example
   * aes-256-cbc
   */
  encryptorName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4DD0E29-361B-42F2-9301-B0048CCCE5D6
   */
  requestId?: string;
  /**
   * @remarks
   * 指定待授权角色的全局资源描述符ARN（Alibaba Cloud Resource Name）信息。
   * 
   * @example
   * acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The TDE status. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKey: 'EncryptionKey',
      encryptorName: 'EncryptorName',
      requestId: 'RequestId',
      roleARN: 'RoleARN',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKey: 'string',
      encryptorName: 'string',
      requestId: 'string',
      roleARN: 'string',
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstanceTDEInfoResponseBody;
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
      body: DescribeDBInstanceTDEInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The endpoint of the node. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the endpoint of the node.
   * 
   * @example
   * dds-bp1ea17b41abecf43****.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The instance type. For more information about valid values, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   It can contain digits, letters, underscores (_), and hyphens (-).
   * *   It must be 2 to 256 characters in length.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp199659b178****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the instance. For more information about valid values, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * sharding
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The type of the node in the instance. This parameter is used to filter standard or test instance.
   * 
   * 1.  Valid value for a standalone or DBFS instance.
   * 2.  Valid value for a standard instance that comes in the replica set or sharded cluster architecture: standard
   * 3.  Valid value when all instances are displayed: default
   * 
   * @example
   * default
   */
  DBNodeType?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2019-12-26T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether the instance has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  expired?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value of this parameter must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes in the replica set instance. Valid values:
   * 
   * *   **3**
   * *   **5**
   * *   **7**
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the instance.
   */
  tag?: DescribeDBInstancesRequestTag[];
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
   * The VPC ID of the instance.
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
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      connectionDomain: 'ConnectionDomain',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      DBNodeType: 'DBNodeType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      connectionDomain: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      DBNodeType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances;
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
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E4FE33F-5510-5758-8FA7-A6672CDE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeDBInstancesResponseBodyDBInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancesResponseBody;
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
      body: DescribeDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewRequest extends $tea.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values: **5.0**, **4.4**, **4.2**, **4.0**, and **3.4**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type. The instance type varies based on the instance architecture. For more information about instance types supported by different instance architectures, see the following references:
   * 
   * *   [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * *   [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * *   [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * @example
   * dds.mongo.2xlarge
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to query the overview information.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the overview information of all instances within this account is queried.
   * 
   * *   Separate the instance IDs with commas (,).
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The state of the instance. For more information about valid values, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * > 
   * 
   * *   To query the overview information of a sharded cluster instance, you must set the parameter to **sharding**.
   * 
   * *   If you do not specify this parameter, the overview information of all instances within this account is queried.
   * 
   * @example
   * replicate
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: Virtual Private Cloud (VPC)
   * 
   * @example
   * Classic
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the resource group to which the instance belongs. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC in which the instance is deployed.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      engineVersion: 'string',
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of instances.
   */
  DBInstances?: DescribeDBInstancesOverviewResponseBodyDBInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstances },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInstancesOverviewResponseBody;
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
      body: DescribeDBInstancesOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time and within 24 hours from the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-02T12:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node whose error logs you want to query in the instance. If the instance is a sharded cluster instance, you must specify this parameter.
   * 
   * >  This parameter is valid only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * test test1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node whose error logs you want to query in the instance. Valid values:
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * >  If you set the **NodeId** parameter to the ID of a mongos node, the RoleType parameter must be set to **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * Details about the log entries returned.
   */
  items?: DescribeErrorLogRecordsResponseBodyItems;
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
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68BCBEC2-1E66-471F-A1A8-E3C60C0A80B0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      items: DescribeErrorLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeErrorLogRecordsResponseBody;
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
      body: DescribeErrorLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-hedmu8kg9nsabw6u42rv
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The global IP whitelist templates.
   */
  globalSecurityIPGroup?: DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 72651AF9-7897-41A7-8B67-6C15C7F26A0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalSecurityIPGroupResponseBody;
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
      body: DescribeGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2ze6069764423m0l
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-2ze6069764423m0l
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The global IP whitelist templates associated with the instance.
   */
  globalSecurityIPGroupRel?: DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalSecurityIPGroupRelationResponseBody;
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
      body: DescribeGlobalSecurityIPGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is longer than the minimum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-15T03:41:26Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs. This parameter is empty by default, which indicates that tasks of all instances are queried.
   * 
   * @example
   * dds-8vb38f0e7933xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the instance. Set the value to Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 10 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the pending event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * Separate multiple states with commas (,). This parameter is empty by default, which indicates that tasks in all states are queried.
   * 
   * @example
   * Succeed,Running,Waiting
   */
  status?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs. This parameter is empty by default, which indicates that all tasks are queried.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is left empty by default, which indicates that all types of tasks are queried. Valid values:
   * 
   * *   CreateIns: Create an instance.
   * *   DeleteIns: Delete an instance.
   * *   ChangeVariable: Modify parameter settings for an instance.
   * *   ModifyInsConfig: Change the configurations of an instance.
   * *   RestartIns: Restart an instance.
   * *   HaSwitch: Perform a primary/secondary switchover on an instance.
   * *   CloneIns: Clone an instance.
   * *   KernelVersionUpgrade: Update the minor version of an instance.
   * *   ProxyVersionUpgrade: Upgrade the agent version of an instance.
   * *   ModifyAccount: Change the account of an instance.
   * *   ModifyInsSpec: Change the specifications of an instance or perform a data migration on the instance.
   * *   CreateReadIns: Create a read-only instance.
   * *   StartIns: Start an instance.
   * *   StopIns: Stop an instance.
   * *   ModifyNetwork: Modify the network type for an instance.
   * *   LockIns: Lock an instance.
   * *   UnlockIns: Unlock an instance.
   * *   DiskOnlineExpansion: Scale out the disks of an instance online.
   * *   StorageOnlineExpansion: Expend the storage capacity of an instance online.
   * *   AddInsNode: Add a node to an instance.
   * *   DeleteInsNode: Delete a node from an instance.
   * *   ManualBackupIns: Manually back up an instance.
   * *   ModifyInsStorageType: Modify the storage type for an instance.
   * 
   * @example
   * DeleteInsNode
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration is shorter than or equal to the maximum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-16T07:21:31Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      toExecTime: 'ToExecTime',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromExecTime: 'number',
      fromStartTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      toExecTime: 'number',
      toStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The task objects.
   */
  items?: DescribeHistoryTasksResponseBodyItems[];
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
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C4A2494-XXXX-XXXX-93CF-548DB3375193
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks that meet these conditions without taking pagination into account.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHistoryTasksResponseBody;
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
      body: DescribeHistoryTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatRequest extends $tea.Model {
  /**
   * @remarks
   * The minimum execution duration of the task. This parameter is used to filter tasks whose execution duration is longer than the minimum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  fromExecTime?: number;
  /**
   * @remarks
   * The start time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-16T02:46:21Z
   */
  fromStartTime?: string;
  /**
   * @remarks
   * The instance ID. Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs. This parameter is empty by default, which indicates that the tasks of all instances are queried.
   * 
   * @example
   * dds-8vb38f0e7933xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the pending event. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * Separate multiple states with commas (,). This parameter is empty by default, which indicates that tasks in all states are queried.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The task ID. Separate multiple task IDs with commas (,). You can specify up to 30 task IDs. This parameter is empty by default, which indicates that all tasks are queried.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. This parameter is left empty by default, which indicates that all types of tasks are queried. Valid values:
   * 
   * *   CreateIns: Create an instance.
   * *   DeleteIns: Delete an instance.
   * *   ChangeVariable: Modify parameter settings for an instance.
   * *   ModifyInsConfig: Change the configurations of an instance.
   * *   RestartIns: Restart an instance.
   * *   HaSwitch: Perform a primary/secondary switchover on an instance.
   * *   CloneIns: Clone an instance.
   * *   KernelVersionUpgrade: Update the minor version of an instance.
   * *   ProxyVersionUpgrade: Upgrade the agent version of an instance.
   * *   ModifyAccount: Change the account of an instance.
   * *   ModifyInsSpec: Change the specifications of an instance or perform a data migration on the instance.
   * *   CreateReadIns: Create a read-only instance.
   * *   StartIns: Start an instance.
   * *   StopIns: Stop an instance.
   * *   ModifyNetwork: Modify the network type for an instance.
   * *   LockIns: Lock an instance.
   * *   UnlockIns: Unlock an instance.
   * *   DiskOnlineExpansion: Scale out the disks of an instance online.
   * *   StorageOnlineExpansion: Expend the storage capacity of an instance online.
   * *   AddInsNode: Add a node to an instance.
   * *   DeleteInsNode: Delete a node from an instance.
   * *   ManualBackupIns: Manually back up an instance.
   * *   ModifyInsStorageType: Modify the storage type for an instance.
   * 
   * @example
   * DeleteIns
   */
  taskType?: string;
  /**
   * @remarks
   * The maximum execution duration of the task. This parameter is used to filter tasks whose execution duration is shorter than or equal to the maximum execution duration. Unit: seconds. The default value is 0, which indicates that no limit is imposed for the query.
   * 
   * @example
   * 0
   */
  toExecTime?: number;
  /**
   * @remarks
   * The end time of the O\\&M task to perform. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. You can query data within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-16T02:15:52Z
   */
  toStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      fromExecTime: 'FromExecTime',
      fromStartTime: 'FromStartTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      toExecTime: 'ToExecTime',
      toStartTime: 'ToStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromExecTime: 'number',
      fromStartTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      toExecTime: 'number',
      toStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatResponseBody extends $tea.Model {
  /**
   * @remarks
   * The task objects.
   */
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FC724D23-XXXX-XXXX-ABB1-606C935AE7FD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksStatResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHistoryTasksStatResponseBody;
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
      body: DescribeHistoryTasksStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp567b****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   **replicate**: the standalone or replica set instance
   * *   **sharding**: the sharded cluster instance
   * 
   * Default value: **replicate**.
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer that does not exceed the maximum value of the Integer parameter. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * >  Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about returned entries.
   */
  items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  itemsNumbers?: number;
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
   * The number of entries that were returned on the current page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FAB5CB3B-DB9D-473A-9DF1-F57B6B9CB949
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      itemsNumbers: 'ItemsNumbers',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeInstanceAutoRenewalAttributeResponseBodyItems,
      itemsNumbers: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAutoRenewalAttributeResponseBody;
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
      body: DescribeInstanceAutoRenewalAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRecoverTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

export class DescribeInstanceRecoverTimeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  /**
   * @remarks
   * The time ranges to which data can be restored. The time ranges include those used for point-in-time data restoration.
   */
  restoreRanges?: DescribeInstanceRecoverTimeResponseBodyRestoreRanges[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreRanges: 'RestoreRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreRanges: { 'type': 'array', 'itemType': DescribeInstanceRecoverTimeResponseBodyRestoreRanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRecoverTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceRecoverTimeResponseBody;
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
      body: DescribeInstanceRecoverTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesRequest extends $tea.Model {
  /**
   * @remarks
   * The minor version number of the instance. Example: **mongodb_20180522_0.4.8**.
   * 
   * *   This parameter is required. After you specify a version number for this parameter in a request, the release notes of the versions later than this version are returned.
   * 
   * @example
   * mongodb_20180522_0.4.8
   */
  kernelVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      kernelVersion: 'KernelVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of the version release notes.
   */
  releaseNotes?: DescribeKernelReleaseNotesResponseBodyReleaseNotes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F01D4DDA-CB72-4083-B399-AF4642294FE6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNotes: 'ReleaseNotes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNotes: DescribeKernelReleaseNotesResponseBodyReleaseNotes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKernelReleaseNotesResponseBody;
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
      body: DescribeKernelReleaseNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysRequest extends $tea.Model {
  ownerAccount?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The KMS keys.
   */
  kmsKeys?: DescribeKmsKeysResponseBodyKmsKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeys: 'KmsKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeys: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKmsKeys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKmsKeysResponseBody;
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
      body: DescribeKmsKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/61939.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether to enable the audit log feature.
   * 
   * *   **true**: The audit log feature is enabled.
   * *   **false**: The audit log feature is disabled.
   * 
   * @example
   * true
   */
  enableAudit?: boolean;
  /**
   * @remarks
   * Indicates whether a rule to distribute logs to Logtail is created. For more information, see [Logtail overview](https://help.aliyun.com/document_detail/28979.html). Valid values:
   * 
   * *   **1**: A rule to distribute logs to Logtail is created.
   * *   **0** or **null**: A rule to distribute logs to Logtail is not created.
   * 
   * @example
   * 1
   */
  isEtlMetaExist?: number;
  /**
   * @remarks
   * Indicates whether a project exists in the current region. Valid values:
   * 
   * *   **1**: A logging project exists in the current region.
   * *   **0** or **null**: A logging project does not exist in the current region.
   * 
   * @example
   * 1
   */
  isUserProjectLogstoreExist?: number;
  /**
   * @remarks
   * The maximum storage capacity for the formal edition of the audit log feature. If the value is -1, no maximum storage capacity is set.
   * 
   * @example
   * -1
   */
  preserveStorageForStandard?: number;
  /**
   * @remarks
   * The maximum storage capacity for the free trial edition of the audit log feature. Unit: bytes. You can set the maximum storage capacity to 107,374,182,400 bytes.
   * 
   * @example
   * 107374182400
   */
  preserveStorageForTrail?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 664ECE26-658A-47C5-88F6-870B0132E8D2
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the audit log feature. Valid values:
   * 
   * *   **Trail**: the free trial edition
   * *   **Standard**: the official edition
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The retention period for the official edition of the audit log feature. Valid values: 1 to 365. Unit: day.
   * 
   * @example
   * 30
   */
  ttlForStandard?: number;
  /**
   * @remarks
   * The retention period for the free trial edition of the audit log feature.
   * 
   * @example
   * 1
   */
  ttlForTrail?: number;
  /**
   * @remarks
   * The used storage capacity for the formal edition of the audit log feature. Unit: bytes.
   * 
   * @example
   * 20163
   */
  usedStorageForStandard?: number;
  /**
   * @remarks
   * The used storage capacity for the free trial edition of the audit log feature. Unit: bytes.
   * 
   * @example
   * 12548178759
   */
  usedStorageForTrail?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * nosql-176498472570****-cn-hangzhou
   */
  userProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAudit: 'EnableAudit',
      isEtlMetaExist: 'IsEtlMetaExist',
      isUserProjectLogstoreExist: 'IsUserProjectLogstoreExist',
      preserveStorageForStandard: 'PreserveStorageForStandard',
      preserveStorageForTrail: 'PreserveStorageForTrail',
      requestId: 'RequestId',
      serviceType: 'ServiceType',
      ttlForStandard: 'TtlForStandard',
      ttlForTrail: 'TtlForTrail',
      usedStorageForStandard: 'UsedStorageForStandard',
      usedStorageForTrail: 'UsedStorageForTrail',
      userProjectName: 'UserProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAudit: 'boolean',
      isEtlMetaExist: 'number',
      isUserProjectLogstoreExist: 'number',
      preserveStorageForStandard: 'number',
      preserveStorageForTrail: 'number',
      requestId: 'string',
      serviceType: 'string',
      ttlForStandard: 'number',
      ttlForTrail: 'number',
      usedStorageForStandard: 'number',
      usedStorageForTrail: 'number',
      userProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMongoDBLogConfigResponseBody;
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
      body: DescribeMongoDBLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **db**: shard
   * *   **cs**: Configserver
   * *   **mongos**: mongos
   * *   **logic**: sharded cluster instance
   * 
   * @example
   * mongos
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-02T12:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node whose parameter modification records you want to query in the instance.
   * 
   * >  This parameter is valid only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp1158****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about the parameter modification records.
   */
  historicalParameters?: DescribeParameterModificationHistoryResponseBodyHistoricalParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1BB6E0E-B4EF-4145-81FA-A07719860248
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historicalParameters: 'HistoricalParameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalParameters: DescribeParameterModificationHistoryResponseBodyHistoricalParameters,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParameterModificationHistoryResponseBody;
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
      body: DescribeParameterModificationHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesRequest extends $tea.Model {
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * This parameter is required.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * 1. db:  a shard node.
   * 
   * 1. cs:  a Configserver node.
   * 
   * 1. mongos:  a mongos node.
   * 
   * 1. normal: a replica set node.
   * 
   * 1. physical: a standalone node.
   * 
   * default: normal
   * 
   * @example
   * normal
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The number of parameters that are supported by the instance.
   * 
   * @example
   * 10
   */
  parameterCount?: string;
  /**
   * @remarks
   * Details about the parameter templates.
   */
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDA54203-9D61-54A3-A568-D281F785****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      parameterCount: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParameterTemplatesResponseBody;
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
      body: DescribeParameterTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   db: a shard node.
   * *   cs: a Configserver node.
   * *   mongos: a mongos node.
   * 
   * @example
   * mongos
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The parameter that is available in the future.
   * 
   * @example
   * terrform
   */
  extraParam?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in the specified sharded cluster instance.
   * 
   * >  This parameter is valid when the **DBInstanceId** parameter is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      extraParam: 'ExtraParam',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      extraParam: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The parameter settings in the configuration template.
   */
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The database engine of the instance. Default value: **mongodb**.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3ADD0C7D-2D2A-4F15-88FF-E7AC9B9FDCC8
   */
  requestId?: string;
  /**
   * @remarks
   * The settings of the parameters that have taken effect.
   */
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParametersResponseBody;
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
      body: DescribeParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {"AccountPassword":"Pw123456","DBInstanceDescription":"test"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The code of the instance. Valid values:
   * 
   * *   **dds**: a replica set instance that uses the pay-as-you-go billing method
   * *   **badds**: a replica set instance that uses the subscription billing method
   * *   **dds_sharding**: a sharded cluster instance that uses the pay-as-you-go billing method
   * *   **badds_sharding**: a sharded cluster instance that uses the subscription billing method
   * *   **badds_sharding_intl**: a sharded cluster instance that uses the subscription billing method and is available on the International site (alibabacloud.com)
   * *   **dds_sharding_intl**: a sharded cluster instance that uses the pay-as-you-go billing method and is available on the International site (alibabacloud.com)
   * *   **badds_sharding_jp**: a sharded cluster instance that uses the subscription billing method and is available on the Japan site (jp.alibabacloud.com)
   * *   **badds_intl**: a replica set instance that uses the subscription billing method and is available on the International site (alibabacloud.com)
   * *   **dds_intl**: a replica set instance that uses the pay-as-you-go billing method and is available on the International site (alibabacloud.com)
   * 
   * @example
   * badds
   */
  commodityCode?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * A JSON string that contains the details of the instance. For more information about the parameter and sample JSON formats, see [DescribePrice](https://help.aliyun.com/document_detail/197291.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [ { "DBInstanceId":"dds-bp1b6e54e7cc****", "RegionId":"cn-hangzhou", "ZoneId":"cn-hangzhou-h", "Engine":"MongoDB", "EngineVersion":" 5.0", "DBInstanceClass":"mdb.shard.2x.xlarge.d", "DBInstanceStorage":30, "ChargeType":"PrePaid", "Period":1, "StorageType":"cloud_essd1" } ]
   */
  DBInstances?: string;
  /**
   * @remarks
   * Specifies whether to return the OrderParams parameter. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * true
   */
  orderParamOut?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **BUY**
   * *   **UPGRADE**
   * *   **RENEW**
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. Default value: **dds**.
   * 
   * @example
   * dds
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      commodityCode: 'CommodityCode',
      couponNo: 'CouponNo',
      DBInstances: 'DBInstances',
      orderParamOut: 'OrderParamOut',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      commodityCode: 'string',
      couponNo: 'string',
      DBInstances: 'string',
      orderParamOut: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order information.
   */
  order?: DescribePriceResponseBodyOrder;
  /**
   * @remarks
   * The order parameters.
   * 
   * > This parameter is returned only when the **OrderParamOut** parameter is set to **true**.
   * 
   * @example
   * {\\"autoPay\\":false}"
   */
  orderParams?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27227A3D-6B86-56F3-9E03-9E60F001CE12
   */
  requestId?: string;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribePriceResponseBodyRules;
  /**
   * @remarks
   * The coupon rules.
   */
  subOrders?: DescribePriceResponseBodySubOrders;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * 27227A3D-6B87-56F3-9E03-9E60F001****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      orderParams: 'OrderParams',
      requestId: 'RequestId',
      rules: 'Rules',
      subOrders: 'SubOrders',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribePriceResponseBodyOrder,
      orderParams: 'string',
      requestId: 'string',
      rules: DescribePriceResponseBodyRules,
      subOrders: DescribePriceResponseBodySubOrders,
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceResponseBody;
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
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language of the values of the returned **RegionName** and **ZoneName** parameters. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  If you do not specify this parameter, all supported regions are queried.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E46C22C-D3B7-4DB8-9C76-63851BE68E20
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

export class DescribeRenewalPriceRequest extends $tea.Model {
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: **youhuiquan_promotion_option_id_for_blank**.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInfo: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of orders.
   */
  order?: DescribeRenewalPriceResponseBodyOrder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the promotion rules.
   */
  rules?: DescribeRenewalPriceResponseBodyRules;
  /**
   * @remarks
   * The rules matching the coupons.
   */
  subOrders?: DescribeRenewalPriceResponseBodySubOrders;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      requestId: 'RequestId',
      rules: 'Rules',
      subOrders: 'SubOrders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeRenewalPriceResponseBodyOrder,
      requestId: 'string',
      rules: DescribeRenewalPriceResponseBodyRules,
      subOrders: DescribeRenewalPriceResponseBodySubOrders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRenewalPriceResponseBody;
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
      body: DescribeRenewalPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details of the roles of the replica set instance.
   */
  replicaSets?: DescribeReplicaSetRoleResponseBodyReplicaSets;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB4A0595-FCA9-437F-B2BB-25DBFC009D3E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      replicaSets: 'ReplicaSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      replicaSets: DescribeReplicaSetRoleResponseBodyReplicaSets,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReplicaSetRoleResponseBody;
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
      body: DescribeReplicaSetRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728B9A96-E262-4AE5-915E-3A51CCE2FDA9
   */
  requestId?: string;
  /**
   * @remarks
   * The information of nodes in the zone.
   */
  zoneInfos?: DescribeRoleZoneInfoResponseBodyZoneInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneInfos: 'ZoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneInfos: DescribeRoleZoneInfoResponseBodyZoneInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRoleZoneInfoResponseBody;
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
      body: DescribeRoleZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time and within 24 hours from the start time. Otherwise, the query fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T13:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical relationship among multiple keywords.
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node whose operational logs you want to query in the instance. If the instance is a sharded cluster instance, you must specify this parameter.
   * 
   * >  This parameter is valid only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The order of time in which the operational log entries to return are sorted. Valid values:
   * 
   * *   asc: The log entries are sorted by time in ascending order.
   * *   desc: The log entries are sorted by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * test test2
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * sg-bpxxxxxxxxxxxxxxxxxx
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node. You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation to query the role ID.
   * 
   * @example
   * 651xxxxx
   */
  roleId?: string;
  /**
   * @remarks
   * The role of the node whose error logs you want to query in the instance. Valid values:
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * >  If you set the **NodeId** parameter to the ID of a mongos node, the **RoleType** parameter must be set to **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleId: 'string',
      roleType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * Details about the operational log entries.
   */
  items?: DescribeRunningLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The number of the page to return.
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
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45D2B592-DEBA-4347-BBF3-47FF6C97DBBC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      items: DescribeRunningLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRunningLogRecordsResponseBody;
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
      body: DescribeRunningLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * Details about the ECS security groups.
   */
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C4A2494-85C4-45C5-93CF-548DB3375193
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSecurityGroupConfigurationResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityGroupConfigurationResponseBody;
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
      body: DescribeSecurityGroupConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Whether to display DAS whitelist information.
   * 
   * @example
   * true
   */
  showHDMIps?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      showHDMIps: 'ShowHDMIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      showHDMIps: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC724D23-2962-479E-ABB1-606C935AE7FD
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information of IP whitelists.
   */
  securityIpGroups?: DescribeSecurityIpsResponseBodySecurityIpGroups;
  /**
   * @remarks
   * The IP addresses in the default whitelist.
   * 
   * @example
   * 47.xxx.xxx.xx,100.xxx.xxx.0/24
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: DescribeSecurityIpsResponseBodySecurityIpGroups,
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityIpsResponseBody;
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
      body: DescribeSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos, shard, or Configserver node in the sharded cluster instance.
   * 
   * >  You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the ID of the mongos, shard, or Configserver node.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The endpoints of DynamoDB-compatible instances.
   */
  compatibleConnections?: DescribeShardingNetworkAddressResponseBodyCompatibleConnections;
  /**
   * @remarks
   * The endpoints of ApsaraDB for MongoDB instances.
   */
  networkAddresses?: DescribeShardingNetworkAddressResponseBodyNetworkAddresses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18D8AAFD-6BEB-420F-8164-810CB0C0AA39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleConnections: 'CompatibleConnections',
      networkAddresses: 'NetworkAddresses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnections: DescribeShardingNetworkAddressResponseBodyCompatibleConnections,
      networkAddresses: DescribeShardingNetworkAddressResponseBodyNetworkAddresses,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeShardingNetworkAddressResponseBody;
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
      body: DescribeShardingNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the `NodeId` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fc7e65108****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The end time must be within 24 hours from the start time. Otherwise, the query fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-16T14:13Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical relationship among multiple keywords.
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * > This parameter is required only when you specify the `DBInstanceId` parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp18b06ebc21****
   */
  nodeId?: string;
  /**
   * @remarks
   * The order of time in which the log entries to return are sorted. Valid values:
   * 
   * *   asc: The log entries are sorted by time in ascending order.
   * *   desc: The log entries are sorted by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * test test1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-15T14:13Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * An array that consists of the information about each slow query.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page. The value is a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of slow query log entries returned on the page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8076C4BA-DDBD-529C-BFF4-D8620C3F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogRecordsResponseBody;
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
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The token used to start the next query to retrieve more results.
   * 
   * >  This parameter is not required in the first query. If not all results are returned in one query, you can pass in the NextToken value returned in the previous query to perform the query again.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the resource group.
   * 
   * @example
   * dds-bp17e7a04960****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * >  If not all results are returned in the first query, this parameter is returned. You can pass in the value of this parameter in the next query.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EEDBE38F-5CF5-4316-AAC2-35817BA60D68
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the tags.
   */
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of custom keys.
   */
  keyIds?: DescribeUserEncryptionKeyListResponseBodyKeyIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CD51DA4-A499-43CE-B9B5-20CD4FDC648E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyIds: 'KeyIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyIds: DescribeUserEncryptionKeyListResponseBodyKeyIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserEncryptionKeyListResponseBody;
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
      body: DescribeUserEncryptionKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > **InstanceId** and **DBInstanceId** serve the same function. You need only to specify one of them.
   * 
   * @example
   * dds-bp147acd4783****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > **InstanceId** and **DBInstanceId** serve the same function. You need only to specify one of them.
   * 
   * @example
   * dds-bp147acd4783****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DestroyInstanceResponseBody;
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
      body: DestroyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * > This parameter is required when you check whether resources are sufficient for creating or upgrading a replica set instance. For more information about instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required when you check whether resources are sufficient for upgrading an instance.
   * 
   * @example
   * dds-bp14bf67a76d****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the instance. Valid values: **1** to **5**.
   * 
   * > This parameter is not required for standalone or serverless instances.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * *   Set the value to **1** for standalone instances.
   * *   Valid values for replica set instances: **3**, **5**, and **7**
   * 
   * > This parameter is not required for serverless instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The node information about the sharded cluster instance. This parameter is required when you check whether resources are sufficient for creating or upgrading a sharded cluster instance.
   * 
   * To check whether resources are sufficient for creating a sharded cluster instance, specify the specifications of each node in the instance. The value must be a JSON string. Example:
   * 
   *     {
   *          "ConfigSvrs":
   *              [{"Storage":20,"DBInstanceClass":"dds.cs.mid"}],
   *          "Mongos":
   *              [{"DBInstanceClass":"dds.mongos.standard"},{"DBInstanceClass":"dds.mongos.standard"}],
   *          "Shards":
   *              [{"Storage":50,"DBInstanceClass":"dds.shard.standard"},{"Storage":50,"DBInstanceClass":"dds.shard.standard"},   {"Storage":50,"DBInstanceClass":"dds.shard.standard"}]
   *      }
   * 
   * Parameters in the example:
   * 
   * *   ConfigSvrs: the Configserver node.
   * *   Mongos: the mongos node.
   * *   Shards: the shard node.
   * *   Storage: the storage space of the node.
   * *   DBInstanceClass: the instance type of the node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * To check whether resources are sufficient for upgrading a single node of a sharded cluster instance, specify only the information about the node to be upgraded. The value must be a JSON string. Example:
   * 
   *     {
   *          "NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"
   *     } 
   * 
   * Parameters in the example:
   * 
   * *   NodeId: the ID of the node.
   * *   NodeClass: the instance type of the node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * @example
   * {"NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"}
   */
  shardsInfo?: string;
  /**
   * @remarks
   * The storage capacity of the replica set instance. Unit: GB.
   * 
   * > This parameter is required for the instances that use cloud disks.
   * 
   * @example
   * 10
   */
  storage?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardsInfo: 'ShardsInfo',
      storage: 'Storage',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replicationFactor: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardsInfo: 'string',
      storage: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the resources are sufficient in the region. Valid values:
   * 
   * *   **1**: The resources are sufficient.
   * *   **0**: The resources are insufficient.
   * 
   * @example
   * 1
   */
  DBInstanceAvailable?: string;
  /**
   * @remarks
   * The database engine of the instance. Only MongoDB is returned.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AE2DE465-E45F-481F-ABD8-37D64173****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceAvailable: 'DBInstanceAvailable',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAvailable: 'string',
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluateResourceResponseBody;
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
      body: EvaluateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The token used to start the next query to retrieve more results.
   * 
   * >  This parameter is not required in the first query. If not all results are returned in one query, you can pass in the **NextToken** value returned in the previous query to perform the query again.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You must specify this parameter or the Tag parameter.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that are attached to the resources.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * >  If not all results are returned in the first query, this parameter is returned. You can pass in the returned value of this parameter in the next query.
   * 
   * @example
   * 212db86****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96017AF2-9AB1-4BC9-88D2-7966B3CD****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the tags of the instance.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateAvailableZoneRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > If the instance is deployed in a VPC, you must specify the **Vswitch** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ece71ff2f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the instance is migrated to the destination zone. Valid values:
   * 
   * *   **Immediately**: The instance is immediately migrated to the destination zone.
   * *   **MaintainTime**: The instance is migrated to the destination zone during the maintenance window of the instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  hiddenZoneId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * > If the instance is deployed in a VPC, you must specify this parameter.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  vswitch?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * > 
   * 
   * *   The source zone and the destination zone belong to the same region.
   * 
   * *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      hiddenZoneId: 'HiddenZoneId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryZoneId: 'SecondaryZoneId',
      vswitch: 'Vswitch',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      effectiveTime: 'string',
      hiddenZoneId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryZoneId: 'string',
      vswitch: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateAvailableZoneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FDDC511-7252-4A4A-ADDA-5CB1BF63****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateAvailableZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateAvailableZoneResponseBody;
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
      body: MigrateAvailableZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the instance is migrated to the destination zone. Valid values:
   * 
   * *   **Immediately**: The instance is immediately migrated to the destination zone.
   * *   **MaintainTime**: The instance is migrated during the maintenance period of the instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  If the network type of the instance is VPC, you must specify the **Vswitch** parameter .
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2658****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * >  This parameter is valid and required only when the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp67ac****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone to which you want to migrate the ApsaraDB for MongoDB instance.
   * 
   * > * The destination and source zones must be in one region.
   * > * You can call [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) to query the zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FDDC511-7252-4A4A-ADDA-5CB1BF63873D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateToOtherZoneResponseBody;
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
      body: MigrateToOtherZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * *   The description must start with a letter and cannot start with http:// or https://.
   * *   The description must be 2 to 256 characters in length, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * superadmin
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account whose description is to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2356****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59DE9FC2-7B40-45CF-9011-7327A8A771A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
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
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksRequest extends $tea.Model {
  /**
   * @remarks
   * The IDs of the O\\&M tasks. Separate multiple task IDs with commas (,).
   * 
   * >  You can call the DescribeActiveOperationTask operation to query the IDs of O\\&M tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately start scheduling. Valid values:
   * 
   * *   0 (default): Scheduling is not started immediately.
   * *   1: Scheduling is started immediately.
   * 
   * > -   If you set this parameter to 0, the SwitchTime parameter takes effect. If you set this parameter to 1, the SwitchTime parameter does not take effect. In this case, the start time of the task is the current time, and the system determines the switching time based on the start time.
   * > -   Immediate scheduling specifies that the task enters the preparing state instead of being executed immediately. After the preparation is complete, the switchover is performed. You can call the DescribeActiveOperationTasks operation to query the preparation time that is returned for the PrepareInterval parameter.
   * 
   * @example
   * 0
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduled switching time that you want to specify. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The time that is specified by the SwitchTime parameter cannot be later than the time that is specified by the Deadline parameter. You can call the DescribeActiveOperationTasks operation to query the latest switching time that is returned for the Deadline parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The IDs of the O\\&M tasks. Multiple task IDs are separated by commas (,).
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAAE9DDA-65FD-584C-A378-F1F24676****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyActiveOperationTasksResponseBody;
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
      body: ModifyActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogFilterRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of logs collected by the audit log feature of the instance. Separate multiple types with commas (,). Valid values:
   * 
   * *   **admin**: O\\&M and management operations
   * *   **slow**: slow query logs
   * *   **query**: query operations
   * *   **insert**: insert operations
   * *   **update**: update operations
   * *   **delete**: delete operations
   * *   **command**: protocol commands such as the aggregate method
   * 
   * This parameter is required.
   * 
   * @example
   * insert,query,update,delete
   */
  filter?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node in the instance. Valid values:
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * @example
   * primary
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      filter: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogFilterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E209BE2B-F264-4B9D-81F6-A5A5FB1FBF28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAuditLogFilterResponseBody;
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
      body: ModifyAuditLogFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The request source for the audit log feature. Set the value to **Console**.
   * 
   * @example
   * Console
   */
  auditLogSwitchSource?: string;
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   **enable**
   * *   **disabled**
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  auditStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1785659e3f****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the audit log feature. Valid values:
   * 
   * *   **Trail**: free trial edition.
   * *   **Standard**: official edition.
   * 
   * > The default value is **Trail**. Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and the free trial edition of the feature can no longer be applied for. We recommend that you set this parameter to **Standard**.
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The log retention period. Valid values: 1 to 365 days. Default value: 30 days.
   * 
   * @example
   * 30
   */
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogSwitchSource: 'AuditLogSwitchSource',
      auditStatus: 'AuditStatus',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceType: 'ServiceType',
      storagePeriod: 'StoragePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogSwitchSource: 'string',
      auditStatus: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceType: 'string',
      storagePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC04D812-F18D-4568-9B88-F260D9590116
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAuditPolicyResponseBody;
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
      body: ModifyAuditPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The frequency at which high-frequency backup is created. Valid values:
   * 
   * *   **-1**: High-frequency backup is disabled.
   * *   **30**: High-frequency backups are generated every 30 minutes.
   * *   **60**: High-frequency backups are generated every 1 hour.
   * *   **120**: High-frequency backups are generated every 2 hours.
   * *   **180**: High-frequency backups are generated every 3 hours.
   * *   **240**: High-frequency backups are generated every 4 hours.
   * *   **360**: High-frequency backups are generated every 6 hours.
   * *   **480**: High-frequency backups are generated every 8 hours.
   * *   **720**: High-frequency backups are generated every 12 hours.
   * 
   * > 
   * 
   * *   If the **SnapshotBackupType** parameter is set to **Standard**, this parameter is set to -1 and cannot be changed.
   * 
   * *   High-frequency backup takes effect only when the **SnapshotBackupType** parameter is set to **Flash** and the value of this parameter is greater than 0.
   * 
   * @example
   * -1
   */
  backupInterval?: string;
  /**
   * @remarks
   * The retention period of full backups.
   * 
   * > 
   * 
   * *   If your instance is created before September 10, 2021, backups are retained for seven days by default.
   * 
   * *   If your instance is created after September 10, 2021, backups are retained for 30 days by default.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: number;
  backupRetentionPolicyOnClusterDeletion?: number;
  crossBackupPeriod?: string;
  crossBackupType?: string;
  crossLogRetentionType?: string;
  crossLogRetentionValue?: number;
  crossRetentionType?: string;
  crossRetentionValue?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp16cb162771****
   */
  DBInstanceId?: string;
  destRegion?: string;
  /**
   * @remarks
   * Specifies whether to enable the log backup feature. Valid values:
   * 
   * *   **0** (default): The log backup feature is disabled.
   * *   **1**: The log backup feature is enabled.
   * 
   * @example
   * 0
   */
  enableBackupLog?: number;
  enableCrossLogBackup?: number;
  /**
   * @remarks
   * The number of days for which high-frequency backups are retained. Before you use this parameter, make sure that you specify the BackupInterval parameter. By default, high-frequency backups are retained for one day.
   */
  highFrequencyBackupRetention?: number;
  instanceType?: string;
  /**
   * @remarks
   * The number of days for which log backups are retained. Default value: 7.
   * 
   * Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The day of a week when the system regularly backs up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >  Separate multiple values with commas (,).
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the backup. Specify the time in the ISO 8601 standard in the *HH:mm*Z-*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The time range is 1 hour.
   * 
   * @example
   * 03:00Z-04:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot backup type. Valid values:
   * 
   * *   **Flash**: single-digit second backup
   * *   **Standard** (default): standard backup
   * 
   * @example
   * Standard
   */
  snapshotBackupType?: string;
  srcRegion?: string;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      crossBackupPeriod: 'CrossBackupPeriod',
      crossBackupType: 'CrossBackupType',
      crossLogRetentionType: 'CrossLogRetentionType',
      crossLogRetentionValue: 'CrossLogRetentionValue',
      crossRetentionType: 'CrossRetentionType',
      crossRetentionValue: 'CrossRetentionValue',
      DBInstanceId: 'DBInstanceId',
      destRegion: 'DestRegion',
      enableBackupLog: 'EnableBackupLog',
      enableCrossLogBackup: 'EnableCrossLogBackup',
      highFrequencyBackupRetention: 'HighFrequencyBackupRetention',
      instanceType: 'InstanceType',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotBackupType: 'SnapshotBackupType',
      srcRegion: 'SrcRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'string',
      backupRetentionPeriod: 'number',
      backupRetentionPolicyOnClusterDeletion: 'number',
      crossBackupPeriod: 'string',
      crossBackupType: 'string',
      crossLogRetentionType: 'string',
      crossLogRetentionValue: 'number',
      crossRetentionType: 'string',
      crossRetentionValue: 'number',
      DBInstanceId: 'string',
      destRegion: 'string',
      enableBackupLog: 'number',
      enableCrossLogBackup: 'number',
      highFrequencyBackupRetention: 'number',
      instanceType: 'string',
      logBackupRetentionPeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotBackupType: 'string',
      srcRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 644A359C-B871-4DD3-97B5-ED91EF5809C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBackupPolicyResponseBody;
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
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  /**
   * @remarks
   * The current endpoint that is to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new endpoint. It must be 8 to 64 characters in length and can contain letters and digits. It must start with a lowercase letter.
   * 
   * > You need only to specify the prefix of the endpoint. The content other than the prefix cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyuntest111
   */
  newConnectionString?: string;
  /**
   * @remarks
   * The new port number of the instance. The port number must be within the range from 1000 to 65535.
   * 
   * >  This parameter is available only when you set the **DBInstanceId** parameter to the ID of an instance that uses cloud disks.
   * 
   * @example
   * 3310
   */
  newPort?: number;
  /**
   * @remarks
   * The ID of the mongos in the specified sharded cluster instance. Only one mongos ID can be specified in each call.
   * 
   * > This parameter is valid only when you specify the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
      newConnectionString: 'NewConnectionString',
      newPort: 'NewPort',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceId: 'string',
      newConnectionString: 'string',
      newPort: 'number',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FF36A84C-0694-42D0-861D-C383E8E4FAAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceConnectionStringResponseBody;
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
      body: ModifyDBInstanceConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * > 
   * 
   * *   The name cannot start with `http://` or `https://`.
   * 
   * *   It must start with a letter.
   * 
   * *   It must be 2 to 256 characters in length, and can contain letters, underscores (_), hyphens (-), and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * testdata
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  To modify the name of a shard or mongos node in a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2234****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance.
   * 
   * >  This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp89067****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06F8F642-4009-4FFC-80C4-9D67DBF7B74E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceDescriptionResponseBody;
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
      body: ModifyDBInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDiskTypeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You must perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner, click **Expenses** and select **User Center** from the drop-down list. The User Center page appears. In the left-side navigation pane, choose **Order Management** > Renew. On the Renewal tab, find the bill that you want to pay and then click Renew in the Actions column.
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1fa5efaa93****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new disk type. Valid values:
   * 
   * *   **cloud_auto**: ESSD AutoPL disk
   * *   **cloud_essd1**: PL1 ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * cloud_auto
   */
  dbInstanceStorageType?: string;
  /**
   * @remarks
   * An additional parameter.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The type of configuration changes. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * >  This parameter is valid only when the billing method of the instance is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The provisioned IOPS. Valid values: 0 to 50000.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      dbInstanceStorageType: 'DbInstanceStorageType',
      extraParam: 'ExtraParam',
      orderType: 'OrderType',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      dbInstanceStorageType: 'string',
      extraParam: 'string',
      orderType: 'string',
      provisionedIops: 'number',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDiskTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21012719476****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8F1D721-6439-4257-A89C-F1E8E9C9****
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDiskTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceDiskTypeResponseBody;
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
      body: ModifyDBInstanceDiskTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpac2345****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the maintenance window. Specify the time in the ISO 8601 standard in the *HH:mm*Z format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time of the maintenance window.
   * 
   * This parameter is required.
   * 
   * @example
   * 02:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. Specify the time in the ISO 8601 standard in the *HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 01:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9310426-C763-42A2-A3AD-70A8DA204531
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceMaintainTimeResponseBody;
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
      body: ModifyDBInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The collection frequency of monitoring data. Valid values: **1** or **300**. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  granularity?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      granularity: 'Granularity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      granularity: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceMonitorResponseBody;
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
      body: ModifyDBInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetExpireTimeRequest extends $tea.Model {
  /**
   * @remarks
   * The retention period of the classic network endpoint of the instance. Valid values: **14**, **30**, **60**, and **120**. Unit: day.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  classicExpendExpiredDays?: number;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      classicExpendExpiredDays: 'ClassicExpendExpiredDays',
      connectionString: 'ConnectionString',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpendExpiredDays: 'number',
      connectionString: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetExpireTimeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 459E7D5C-38DA-4E14-9C82-5B5AF693DBAB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetExpireTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceNetExpireTimeResponseBody;
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
      body: ModifyDBInstanceNetExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeRequest extends $tea.Model {
  /**
   * @remarks
   * The retention period of the original classic network address when you change the network type to VPC. Valid values: **14**, **30**, **60**, and **120**. Unit: days.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC** and the **RetainClassic** parameter is set to **True**.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type to switch to. Valid value:
   * 
   * *   **VPC**
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to retain the original classic network address when you change the network type to VPC. Valid values:
   * 
   * *   **True**: retains the original classic network address.
   * *   **False**: does not retain the original classic network address.
   * 
   * > 
   * 
   * *   This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * *   If you set this parameter to **True**, you must also specify the **ClassicExpiredDays** parameter.
   * 
   * @example
   * False
   */
  retainClassic?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * > This parameter is required when the **NetworkType** parameter is set to **VPC**.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  vpcId?: string;
  /**
   * @remarks
   * 可用区ID，您可以通过调用[DescribeRegions](https://help.aliyun.com/document_detail/61933.html)接口查询可用区ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      DBInstanceId: 'DBInstanceId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retainClassic: 'RetainClassic',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      DBInstanceId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retainClassic: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0E605FD-6ECE-5FBE-84A4-99AAB1B8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceNetworkTypeResponseBody;
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
      body: ModifyDBInstanceNetworkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The operation on the SSL feature. Valid values:
   * 
   * *   **Open**: enables SSL encryption.
   * *   **Close**: disables SSL encryption.
   * *   **Update**: updates the SSL certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * Open
   */
  SSLAction?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLAction: 'SSLAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSLAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6D806B11-078F-4154-BF9F-844F56D08964
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceSSLResponseBody;
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
      body: ModifyDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that your Alibaba Cloud account has a sufficient balance.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **User Center**. In the left-side navigation pane, choose **Order Management** > **Order**. On the **Orders for Services** tab, find the order and pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to view instance types.
   * 
   * > You must specify at least one of the DBInstanceClass and **DBInstanceStorage** parameters.
   * 
   * @example
   * dds.sn4.xlarge.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ea17b41ab****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Valid values: 10 to 3000. The value must be a multiple of 10. Unit: GB. The values that can be specified for this parameter are subject to the instance types. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * > 
   * 
   * *   You must specify at least one of the DBInstanceStorage and **DBInstanceClass** parameters.
   * 
   * *   Storage capacity can be scaled down only for pay-as-you-go replica set instances. The new storage capacity you specify must be greater than the used storage capacity.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately** (default): The configurations immediately take effect.
   * *   **MaintainTime**: The configurations take effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The additional parameter.
   * 
   * Valid values:
   * 
   * *   async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   sync
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE** (default)
   * 
   * >  This parameter can be configured only when the billing method of the instance is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes. Valid values: **0** to **5**.
   * 
   * If your instance has only **Classic Network** and **VPC** endpoints, you must apply for a public endpoint or release the classic network endpoint for the instance before you can change the **Read-only Nodes** value.
   * 
   * > You can go to the **Database Connections** page to view the types of networks that are enabled.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * *   Valid values for replica set instances: **3**, **5**, and **7**
   * *   Valid values for standalone instances: **1**
   * 
   * >  This parameter is not required for a serverless instance which is only available on the China site (aliyun.com).
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      effectiveTime: 'EffectiveTime',
      extraParam: 'ExtraParam',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      replicationFactor: 'ReplicationFactor',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      effectiveTime: 'string',
      extraParam: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'string',
      replicationFactor: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21012408824****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E9F1104-19E7-59F0-AB7F-F4EBFDEA****
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceSpecResponseBody;
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
      body: ModifyDBInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceTDERequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * 749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The encryption method. Set the value to **aes-256-cbc**.
   * 
   * > This parameter is valid only when the **TEDStatus** parameter is set to **enabled**.
   * 
   * @example
   * aes-256-cbc
   */
  encryptorName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the specified Resource Access Management (RAM) role. The ARN is displayed in the `acs:ram::$accountID:role/$roleName` format.
   * 
   * > *   `$accountID`: specifies the ID of the Alibaba Cloud account. To view the account ID, log on to the Alibaba Cloud Management Console, move your pointer over your profile picture in the upper-right corner, and then click Security Settings.
   * 
   * > *   `$roleName`: specifies the name of the RAM role. To view the RAM role name, log on to the RAM console. In the left-side navigation pane, choose Identities > Roles. On the Roles page, view the name of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The TDE status. When the value of this parameter is set to **Enabled**, TDE is enabled.
   * 
   * > You cannot disable TDE after it is enabled. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
      encryptorName: 'EncryptorName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleARN: 'RoleARN',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      encryptionKey: 'string',
      encryptorName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleARN: 'string',
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceTDEResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 434D7127-6229-4355-BA50-7A3685A725DF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceTDEResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBInstanceTDEResponseBody;
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
      body: ModifyDBInstanceTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 27.16.214.10,111.60.117.181
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * dps
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-fwjk62egbsrp4sftxmmr
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0181AC4-F186-46ED-87CA-100C70B86729
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupResponseBody;
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
      body: ModifyGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * prod_baoxian_k8s
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-xmtncwkrzqqoe59dzljb
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * The global IP whitelist templates.
   */
  globalSecurityIPGroup?: ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupNameResponseBody;
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
      body: ModifyGlobalSecurityIPGroupNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2ze6069764423m0l
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * g-u0qdtybfvxhaxrrhk4n7
   */
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupRelationResponseBody;
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
      body: ModifyGlobalSecurityIPGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If this parameter is set to **true**, you must set the **Duration** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp15da1923e3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values: **1** to **12**. Unit: month.
   * 
   * >  This parameter is valid only when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceId: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceAutoRenewalAttributeResponseBody;
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
      body: ModifyInstanceAutoRenewalAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAuthModeRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos node in the sharded cluster instance.
   * 
   * >  This parameter can be used only when the instance type is sharded cluster.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specify whether to disable password-free access over VPC. Set the value to **Close**.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcAuthMode: 'VpcAuthMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcAuthMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAuthModeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA51E9D9-B14A-4542-B6E6-7DE00BECCB8C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAuthModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceVpcAuthModeResponseBody;
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
      body: ModifyInstanceVpcAuthModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. In this case, you must manually pay for the instance.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1c0b990184****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately** (default): The new configurations immediately take effect
   * *   **MaintainTime**: The new configurations take effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The source of the request. Valid values:
   * 
   * *   **OpenApi**: the ApsaraDB for MongoDB API
   * *   **mongo_buy**: the ApsaraDB for MongoDB console
   * 
   * @example
   * OpenApi
   */
  fromApp?: string;
  /**
   * @remarks
   * The specifications of the shard or mongos node. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the node ID.
   * 
   * > If you set this parameter to the ID of the shard node, you must also specify the **NodeStorage** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp143e1b1637****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * *   Valid values are **10** to **2000** if the instance uses local SSDs.
   * *   Valid values are **20** to **16000** if the instance uses enhanced SSDs (ESSDs) at PL1.
   * 
   * > The value must be a multiple of 10.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node.
   * 
   * Valid values: **0** to **5**. The value must be an integer. Default value: **0**.
   * 
   * @example
   * 5
   */
  readonlyReplicas?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The execution time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      fromApp: 'FromApp',
      nodeClass: 'NodeClass',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      effectiveTime: 'string',
      fromApp: 'string',
      nodeClass: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21084641369****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61B05CCF-EBAB-4BF3-BA67-D77256A721E2
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNodeSpecResponseBody;
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
      body: ModifyNodeSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecBatchRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You can perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, click **Expenses** to go to the **Billing Management** console. In the left-side navigation pane, click **Orders**. On the **Orders** page, find the order and complete the payment.
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance whose configurations you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1337621e8f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the changed configurations take effect. Valid values:
   * 
   * *   **Immediately**: The configurations immediately take effect.
   * *   **MaintainTime**: The configurations take effect during the maintenance window of the instance.
   * 
   * > 
   * 
   * *   You can call the [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/62008.html) operation to modify the maintenance window of an instance.
   * 
   * *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the maintenance window of an instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The configuration information of the mongos nodes or shard nodes whose configurations you want to change. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp14ae4572fd****","Storage":20},{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp19f4f92dc5****","Storage":30}]}
   */
  nodesInfo?: string;
  /**
   * @remarks
   * The type of configuration changes. Valid values:
   * 
   * *   **UPGRADE**
   * *   **DOWNGRADE**
   * 
   * > This parameter is only applicable to instances whose billing method is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      nodesInfo: 'NodesInfo',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      effectiveTime: 'string',
      nodesInfo: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecBatchResponseBody extends $tea.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 21012719476****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0637BC25-6895-5500-871F-1127CA34****
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecBatchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyNodeSpecBatchResponseBody;
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
      body: ModifyNodeSpecBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersRequest extends $tea.Model {
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **db**: a shard node.
   * *   **cs**: a Configserver node.
   * *   **mongos**: a mongos node.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the NodeId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp19f409d75****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in the specified sharded cluster instance.
   * 
   * >  This parameter is valid only when DBInstanceId is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp1b7bb3bbe****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The instance parameters that you want to modify and their values. Specify this parameter in a JSON string. Sample format: {"ParameterName1":"ParameterValue1","ParameterName2":"ParameterValue2"}.
   * 
   * >  You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query a list of default parameter templates.
   * 
   * This parameter is required.
   * 
   * @example
   * {"operationProfiling.mode":"all","operationProfiling.slowOpThresholdMs":"200"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameters: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36923CC2-DDAB-4B48-A144-DA92C1E19537
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyParametersResponseBody;
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
      body: ModifyParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1366caac83****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5DD0DEC3-24A1-5268-8E0B-5B264CA1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyResourceGroupResponseBody;
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
      body: ModifyResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the ECS security group.
   * 
   * > * You can bind up to 10 ECS security groups to an ApsaraDB for MongoDB instance.
   * > * You can call the [DescribeSecurityGroup](https://help.aliyun.com/document_detail/25556.html) operation of ECS to query the security groups in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bpxxxxxxxx
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E062C482-1A4B-469E-938C-96D28CFAE42E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityGroupConfigurationResponseBody;
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
      body: ModifySecurityGroupConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The method that is used to modify the IP address whitelist. Valid values:
   * 
   * *   **Cover**: overwrites the original IP address whitelist.
   * *   **Append**: appends data to the IP address whitelist.
   * *   **Delete**: deletes the IP address whitelist.
   * 
   * Default value: **Cover**.
   * 
   * @example
   * Append
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The attribute of the IP address whitelist. It can contain a maximum of 120 characters in length and can contain uppercase letters, lowercase letters, and digits.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * test
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist that you want to modify. Default value: **default**.
   * 
   * @example
   * allowserver
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Separate multiple IP addresses with commas (,). You can add a maximum of 1,000 different IP addresses to the IP address whitelist. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 127.0.0.1.
   * *   CIDR blocks, such as 127.0.0.1/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1/24,127.0.0.1
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpGroupAttribute: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 61B05CCF-EBAB-4BF3-BA67-D77256A721E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityIpsResponseBody;
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
      body: ModifySecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTaskInfoRequest extends $tea.Model {
  /**
   * @remarks
   * A action-related parameter. This parameter can be extended based on your business requirements. This parameter value varies with the value of the TaskAction parameter.
   * 
   * @example
   * {\\"recoverMode\\":\\"immediate\\"}
   */
  actionParams?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the step visible to the user.
   * 
   * This parameter is required.
   * 
   * @example
   * exec_task
   */
  stepName?: string;
  /**
   * @remarks
   * The action name that corresponds to the state described in the actionInfo parameter of the [DescribeHistoryTasks](https://help.aliyun.com/document_detail/2639186.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * modifySwitchTime
   */
  taskAction?: string;
  /**
   * @remarks
   * The task ID. Separate multiple IDs with commas (,). You can specify up to 10 task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-83br18hlpdrw3uxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionParams: 'ActionParams',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stepName: 'StepName',
      taskAction: 'TaskAction',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionParams: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stepName: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTaskInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code for the failed task. It is the same as that of the ModifyTaskInfo operation.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the failed task. The operation returns results after a task fails.
   * 
   * @example
   * ""
   */
  errorTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6163731A-XXXX-XXXX-B934-3388DE70C217
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful tasks.
   * 
   * @example
   * 1
   */
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorTaskId: 'ErrorTaskId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorTaskId: 'string',
      requestId: 'string',
      successCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTaskInfoResponseBody;
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
      body: ModifyTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseNodePrivateNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The public endpoint type. Valid values:
   * 
   * *   **SRV**
   * *   **Normal**
   * 
   * >  This parameter is valid only when you want to release an SRV endpoint.
   * 
   * @example
   * SRV
   */
  connectionType?: string;
  /**
   * @remarks
   * The ID of the sharded cluster instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1a7009eb24****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type of the internal endpoint. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC).
   * *   **Classic**: classic network.
   * 
   * >  You can call the [DescribeShardingNetworkAddress](https://help.aliyun.com/document_detail/62135.html) operation to query the network type of the internal endpoint.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the shard or Configserver node.
   * 
   * >  You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the ID of the shard or Configserver node.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      DBInstanceId: 'DBInstanceId',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      DBInstanceId: 'string',
      networkType: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseNodePrivateNetworkAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDDC511-7252-4A4A-ADDA-5CB1BF63873D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseNodePrivateNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseNodePrivateNetworkAddressResponseBody;
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
      body: ReleaseNodePrivateNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressRequest extends $tea.Model {
  /**
   * @remarks
   * The public endpoint type. Valid values:
   * 
   * *   **SRV**
   * *   **Normal**
   * 
   * >  This parameter is valid only when you want to release an SRV endpoint.
   * 
   * @example
   * SRV
   */
  connectionType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the mongos, shard, or Configserver node in the sharded cluster instance.
   * 
   * > *   This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * > *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the ID of the mongos, shard, or Configserver node.
   * 
   * @example
   * s-bp2235****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionType: 'ConnectionType',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionType: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D6AFE36-1AF5-4DE4-A954-672159D4CC69
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleasePublicNetworkAddressResponseBody;
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
      body: ReleasePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment. Make sure that you have sufficient balance within your account.
   * *   **false**: disables automatic payment. You must perform the following operations to pay for the instance: Log on to the ApsaraDB for MongoDB console. In the upper-right corner, click **Expenses** and select **User Center** from the drop-down list. The User Center page appears. In the left-side navigation pane, choose **Order Management** > Renew. On the Renewal tab, find the bill that you want to pay and then click Renew in the Actions column.
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * 1111111111111111
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription period of the instance. Unit: month. Valid values: **1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 203317xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B118EF45-9633-4EE3-8405-42ED4373721B
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewDBInstanceResponseBody;
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
      body: RenewDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * The account whose password needs to be reset. Set the value to **root**.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The new password.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Ali!123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The role of the instance.
   * 
   * *   If the instance is a sharded cluster instance, this parameter is required. Valid values: db and cs.
   * *   If the instance is a replica set instance, you can leave this parameter empty or set the parameter to normal.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06CBD06E-ABC9-4121-AB93-3C3820B3E7E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountPasswordResponseBody;
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
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard or mongos node in the sharded cluster instance.
   * 
   * > The sharded cluster instance is restarted if you do not specify this parameter.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 149C517D-B586-47BE-A107-8673E0ED77C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBInstanceResponseBody;
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
      body: RestartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartNodeResponseBody extends $tea.Model {
  /**
   * @example
   * ECBCA991-XXXX-XXXX-834C-B3E8007F33AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartNodeResponseBody;
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
      body: RestartNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHARequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the shard node in the sharded cluster instance.
   * 
   * > You must specify this parameter if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bpxxxxxxxx
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the roles who switch the primary and secondary nodes for the instance. You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/123802.html) operation to view the IDs and information of roles of nodes.
   * 
   * > 
   * 
   * *   Separate role IDs with commas (,). If this parameter is not specified, the primary and secondary nodes are switched.
   * 
   * *   If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, the roles who switch the primary and secondary nodes for the instance must belong to one shard node.
   * 
   * @example
   * 972xxxx,972xxxx
   */
  roleIds?: string;
  /**
   * @remarks
   * The time when the primary and secondary nodes are switched. Valid values:
   * 
   * *   0: The primary and secondary nodes are immediately switched.
   * *   1: The primary and secondary nodes are switched during the O\\&M time period.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleIds: 'RoleIds',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleIds: 'string',
      switchMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHAResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 26BD4E5F-BDB4-47BA-B232-413AA78CFA8F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchDBInstanceHAResponseBody;
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
      body: SwitchDBInstanceHAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
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
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details of the tags bound to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that are attached to the resources.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDDC511-7252-4A4A-ADDA-5CB1BF63****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferClusterBackupRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferClusterBackupResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the instance is switched to the cluster backup mode. If the value of this parameter is **1**, the instance is switched to the cluster backup mode.
   * 
   * @example
   * 1
   */
  alreadyDone?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C4A2494-85C4-45C5-93CF-548DB3375193
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyDone: 'AlreadyDone',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyDone: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferClusterBackupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferClusterBackupResponseBody;
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
      body: TransferClusterBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformInstanceChargeTypeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > Default value: **false**.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: null. Valid values:
   * 
   * *   **default** or **null**: uses coupons.
   * *   **youhuiquan_promotion_option_id_for_blank**: does not use coupons.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * dds-2ze55b3ec56c****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * *   If the PricingCycle parameter is set to Month, the valid values of this parameter range from **1** to **9**.
   * *   If the PricingCycle parameter is set to Year, the valid values of this parameter are **1**, **2**, **3**, and **5**.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Month**
   * *   **Year**
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      chargeType: 'ChargeType',
      couponNo: 'CouponNo',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      chargeType: 'string',
      couponNo: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformInstanceChargeTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21084641369****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D8F1D721-6439-4257-A89C-F1E8E9C9****
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformInstanceChargeTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformInstanceChargeTypeResponseBody;
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
      body: TransformInstanceChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables automatic payment.
   * *   **false**: disables automatic payment. For more information, see [Renew an ApsaraDB for MongoDB subscription instance](https://help.aliyun.com/document_detail/85052.html).
   * 
   * >  Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Default value: **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1366caac83****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: months. Valid values: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **12**, **24**, and **36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21022019252****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F42BB4E-461F-5B55-A37C-53B1141C****
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
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformToPrePaidResponseBody;
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
      body: TransformToPrePaidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the instances. Valid values:
   * 
   * *   **true**: removes all tags from the instances.
   * *   **false**: does not remove all tags from the instances.
   * 
   * > 
   * 
   * *   Default value: **false**.
   * 
   * *   If you specify the **TagKey** parameter together with this parameter, this parameter does not take effect.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
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
   * sg-bpxxxxxxxxxxxxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resource.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FA3A7F36-DB57-4281-8935-4B9DF61554EB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database version to which you want to upgrade. Valid values: **3.4**, **4.0**, and **4.2**.
   * 
   * >  This database version must be later than the current database version of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4907B00-A208-4E0C-A636-AA85140E406C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBInstanceEngineVersionResponseBody;
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
      body: UpgradeDBInstanceEngineVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 27B9A130-7C4B-40D9-84E8-2FC081097AAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBInstanceKernelVersionResponseBody;
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
      body: UpgradeDBInstanceKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > **N** specifies the serial number of the tag. For example, **Tag.1.Key** specifies the key of the first tag and **Tag.2.Key** specifies the key of the second tag.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > **N** specifies the serial number of the tag. For example, **Tag.1.Value** specifies the value of the first tag and **Tag.2.Value** specifies the value of the second tag.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * @example
   * 111.207.194.217,61.149.7.154
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template. The name must meet the following requirements:
   * 
   * *   It can contain lowercase letters, digits, and underscores (_).
   * *   It must start with a letter and end with a letter or digit.
   * *   It must be 2 to 120 characters in length.
   * 
   * @example
   * developer
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-2ifynl1jfkdlhhxgva3q
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestConfigServer extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestMongos extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestReplicaSet extends $tea.Model {
  /**
   * @remarks
   * The instance type of the shard node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * > *   **N** specifies the serial number of the shard node for which the instance type is specified. For example, **ReplicaSet.2.Class** specifies the instance type of the second shard node.
   * > *   Valid values for **N**: **2** to **32**.
   * 
   * This parameter is required.
   * 
   * @example
   * dds.shard.standard
   */
  class?: string;
  /**
   * @remarks
   * The number of read-only nodes in shard node N.
   * 
   * Valid values: **0**, 1, 2, 3, 4, and **5**. Default value: **0**.
   * 
   * >  **N** specifies the serial number of the shard node for which you want to set the number of read-only nodes. For example, **ReplicaSet.2.ReadonlyReplicas** specifies the number of read-only nodes in the second shard node.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: number;
  /**
   * @remarks
   * The storage space of the shard node. Unit: GB.
   * 
   * > *   The values that can be specified for this parameter vary based on the instance types. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * > *   **N** specifies the serial number of the shard node for which the storage space is specified. For example, **ReplicaSet.2.Storage** specifies the storage space of the second shard node.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Admin
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   **Unavailable**
   * *   **Available**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The role of the account. Valid values:
   * 
   * *   **db**: shard node
   * *   **cs**: Configserver node
   * *   **mongos**: mongos node
   * *   **logic**: sharded cluster instance
   * *   **normal**: replica set instance
   * 
   * @example
   * mongos
   */
  characterType?: string;
  /**
   * @remarks
   * The ID of the instance to which the account belongs.
   * 
   * @example
   * dds-bp1fd530f271****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  account?: DescribeAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBodyTypeList extends $tea.Model {
  /**
   * @remarks
   * The number of pending tasks.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **rds_apsaradb_transfer**: data migration
   * *   **rds_apsaradb_upgrade**: minor version update
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The task type in English.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeInfoEn?: string;
  /**
   * @remarks
   * The task type in Chinese.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeInfoZh?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      taskType: 'TaskType',
      taskTypeInfoEn: 'TaskTypeInfoEn',
      taskTypeInfoZh: 'TaskTypeInfoZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      taskType: 'string',
      taskTypeInfoEn: 'string',
      taskTypeInfoZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  allowCancel?: string;
  /**
   * @remarks
   * Indicates whether the modification operation is allowed.
   * 
   * *   **0**: The modification operation is not allowed.
   * *   **1**: The modification operation is allowed.
   * 
   * @example
   * 0
   */
  allowChange?: string;
  /**
   * @remarks
   * The change level of the O\\&M task.
   * 
   * @example
   * ***
   */
  changeLevel?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  changeLevelEn?: string;
  /**
   * @remarks
   * The task type in English.
   * 
   * @example
   * ***
   */
  changeLevelZh?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-07-14 10:48:43
   */
  createdTime?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  currentAVZ?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mongoDb
   */
  dbType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.6
   */
  dbVersion?: string;
  /**
   * @remarks
   * The end time of the O\\&M task.
   * 
   * @example
   * 1646014421633
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ***
   */
  id?: number;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  impactEn?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  impactZh?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ***
   */
  insComment?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * ***
   */
  insName?: string;
  /**
   * @remarks
   * The time when the task is modified. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-24T09:48:01Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switchover time. The time is displayed in the *HH:mm:ss* format.
   * 
   * @example
   * ***
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The result information. The value of this parameter can be ignored.
   * 
   * @example
   * ***
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the *yyyy-mm-dd* T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-24T06:01:05Z
   */
  startTime?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  status?: number;
  /**
   * @remarks
   * The subinstances.
   */
  subInsNames?: string[];
  /**
   * @remarks
   * The switchover point in time in which disconnection may occur. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-24T11:20:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ***
   */
  taskType?: string;
  /**
   * @remarks
   * N/A
   * 
   * @example
   * ***
   */
  taskTypeEn?: string;
  /**
   * @remarks
   * The task type in Chinese.
   * 
   * @example
   * ***
   */
  taskTypeZh?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      changeLevelEn: 'ChangeLevelEn',
      changeLevelZh: 'ChangeLevelZh',
      createdTime: 'CreatedTime',
      currentAVZ: 'CurrentAVZ',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      subInsNames: 'SubInsNames',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'string',
      allowChange: 'string',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      subInsNames: { 'type': 'array', 'itemType': 'string' },
      switchTime: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItemsSQLRecord extends $tea.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test123
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the statement was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-11T03:30:27Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP addresses of the client.
   * 
   * @example
   * 11.xxx.xxx.xxx
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of SQL audit log entries that are returned.
   * 
   * @example
   * 2
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The statement that was executed.
   * 
   * @example
   * { \\"atype\\" : \\"createCollection\\", \\"param\\" : { \\"ns\\" : \\"123.test1\\" }, \\"result\\": \\"OK\\" }
   */
  syntax?: string;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * C1
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the thread.
   * 
   * @example
   * 140682188297984
   */
  threadID?: string;
  /**
   * @remarks
   * The duration of the statement execution. Unit: microseconds.
   * 
   * @example
   * 700
   */
  totalExecutionTimes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      returnRowCounts: 'ReturnRowCounts',
      syntax: 'Syntax',
      tableName: 'TableName',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      returnRowCounts: 'number',
      syntax: 'string',
      tableName: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItems extends $tea.Model {
  SQLRecord?: DescribeAuditRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQLRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailabilityZonesResponseBodyAvailableZones extends $tea.Model {
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * The return value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is **cn-hangzhou-h**, the following values are returned for the ZoneName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, **H** is returned for the ZoneName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, **Hangzhou Zone H** is returned for the ZoneName parameter.
   * 
   * @example
   * Hangzhou Zone H
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableEngineVersionResponseBodyEngineVersions extends $tea.Model {
  engineVersion?: string[];
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange extends $tea.Model {
  /**
   * @remarks
   * The maximum storage capacity. Unit: GB.
   * 
   * @example
   * 16000
   */
  max?: number;
  /**
   * @remarks
   * The minimum storage capacity. Unit: GB.
   * 
   * @example
   * 20
   */
  min?: number;
  /**
   * @remarks
   * The step size for adjusting the storage capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource extends $tea.Model {
  /**
   * @remarks
   * The storage capacity range of the instance.
   */
  DBInstanceStorageRange?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * 4 cores, 8 GB (Dedicated) (Current instance type: mdb.shard.2x.xlarge.d (4 cores, 8 GB (Dedicated cloud-disk), maximum connections: 3000, maximum IOPS: min{1800 + 50 × Storage capacity, 21000}))
   */
  instanceClassRemark?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      instanceClass: 'InstanceClass',
      instanceClassRemark: 'InstanceClassRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceStorageRange: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange,
      instanceClass: 'string',
      instanceClassRemark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType extends $tea.Model {
  /**
   * @remarks
   * The details of the available resources.
   */
  availableResources?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkTypes?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * @example
   * 3
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      networkTypes: 'NetworkTypes',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources,
      networkTypes: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes extends $tea.Model {
  supportedNodeType?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType[];
  static names(): { [key: string]: string } {
    return {
      supportedNodeType: 'SupportedNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine extends $tea.Model {
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * WiredTiger
   */
  engine?: string;
  /**
   * @remarks
   * The supported instance types.
   */
  supportedNodeTypes?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedNodeTypes: 'SupportedNodeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedNodeTypes: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  /**
   * @remarks
   * The supported storage engines.
   */
  supportedEngines?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone extends $tea.Model {
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
   * The supported storage engine versions.
   */
  supportedEngineVersions?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions;
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
      regionId: 'RegionId',
      supportedEngineVersions: 'SupportedEngineVersions',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngineVersions: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType extends $tea.Model {
  /**
   * @remarks
   * The available zones.
   */
  availableZones?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **normal**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * sharding
   */
  dbType?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones,
      dbType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypes extends $tea.Model {
  supportedDBType?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType[];
  static names(): { [key: string]: string } {
    return {
      supportedDBType: 'SupportedDBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedDBType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBodyDatabasesDatabase extends $tea.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBodyDatabases extends $tea.Model {
  database?: DescribeBackupDBsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeBackupDBsResponseBodyDatabasesDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyBackupJobs extends $tea.Model {
  /**
   * @remarks
   * The backup task status. Valid values:
   * 
   * *   **Scheduled**: The backup task is in planning. Regular backup tasks that have not started are also in this state.
   * *   **Checking**: The instance is being checked before the backup.
   * *   **Backuping**: The backup task is in progress.
   * *   **Finished**: The backup task is completed.
   * 
   * @example
   * Scheduled
   */
  backupSetStatus?: string;
  /**
   * @remarks
   * The start time of the backup task.
   * 
   * @example
   * 2024-01-16T11:04:56Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 170034
   */
  backupjobId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Automated**: automatic backup
   * *   **Manual**: manual backup
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  /**
   * @remarks
   * The progress of the backup task. Unit: %. The progress is returned only for running backup tasks.
   * 
   * @example
   * 18%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetStatus: 'BackupSetStatus',
      backupStartTime: 'BackupStartTime',
      backupjobId: 'BackupjobId',
      jobMode: 'JobMode',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetStatus: 'string',
      backupStartTime: 'string',
      backupjobId: 'string',
      jobMode: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackupsBackup extends $tea.Model {
  /**
   * @remarks
   * The name of the database that has been backed up.
   * 
   * @example
   * database
   */
  backupDBNames?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, an empty string is returned.
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-14T03:57:34Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 32102****
   */
  backupId?: string;
  /**
   * @remarks
   * The internal download URL of the backup set.
   * 
   * >  You can use the URL to download the specified backup set on an Elastic Compute Service (ECS) instance that is in the same Virtual Private Cloud (VPC) as the ApsaraDB for MongoDB instance.
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The ID of the backup task.
   * 
   * @example
   * 1123xxxx
   */
  backupJobId?: string;
  /**
   * @remarks
   * The method that is used to generate the backup set. Valid values:
   * 
   * *   **Snapshot**
   * *   **Physical**
   * *   **Logical**
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup mode of the backup set. Valid values:
   * 
   * *   **Automated**:
   * *   **Manual**
   * 
   * @example
   * Automated
   */
  backupMode?: string;
  backupName?: string;
  backupScale?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 6168576
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-14T03:56:17Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **Success**: The backup task is successful.
   * *   **Failed**: The backup task failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  isAvail?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupDBNames: 'BackupDBNames',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupJobId: 'BackupJobId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupName: 'BackupName',
      backupScale: 'BackupScale',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDBNames: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupJobId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupName: 'string',
      backupScale: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      isAvail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $tea.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo extends $tea.Model {
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * d-2ze75ab1fa5d****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * db
   */
  nodeType?: string;
  /**
   * @remarks
   * The storage capacity of the node. Unit: MB.
   * 
   * @example
   * 20480
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      nodeId: 'string',
      nodeType: 'string',
      storageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackupsBackups extends $tea.Model {
  /**
   * @remarks
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 738025367
   */
  backupId?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over an internal network. If the backup set cannot be downloaded, null is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The backup name.
   * 
   * @example
   * 12345678.tar.gz
   */
  backupName?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: bytes.
   * 
   * @example
   * 77544597650
   */
  backupSize?: string;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **Success**: The backup task is successful.
   * *   **Failed**: The backup task failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The information of the node associated with the backup.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * d-bp16cb162771****
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * @example
   * 1
   */
  isAvail?: string;
  static names(): { [key: string]: string } {
    return {
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupName: 'BackupName',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      extraInfo: 'ExtraInfo',
      instanceName: 'InstanceName',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupName: 'string',
      backupSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      extraInfo: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo,
      instanceName: 'string',
      isAvail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cluster backups are migrated from the historical backup sets. If the value of this parameter is **1**, the cluster backups are migrated from the historical backup sets.
   * 
   * @example
   * 1
   */
  registryFromHistory?: string;
  static names(): { [key: string]: string } {
    return {
      registryFromHistory: 'RegistryFromHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryFromHistory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackups extends $tea.Model {
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * *   **init**: The backup is being initialized.
   * *   **No_Need**: Log backup is not performed.
   * *   **Running**: Log backup is being performed.
   * *   **Ready**: Log backup is complete.
   * *   **Failed**: Log backup failed.
   * 
   * >  If the **ClusterBackupStatus** parameter is set to OK, full backup is successful. If you want to perform point-in-time-restoration on an instance for which log backup is enabled or to implement consistency restoration, make sure that log backup is complete.
   * 
   * @example
   * Ready
   */
  attachLogStatus?: string;
  /**
   * @remarks
   * The collection of the backup sets of each child node in a cluster backup set.
   */
  backups?: DescribeClusterBackupsResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The end of the time range within which the cluster backup is performed.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * cb-o8c2ugnxo26kx***
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The cluster backup mode.
   * 
   * @example
   * Automated
   */
  clusterBackupMode?: string;
  /**
   * @remarks
   * The size of the cluster backup set. Unit: bytes.
   * 
   * @example
   * 107374182400
   */
  clusterBackupSize?: string;
  /**
   * @remarks
   * The beginning of the time range within which the cluster backup is performed.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupStartTime?: string;
  /**
   * @remarks
   * The status of the cluster backup set.
   * 
   * @example
   * OK
   */
  clusterBackupStatus?: string;
  /**
   * @remarks
   * The additional information in the JSON format.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo;
  /**
   * @remarks
   * Indicates whether the cluster backup sets take effect. Valid values:
   * 
   * *   **1**: The cluster backup sets take effect.
   * *   **0**: The backup sets of child nodes are incomplete or fail.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The progress of the backup task. Unit: %. The progress is returned only for running backup tasks.
   * 
   * @example
   * 50
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      attachLogStatus: 'AttachLogStatus',
      backups: 'Backups',
      clusterBackupEndTime: 'ClusterBackupEndTime',
      clusterBackupId: 'ClusterBackupId',
      clusterBackupMode: 'ClusterBackupMode',
      clusterBackupSize: 'ClusterBackupSize',
      clusterBackupStartTime: 'ClusterBackupStartTime',
      clusterBackupStatus: 'ClusterBackupStatus',
      extraInfo: 'ExtraInfo',
      isAvail: 'IsAvail',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLogStatus: 'string',
      backups: { 'type': 'array', 'itemType': DescribeClusterBackupsResponseBodyClusterBackupsBackups },
      clusterBackupEndTime: 'string',
      clusterBackupId: 'string',
      clusterBackupMode: 'string',
      clusterBackupSize: 'string',
      clusterBackupStartTime: 'string',
      clusterBackupStatus: 'string',
      extraInfo: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo,
      isAvail: 'number',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRecoverTimeResponseBodyRestoreRanges extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  restoreBeginTime?: string;
  /**
   * @remarks
   * The end of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:43:20Z
   */
  restoreEndTime?: string;
  /**
   * @remarks
   * The method used to restore data. Valid values:
   * 
   * *   **PointInTime** (default): Data is restored based on point in time
   * 
   * @example
   * PointInTime
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      restoreBeginTime: 'RestoreBeginTime',
      restoreEndTime: 'RestoreEndTime',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreBeginTime: 'string',
      restoreEndTime: 'string',
      restoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the Configserver node.
   * 
   * @example
   * dds-bp18b0934e7053e4-cs****.mongodb.rds.aliyuncs.com
   */
  connectString?: string;
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the Configserver node.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the Configserver node.
   * 
   * @example
   * 1000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the Configserver node.
   * 
   * @example
   * dds.cs.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the Configserver node.
   * 
   * @example
   * testConfigserver
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the Configserver node.
   * 
   * @example
   * dds-bp11483712c1****-cs
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the Configserver node. Unit: GB.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The port number that is used to connect to the Configserver node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The status of the Configserver node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      port: 'Port',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      port: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList extends $tea.Model {
  configserverAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute[];
  static names(): { [key: string]: string } {
    return {
      configserverAttribute: 'ConfigserverAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configserverAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the mongos node.
   * 
   * @example
   * s-bp1d8c262a15****.mongodb.rds.aliyuncs.com
   */
  connectSting?: string;
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the mongos node.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the mongos node.
   * 
   * @example
   * 800
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the mongos node.
   * 
   * @example
   * dds.mongos.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the mongos node.
   * 
   * @example
   * mongos1
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp1d8c262a15****
   */
  nodeId?: string;
  /**
   * @remarks
   * The port number that is used to connect to the mongos node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The status of the mongos node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp1d8c262a158****
   */
  vpcCloudInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectSting: 'ConnectSting',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      port: 'Port',
      status: 'Status',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectSting: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      port: 'number',
      status: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList extends $tea.Model {
  mongosAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the node.
   * 
   * @example
   * dds-bp11483712c1****.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The port number that is used to connect to the node.
   * 
   * @example
   * 3717
   */
  connectionPort?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * dds-bp11483712c1****
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1jk5vwkcri27qme****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1jk5vwkcri27qme****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDomain: 'ConnectionDomain',
      connectionPort: 'ConnectionPort',
      networkType: 'NetworkType',
      replicaSetRole: 'ReplicaSetRole',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDomain: 'string',
      connectionPort: 'string',
      networkType: 'string',
      replicaSetRole: 'string',
      VPCCloudInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets extends $tea.Model {
  replicaSet?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the shard node.
   * 
   * @example
   * d-bp1af0680a9c6d3****.mongodb.rds.aliyuncs.com:****
   */
  connectString?: string;
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the shard node.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * shard节点的最大云盘吞吐量。
   * 
   * @example
   * 350
   */
  maxDiskMbps?: string;
  /**
   * @remarks
   * The maximum IOPS of the shard node.
   * 
   * @example
   * 8000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the shard node.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the shard node.
   * 
   * @example
   * testshard
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * @example
   * d-bp16e09d9c5d****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The port number that is used to connect to the shard node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node. Valid values: **0** to **5**. The value must be an integer.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: number;
  /**
   * @remarks
   * The status of the shard node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxDiskMbps: 'MaxDiskMbps',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      port: 'Port',
      readonlyReplicas: 'ReadonlyReplicas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxDiskMbps: 'string',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      port: 'number',
      readonlyReplicas: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList extends $tea.Model {
  shardAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag extends $tea.Model {
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
   * api
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance extends $tea.Model {
  /**
   * @remarks
   * Indicates whether performance burst is enabled for the ESSD AutoPL disk.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The read and write throughput consumed by the instance.
   * 
   * @example
   * 100
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The information of the Configserver nodes.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  configserverList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-02T07:43:59Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The minor version of the current database in the instance.
   * 
   * @example
   * 5.0.5-20220721143518_0
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the orders generated for the instance. Valid values:
   * 
   * *   **all_completed**: All orders are being produced or complete.
   * *   **order_unpaid**: The instance has unpaid orders.
   * *   **order_wait_for_produce**: Orders are being delivered for production.
   * 
   * >  The order production process includes the following steps: place an order, pay for an order, deliver an order for production, produce an order, and complete the production.
   * 
   * *   If an order is in the **order_wait_for_produce** state for a long time, an error occurs when the order is being delivered for production. The system will automatically retry.
   * *   The instance status changes only when the order is in the producing and complete state, such as changing configurations and running.
   * 
   * @example
   * all_completed
   */
  DBInstanceOrderStatus?: string;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  DBInstanceReleaseProtection?: boolean;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **replicate**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance data was destroyed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The Key Management Service (KMS) key used for disk encryption.
   * 
   * @example
   * 07609cc3-3109-408f-a35e-c548e776da0b
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the subscription instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * >  This parameter is returned if the instance is a subscription instance.
   * 
   * @example
   * 2022-02-05T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the secondary zone 2 of the instance. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hongkong Zone B
   * *   **cn-hongkong-c**: Hongkong Zone C
   * *   **cn-hongkong-d**: Hongkong Zone D
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
   * > 
   * 
   * *   This parameter is returned if the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses multi-zone deployment.
   * 
   * *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-h
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The kind code of the instance. Valid values:
   * 
   * *   **0**: physical machine
   * *   **1**: Elastic Compute Service (ECS) instance
   * *   **2**: Docker cluster
   * *   **18**: Kubernetes cluster
   * 
   * @example
   * 1
   */
  kindCode?: string;
  /**
   * @remarks
   * The date when the last downgrade operation was performed on the instance.
   * 
   * @example
   * 2022-01-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before the instance is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after the storage space is exhausted.
   * *   **Released**: The instance is released.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time follows the ISO 8601 standard in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 03:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time follows the ISO 8601 standard in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The maximum number of connections to the instance.
   * 
   * @example
   * 500
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the instance.
   * 
   * @example
   * 1000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * 实例的最大云盘吞吐量，单位MB/s。
   * 
   * @example
   * 350
   */
  maxMBPS?: number;
  /**
   * @remarks
   * The information of the mongos nodes.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The access protocol type of the instance. Valid values:
   * 
   * *   **mongodb**
   * *   **dynamodb**
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   * 
   * @example
   * mongodb
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned performance of the ESSD AutoPL disk.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The number of read-only nodes in the instance.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
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
   * The logical ID of the replica set instance.
   * 
   * >  ApsaraDB for MongoDB does not support new instances of this type. This parameter applies only to previous-version replica set instances.
   * 
   * @example
   * bls-m****
   */
  replacateId?: string;
  /**
   * @remarks
   * The name of the replica set instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   * 
   * @example
   * mgset-10ace****
   */
  replicaSetName?: string;
  /**
   * @remarks
   * The information of the replica set instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   */
  replicaSets?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * >  This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone 1 of the instance. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hongkong Zone B
   * *   **cn-hongkong-c**: Hongkong Zone C
   * *   **cn-hongkong-d**: Hongkong Zone D
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
   * > 
   * 
   * *   This parameter is returned if the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses multi-zone deployment.
   * 
   * *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-i
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The information of the shard nodes.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  shardList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList;
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * **cloud_essd1**: ESSD PL1 **cloud_essd2**: ESSD PL2 **cloud_essd3**: ESSD PL3 **local_ssd**: local SSD **cloud_essd_dbfs_s**: DBFS disk
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The progress of data synchronization in percentage. When you are changing the configurations of the instance, you must synchronize the data of the instance. You can obtain the data synchronization progress based on the value returned for this parameter.
   * 
   * @example
   * 0.8
   */
  syncPercent?: string;
  /**
   * @remarks
   * The details of the instance tags.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags;
  /**
   * @remarks
   * Indicates whether the cluster backup mode is enabled. Valid values:
   * 
   * *   **true**: The cluster backup mode is enabled.
   * *   **false**: The cluster backup mode is disabled.
   * 
   * @example
   * true
   */
  useClusterBackup?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * dds-bp11483712c1****
   */
  VPCCloudInstanceIds?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1oo2a7isyrb8igf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Indicates whether password-free access within the VPC is enabled. Valid values:
   * 
   * *   **Open**: Password-free access within the VPC is enabled.
   * *   **Close**: Password-free access within the VPC is disabled, and you must use a password for access.
   * *   **NotSupport**: Password-free access within the VPC is not supported.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      configserverList: 'ConfigserverList',
      creationTime: 'CreationTime',
      currentKernelVersion: 'CurrentKernelVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceOrderStatus: 'DBInstanceOrderStatus',
      DBInstanceReleaseProtection: 'DBInstanceReleaseProtection',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hiddenZoneId: 'HiddenZoneId',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      maxMBPS: 'MaxMBPS',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      protocolType: 'ProtocolType',
      provisionedIops: 'ProvisionedIops',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replacateId: 'ReplacateId',
      replicaSetName: 'ReplicaSetName',
      replicaSets: 'ReplicaSets',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      shardList: 'ShardList',
      storageEngine: 'StorageEngine',
      storageType: 'StorageType',
      syncPercent: 'SyncPercent',
      tags: 'Tags',
      useClusterBackup: 'UseClusterBackup',
      VPCCloudInstanceIds: 'VPCCloudInstanceIds',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      capacityUnit: 'string',
      chargeType: 'string',
      configserverList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList,
      creationTime: 'string',
      currentKernelVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceOrderStatus: 'string',
      DBInstanceReleaseProtection: 'boolean',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hiddenZoneId: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      maxMBPS: 'number',
      mongosList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList,
      networkType: 'string',
      protocolType: 'string',
      provisionedIops: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replacateId: 'string',
      replicaSetName: 'string',
      replicaSets: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets,
      replicationFactor: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      shardList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList,
      storageEngine: 'string',
      storageType: 'string',
      syncPercent: 'string',
      tags: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags,
      useClusterBackup: 'boolean',
      VPCCloudInstanceIds: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstances extends $tea.Model {
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue extends $tea.Model {
  /**
   * @remarks
   * The date and time when the metric value was generated.
   * 
   * @example
   * 2022-06-13T10:58:00Z
   */
  date?: string;
  /**
   * @remarks
   * The value of the performance metric.
   * 
   * @example
   * 0.23
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues extends $tea.Model {
  performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $tea.Model {
  /**
   * @remarks
   * The performance metrics that are returned.
   * 
   * @example
   * CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The details of the performance metric values.
   */
  performanceValues?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues;
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The format of the performance metric value. If the performance metric contains multiple fields, the fields are separated with ampersands ( &).
   * 
   * For example, if you query disk space usage, the returned value of the **ValueFormat** parameter is **ins_size\\&data_size\\&log_size**.
   * 
   * @example
   * cpu_usage
   */
  valueFormat?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      performanceValues: 'PerformanceValues',
      unit: 'Unit',
      valueFormat: 'ValueFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      performanceValues: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues,
      unit: 'string',
      valueFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceKey?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSwitchLogResponseBodyLogItems extends $tea.Model {
  /**
   * @remarks
   * The ID of the replica set instance or the ID of the node on which a primary/secondary switchover is performed.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The code that indicates the reason of a primary/secondary switchover. Valid values:
   * 
   * *   USER_CONSOLE_OPERATION: The switchover is manually performed.
   * *   OPERATION_AND_MAINTENANCE: Potential risks exist.
   * *   MACHINE_DOWNTIME: The host is offline.
   * *   PRIMARY_UNHEALTHY: An exception occurs on the primary node of the instance.
   * *   SECONDARY_UNHEALTHY: An exception occurs on the secondary node of the instance.
   * *   MULTIPLE_NODE_FAILURES: An exception occurs on multiple nodes of the instance.
   * 
   * @example
   * USER_CONSOLE_OPERATION
   */
  switchCode?: string;
  /**
   * @remarks
   * The switchover status. Valid values: **1** and **0**. The value 1 indicates a successful primary/secondary switchover and the value 0 indicates a failed primary/secondary switchover.
   * 
   * @example
   * 1
   */
  switchStatus?: string;
  /**
   * @remarks
   * The point in time when a primary/secondary switchover was performed. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-07T18:00:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      switchCode: 'SwitchCode',
      switchStatus: 'SwitchStatus',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      switchCode: 'string',
      switchStatus: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key of the instance. Valid values of N: **1** to **20**.
   * 
   * *   The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   It can be up to 64 characters in length.
   * *   It cannot be an empty string.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. Valid values of N: **1** to **20**.
   * 
   * *   The value cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   The value can be up to 128 characters in length.
   * *   It can be an empty string.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $tea.Model {
  /**
   * @remarks
   * The instance type of the mongos node.
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The description of the mongos node.
   * 
   * @example
   * testmongosnode
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp10e3b0d02f****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList extends $tea.Model {
  mongosAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $tea.Model {
  /**
   * @remarks
   * The instance type of the shard node.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The description of the shard node.
   * 
   * @example
   * testshardnode
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * @example
   * d-bp1cac6f2083****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node. Valid values: **0** to **5**.
   * 
   * @example
   * 2
   */
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList extends $tea.Model {
  shardAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag extends $tea.Model {
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
   * api
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstance extends $tea.Model {
  /**
   * @remarks
   * The backup retention policy configured for the instance. Valid values:
   * 
   * *   **0**: All backup sets of the instance are immediately deleted when the instance is released.
   * *   **1**: A backup set of the instance is automatically backed up and retained for a long period of time when the instance is released.
   * *   **2**: All backup sets of the instance are automatically backed up and retained for a long period of time when the instance is released.
   * 
   * @example
   * 1
   */
  backupRetentionPolicy?: number;
  /**
   * @remarks
   * The I/O throughput consumed by the instance.
   * 
   * >  This parameter is required only when the instance is a serverless instance.
   * 
   * @example
   * 100
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid:** pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-25T02:18:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp18b0934e70****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance.
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * sharding
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance data is destroyed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > *   For a subscription instance, the computing resources of the instance are released on the 16th day after expiration, and the data of the instance is retained for seven days. The data is deleted on the 23th day after expiration and cannot be restored.
   * > *   For a pay-as-you-go instance, the computing resources of the instance are released on the 16th day after the payment becomes overdue, and the data of the instance is retained for seven days. The data is deleted on the 23th day after the payment becomes overdue and cannot be restored.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The engine of the instance.
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
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-25T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The secondary zone 2 of the instance in the multi-zone deployment. Valid values:
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
   * > *   This parameter is returned only when the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses the multi-zone deployment.
   * > *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-h
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The kind code of the instance. Valid values:
   * 
   * *   **0**: physical machine
   * *   **1**: Elastic Compute Service (ECS) instance
   * *   **2**: Docker cluster
   * *   **18**: Kubernetes cluster
   * 
   * @example
   * 1
   */
  kindCode?: string;
  /**
   * @remarks
   * The date when the last downgrade operation was performed.
   * 
   * @example
   * 2021-05-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The cluster is unlocked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before it is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after the storage space is exhausted.
   * *   **Released**: The instance is released. After an instance is released, the instance cannot be unlocked. You can only restore the backup data of the instance to a new instance. This process requires a long period of time.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The details of the mongos node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * Classic
   */
  networkType?: string;
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
   * The time when the instance was released.
   * 
   * @example
   * 2024-06-17T07:01Z
   */
  releaseTime?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary zone 1 of the instance in the multi-zone deployment. Valid values:
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
   * > *   This parameter is returned only when the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses the multi-zone deployment.
   * > *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-i
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The details of the shard node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  shardList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd**: Enterprise SSD (ESSD)
   * *   **local_ssd**: local SSD
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * The details of the tag.
   */
  tags?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags;
  /**
   * @remarks
   * Indicates whether password-free access over virtual private cloud (VPC) is enabled. Valid values:
   * 
   * *   **Open**: Password-free access over VPC is enabled.
   * *   **Close**: Password-free access over VPC is disabled.
   * 
   * @example
   * Close
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPolicy: 'BackupRetentionPolicy',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hiddenZoneId: 'HiddenZoneId',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      shardList: 'ShardList',
      storageType: 'StorageType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPolicy: 'number',
      capacityUnit: 'string',
      chargeType: 'string',
      creationTime: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hiddenZoneId: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      mongosList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList,
      networkType: 'string',
      regionId: 'string',
      releaseTime: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      shardList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList,
      storageType: 'string',
      tags: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags,
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstances extends $tea.Model {
  DBInstance?: DescribeDBInstancesResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList extends $tea.Model {
  /**
   * @remarks
   * The instance type of the mongos node.
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The description of the mongos node.
   * 
   * @example
   * mongos node describe.
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp10e3b0d02f****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBodyDBInstancesShardList extends $tea.Model {
  /**
   * @remarks
   * The instance type of the shard node.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The description of the shard node.
   * 
   * @example
   * testshard
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * @example
   * d-bp1cac6f2083****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage space of the shard node. Unit: GB.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node. Valid values: **0** to **5**.
   * 
   * @example
   * 2
   */
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBodyDBInstancesTags extends $tea.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**.
   * 
   * *   The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   It can be up to 64 characters in length.
   * *   It cannot be an empty string.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**.
   * 
   * *   The value cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   The value can be up to 128 characters in length.
   * *   The value can be an empty string.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBodyDBInstances extends $tea.Model {
  /**
   * @remarks
   * The read and write throughput consumed by the instance.
   * 
   * > 
   * 
   * *   This parameter is returned when the instance is a serverless instance.
   * 
   * *   Serverless instances are available only in the China site (aliyun.com).
   * 
   * @example
   * 100
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance type. The instance type varies based on the instance architecture. For more information about instance types supported by different instance architectures, see the following references:
   * 
   * *   [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * *   [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * *   [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test db
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the instance. For more information about valid values, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage space of the instance. Unit: GB.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance data was destroyed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-05T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The kind code of the instance. Valid values:
   * 
   * *   **0**: physical machine
   * *   **1**: Elastic Compute Service (ECS) instance
   * *   **2**: Docker cluster
   * *   **18**: Kubernetes cluster
   * 
   * @example
   * 0
   */
  kindCode?: string;
  /**
   * @remarks
   * The date when the last downgrade operation was performed.
   * 
   * @example
   * 2021-05-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * Indicates whether the instance is locked. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before it is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after the storage space is exhausted.
   * *   **Released**: The instance is released. After an instance is released, the instance cannot be unlocked. You can only restore the backup data of the instance to a new instance. This process requires a long period of time.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The details of the mongos nodes.
   * 
   * >  This parameter is returned when the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * VPC
   */
  networkType?: string;
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
   * The number of nodes in the instance.
   * 
   * >  This parameter is returned when the instance is a replica set instance.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm22cdcgc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details of the shard nodes.
   * 
   * >  This parameter is returned when the instance is a sharded cluster instance.
   */
  shardList?: DescribeDBInstancesOverviewResponseBodyDBInstancesShardList[];
  /**
   * @remarks
   * The tags to add to the instance.
   */
  tags?: DescribeDBInstancesOverviewResponseBodyDBInstancesTags[];
  /**
   * @remarks
   * Indicates whether password-free access over VPC is enabled. Valid values:
   * 
   * *   **Open**: Password-free access over VPC is enabled.
   * *   **Close**: Password-free access over VPC is disabled.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
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
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      shardList: 'ShardList',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      chargeType: 'string',
      creationTime: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      mongosList: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList },
      networkType: 'string',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      shardList: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesShardList },
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesTags },
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  /**
   * @remarks
   * The category of the log entry. Valid values:
   * 
   * *   NETWORK: network connection log
   * *   ACCESS: access control log
   * *   \\-: general log
   * *   COMMAND: slow query log
   * *   SHARDING: sharded cluster log
   * *   STORAGE: storage engine log
   * *   CONNPOOL: connection pool log
   * *   ASIO: asynchronous I/O operation log
   * *   WRITE: slow update log
   * 
   * @example
   * NETWORK
   */
  category?: string;
  /**
   * @remarks
   * The connection information of the log entry.
   * 
   * @example
   * conn18xxxxxx
   */
  connInfo?: string;
  /**
   * @remarks
   * The content of the log entry.
   * 
   * @example
   * xxxxxxxx
   */
  content?: string;
  /**
   * @remarks
   * The time when the log entry was generated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-26T12:09:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the log entry.
   * 
   * @example
   * 1111111111
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connInfo: 'ConnInfo',
      content: 'Content',
      createTime: 'CreateTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connInfo: 'string',
      content: 'string',
      createTime: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeErrorLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeErrorLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  /**
   * @remarks
   * The instances associated with the global whitelist template.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * @example
   * 117.12.202.19
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * dev_baoxian_k8s_bj
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-sdgwqyp4f5j1x3qk7yvm
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * >  Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
   * 
   * @example
   * 27.16.214.10,111.60.117.181
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * dev_baoxian_k8s_bj
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-gfurfpsh4ycbrm2avst7
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * A set of allowed actions that can be taken on the task. The system matches the current step name and status of the task to the available actions specified by ActionInfo. If no matching action is found, the current status of the task does not support any action. Example:
   * 
   *        "steps": [
   *         {
   *           "step_name": "exec_task", // The name of the step, which matches the value of CurrentStepName.
   *           "action_info": {    // The actions supported for this step.
   *             "Waiting": [      // The status, which matches the value of Status.
   *               "modifySwitchTime" // The action. Multiple actions are supported.
   *             ]
   *           }
   *         },
   *         {
   *           "step_name": "init_task", // The name of the step.
   *           "action_info": {    // The actions supported for this step.
   *             "Running": [      // The status.
   *               "cancel",       // The action.
   *               "pause"
   *             ]
   *           }
   *         }
   *       ]
   *     }
   * 
   * The system may support the following actions:
   * 
   * *   retry: makes another attempt.
   * *   cancel: makes a cancellation.
   * *   modifySwitchTime: changes the switching or restoration time.
   * 
   * @example
   * `{\\"steps\\":[{\\"action_info\\":{\\"Waiting\\":[\\"modifySwitchTime\\"]},\\"step_name\\":\\"exec_task\\"}]}`
   */
  actionInfo?: string;
  /**
   * @remarks
   * The request source. Valid values: System and User.
   * 
   * @example
   * System
   */
  callerSource?: string;
  /**
   * @remarks
   * The ID of the user who made the request. If CallerSource is set to User, CallerUid indicates the unique ID (UID) of the user.
   * 
   * @example
   * 141345906006****
   */
  callerUid?: string;
  /**
   * @remarks
   * The name of the current step. If this parameter is left empty, the task is not started.
   * 
   * @example
   * exec_task
   */
  currentStepName?: string;
  /**
   * @remarks
   * The database type. The value is fixed to mongodb.
   * 
   * @example
   * mongodb
   */
  dbType?: string;
  /**
   * @remarks
   * The end time of the performed O\\&M task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-16T02:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * dds-t4n18194768fxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test-dds
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type of the instance. The value is fixed to Instance.
   * 
   * @example
   * Instance
   */
  instanceType?: string;
  /**
   * @remarks
   * The product. The value is fixed to dds.
   * 
   * @example
   * dds
   */
  product?: string;
  /**
   * @remarks
   * The current progress of the task. The valid values range from 0 to 100.
   * 
   * @example
   * 100.0
   */
  progress?: number;
  /**
   * @remarks
   * The reason why the current task was initiated.
   * 
   * @example
   * test
   */
  reasonCode?: string;
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
   * The estimated remaining execution time. Unit: seconds. The value 0 indicates that the task is completed.
   * 
   * @example
   * 1000
   */
  remainTime?: number;
  /**
   * @remarks
   * The start time of the performed O\\&M task. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-11T02:33Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * @example
   * Succeed
   */
  status?: number;
  /**
   * @remarks
   * The details of the task. The task details vary based on the value of the taskType parameter.
   * 
   * @example
   * {\\"callerUid\\":\\"test\\"}
   */
  taskDetail?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-0mq1yyhm3ffl2bxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * *   CreateIns: Create an instance.
   * *   DeleteIns: Delete an instance.
   * *   ChangeVariable: Modify parameter settings for an instance.
   * *   ModifyInsConfig: Change the configurations of an instance.
   * *   RestartIns: Restart an instance.
   * *   HaSwitch: Perform a primary/secondary switchover on an instance.
   * *   CloneIns: Clone an instance.
   * *   KernelVersionUpgrade: Update the minor version of an instance.
   * *   ProxyVersionUpgrade: Upgrade the agent version of an instance.
   * *   ModifyAccount: Change the account of an instance.
   * *   ModifyInsSpec: Change the specifications of an instance or perform a data migration on the instance.
   * *   CreateReadIns: Create a read-only instance.
   * *   StartIns: Start an instance.
   * *   StopIns: Stop an instance.
   * *   ModifyNetwork: Modify the network type for an instance.
   * *   LockIns: Lock an instance.
   * *   UnlockIns: Unlock an instance.
   * *   DiskOnlineExpansion: Scale out the disks of an instance online.
   * *   StorageOnlineExpansion: Expend the storage capacity of an instance online.
   * *   AddInsNode: Add a node to an instance.
   * *   DeleteInsNode: Delete a node from an instance.
   * *   ManualBackupIns: Manually back up an instance.
   * *   ModifyInsStorageType: Modify the storage type for an instance.
   * 
   * @example
   * CreateIns
   */
  taskType?: string;
  /**
   * @remarks
   * The ID of the user to which the resource belongs.
   * 
   * @example
   * 141345906006****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionInfo: 'ActionInfo',
      callerSource: 'CallerSource',
      callerUid: 'CallerUid',
      currentStepName: 'CurrentStepName',
      dbType: 'DbType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      product: 'Product',
      progress: 'Progress',
      reasonCode: 'ReasonCode',
      regionId: 'RegionId',
      remainTime: 'RemainTime',
      startTime: 'StartTime',
      status: 'Status',
      taskDetail: 'TaskDetail',
      taskId: 'TaskId',
      taskType: 'TaskType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionInfo: 'string',
      callerSource: 'string',
      callerUid: 'string',
      currentStepName: 'string',
      dbType: 'string',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      product: 'string',
      progress: 'number',
      reasonCode: 'string',
      regionId: 'string',
      remainTime: 'number',
      startTime: 'string',
      status: 'number',
      taskDetail: 'string',
      taskId: 'string',
      taskType: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   Scheduled: The task is waiting to be executed.
   * *   Running: The task is running.
   * *   Succeed: The task is successful.
   * *   Failed: The task failed.
   * *   Cancelling: The task is being terminated.
   * *   Canceled: The task has been terminated.
   * *   Waiting: The task is waiting for scheduled time.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The number of tasks in a specified state.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * *   **true**: Auto-renewal is enabled for the instance.
   * *   **false**: Auto-renewal is disabled for the instance.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   **replicate**: the standalone or replica set instance
   * *   **sharding**: the sharded cluster instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp2568*****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The auto-renewal period. Unit: months.
   * 
   * > * This parameter is ruturned only when the returned value of the **AutoRenew** parameter is **true**.
   * > * You can call the [ModifyInstanceAutoRenewalAttribute](https://help.aliyun.com/document_detail/145979.html) operation to modify the auto-renewal period.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBInstanceType: 'DBInstanceType',
      dbInstanceId: 'DbInstanceId',
      duration: 'Duration',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceType: 'string',
      dbInstanceId: 'string',
      duration: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $tea.Model {
  item?: DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRecoverTimeResponseBodyRestoreRanges extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  restoreBeginTime?: string;
  /**
   * @remarks
   * The end of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:43:20Z
   */
  restoreEndTime?: string;
  /**
   * @remarks
   * The method used to restore data. Valid value:
   * 
   * *   PointInTime (default): Data is restored to a point in time.
   * 
   * @example
   * PointInTime
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      restoreBeginTime: 'RestoreBeginTime',
      restoreEndTime: 'RestoreEndTime',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreBeginTime: 'string',
      restoreEndTime: 'string',
      restoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote extends $tea.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * mongodb_20180619_0.4.9
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * test release note.
   */
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      kernelVersion: 'KernelVersion',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelVersion: 'string',
      releaseNote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBodyReleaseNotes extends $tea.Model {
  releaseNote?: DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote[];
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: { 'type': 'array', 'itemType': DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBodyKmsKeys extends $tea.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * key-shh656820f4mh9qxxxxx     alias/test1
   */
  keyAlias?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 37291352-xxxx-xxxx-adbf-fd0630a95583
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyAlias: 'KeyAlias',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyAlias: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter extends $tea.Model {
  /**
   * @remarks
   * The time when the parameter was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-12T07:58:24Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parameter value after modification.
   * 
   * @example
   * 200
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The parameter value before modification.
   * 
   * @example
   * 100
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The name of the modified parameter.
   * 
   * @example
   * operationProfiling.slowOpThresholdMs
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBodyHistoricalParameters extends $tea.Model {
  historicalParameter?: DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter[];
  static names(): { [key: string]: string } {
    return {
      historicalParameter: 'HistoricalParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalParameter: { 'type': 'array', 'itemType': DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $tea.Model {
  /**
   * @remarks
   * The value range of modifiable parameters.
   * 
   * @example
   * [0-65536]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter is modifiable.
   * 
   * *   **false**: The parameter cannot be modified.
   * *   **true**: The parameter can be modified.
   * 
   * @example
   * true
   */
  forceModify?: boolean;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect.
   * 
   * *   **false**: A restart is not required. Parameter modifications immediately take effect.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * false
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The threshold in milliseconds at which the database profiler considers a query slow, default is 100.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * net.compression.compressors
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 100
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'boolean',
      forceRestart: 'boolean',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParameters extends $tea.Model {
  templateRecord?: DescribeParameterTemplatesResponseBodyParametersTemplateRecord[];
  static names(): { [key: string]: string } {
    return {
      templateRecord: 'TemplateRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateRecord: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyParametersTemplateRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParametersParameter extends $tea.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [0-65536]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect. Valid values:
   * 
   * *   **false**: A restart is not required. Modifications take effect immediately.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Indicates whether the parameter value can be modified. Valid values:
   * 
   * *   **false**: The parameter value cannot be modified.
   * *   **true**: The parameter value can be modified.
   * 
   * @example
   * true
   */
  modifiableStatus?: boolean;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The threshold in milliseconds at which the database profiler considers a query slow, default is 100.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * operationProfiling.slowOpThresholdMs
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 200
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceRestart: 'boolean',
      modifiableStatus: 'boolean',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParameters extends $tea.Model {
  parameter?: DescribeParametersResponseBodyConfigParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersParameter extends $tea.Model {
  /**
   * @remarks
   * 实例的角色类型，取值说明：
   * 
   * - **db**：shard角色。
   * - **cs**：config server角色。
   * - **mongos**：mongos角色。
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [33554432-268435456]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect. Valid values:
   * 
   * *   **false**: A restart is not required. Modifications take effect immediately.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * Indicates whether the parameter value can be modified. Valid values:
   * 
   * *   **false**: The parameter value cannot be modified.
   * *   **true**: The parameter value can be modified.
   * 
   * @example
   * true
   */
  modifiableStatus?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The maximum memory bytes that sort stage may use, default is 33554432(i.e. 32MB)
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * setParameter.internalQueryExecMaxBlockingSortBytes
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 33554432
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      checkingCode: 'string',
      forceRestart: 'string',
      modifiableStatus: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParameters extends $tea.Model {
  parameter?: DescribeParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList extends $tea.Model {
  promotionRuleId?: number[];
  static names(): { [key: string]: string } {
    return {
      promotionRuleId: 'PromotionRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRuleId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCouponsCoupon extends $tea.Model {
  /**
   * @remarks
   * The activity type of the coupon. Valid values:
   * 
   * *   **payondemand**: subscription
   * *   **payasyougo**: pay-as-you-go
   * 
   * @example
   * payondemand
   */
  activityCategory?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * ceshi
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the coupon was selected. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isSelected?: string;
  /**
   * @remarks
   * The coupon name.
   * 
   * @example
   * youhuiquan111
   */
  name?: string;
  /**
   * @remarks
   * The code of the coupon.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotional option code.
   * 
   * @example
   * youhui_quan
   */
  promotionOptionCode?: string;
  /**
   * @remarks
   * The IDs of the rules that correspond to the coupon.
   */
  promotionRuleIdList?: DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList;
  static names(): { [key: string]: string } {
    return {
      activityCategory: 'ActivityCategory',
      couponNo: 'CouponNo',
      description: 'Description',
      isSelected: 'IsSelected',
      name: 'Name',
      optionCode: 'OptionCode',
      promotionOptionCode: 'PromotionOptionCode',
      promotionRuleIdList: 'PromotionRuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCategory: 'string',
      couponNo: 'string',
      description: 'string',
      isSelected: 'string',
      name: 'string',
      optionCode: 'string',
      promotionOptionCode: 'string',
      promotionRuleIdList: DescribePriceResponseBodyOrderCouponsCouponPromotionRuleIdList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCoupons extends $tea.Model {
  coupon?: DescribePriceResponseBodyOrderCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyOrderCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds extends $tea.Model {
  optionId?: number[];
  static names(): { [key: string]: string } {
    return {
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderDepreciateInfoContractActivity extends $tea.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * 41120065996xxxxx
   */
  activityId?: number;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * contract promotion_order_xxx discount
   */
  activityName?: string;
  /**
   * @remarks
   * The price after the promotion.
   * 
   * @example
   * 20522.4
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   * 
   * @example
   * 3621.6
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion IDs.
   */
  optionIds?: DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 24144.0
   */
  prodFee?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      finalFee: 'FinalFee',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      optionIds: 'OptionIds',
      prodFee: 'ProdFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      finalFee: 'number',
      finalPromFee: 'number',
      optionCode: 'string',
      optionIds: DescribePriceResponseBodyOrderDepreciateInfoContractActivityOptionIds,
      prodFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderDepreciateInfo extends $tea.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * 30%
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * 9*
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The contract promotion.
   */
  contractActivity?: DescribePriceResponseBodyOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the price reduction rate is displayed.
   * 
   * @example
   * true
   */
  isShow?: string;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * 1*
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * **
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * 12*
   */
  originalStandAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      contractActivity: 'ContractActivity',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      isShow: 'IsShow',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      contractActivity: DescribePriceResponseBodyOrderDepreciateInfoContractActivity,
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'string',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrder extends $tea.Model {
  /**
   * @remarks
   * The order code.
   * 
   * @example
   * ""
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The information of coupons.
   */
  coupons?: DescribePriceResponseBodyOrderCoupons;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: DescribePriceResponseBodyOrderDepreciateInfo;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 322.4
   */
  discountAmount?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The promotional activity information.
   * 
   * @example
   * [{\\”activityCategory\\”:\\”discount\\”,\\”activityExtInfo\\”:{\\”noUseYouhuiquan\\”:\\”true\\”,\\”activityId\\”:\\”191156098xxxx\\”,\\”activityExtraAttr\\”:\\”{\\\\\\\\”forbiddenCpsProfit\\\\\\\\”:\\\\\\\\”true\\\\\\\\”,\\\\\\\\”forbiddenCouponsRestricted\\\\\\\\”:\\\\\\\\”true\\\\\\\\”,\\\\\\\\”forbiddenAmbassadorProfit\\\\\\\\”:\\\\\\\\”true\\\\\\\\”}\\”,\\”isActivityIdFromWanHuaTong\\”:\\”true\\”,\\”isContractActivity\\”:\\”false\\”},\\”canPromFee\\”:906130,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promotionName\\”:\\”FY24--MongoDB replica set - first-time purchase - \\* discount for a one-year period - first-time purchase benefits\\”,\\”promotionOptionNo\\”:\\”19115609882xxxx\\”,\\”promotionRuleIdList\\”:[2091xxxx],\\”selected\\”:true,\\”targetArticleItemCodes\\”:[]},{\\”activityCategory\\”:\\”discount\\”,\\”activityExtInfo\\”:{\\”activityId\\”:\\”1018040010xxxxx\\”,\\”wanHuaOrderExpireSec\\”:\\”604800\\”,\\”isActivityIdFromWanHuaTong\\”:\\”true\\”,\\”isContractActivity\\”:\\”false\\”},\\”canPromFee\\”:339799,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promotionName\\”:\\”FY24--MongoDB discount for a one-year period \\”,\\”promotionOptionNo\\”:\\”10180400107xxxxx\\”,\\”promotionRuleIdList\\”:[xxxxx],\\”selected\\”:false,\\”targetArticleItemCodes\\”:[]}]”
   */
  optionalPromotions?: string;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 322.4
   */
  originalAmount?: string;
  /**
   * @remarks
   * The promotional activity that is hit.
   * 
   * @example
   * [{\\”finalPromFee\\”:90xxx,\\”optionCode\\”:\\”wanhua_activity\\”,\\”promType\\”:\\”discount\\”,\\”promotionId\\”:2091xxxx,\\”promotionName\\”:\\”\\* discount is provided for new users who purchase ApsaraDB for MongoDB replica set instances for one year. A new user can purchase an ApsaraDB for MongoDB replica set instance only by using the discount.\\”}]”
   */
  promDetailList?: string;
  /**
   * @remarks
   * The rules of the order.
   */
  ruleIds?: DescribePriceResponseBodyOrderRuleIds;
  /**
   * @remarks
   * Indicates whether the discount information is displayed.
   * 
   * @example
   * true
   */
  showDiscountInfo?: boolean;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standPrice?: number;
  /**
   * @remarks
   * The final price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contractActivity: 'ContractActivity',
      coupons: 'Coupons',
      currency: 'Currency',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      isContractActivity: 'IsContractActivity',
      message: 'Message',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      promDetailList: 'PromDetailList',
      ruleIds: 'RuleIds',
      showDiscountInfo: 'ShowDiscountInfo',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contractActivity: 'boolean',
      coupons: DescribePriceResponseBodyOrderCoupons,
      currency: 'string',
      depreciateInfo: DescribePriceResponseBodyOrderDepreciateInfo,
      discountAmount: 'string',
      isContractActivity: 'boolean',
      message: 'string',
      optionalPromotions: 'string',
      originalAmount: 'string',
      promDetailList: 'string',
      ruleIds: DescribePriceResponseBodyOrderRuleIds,
      showDiscountInfo: 'boolean',
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * demoname
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2075****
   */
  ruleDescId?: number;
  /**
   * @remarks
   * The rule title.
   * 
   * @example
   * demo
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyRules extends $tea.Model {
  rule?: DescribePriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribePriceResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds extends $tea.Model {
  optionId?: number[];
  static names(): { [key: string]: string } {
    return {
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity extends $tea.Model {
  /**
   * @remarks
   * The activity ID.
   * 
   * @example
   * 41120065996xxxxx
   */
  activityId?: number;
  /**
   * @remarks
   * The activity name.
   * 
   * @example
   * contract promotion_order_xxx discount
   */
  activityName?: string;
  /**
   * @remarks
   * The price after the promotion.
   * 
   * @example
   * 20522.4
   */
  finalFee?: number;
  /**
   * @remarks
   * The total discount amount.
   * 
   * @example
   * 3621.6
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion IDs.
   */
  optionIds?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 24144.0
   */
  prodFee?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      finalFee: 'FinalFee',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      optionIds: 'OptionIds',
      prodFee: 'ProdFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      finalFee: 'number',
      finalPromFee: 'number',
      optionCode: 'string',
      optionIds: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivityOptionIds,
      prodFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo extends $tea.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * 30%
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * 9*
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The activity information.
   */
  contractActivity?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity;
  /**
   * @remarks
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the price reduction rate is displayed.
   * 
   * @example
   * true
   */
  isShow?: string;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * 1*
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * **
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * 12*
   */
  originalStandAmount?: number;
  /**
   * @remarks
   * The start time of the activity.
   * 
   * @example
   * 2024-02-29 10:30:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      contractActivity: 'ContractActivity',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      isShow: 'IsShow',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      contractActivity: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfoContractActivity,
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'string',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo extends $tea.Model {
  /**
   * @remarks
   * The price reduction rate.
   * 
   * @example
   * 30%
   */
  cheapRate?: number;
  /**
   * @remarks
   * The new total price displayed on the official website.
   * 
   * @example
   * 9*
   */
  cheapStandAmount?: number;
  /**
   * @remarks
   * The price difference displayed in the total order amount.
   * 
   * @example
   * **
   */
  differential?: number;
  /**
   * @remarks
   * The name of the price difference.
   * 
   * @example
   * XXXXX
   */
  differentialName?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the price reduction rate is displayed.
   * 
   * @example
   * true
   */
  isShow?: string;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * 1*
   */
  listPrice?: number;
  /**
   * @remarks
   * The monthly price.
   * 
   * @example
   * **
   */
  monthPrice?: number;
  /**
   * @remarks
   * The original total price displayed on the official website.
   * 
   * @example
   * 12*
   */
  originalStandAmount?: number;
  static names(): { [key: string]: string } {
    return {
      cheapRate: 'CheapRate',
      cheapStandAmount: 'CheapStandAmount',
      differential: 'Differential',
      differentialName: 'DifferentialName',
      isContractActivity: 'IsContractActivity',
      isShow: 'IsShow',
      listPrice: 'ListPrice',
      monthPrice: 'MonthPrice',
      originalStandAmount: 'OriginalStandAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cheapRate: 'number',
      cheapStandAmount: 'number',
      differential: 'number',
      differentialName: 'string',
      isContractActivity: 'boolean',
      isShow: 'string',
      listPrice: 'number',
      monthPrice: 'number',
      originalStandAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr extends $tea.Model {
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * dds_dbtype
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * MongoDB
   */
  name?: string;
  /**
   * @remarks
   * The attribute type.
   * 
   * @example
   * 3
   */
  type?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * MongoDB
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs extends $tea.Model {
  moduleAttr?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr[];
  static names(): { [key: string]: string } {
    return {
      moduleAttr: 'moduleAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleAttr: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrsModuleAttr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail extends $tea.Model {
  /**
   * @remarks
   * The additional promotion information.
   * 
   * @example
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * subPrice
   */
  derivedPromType?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The code of the commodity to which the coupon can be applied.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * discount
   */
  promType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * aliwood-xxx
   */
  promotionCode?: string;
  /**
   * @remarks
   * The ID of the promotional activity.
   * 
   * @example
   * 8105187xxxx
   */
  promotionId?: number;
  /**
   * @remarks
   * The promotional activity name.
   * 
   * @example
   * [Item with price reduction in x xxxx] ApsaraDB for MongoDB instances of a full range of specifications - xxxxx
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      activityExtInfo: 'ActivityExtInfo',
      derivedPromType: 'DerivedPromType',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      promType: 'PromType',
      promotionCode: 'PromotionCode',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      derivedPromType: 'string',
      finalPromFee: 'number',
      optionCode: 'string',
      promType: 'string',
      promotionCode: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList extends $tea.Model {
  promDetail?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail[];
  static names(): { [key: string]: string } {
    return {
      promDetail: 'PromDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promDetail: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailListPromDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The cycle fee of the module.
   * 
   * @example
   * 0.0
   */
  cycleFee?: string;
  /**
   * @remarks
   * The activity information.
   */
  depreciateInfo?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0.0
   */
  discountFee?: string;
  /**
   * @remarks
   * The module attributes.
   */
  moduleAttrs?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs;
  /**
   * @remarks
   * The module code.
   * 
   * @example
   * dds_dbtype
   */
  moduleCode?: string;
  /**
   * @remarks
   * The module ID
   * 
   * @example
   * 1017110000415xxx
   */
  moduleId?: number;
  /**
   * @remarks
   * The module name.
   * 
   * @example
   * database type
   */
  moduleName?: string;
  /**
   * @remarks
   * Indicates whether the order is paid.
   * 
   * @example
   * true
   */
  needOrderPay?: boolean;
  /**
   * @remarks
   * The actual amount paid.
   * 
   * @example
   * 0.0
   */
  payFee?: number;
  /**
   * @remarks
   * Indicates whether the item is billed.
   * 
   * @example
   * false
   */
  pricingModule?: boolean;
  /**
   * @remarks
   * The promotion details.
   */
  promDetailList?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 451.00
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  standPrice?: number;
  /**
   * @remarks
   * The original price of the product.
   * 
   * @example
   * 0.0
   */
  totalProductFee?: number;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      cycleFee: 'CycleFee',
      depreciateInfo: 'DepreciateInfo',
      discountFee: 'DiscountFee',
      moduleAttrs: 'ModuleAttrs',
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      needOrderPay: 'NeedOrderPay',
      payFee: 'PayFee',
      pricingModule: 'PricingModule',
      promDetailList: 'PromDetailList',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      totalProductFee: 'TotalProductFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractActivity: 'boolean',
      cycleFee: 'string',
      depreciateInfo: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceDepreciateInfo,
      discountFee: 'string',
      moduleAttrs: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstanceModuleAttrs,
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
      needOrderPay: 'boolean',
      payFee: 'number',
      pricingModule: 'boolean',
      promDetailList: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstancePromDetailList,
      standDiscountPrice: 'number',
      standPrice: 'number',
      totalProductFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderModuleInstance extends $tea.Model {
  moduleInstance?: DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance[];
  static names(): { [key: string]: string } {
    return {
      moduleInstance: 'ModuleInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleInstance: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderModuleInstanceModuleInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList extends $tea.Model {
  promotionRuleId?: string[];
  static names(): { [key: string]: string } {
    return {
      promotionRuleId: 'promotionRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRuleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes extends $tea.Model {
  targetArticleItemCode?: string[];
  static names(): { [key: string]: string } {
    return {
      targetArticleItemCode: 'targetArticleItemCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetArticleItemCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion extends $tea.Model {
  /**
   * @remarks
   * The activity type.
   * 
   * @example
   * discount
   */
  activityCategory?: string;
  /**
   * @remarks
   * The additional activity information.
   * 
   * @example
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The amount that can be deducted by using the coupon.
   * 
   * @example
   * 4560789
   */
  canPromFee?: number;
  /**
   * @remarks
   * The promotion type.
   * 
   * @example
   * wanhua_activity
   */
  optionCode?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * [Item with price reduction in xxx] ApsaraDB for MongoDB instances of a full range of specifications - xxx
   */
  promotionName?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 1512010241xxxxx
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The IDs of the rules that correspond to the coupon.
   */
  promotionRuleIdList?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList;
  /**
   * @remarks
   * Indicates whether
   * 
   * @example
   * false
   */
  selected?: boolean;
  /**
   * @remarks
   * Indicates whether the discount is displayed.
   * 
   * @example
   * true
   */
  show?: boolean;
  /**
   * @remarks
   * The specification codes of the product.
   */
  targetArticleItemCodes?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes;
  static names(): { [key: string]: string } {
    return {
      activityCategory: 'ActivityCategory',
      activityExtInfo: 'ActivityExtInfo',
      canPromFee: 'CanPromFee',
      optionCode: 'OptionCode',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      promotionRuleIdList: 'PromotionRuleIdList',
      selected: 'Selected',
      show: 'Show',
      targetArticleItemCodes: 'TargetArticleItemCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCategory: 'string',
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      canPromFee: 'number',
      optionCode: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
      promotionRuleIdList: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionPromotionRuleIdList,
      selected: 'boolean',
      show: 'boolean',
      targetArticleItemCodes: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotionTargetArticleItemCodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions extends $tea.Model {
  optionalPromotion?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion[];
  static names(): { [key: string]: string } {
    return {
      optionalPromotion: 'OptionalPromotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionalPromotion: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderOptionalPromotionsOptionalPromotion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail extends $tea.Model {
  /**
   * @remarks
   * The additional activity information.
   * 
   * @example
   * {
   *     "activityId": "1512010241743170"
   * }
   */
  activityExtInfo?: { [key: string]: any };
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * subPrice
   */
  derivedPromType?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0
   */
  finalPromFee?: number;
  /**
   * @remarks
   * The code of the coupon.
   * 
   * @example
   * youhui_quan
   */
  optionCode?: string;
  /**
   * @remarks
   * The sub-type of the promotion.
   * 
   * @example
   * discount
   */
  promType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * ali-wood
   */
  promotionCode?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 233xxxxx
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the promotional activity.
   * 
   * @example
   * [Item with price reduction in x xxxx] ApsaraDB for MongoDB instances of a full range of specifications - xxxxx
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      activityExtInfo: 'ActivityExtInfo',
      derivedPromType: 'DerivedPromType',
      finalPromFee: 'FinalPromFee',
      optionCode: 'OptionCode',
      promType: 'PromType',
      promotionCode: 'PromotionCode',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityExtInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      derivedPromType: 'string',
      finalPromFee: 'number',
      optionCode: 'string',
      promType: 'string',
      promotionCode: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderPromDetailList extends $tea.Model {
  promDetail?: DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail[];
  static names(): { [key: string]: string } {
    return {
      promDetail: 'PromDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promDetail: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrderPromDetailListPromDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrder extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  contractActivity?: boolean;
  /**
   * @remarks
   * The price reduction information.
   */
  depreciateInfo?: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 322.4
   */
  discountAmount?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp1b6e54e7cc****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the contract promotion is hit.
   * 
   * @example
   * false
   */
  isContractActivity?: boolean;
  /**
   * @remarks
   * Indicates whether the discount is hit.
   * 
   * @example
   * true
   */
  isNewOfficialActivity?: string;
  /**
   * @remarks
   * The configuration item of the instance in the order.
   */
  moduleInstance?: DescribePriceResponseBodySubOrdersSubOrderModuleInstance;
  /**
   * @remarks
   * The promotional options that can be configured.
   */
  optionalPromotions?: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 322.4
   */
  originalAmount?: string;
  /**
   * @remarks
   * The promotion details.
   */
  promDetailList?: DescribePriceResponseBodySubOrdersSubOrderPromDetailList;
  /**
   * @remarks
   * The activity rules.
   */
  ruleIds?: DescribePriceResponseBodySubOrdersSubOrderRuleIds;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 8687
   */
  standDiscountPrice?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 62982
   */
  standPrice?: number;
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      contractActivity: 'ContractActivity',
      depreciateInfo: 'DepreciateInfo',
      discountAmount: 'DiscountAmount',
      instanceId: 'InstanceId',
      isContractActivity: 'IsContractActivity',
      isNewOfficialActivity: 'IsNewOfficialActivity',
      moduleInstance: 'ModuleInstance',
      optionalPromotions: 'OptionalPromotions',
      originalAmount: 'OriginalAmount',
      promDetailList: 'PromDetailList',
      ruleIds: 'RuleIds',
      standDiscountPrice: 'StandDiscountPrice',
      standPrice: 'StandPrice',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractActivity: 'boolean',
      depreciateInfo: DescribePriceResponseBodySubOrdersSubOrderDepreciateInfo,
      discountAmount: 'string',
      instanceId: 'string',
      isContractActivity: 'boolean',
      isNewOfficialActivity: 'string',
      moduleInstance: DescribePriceResponseBodySubOrdersSubOrderModuleInstance,
      optionalPromotions: DescribePriceResponseBodySubOrdersSubOrderOptionalPromotions,
      originalAmount: 'string',
      promDetailList: DescribePriceResponseBodySubOrdersSubOrderPromDetailList,
      ruleIds: DescribePriceResponseBodySubOrdersSubOrderRuleIds,
      standDiscountPrice: 'number',
      standPrice: 'number',
      tradeAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrders extends $tea.Model {
  subOrder?: DescribePriceResponseBodySubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegionZonesZone extends $tea.Model {
  /**
   * @remarks
   * Indicates whether a virtual private cloud (VPC) is supported. Valid values:
   * 
   * *   **true**: VPC is supported.
   * *   **false**: VPC is not supported.
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * The value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is **cn-hangzhou-h**, the following values are returned for the ZoneName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, the value **H** is returned for the ZoneName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, the value **Hangzhou Zone H** is returned for the ZoneName parameter.
   * 
   * @example
   * Hangzhou Zone H
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegionZones extends $tea.Model {
  zone?: DescribeRegionsResponseBodyRegionsDdsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegion extends $tea.Model {
  /**
   * @remarks
   * The public endpoint of the region.
   * 
   * For example, if the value of the RegionId parameter in the response is cn-hangzhou, the following value is returned for the EndPoint parameter:
   * 
   * *   mongodb.aliyuncs.com
   * 
   * @example
   * mongodb.aliyuncs.com
   */
  endPoint?: string;
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
   * The name of the region.
   * 
   * The value of the LocalName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is **cn-hangzhou**, the following values are returned for the LocalName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, the value **华东1（杭州）** is returned for the LocalName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, the value **China (Hangzhou)** is returned for the LocalName parameter.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The zones.
   */
  zones?: DescribeRegionsResponseBodyRegionsDdsRegionZones;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      regionId: 'RegionId',
      regionName: 'RegionName',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      regionId: 'string',
      regionName: 'string',
      zones: DescribeRegionsResponseBodyRegionsDdsRegionZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  ddsRegion?: DescribeRegionsResponseBodyRegionsDdsRegion[];
  static names(): { [key: string]: string } {
    return {
      ddsRegion: 'DdsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddsRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyOrderCouponsCoupon extends $tea.Model {
  /**
   * @remarks
   * The coupon number.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * coupondemo
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the coupon was selected.
   * 
   * @example
   * true
   */
  isSelected?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * youhuiquan111
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      description: 'Description',
      isSelected: 'IsSelected',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      description: 'string',
      isSelected: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyOrderCoupons extends $tea.Model {
  coupon?: DescribeRenewalPriceResponseBodyOrderCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyOrderCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyOrder extends $tea.Model {
  /**
   * @remarks
   * Details about the coupons.
   */
  coupons?: DescribeRenewalPriceResponseBodyOrderCoupons;
  /**
   * @remarks
   * The type of the currency. Valid values:
   * 
   * *   USD: United States dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 1144.8
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 1144.8
   */
  originalAmount?: number;
  /**
   * @remarks
   * The IDs of the matched rules.
   */
  ruleIds?: DescribeRenewalPriceResponseBodyOrderRuleIds;
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribeRenewalPriceResponseBodyOrderCoupons,
      currency: 'string',
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: DescribeRenewalPriceResponseBodyOrderRuleIds,
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyRulesRule extends $tea.Model {
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * demoname
   */
  name?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 11111111
   */
  ruleDescId?: number;
  /**
   * @remarks
   * The title of the rule.
   * 
   * @example
   * demo
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyRules extends $tea.Model {
  rule?: DescribeRenewalPriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodySubOrdersSubOrder extends $tea.Model {
  /**
   * @remarks
   * The discount amount of the order.
   * 
   * @example
   * 1144.8
   */
  discountAmount?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 1144.8
   */
  originalAmount?: number;
  /**
   * @remarks
   * The IDs of the matched rules.
   */
  ruleIds?: DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds;
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      instanceId: 'InstanceId',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      instanceId: 'string',
      originalAmount: 'number',
      ruleIds: DescribeRenewalPriceResponseBodySubOrdersSubOrderRuleIds,
      tradeAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodySubOrders extends $tea.Model {
  subOrder?: DescribeRenewalPriceResponseBodySubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodySubOrdersSubOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the node.
   * 
   * @example
   * dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The port number that is used to connect to the node.
   * 
   * @example
   * 3717
   */
  connectionPort?: string;
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 1209582
   */
  expiredTime?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: the virtual private cloud (VPC)
   * *   **Classic**: the classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The role of the node in the replica set instance. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  /**
   * @remarks
   * The role ID of the node.
   * 
   * @example
   * 651xxxxx
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDomain: 'ConnectionDomain',
      connectionPort: 'ConnectionPort',
      expiredTime: 'ExpiredTime',
      networkType: 'NetworkType',
      replicaSetRole: 'ReplicaSetRole',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDomain: 'string',
      connectionPort: 'string',
      expiredTime: 'string',
      networkType: 'string',
      replicaSetRole: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBodyReplicaSets extends $tea.Model {
  replicaSet?: DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  insName?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **normal**
   * *   **configServer**
   * *   **shard**
   * *   **mongos**
   * 
   * > Valid value for replica set instances: **normal**. Valid values for sharded cluster instances: **configServer**, **shard**, and **mongos**.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The role ID.
   * 
   * @example
   * 83xxxxx
   */
  roleId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * *   **Hidden**
   * 
   * @example
   * Primary
   */
  roleType?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      nodeType: 'NodeType',
      roleId: 'RoleId',
      roleType: 'RoleType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      nodeType: 'string',
      roleId: 'string',
      roleType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyZoneInfos extends $tea.Model {
  zoneInfo?: DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      zoneInfo: 'ZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  /**
   * @remarks
   * The category of the log entry.
   * 
   * @example
   * NETWORK
   */
  category?: string;
  /**
   * @remarks
   * The connection information of the log entry.
   * 
   * @example
   * conn18xxxxxx
   */
  connInfo?: string;
  /**
   * @remarks
   * The content of the log entry.
   * 
   * @example
   * end connection 11.xxx.xxx.xx:3xxxx (0 connections now open)\\n
   */
  content?: string;
  /**
   * @remarks
   * The time when the log entry was generated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-26T12:09:34Z
   */
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connInfo: 'ConnInfo',
      content: 'Content',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connInfo: 'string',
      content: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeRunningLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeRunningLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel extends $tea.Model {
  /**
   * @remarks
   * The network type of the ECS security group. Valid values:
   * 
   * *   **vpc**
   * *   **classic**
   * 
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @remarks
   * The region ID of the ECS security group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the ECS security group.
   * 
   * @example
   * sg-bpxxxxxxxx
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItems extends $tea.Model {
  rdsEcsSecurityGroupRel?: DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel[];
  static names(): { [key: string]: string } {
    return {
      rdsEcsSecurityGroupRel: 'RdsEcsSecurityGroupRel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsEcsSecurityGroupRel: { 'type': 'array', 'itemType': DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup extends $tea.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist.
   * 
   * @example
   * hidden
   */
  securityIpGroupAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist.
   * 
   * @example
   * default
   */
  securityIpGroupName?: string;
  /**
   * @remarks
   * The name of the IP whitelist.
   * 
   * @example
   * 47.xxx.xxx.xx,100.xxx.xxx.0/24
   */
  securityIpList?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupAttribute: 'string',
      securityIpGroupName: 'string',
      securityIpList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodySecurityIpGroups extends $tea.Model {
  securityIpGroup?: DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroup: { 'type': 'array', 'itemType': DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection extends $tea.Model {
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 2591963
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.140.xxx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * dds-bpxxxxxxxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  networkAddress?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * *   **VPC**: virtual private cloud
   * *   **Classic**: classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3717
   */
  port?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vpc-bpxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the Virtual Private Cloud (VPC).
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vsw-bpxxxxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      networkAddress: 'NetworkAddress',
      networkType: 'NetworkType',
      port: 'Port',
      VPCId: 'VPCId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      IPAddress: 'string',
      networkAddress: 'string',
      networkType: 'string',
      port: 'string',
      VPCId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyCompatibleConnections extends $tea.Model {
  compatibleConnection?: DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection[];
  static names(): { [key: string]: string } {
    return {
      compatibleConnection: 'CompatibleConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnection: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress extends $tea.Model {
  /**
   * @remarks
   * The remaining duration of the classic network endpoint. Unit: seconds.
   * 
   * @example
   * 2591963
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.140.xxx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The connection string of the instance.
   * 
   * @example
   * s-bpxxxxxxxx.mongodb.rds.aliyuncs.com
   */
  networkAddress?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * *   **VPC**: virtual private cloud
   * *   **Classic**: classic network
   * *   **Public**: the Internet
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bpxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **mongos**: mongos node
   * *   **shard**: shard node
   * *   **configserver**: Configserver node
   * 
   * @example
   * mongos
   */
  nodeType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3717
   */
  port?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * @example
   * Primary
   */
  role?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vpc-bpxxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * >  This parameter is returned when the network type is **VPC**.
   * 
   * @example
   * vsw-bpxxxxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      networkAddress: 'NetworkAddress',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      port: 'Port',
      role: 'Role',
      VPCId: 'VPCId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      IPAddress: 'string',
      networkAddress: 'string',
      networkType: 'string',
      nodeId: 'string',
      nodeType: 'string',
      port: 'string',
      role: 'string',
      VPCId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddresses extends $tea.Model {
  networkAddress?: DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress[];
  static names(): { [key: string]: string } {
    return {
      networkAddress: 'NetworkAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAddress: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  /**
   * @remarks
   * The username of the database account that performs the operation.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The number of documents that are scanned during the operation.
   * 
   * @example
   * 1000000
   */
  docsExamined?: number;
  /**
   * @remarks
   * The start time of the operation. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-25T 01:41:28Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The host IP address that is used to connect to the database.
   * 
   * @example
   * 192.168.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of rows involved in index scans.
   * 
   * @example
   * 0
   */
  keysExamined?: number;
  /**
   * @remarks
   * The execution time of the statement. Unit: milliseconds.
   * 
   * @example
   * 600
   */
  queryTimes?: string;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 0
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The SQL statement that is executed during the slow operation.
   * 
   * @example
   * {\\"op\\":\\"query\\",\\"ns\\":\\"mongodbtest.customer\\",\\"query\\":{\\"find\\":\\"customer\\",\\"filter\\":{\\"name\\":\\"jack\\"}}}
   */
  SQLText?: string;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * C1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      docsExamined: 'DocsExamined',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      keysExamined: 'KeysExamined',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      docsExamined: 'number',
      executionStartTime: 'string',
      hostAddress: 'string',
      keysExamined: 'number',
      queryTimes: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeSlowLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * newKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The values of the tags.
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBodyKeyIds extends $tea.Model {
  keyId?: string[];
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag.
   * 
   * @example
   * dev
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource. It is the ID of the ApsaraDB for MongoDB instance.
   * 
   * @example
   * dds-bp17e7a04960****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The return value is fixed to **ALIYUN: KVSTORE: INSTANCE**, indicating an ApsaraDB for MongoDB instance.
   * 
   * @example
   * ALIYUN::DDS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Environment
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.
   * 
   * @example
   * 222.70.197.187
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * def
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-qiawi8ec1urcx9swoy37
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag.
   * 
   * N specifies the serial number of the tag. The following example shows how to calculate consumption intervals:
   * 
   * - **Tag.1.Key** specifies the key of the first tag.
   * - **Tag.2.Key** specifies the key of the second tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Development team
   */
  key?: string;
  /**
   * @remarks
   * The value of tag.
   * 
   * N specifies the serial number of the tag. The following example shows how to calculate consumption intervals:
   * 
   * - **Tag.1.Value** specifies the value of the first tag.
   * - **Tag.2.Value** specifies the value of the second tag.
   * 
   * This parameter is required.
   * 
   * @example
   * MongoDB 4.0 environment
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "mongodb.aliyuncs.com",
      'cn-beijing': "mongodb.aliyuncs.com",
      'cn-zhangjiakou': "mongodb.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "mongodb.cn-huhehaote.aliyuncs.com",
      'cn-wulanchabu': "mongodb.aliyuncs.com",
      'cn-hangzhou': "mongodb.aliyuncs.com",
      'cn-shanghai': "mongodb.aliyuncs.com",
      'cn-shenzhen': "mongodb.aliyuncs.com",
      'cn-heyuan': "mongodb.aliyuncs.com",
      'cn-guangzhou': "mongodb.aliyuncs.com",
      'cn-chengdu': "mongodb.cn-chengdu.aliyuncs.com",
      'cn-hongkong': "mongodb.cn-hongkong.aliyuncs.com",
      'ap-northeast-1': "mongodb.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "mongodb.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "mongodb.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "mongodb.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "mongodb.ap-southeast-5.aliyuncs.com",
      'us-east-1': "mongodb.us-east-1.aliyuncs.com",
      'us-west-1': "mongodb.us-west-1.aliyuncs.com",
      'eu-west-1': "mongodb.eu-west-1.aliyuncs.com",
      'eu-central-1': "mongodb.eu-central-1.aliyuncs.com",
      'ap-south-1': "mongodb.ap-south-1.aliyuncs.com",
      'me-east-1': "mongodb.me-east-1.aliyuncs.com",
      'cn-hangzhou-finance': "mongodb.aliyuncs.com",
      'cn-shanghai-finance-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-finance-1': "mongodb.aliyuncs.com",
      'cn-north-2-gov-1': "mongodb.aliyuncs.com",
      'ap-northeast-2-pop': "mongodb.aliyuncs.com",
      'cn-beijing-finance-1': "mongodb.aliyuncs.com",
      'cn-beijing-finance-pop': "mongodb.aliyuncs.com",
      'cn-beijing-gov-1': "mongodb.aliyuncs.com",
      'cn-beijing-nu16-b01': "mongodb.aliyuncs.com",
      'cn-edge-1': "mongodb.aliyuncs.com",
      'cn-fujian': "mongodb.aliyuncs.com",
      'cn-haidian-cm12-c01': "mongodb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mongodb.aliyuncs.com",
      'cn-hangzhou-test-306': "mongodb.aliyuncs.com",
      'cn-hongkong-finance-pop': "mongodb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mongodb.aliyuncs.com",
      'cn-qingdao-nebula': "mongodb.aliyuncs.com",
      'cn-shanghai-et15-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-et2-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-inner': "mongodb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-inner': "mongodb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mongodb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mongodb.aliyuncs.com",
      'cn-wuhan': "mongodb.aliyuncs.com",
      'cn-yushanfang': "mongodb.aliyuncs.com",
      'cn-zhangbei': "mongodb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mongodb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mongodb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mongodb.aliyuncs.com",
      'eu-west-1-oxs': "mongodb.aliyuncs.com",
      'rus-west-1-pop': "mongodb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies for an internal endpoint for a shard or Configserver node in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances. For more information, see [Apply for an endpoint for a shard or Configserver node](https://help.aliyun.com/document_detail/134037.html).
   * >  The allocated endpoints can be used only for internal access. To gain Internet access, you must call the [AllocatePublicNetworkAddress](https://help.aliyun.com/document_detail/67602.html) operation to apply for public endpoints.
   * 
   * @param request - AllocateNodePrivateNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateNodePrivateNetworkAddressResponse
   */
  async allocateNodePrivateNetworkAddressWithOptions(request: AllocateNodePrivateNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateNodePrivateNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateNodePrivateNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateNodePrivateNetworkAddressResponse>(await this.callApi(params, req, runtime), new AllocateNodePrivateNetworkAddressResponse({}));
  }

  /**
   * Applies for an internal endpoint for a shard or Configserver node in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances. For more information, see [Apply for an endpoint for a shard or Configserver node](https://help.aliyun.com/document_detail/134037.html).
   * >  The allocated endpoints can be used only for internal access. To gain Internet access, you must call the [AllocatePublicNetworkAddress](https://help.aliyun.com/document_detail/67602.html) operation to apply for public endpoints.
   * 
   * @param request - AllocateNodePrivateNetworkAddressRequest
   * @returns AllocateNodePrivateNetworkAddressResponse
   */
  async allocateNodePrivateNetworkAddress(request: AllocateNodePrivateNetworkAddressRequest): Promise<AllocateNodePrivateNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Allocates a public endpoint to an instance.
   * 
   * @param request - AllocatePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddressWithOptions(request: AllocatePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocatePublicNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocatePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new AllocatePublicNetworkAddressResponse({}));
  }

  /**
   * Allocates a public endpoint to an instance.
   * 
   * @param request - AllocatePublicNetworkAddressRequest
   * @returns AllocatePublicNetworkAddressResponse
   */
  async allocatePublicNetworkAddress(request: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * You can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * Before you enable Transparent Data Encryption (TDE) by calling the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation, you can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCloudResourceAuthorizedResponse>(await this.callApi(params, req, runtime), new CheckCloudResourceAuthorizedResponse({}));
  }

  /**
   * You can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * Before you enable Transparent Data Encryption (TDE) by calling the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation, you can call this operation to check whether KMS keys are authorized to ApsaraDB for MongoDB instances.
   * 
   * @param request - CheckCloudResourceAuthorizedRequest
   * @returns CheckCloudResourceAuthorizedResponse
   */
  async checkCloudResourceAuthorized(request: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  /**
   * Queries whether the data of an ApsaraDB for MongoDB instance can be restored.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances.
   * >  After you call this operation to confirm that the data of the instance can be restored, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore data to a new instance.
   * 
   * @param request - CheckRecoveryConditionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRecoveryConditionResponse
   */
  async checkRecoveryConditionWithOptions(request: CheckRecoveryConditionRequest, runtime: $Util.RuntimeOptions): Promise<CheckRecoveryConditionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!Util.isUnset(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckRecoveryCondition",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckRecoveryConditionResponse>(await this.callApi(params, req, runtime), new CheckRecoveryConditionResponse({}));
  }

  /**
   * Queries whether the data of an ApsaraDB for MongoDB instance can be restored.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances.
   * >  After you call this operation to confirm that the data of the instance can be restored, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore data to a new instance.
   * 
   * @param request - CheckRecoveryConditionRequest
   * @returns CheckRecoveryConditionResponse
   */
  async checkRecoveryCondition(request: CheckRecoveryConditionRequest): Promise<CheckRecoveryConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkRecoveryConditionWithOptions(request, runtime);
  }

  /**
   * Creates an account that is granted read-only permissions for shard nodes in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   You can create an account for shard nodes only in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * *   The account is granted read-only permissions.
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  /**
   * Creates an account that is granted read-only permissions for shard nodes in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   You can create an account for shard nodes only in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * *   The account is granted read-only permissions.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a backup set for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call this operation, the instance must be in the Running state.
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupMethod)) {
      query["BackupMethod"] = request.backupMethod;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupResponse>(await this.callApi(params, req, runtime), new CreateBackupResponse({}));
  }

  /**
   * Creates a backup set for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call this operation, the instance must be in the Running state.
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB replica set instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail/mongodb_computeudr_dp_cn) of ApsaraDB for MongoDB before you call this operation.
   * For more information about the instance types of ApsaraDB for MongoDB instances, see [Instance types](https://www.alibabacloud.com/help/en/mongodb/product-overview/instance-types-1).
   * To create sharded cluster instances, you can call the [CreateShardingDBInstance](~~CreateShardingDBInstance~~) operation.
   * 
   * @param request - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!Util.isUnset(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!Util.isUnset(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!Util.isUnset(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!Util.isUnset(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!Util.isUnset(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!Util.isUnset(request.storageEngine)) {
      query["StorageEngine"] = request.storageEngine;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB replica set instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail/mongodb_computeudr_dp_cn) of ApsaraDB for MongoDB before you call this operation.
   * For more information about the instance types of ApsaraDB for MongoDB instances, see [Instance types](https://www.alibabacloud.com/help/en/mongodb/product-overview/instance-types-1).
   * To create sharded cluster instances, you can call the [CreateShardingDBInstance](~~CreateShardingDBInstance~~) operation.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a global IP whitelist template.
   * 
   * @param request - CreateGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroupWithOptions(request: CreateGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "CreateGlobalSecurityIPGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new CreateGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Creates a global IP whitelist template.
   * 
   * @param request - CreateGlobalSecurityIPGroupRequest
   * @returns CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroup(request: CreateGlobalSecurityIPGroupRequest): Promise<CreateGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Adds a shard or mongos node to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to sharded cluster instances.
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: CreateNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeClass)) {
      query["NodeClass"] = request.nodeClass;
    }

    if (!Util.isUnset(request.nodeStorage)) {
      query["NodeStorage"] = request.nodeStorage;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.shardDirect)) {
      query["ShardDirect"] = request.shardDirect;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeResponse>(await this.callApi(params, req, runtime), new CreateNodeResponse({}));
  }

  /**
   * Adds a shard or mongos node to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to sharded cluster instances.
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: CreateNodeRequest): Promise<CreateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * Batch adds mongos or shard nodes for a sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB. 
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - CreateNodeBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeBatchResponse
   */
  async createNodeBatchWithOptions(request: CreateNodeBatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.nodesInfo)) {
      query["NodesInfo"] = request.nodesInfo;
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

    if (!Util.isUnset(request.shardDirect)) {
      query["ShardDirect"] = request.shardDirect;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNodeBatch",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeBatchResponse>(await this.callApi(params, req, runtime), new CreateNodeBatchResponse({}));
  }

  /**
   * Batch adds mongos or shard nodes for a sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB. 
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - CreateNodeBatchRequest
   * @returns CreateNodeBatchResponse
   */
  async createNodeBatch(request: CreateNodeBatchRequest): Promise<CreateNodeBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeBatchWithOptions(request, runtime);
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   *   Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail) of ApsaraDB for MongoDB before you call this operation.
   * *   For more information about the instance types of ApsaraDB for MongoDB, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * *   To create standalone instances and replica set instances, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation.
   * 
   * @param request - CreateShardingDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShardingDBInstanceResponse
   */
  async createShardingDBInstanceWithOptions(request: CreateShardingDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateShardingDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configServer)) {
      query["ConfigServer"] = request.configServer;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!Util.isUnset(request.encrypted)) {
      query["Encrypted"] = request.encrypted;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.globalSecurityGroupIds)) {
      query["GlobalSecurityGroupIds"] = request.globalSecurityGroupIds;
    }

    if (!Util.isUnset(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
    }

    if (!Util.isUnset(request.mongos)) {
      query["Mongos"] = request.mongos;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaSet)) {
      query["ReplicaSet"] = request.replicaSet;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!Util.isUnset(request.srcDBInstanceId)) {
      query["SrcDBInstanceId"] = request.srcDBInstanceId;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!Util.isUnset(request.storageEngine)) {
      query["StorageEngine"] = request.storageEngine;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateShardingDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateShardingDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateShardingDBInstanceResponse({}));
  }

  /**
   * Creates or clones an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   *   Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail) of ApsaraDB for MongoDB before you call this operation.
   * *   For more information about the instance types of ApsaraDB for MongoDB, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * *   To create standalone instances and replica set instances, you can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation.
   * 
   * @param request - CreateShardingDBInstanceRequest
   * @returns CreateShardingDBInstanceResponse
   */
  async createShardingDBInstance(request: CreateShardingDBInstanceRequest): Promise<CreateShardingDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShardingDBInstanceWithOptions(request, runtime);
  }

  /**
   * Releases an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements
   * *   The instance is in the Running state.
   * *   The billing method of the instance is pay-as-you-go.
   * > After an instance is released, all data in the instance is cleared and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteDBInstanceResponse({}));
  }

  /**
   * Releases an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements
   * *   The instance is in the Running state.
   * *   The billing method of the instance is pay-as-you-go.
   * > After an instance is released, all data in the instance is cleared and cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a global IP whitelist template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroupWithOptions(request: DeleteGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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
      action: "DeleteGlobalSecurityIPGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new DeleteGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Deletes a global IP whitelist template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroup(request: DeleteGlobalSecurityIPGroupRequest): Promise<DeleteGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a shard or mongos node from an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a sharded cluster instance.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The number of the shard or mongos nodes in the instance is greater than two.
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: DeleteNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodeResponse>(await this.callApi(params, req, runtime), new DeleteNodeResponse({}));
  }

  /**
   * Deletes a shard or mongos node from an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The instance is a sharded cluster instance.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The number of the shard or mongos nodes in the instance is greater than two.
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to query only the information of the root account.
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAccountsResponse({}));
  }

  /**
   * Queries the database accounts of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to query only the information of the root account.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the number of operation and maintenance tasks on an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCountWithOptions(request: DescribeActiveOperationTaskCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTaskCount",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTaskCountResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTaskCountResponse({}));
  }

  /**
   * Queries the number of operation and maintenance tasks on an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTaskCountRequest
   * @returns DescribeActiveOperationTaskCountResponse
   */
  async describeActiveOperationTaskCount(request: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  /**
   * Queries the types of Operation and Maintenance tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is no longer updated and will be unavailable.
   * 
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskTypeWithOptions(request: DescribeActiveOperationTaskTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isHistory)) {
      query["IsHistory"] = request.isHistory;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTaskType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTaskTypeResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTaskTypeResponse({}));
  }

  /**
   * Queries the types of Operation and Maintenance tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is no longer updated and will be unavailable.
   * 
   * @param request - DescribeActiveOperationTaskTypeRequest
   * @returns DescribeActiveOperationTaskTypeResponse
   */
  async describeActiveOperationTaskType(request: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of operation and maintenance tasks initiated for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasksWithOptions(request: DescribeActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowCancel)) {
      query["AllowCancel"] = request.allowCancel;
    }

    if (!Util.isUnset(request.allowChange)) {
      query["AllowChange"] = request.allowChange;
    }

    if (!Util.isUnset(request.changeLevel)) {
      query["ChangeLevel"] = request.changeLevel;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.insName)) {
      query["InsName"] = request.insName;
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

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTasks",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTasksResponse({}));
  }

  /**
   * Queries a list of operation and maintenance tasks initiated for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the types of entries in the audit log collected for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditLogFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogFilterResponse
   */
  async describeAuditLogFilterWithOptions(request: DescribeAuditLogFilterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditLogFilter",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditLogFilterResponse>(await this.callApi(params, req, runtime), new DescribeAuditLogFilterResponse({}));
  }

  /**
   * Queries the types of entries in the audit log collected for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditLogFilterRequest
   * @returns DescribeAuditLogFilterResponse
   */
  async describeAuditLogFilter(request: DescribeAuditLogFilterRequest): Promise<DescribeAuditLogFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogFilterWithOptions(request, runtime);
  }

  /**
   * Queries whether the audit log feature is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditPolicyResponse
   */
  async describeAuditPolicyWithOptions(request: DescribeAuditPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditPolicyResponse>(await this.callApi(params, req, runtime), new DescribeAuditPolicyResponse({}));
  }

  /**
   * Queries whether the audit log feature is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditPolicyRequest
   * @returns DescribeAuditPolicyResponse
   */
  async describeAuditPolicy(request: DescribeAuditPolicyRequest): Promise<DescribeAuditPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the audit logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   When you call this operation, ensure that the audit log feature of the instance is enabled. Otherwise, the operation returns an empty audit log.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecordsWithOptions(request: DescribeAuditRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.form)) {
      query["Form"] = request.form;
    }

    if (!Util.isUnset(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditRecords",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditRecordsResponse>(await this.callApi(params, req, runtime), new DescribeAuditRecordsResponse({}));
  }

  /**
   * Queries the audit logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   When you call this operation, ensure that the audit log feature of the instance is enabled. Otherwise, the operation returns an empty audit log.
   * *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeAuditRecordsRequest
   * @returns DescribeAuditRecordsResponse
   */
  async describeAuditRecords(request: DescribeAuditRecordsRequest): Promise<DescribeAuditRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of the zones that are supported by an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Queries the zones in which an ApsaraDB for MongoDB instance can be deployed under specified purchase conditions. The region ID is required in the purchase condition.
   * 
   * @param request - DescribeAvailabilityZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailabilityZonesResponse
   */
  async describeAvailabilityZonesWithOptions(request: DescribeAvailabilityZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailabilityZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.excludeSecondaryZoneId)) {
      query["ExcludeSecondaryZoneId"] = request.excludeSecondaryZoneId;
    }

    if (!Util.isUnset(request.excludeZoneId)) {
      query["ExcludeZoneId"] = request.excludeZoneId;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.mongoType)) {
      query["MongoType"] = request.mongoType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageSupport)) {
      query["StorageSupport"] = request.storageSupport;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailabilityZones",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailabilityZonesResponse>(await this.callApi(params, req, runtime), new DescribeAvailabilityZonesResponse({}));
  }

  /**
   * Queries a list of the zones that are supported by an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Queries the zones in which an ApsaraDB for MongoDB instance can be deployed under specified purchase conditions. The region ID is required in the purchase condition.
   * 
   * @param request - DescribeAvailabilityZonesRequest
   * @returns DescribeAvailabilityZonesResponse
   */
  async describeAvailabilityZones(request: DescribeAvailabilityZonesRequest): Promise<DescribeAvailabilityZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailabilityZonesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * @param request - DescribeAvailableEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableEngineVersionResponse
   */
  async describeAvailableEngineVersionWithOptions(request: DescribeAvailableEngineVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableEngineVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableEngineVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableEngineVersionResponse>(await this.callApi(params, req, runtime), new DescribeAvailableEngineVersionResponse({}));
  }

  /**
   * You can call this operation to query the engine versions to which an ApsaraDB for MongoDB instance can be upgraded.
   * 
   * @param request - DescribeAvailableEngineVersionRequest
   * @returns DescribeAvailableEngineVersionResponse
   */
  async describeAvailableEngineVersion(request: DescribeAvailableEngineVersionRequest): Promise<DescribeAvailableEngineVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableEngineVersionWithOptions(request, runtime);
  }

  /**
   * Queries the available resources in the specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  /**
   * Queries the available resources in the specified zone.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the databases at a specified time or the databases in a specified backup set before you restore a database for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore a database for an ApsaraDB for MongoDB instance. For more information, see [Restore one database of an ApsaraDB for MongoDB instance](https://help.aliyun.com/document_detail/112274.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance was created after March 26, 2019.
   * *   The instance is located in the China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), or Singapore region. Other regions are not supported.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4, MongoDB 4.0, or MongoDB 4.2. In addition, the instance uses local disks to store data.
   * *   The storage engine of the instance is WiredTiger.
   * 
   * @param request - DescribeBackupDBsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDBsResponse
   */
  async describeBackupDBsWithOptions(request: DescribeBackupDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDBsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    if (!Util.isUnset(request.sourceDBInstance)) {
      query["SourceDBInstance"] = request.sourceDBInstance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupDBs",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupDBsResponse>(await this.callApi(params, req, runtime), new DescribeBackupDBsResponse({}));
  }

  /**
   * Queries the databases at a specified time or the databases in a specified backup set before you restore a database for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can call the [CreateDBInstance](https://help.aliyun.com/document_detail/61763.html) operation to restore a database for an ApsaraDB for MongoDB instance. For more information, see [Restore one database of an ApsaraDB for MongoDB instance](https://help.aliyun.com/document_detail/112274.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance was created after March 26, 2019.
   * *   The instance is located in the China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Hangzhou), China (Shanghai), China (Shenzhen), or Singapore region. Other regions are not supported.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4, MongoDB 4.0, or MongoDB 4.2. In addition, the instance uses local disks to store data.
   * *   The storage engine of the instance is WiredTiger.
   * 
   * @param request - DescribeBackupDBsRequest
   * @returns DescribeBackupDBsResponse
   */
  async describeBackupDBs(request: DescribeBackupDBsRequest): Promise<DescribeBackupDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDBsWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeBackupPolicyResponse({}));
  }

  /**
   * Queries the backup policy of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the storage used for backup in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks. Note that you are charged only for the backup-used storage of each shard in a sharded cluster instance. You can call this operation only to query the storage used by a single shard in the instance for backup.
   * 
   * @param request - DescribeBackupStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupStorageResponse
   */
  async describeBackupStorageWithOptions(request: DescribeBackupStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupStorageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupStorage",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupStorageResponse>(await this.callApi(params, req, runtime), new DescribeBackupStorageResponse({}));
  }

  /**
   * Queries the storage used for backup in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks. Note that you are charged only for the backup-used storage of each shard in a sharded cluster instance. You can call this operation only to query the storage used by a single shard in the instance for backup.
   * 
   * @param request - DescribeBackupStorageRequest
   * @returns DescribeBackupStorageResponse
   */
  async describeBackupStorage(request: DescribeBackupStorageRequest): Promise<DescribeBackupStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupStorageWithOptions(request, runtime);
  }

  /**
   * Queries backup tasks running in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks.
   * 
   * @param request - DescribeBackupTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasksWithOptions(request: DescribeBackupTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupTasks",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupTasksResponse>(await this.callApi(params, req, runtime), new DescribeBackupTasksResponse({}));
  }

  /**
   * Queries backup tasks running in an ApsaraDB for MongoDB replica set or sharded cluster instance that uses cloud disks.
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackups",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupsResponse>(await this.callApi(params, req, runtime), new DescribeBackupsResponse({}));
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   * For a sharded cluster instance that is created before October 19, 2023 and uses cloud disks, you must call the [TransferClusterBackup](https://help.aliyun.com/document_detail/2587931.html) operation to switch the instance from the shard backup mode to the cluster backup mode before you call the DescribeClusterBackups operation.
   * By default, cloud disk-based sharded cluster instances that are created after October 19, 2023 are in the cluster backup mode.
   * 
   * @param request - DescribeClusterBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterBackupsResponse
   */
  async describeClusterBackupsWithOptions(request: DescribeClusterBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.isOnlyGetClusterBackUp)) {
      query["IsOnlyGetClusterBackUp"] = request.isOnlyGetClusterBackUp;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterBackups",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterBackupsResponse>(await this.callApi(params, req, runtime), new DescribeClusterBackupsResponse({}));
  }

  /**
   * Queries the backup sets of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   * For a sharded cluster instance that is created before October 19, 2023 and uses cloud disks, you must call the [TransferClusterBackup](https://help.aliyun.com/document_detail/2587931.html) operation to switch the instance from the shard backup mode to the cluster backup mode before you call the DescribeClusterBackups operation.
   * By default, cloud disk-based sharded cluster instances that are created after October 19, 2023 are in the cluster backup mode.
   * 
   * @param request - DescribeClusterBackupsRequest
   * @returns DescribeClusterBackupsResponse
   */
  async describeClusterBackups(request: DescribeClusterBackupsRequest): Promise<DescribeClusterBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the time range to which you can restore the data of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. The DescribeClusterRecoverTime operation is applicable only to instances that are switched to the cluster backup mode or instances that are created on or after October 19, 2023.
   * 
   * @param request - DescribeClusterRecoverTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterRecoverTimeResponse
   */
  async describeClusterRecoverTimeWithOptions(request: DescribeClusterRecoverTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterRecoverTimeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterRecoverTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterRecoverTimeResponse>(await this.callApi(params, req, runtime), new DescribeClusterRecoverTimeResponse({}));
  }

  /**
   * Queries the time range to which you can restore the data of an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. The DescribeClusterRecoverTime operation is applicable only to instances that are switched to the cluster backup mode or instances that are created on or after October 19, 2023.
   * 
   * @param request - DescribeClusterRecoverTimeRequest
   * @returns DescribeClusterRecoverTimeResponse
   */
  async describeClusterRecoverTime(request: DescribeClusterRecoverTimeRequest): Promise<DescribeClusterRecoverTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterRecoverTimeWithOptions(request, runtime);
  }

  /**
   * Queries the details of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.isDelete)) {
      query["IsDelete"] = request.isDelete;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeDBInstanceAttribute",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  /**
   * Queries the details of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a key for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the DescribeDBInstanceEncryptionKey operation, the instance must have transparent data encryption (TDE) enabled in BYOK mode. You can call the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation to enable TDE.
   * 
   * @param request - DescribeDBInstanceEncryptionKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceEncryptionKeyResponse
   */
  async describeDBInstanceEncryptionKeyWithOptions(request: DescribeDBInstanceEncryptionKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceEncryptionKey",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceEncryptionKeyResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceEncryptionKeyResponse({}));
  }

  /**
   * Queries the details of a key for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the DescribeDBInstanceEncryptionKey operation, the instance must have transparent data encryption (TDE) enabled in BYOK mode. You can call the [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html) operation to enable TDE.
   * 
   * @param request - DescribeDBInstanceEncryptionKeyRequest
   * @returns DescribeDBInstanceEncryptionKeyResponse
   */
  async describeDBInstanceEncryptionKey(request: DescribeDBInstanceEncryptionKeyRequest): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceEncryptionKeyWithOptions(request, runtime);
  }

  /**
   * Queries the collection frequency of monitoring data for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitorWithOptions(request: DescribeDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceMonitor",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceMonitorResponse({}));
  }

  /**
   * Queries the collection frequency of monitoring data for an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstanceMonitorRequest
   * @returns DescribeDBInstanceMonitorResponse
   */
  async describeDBInstanceMonitor(request: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.replicaSetRole)) {
      query["ReplicaSetRole"] = request.replicaSetRole;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstancePerformance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancePerformanceResponse({}));
  }

  /**
   * Queries the performance data of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformance(request: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the Secure Sockets Layer (SSL) settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the Running state.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4 or later.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSSL",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  /**
   * Queries the Secure Sockets Layer (SSL) settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the Running state.
   * *   The instance is a replica set instance.
   * *   The instance runs MongoDB 3.4 or later.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries the primary/secondary switching logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The instance uses local physical disks to store data.
   * 
   * @param request - DescribeDBInstanceSwitchLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSwitchLogResponse
   */
  async describeDBInstanceSwitchLogWithOptions(request: DescribeDBInstanceSwitchLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSwitchLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSwitchLog",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSwitchLogResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSwitchLogResponse({}));
  }

  /**
   * Queries the primary/secondary switching logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The instance uses local physical disks to store data.
   * 
   * @param request - DescribeDBInstanceSwitchLogRequest
   * @returns DescribeDBInstanceSwitchLogResponse
   */
  async describeDBInstanceSwitchLog(request: DescribeDBInstanceSwitchLogRequest): Promise<DescribeDBInstanceSwitchLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSwitchLogWithOptions(request, runtime);
  }

  /**
   * Queries whether Transparent Data Encryption (TDE) is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For more information about TDE, see [TDE](https://help.aliyun.com/document_detail/131048.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The storage engine of the instance is WiredTiger.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - DescribeDBInstanceTDEInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceTDEInfoResponse
   */
  async describeDBInstanceTDEInfoWithOptions(request: DescribeDBInstanceTDEInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTDEInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceTDEInfo",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceTDEInfoResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceTDEInfoResponse({}));
  }

  /**
   * Queries whether Transparent Data Encryption (TDE) is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For more information about TDE, see [TDE](https://help.aliyun.com/document_detail/131048.html).
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The storage engine of the instance is WiredTiger.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - DescribeDBInstanceTDEInfoRequest
   * @returns DescribeDBInstanceTDEInfoResponse
   */
  async describeDBInstanceTDEInfo(request: DescribeDBInstanceTDEInfoRequest): Promise<DescribeDBInstanceTDEInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTDEInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * The list of replica set and standalone instances is displayed when the **DBInstanceType** parameter uses the default value **replicate**. To query a list of sharded cluster instances, you must set the **DBInstanceType** parameter to **sharding**.
   * 
   * @param request - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.connectionDomain)) {
      query["ConnectionDomain"] = request.connectionDomain;
    }

    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBInstanceStatus)) {
      query["DBInstanceStatus"] = request.DBInstanceStatus;
    }

    if (!Util.isUnset(request.DBInstanceType)) {
      query["DBInstanceType"] = request.DBInstanceType;
    }

    if (!Util.isUnset(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstances",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesResponse({}));
  }

  /**
   * Queries a list of ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * The list of replica set and standalone instances is displayed when the **DBInstanceType** parameter uses the default value **replicate**. To query a list of sharded cluster instances, you must set the **DBInstanceType** parameter to **sharding**.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the overview information of one or more ApsaraDB for MongoDB instances.
   * 
   * @remarks
   *   If you do not specify an instance when you call this operation, the overview information of all instances in a specific region within this account is returned.
   * *   Paged query is disabled for this operation.
   * 
   * @param request - DescribeDBInstancesOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesOverviewResponse
   */
  async describeDBInstancesOverviewWithOptions(request: DescribeDBInstancesOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.instanceClass)) {
      query["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstancesOverview",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesOverviewResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesOverviewResponse({}));
  }

  /**
   * Queries the overview information of one or more ApsaraDB for MongoDB instances.
   * 
   * @remarks
   *   If you do not specify an instance when you call this operation, the overview information of all instances in a specific region within this account is returned.
   * *   Paged query is disabled for this operation.
   * 
   * @param request - DescribeDBInstancesOverviewRequest
   * @returns DescribeDBInstancesOverviewResponse
   */
  async describeDBInstancesOverview(request: DescribeDBInstancesOverviewRequest): Promise<DescribeDBInstancesOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesOverviewWithOptions(request, runtime);
  }

  /**
   * Queries entries in error logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecordsWithOptions(request: DescribeErrorLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeErrorLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeErrorLogRecords",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeErrorLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeErrorLogRecordsResponse({}));
  }

  /**
   * Queries entries in error logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeErrorLogRecordsRequest
   * @returns DescribeErrorLogRecordsResponse
   */
  async describeErrorLogRecords(request: DescribeErrorLogRecordsRequest): Promise<DescribeErrorLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeErrorLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the global IP whitelist template of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroupWithOptions(request: DescribeGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalSecurityIPGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new DescribeGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Queries the global IP whitelist template of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroup(request: DescribeGlobalSecurityIPGroupRequest): Promise<DescribeGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Queries the global IP whitelist templates associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelationWithOptions(request: DescribeGlobalSecurityIPGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalSecurityIPGroupRelationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalSecurityIPGroupRelation",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new DescribeGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * Queries the global IP whitelist templates associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: DescribeGlobalSecurityIPGroupRelationRequest): Promise<DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Queries a list of tasks in the task center.
   * 
   * @param request - DescribeHistoryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasksWithOptions(request: DescribeHistoryTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromExecTime)) {
      query["FromExecTime"] = request.fromExecTime;
    }

    if (!Util.isUnset(request.fromStartTime)) {
      query["FromStartTime"] = request.fromStartTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.toExecTime)) {
      query["ToExecTime"] = request.toExecTime;
    }

    if (!Util.isUnset(request.toStartTime)) {
      query["ToStartTime"] = request.toStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryTasks",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHistoryTasksResponse>(await this.callApi(params, req, runtime), new DescribeHistoryTasksResponse({}));
  }

  /**
   * Queries a list of tasks in the task center.
   * 
   * @param request - DescribeHistoryTasksRequest
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasks(request: DescribeHistoryTasksRequest): Promise<DescribeHistoryTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryTasksWithOptions(request, runtime);
  }

  /**
   * Queries the overview of a task in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStatWithOptions(request: DescribeHistoryTasksStatRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryTasksStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromExecTime)) {
      query["FromExecTime"] = request.fromExecTime;
    }

    if (!Util.isUnset(request.fromStartTime)) {
      query["FromStartTime"] = request.fromStartTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.toExecTime)) {
      query["ToExecTime"] = request.toExecTime;
    }

    if (!Util.isUnset(request.toStartTime)) {
      query["ToStartTime"] = request.toStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryTasksStat",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHistoryTasksStatResponse>(await this.callApi(params, req, runtime), new DescribeHistoryTasksStatResponse({}));
  }

  /**
   * Queries the overview of a task in the task center.
   * 
   * @param request - DescribeHistoryTasksStatRequest
   * @returns DescribeHistoryTasksStatResponse
   */
  async describeHistoryTasksStat(request: DescribeHistoryTasksStatRequest): Promise<DescribeHistoryTasksStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryTasksStatWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query whether auto-renewal is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttributeWithOptions(request: DescribeInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBInstanceType)) {
      query["DBInstanceType"] = request.DBInstanceType;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAutoRenewalAttribute",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAutoRenewalAttributeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  /**
   * You can call this operation to query whether auto-renewal is enabled for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the time required to restore the data of an ApsaraDB for MongoDB replica set instance that uses cloud disks.
   * 
   * @param request - DescribeInstanceRecoverTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRecoverTimeResponse
   */
  async describeInstanceRecoverTimeWithOptions(request: DescribeInstanceRecoverTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceRecoverTimeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceRecoverTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceRecoverTimeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceRecoverTimeResponse({}));
  }

  /**
   * Queries the time required to restore the data of an ApsaraDB for MongoDB replica set instance that uses cloud disks.
   * 
   * @param request - DescribeInstanceRecoverTimeRequest
   * @returns DescribeInstanceRecoverTimeResponse
   */
  async describeInstanceRecoverTime(request: DescribeInstanceRecoverTimeRequest): Promise<DescribeInstanceRecoverTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceRecoverTimeWithOptions(request, runtime);
  }

  /**
   * Queries the release notes of the minor versions of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeKernelReleaseNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKernelReleaseNotesResponse
   */
  async describeKernelReleaseNotesWithOptions(request: DescribeKernelReleaseNotesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKernelReleaseNotesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.kernelVersion)) {
      query["KernelVersion"] = request.kernelVersion;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKernelReleaseNotes",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKernelReleaseNotesResponse>(await this.callApi(params, req, runtime), new DescribeKernelReleaseNotesResponse({}));
  }

  /**
   * Queries the release notes of the minor versions of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeKernelReleaseNotesRequest
   * @returns DescribeKernelReleaseNotesResponse
   */
  async describeKernelReleaseNotes(request: DescribeKernelReleaseNotesRequest): Promise<DescribeKernelReleaseNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKernelReleaseNotesWithOptions(request, runtime);
  }

  /**
   * Queries Key Management Service (KMS) keys that are available for disk encryption.
   * 
   * @remarks
   * Queried keys are available only for disk encryption.
   * 
   * @param request - DescribeKmsKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeysWithOptions(request: DescribeKmsKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKmsKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKmsKeys",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKmsKeysResponse>(await this.callApi(params, req, runtime), new DescribeKmsKeysResponse({}));
  }

  /**
   * Queries Key Management Service (KMS) keys that are available for disk encryption.
   * 
   * @remarks
   * Queried keys are available only for disk encryption.
   * 
   * @param request - DescribeKmsKeysRequest
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeys(request: DescribeKmsKeysRequest): Promise<DescribeKmsKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  /**
   * Queries the logging configurations of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * This operation depends on the audit log feature of ApsaraDB for MongoDB. You can enable the audit log feature based on your business requirements. For more information, see [Enable the audit log feature](https://help.aliyun.com/document_detail/59903.html).
   * *   Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and new applications for the free trial edition have ended. For more information, see [Notice on official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](https://help.aliyun.com/document_detail/377480.html)
   * *   You are charged for the official edition of the audit log feature based on the storage capacity that is consumed by audit logs and the retention period of the audit logs. For more information, see [Pricing of ApsaraDB for MongoDB instances](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * 
   * @param request - DescribeMongoDBLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMongoDBLogConfigResponse
   */
  async describeMongoDBLogConfigWithOptions(request: DescribeMongoDBLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMongoDBLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMongoDBLogConfig",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMongoDBLogConfigResponse>(await this.callApi(params, req, runtime), new DescribeMongoDBLogConfigResponse({}));
  }

  /**
   * Queries the logging configurations of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * This operation depends on the audit log feature of ApsaraDB for MongoDB. You can enable the audit log feature based on your business requirements. For more information, see [Enable the audit log feature](https://help.aliyun.com/document_detail/59903.html).
   * *   Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and new applications for the free trial edition have ended. For more information, see [Notice on official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](https://help.aliyun.com/document_detail/377480.html)
   * *   You are charged for the official edition of the audit log feature based on the storage capacity that is consumed by audit logs and the retention period of the audit logs. For more information, see [Pricing of ApsaraDB for MongoDB instances](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * 
   * @param request - DescribeMongoDBLogConfigRequest
   * @returns DescribeMongoDBLogConfigResponse
   */
  async describeMongoDBLogConfig(request: DescribeMongoDBLogConfigRequest): Promise<DescribeMongoDBLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMongoDBLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the parameter modification records of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistoryWithOptions(request: DescribeParameterModificationHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterModificationHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterModificationHistory",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParameterModificationHistoryResponse>(await this.callApi(params, req, runtime), new DescribeParameterModificationHistoryResponse({}));
  }

  /**
   * Queries the parameter modification records of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParameterModificationHistoryRequest
   * @returns DescribeParameterModificationHistoryResponse
   */
  async describeParameterModificationHistory(request: DescribeParameterModificationHistoryRequest): Promise<DescribeParameterModificationHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterModificationHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the list of default parameter templates for ApsaraDB for MongoDB instances.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: DescribeParameterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterTemplates",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeParameterTemplatesResponse({}));
  }

  /**
   * Queries the list of default parameter templates for ApsaraDB for MongoDB instances.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the parameter settings of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameters",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParametersResponse>(await this.callApi(params, req, runtime), new DescribeParametersResponse({}));
  }

  /**
   * Queries the parameter settings of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * Queries the fees incurred when you create, upgrade, or renew an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!Util.isUnset(request.orderParamOut)) {
      query["OrderParamOut"] = request.orderParamOut;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrice",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  /**
   * Queries the fees incurred when you create, upgrade, or renew an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * Queries all regions and zones supported for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  To query available regions and zones in which an ApsaraDB for MongoDB instance can be created, call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation.
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2015-12-01",
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
   * Queries all regions and zones supported for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  To query available regions and zones in which an ApsaraDB for MongoDB instance can be created, call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the monthly renewal price of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPriceWithOptions(request: DescribeRenewalPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenewalPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRenewalPrice",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRenewalPriceResponse>(await this.callApi(params, req, runtime), new DescribeRenewalPriceResponse({}));
  }

  /**
   * Queries the monthly renewal price of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to subscription instances.
   * 
   * @param request - DescribeRenewalPriceRequest
   * @returns DescribeRenewalPriceResponse
   */
  async describeRenewalPrice(request: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  /**
   * Queries the role and connection information of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and standalone instances, but not to sharded cluster instances.
   * 
   * @param request - DescribeReplicaSetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicaSetRoleResponse
   */
  async describeReplicaSetRoleWithOptions(request: DescribeReplicaSetRoleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReplicaSetRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReplicaSetRole",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReplicaSetRoleResponse>(await this.callApi(params, req, runtime), new DescribeReplicaSetRoleResponse({}));
  }

  /**
   * Queries the role and connection information of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and standalone instances, but not to sharded cluster instances.
   * 
   * @param request - DescribeReplicaSetRoleRequest
   * @returns DescribeReplicaSetRoleResponse
   */
  async describeReplicaSetRole(request: DescribeReplicaSetRoleRequest): Promise<DescribeReplicaSetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReplicaSetRoleWithOptions(request, runtime);
  }

  /**
   * Queries the role and zone of each node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * > For more information, see [View the zone of a node](https://help.aliyun.com/document_detail/123825.html).
   * This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfoWithOptions(request: DescribeRoleZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoleZoneInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRoleZoneInfo",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRoleZoneInfoResponse>(await this.callApi(params, req, runtime), new DescribeRoleZoneInfoResponse({}));
  }

  /**
   * Queries the role and zone of each node in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * > For more information, see [View the zone of a node](https://help.aliyun.com/document_detail/123825.html).
   * This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * 
   * @param request - DescribeRoleZoneInfoRequest
   * @returns DescribeRoleZoneInfoResponse
   */
  async describeRoleZoneInfo(request: DescribeRoleZoneInfoRequest): Promise<DescribeRoleZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

  /**
   * Queries entries in operational logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecordsWithOptions(request: DescribeRunningLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRunningLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRunningLogRecords",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRunningLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeRunningLogRecordsResponse({}));
  }

  /**
   * Queries entries in operational logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeRunningLogRecordsRequest
   * @returns DescribeRunningLogRecordsResponse
   */
  async describeRunningLogRecords(request: DescribeRunningLogRecordsRequest): Promise<DescribeRunningLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRunningLogRecordsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query ECS security groups that are bound to an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfigurationWithOptions(request: DescribeSecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityGroupConfiguration",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityGroupConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeSecurityGroupConfigurationResponse({}));
  }

  /**
   * You can call this operation to query ECS security groups that are bound to an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityGroupConfigurationRequest
   * @returns DescribeSecurityGroupConfigurationResponse
   */
  async describeSecurityGroupConfiguration(request: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the IP whitelists of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIpsWithOptions(request: DescribeSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.showHDMIps)) {
      query["ShowHDMIps"] = request.showHDMIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityIps",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityIpsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIpsResponse({}));
  }

  /**
   * You can call this operation to query the IP whitelists of an ApsaraDB for MongoDB instance.
   * 
   * @param request - DescribeSecurityIpsRequest
   * @returns DescribeSecurityIpsResponse
   */
  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  /**
   * Queries connection information about an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - DescribeShardingNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeShardingNetworkAddressResponse
   */
  async describeShardingNetworkAddressWithOptions(request: DescribeShardingNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardingNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeShardingNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeShardingNetworkAddressResponse>(await this.callApi(params, req, runtime), new DescribeShardingNetworkAddressResponse({}));
  }

  /**
   * Queries connection information about an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * This operation is applicable only to sharded cluster instances.
   * 
   * @param request - DescribeShardingNetworkAddressRequest
   * @returns DescribeShardingNetworkAddressResponse
   */
  async describeShardingNetworkAddress(request: DescribeShardingNetworkAddressRequest): Promise<DescribeShardingNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardingNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Queries the details of entries in slow query logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.logicalOperator)) {
      query["LogicalOperator"] = request.logicalOperator;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogRecords",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  /**
   * Queries the details of entries in slow query logs of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries all tags in a specified region.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  /**
   * Queries all tags in a specified region.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can use the custom key obtained by calling the DescribeUserEncryptionKeyList operation to enable TDE. For more information, see [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html).
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  /**
   * Queries the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can use the custom key obtained by calling the DescribeUserEncryptionKeyList operation to enable TDE. For more information, see [ModifyDBInstanceTDE](https://help.aliyun.com/document_detail/131267.html).
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Destroys an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set instance or a sharded cluster instance that uses local disks.
   * *   The billing method of the instance is subscription.
   * *   The instance has expired and is in the **Locking** state.
   * **
   * **Warning** Data cannot be restored after the instance is destroyed. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DestroyInstanceResponse
   */
  async destroyInstanceWithOptions(request: DestroyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DestroyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DestroyInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DestroyInstanceResponse>(await this.callApi(params, req, runtime), new DestroyInstanceResponse({}));
  }

  /**
   * Destroys an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is a replica set instance or a sharded cluster instance that uses local disks.
   * *   The billing method of the instance is subscription.
   * *   The instance has expired and is in the **Locking** state.
   * **
   * **Warning** Data cannot be restored after the instance is destroyed. Proceed with caution.
   * 
   * @param request - DestroyInstanceRequest
   * @returns DestroyInstanceResponse
   */
  async destroyInstance(request: DestroyInstanceRequest): Promise<DestroyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyInstanceWithOptions(request, runtime);
  }

  /**
   * Checks whether sufficient resources are available in a region in which you want to create or upgrade an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances. You can call this operation to check whether resources are sufficient for creating an instance, upgrading a replica set or sharded cluster instance, or upgrading a single node of the sharded cluster instance.
   * > You can call this operation a maximum of 200 times per minute.
   * 
   * @param request - EvaluateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateResourceResponse
   */
  async evaluateResourceWithOptions(request: EvaluateResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.shardsInfo)) {
      query["ShardsInfo"] = request.shardsInfo;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EvaluateResource",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluateResourceResponse>(await this.callApi(params, req, runtime), new EvaluateResourceResponse({}));
  }

  /**
   * Checks whether sufficient resources are available in a region in which you want to create or upgrade an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances. You can call this operation to check whether resources are sufficient for creating an instance, upgrading a replica set or sharded cluster instance, or upgrading a single node of the sharded cluster instance.
   * > You can call this operation a maximum of 200 times per minute.
   * 
   * @param request - EvaluateResourceRequest
   * @returns EvaluateResourceResponse
   */
  async evaluateResource(request: EvaluateResourceRequest): Promise<EvaluateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateResourceWithOptions(request, runtime);
  }

  /**
   * Queries the relationship between ApsaraDB for MongoDB instances and tags.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the relationship between ApsaraDB for MongoDB instances and tags.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Migrates an ApsaraDB for MongoDB instance to a specific zone.
   * 
   * @remarks
   *   This operation is available only for replica set instances that run MongoDB 4.2 or earlier and sharded cluster instances.
   * *   If you have applied for a public endpoint for the ApsaraDB for MongoDB instance, you must call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint before you call the MigrateAvailableZone operation.
   * *   Transparent data encryption (TDE) is disabled for the ApsaraDB for MongoDB instance.
   * *   The source zone and the destination zone belong to the same region.
   * *   A vSwitch is created in the destination zone. This prerequisite must be met if the instance resides in a virtual private cloud (VPC). For more information about how to create a vSwitch, see [Work with vSwitches](https://help.aliyun.com/document_detail/65387.html).
   * 
   * @param request - MigrateAvailableZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateAvailableZoneResponse
   */
  async migrateAvailableZoneWithOptions(request: MigrateAvailableZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateAvailableZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.hiddenZoneId)) {
      query["HiddenZoneId"] = request.hiddenZoneId;
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

    if (!Util.isUnset(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!Util.isUnset(request.vswitch)) {
      query["Vswitch"] = request.vswitch;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MigrateAvailableZone",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MigrateAvailableZoneResponse>(await this.callApi(params, req, runtime), new MigrateAvailableZoneResponse({}));
  }

  /**
   * Migrates an ApsaraDB for MongoDB instance to a specific zone.
   * 
   * @remarks
   *   This operation is available only for replica set instances that run MongoDB 4.2 or earlier and sharded cluster instances.
   * *   If you have applied for a public endpoint for the ApsaraDB for MongoDB instance, you must call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint before you call the MigrateAvailableZone operation.
   * *   Transparent data encryption (TDE) is disabled for the ApsaraDB for MongoDB instance.
   * *   The source zone and the destination zone belong to the same region.
   * *   A vSwitch is created in the destination zone. This prerequisite must be met if the instance resides in a virtual private cloud (VPC). For more information about how to create a vSwitch, see [Work with vSwitches](https://help.aliyun.com/document_detail/65387.html).
   * 
   * @param request - MigrateAvailableZoneRequest
   * @returns MigrateAvailableZoneResponse
   */
  async migrateAvailableZone(request: MigrateAvailableZoneRequest): Promise<MigrateAvailableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateAvailableZoneWithOptions(request, runtime);
  }

  /**
   * You can call this operation to migrate an ApsaraDB for MongoDB instance to another zone.
   * 
   * @remarks
   * This operation is applicable only to replica set instances, but not to standalone instances or sharded cluster instances.
   * >  If you have applied for a public endpoint of the instance, you must first call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZoneWithOptions(request: MigrateToOtherZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateToOtherZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
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
      action: "MigrateToOtherZone",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MigrateToOtherZoneResponse>(await this.callApi(params, req, runtime), new MigrateToOtherZoneResponse({}));
  }

  /**
   * You can call this operation to migrate an ApsaraDB for MongoDB instance to another zone.
   * 
   * @remarks
   * This operation is applicable only to replica set instances, but not to standalone instances or sharded cluster instances.
   * >  If you have applied for a public endpoint of the instance, you must first call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation to release the public endpoint.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(request: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the description of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  /**
   * Modifies the description of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the switching time of scheduled O\\\\\\&M tasks for an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasksWithOptions(request: ModifyActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.immediateStart)) {
      query["ImmediateStart"] = request.immediateStart;
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

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyActiveOperationTasks",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new ModifyActiveOperationTasksResponse({}));
  }

  /**
   * Modifies the switching time of scheduled O\\\\\\&M tasks for an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the types of logs collected by the audit log feature of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** or **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditLogFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogFilterResponse
   */
  async modifyAuditLogFilterWithOptions(request: ModifyAuditLogFilterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditLogFilterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
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

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAuditLogFilter",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAuditLogFilterResponse>(await this.callApi(params, req, runtime), new ModifyAuditLogFilterResponse({}));
  }

  /**
   * Queries the types of logs collected by the audit log feature of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the running state when you call this operation.
   * *   This operation is applicable only to **general-purpose local-disk** or **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditLogFilterRequest
   * @returns ModifyAuditLogFilterResponse
   */
  async modifyAuditLogFilter(request: ModifyAuditLogFilterRequest): Promise<ModifyAuditLogFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogFilterWithOptions(request, runtime);
  }

  /**
   * Enables or disables the audit log feature or configures the log storage duration for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditPolicyResponse
   */
  async modifyAuditPolicyWithOptions(request: ModifyAuditPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditLogSwitchSource)) {
      query["AuditLogSwitchSource"] = request.auditLogSwitchSource;
    }

    if (!Util.isUnset(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.storagePeriod)) {
      query["StoragePeriod"] = request.storagePeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAuditPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAuditPolicyResponse>(await this.callApi(params, req, runtime), new ModifyAuditPolicyResponse({}));
  }

  /**
   * Enables or disables the audit log feature or configures the log storage duration for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   This operation is applicable only to **general-purpose local-disk** and **dedicated local-disk** instances.
   * *   You can call this operation up to 30 times per minute. To call this operation at a higher frequency, use a Logstore. For more information, see [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ModifyAuditPolicyRequest
   * @returns ModifyAuditPolicyResponse
   */
  async modifyAuditPolicy(request: ModifyAuditPolicyRequest): Promise<ModifyAuditPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy for an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupInterval)) {
      query["BackupInterval"] = request.backupInterval;
    }

    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!Util.isUnset(request.crossBackupPeriod)) {
      query["CrossBackupPeriod"] = request.crossBackupPeriod;
    }

    if (!Util.isUnset(request.crossBackupType)) {
      query["CrossBackupType"] = request.crossBackupType;
    }

    if (!Util.isUnset(request.crossLogRetentionType)) {
      query["CrossLogRetentionType"] = request.crossLogRetentionType;
    }

    if (!Util.isUnset(request.crossLogRetentionValue)) {
      query["CrossLogRetentionValue"] = request.crossLogRetentionValue;
    }

    if (!Util.isUnset(request.crossRetentionType)) {
      query["CrossRetentionType"] = request.crossRetentionType;
    }

    if (!Util.isUnset(request.crossRetentionValue)) {
      query["CrossRetentionValue"] = request.crossRetentionValue;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.destRegion)) {
      query["DestRegion"] = request.destRegion;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.enableCrossLogBackup)) {
      query["EnableCrossLogBackup"] = request.enableCrossLogBackup;
    }

    if (!Util.isUnset(request.highFrequencyBackupRetention)) {
      query["HighFrequencyBackupRetention"] = request.highFrequencyBackupRetention;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.snapshotBackupType)) {
      query["SnapshotBackupType"] = request.snapshotBackupType;
    }

    if (!Util.isUnset(request.srcRegion)) {
      query["SrcRegion"] = request.srcRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicy",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyResponse({}));
  }

  /**
   * Modifies a backup policy for an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoint that is used to connect to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can modify the connection strings and ports of the following instances:
   * *   You can modify the connection strings of instances that use local or cloud disks.
   * *   You can only modify the ports of instances that use cloud disks.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.newConnectionString)) {
      query["NewConnectionString"] = request.newConnectionString;
    }

    if (!Util.isUnset(request.newPort)) {
      query["NewPort"] = request.newPort;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  /**
   * Modifies the endpoint that is used to connect to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * You can modify the connection strings and ports of the following instances:
   * *   You can modify the connection strings of instances that use local or cloud disks.
   * *   You can only modify the ports of instances that use cloud disks.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the name of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceDescription",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the name of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the disk type of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDiskTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDiskTypeResponse
   */
  async modifyDBInstanceDiskTypeWithOptions(request: ModifyDBInstanceDiskTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDiskTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.dbInstanceStorageType)) {
      query["DbInstanceStorageType"] = request.dbInstanceStorageType;
    }

    if (!Util.isUnset(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceDiskType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceDiskTypeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceDiskTypeResponse({}));
  }

  /**
   * Modifies the disk type of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceDiskTypeRequest
   * @returns ModifyDBInstanceDiskTypeResponse
   */
  async modifyDBInstanceDiskType(request: ModifyDBInstanceDiskTypeRequest): Promise<ModifyDBInstanceDiskTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDiskTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTimeWithOptions(request: ModifyDBInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!Util.isUnset(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceMaintainTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  /**
   * Modifies the maintenance window of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * You can call this operation to set the monitoring granularity for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation is applicable only to the ApsaraDB for MongoDB console of the previous version due to the change in the feature of adjusting collection intervals of monitoring data.
   * Before you call this operation, make sure that the following requirements are met:
   * *   A replica set or sharded cluster instance is used.
   * *   MongoDB 3.4 (the latest minor version) or MongoDB 4.0 is selected.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitorWithOptions(request: ModifyDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceMonitor",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceMonitorResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceMonitorResponse({}));
  }

  /**
   * You can call this operation to set the monitoring granularity for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation is applicable only to the ApsaraDB for MongoDB console of the previous version due to the change in the feature of adjusting collection intervals of monitoring data.
   * Before you call this operation, make sure that the following requirements are met:
   * *   A replica set or sharded cluster instance is used.
   * *   MongoDB 3.4 (the latest minor version) or MongoDB 4.0 is selected.
   * 
   * @param request - ModifyDBInstanceMonitorRequest
   * @returns ModifyDBInstanceMonitorResponse
   */
  async modifyDBInstanceMonitor(request: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The network of the instance is in hybrid access mode.
   * >  This operation is supported by replica set instances and sharded cluster instances. This operation is not supported by standalone instances.
   * 
   * @param request - ModifyDBInstanceNetExpireTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetExpireTimeResponse
   */
  async modifyDBInstanceNetExpireTimeWithOptions(request: ModifyDBInstanceNetExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetExpireTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classicExpendExpiredDays)) {
      query["ClassicExpendExpiredDays"] = request.classicExpendExpiredDays;
    }

    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceNetExpireTime",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceNetExpireTimeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceNetExpireTimeResponse({}));
  }

  /**
   * Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   The network of the instance is in hybrid access mode.
   * >  This operation is supported by replica set instances and sharded cluster instances. This operation is not supported by standalone instances.
   * 
   * @param request - ModifyDBInstanceNetExpireTimeRequest
   * @returns ModifyDBInstanceNetExpireTimeResponse
   */
  async modifyDBInstanceNetExpireTime(request: ModifyDBInstanceNetExpireTimeRequest): Promise<ModifyDBInstanceNetExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetExpireTimeWithOptions(request, runtime);
  }

  /**
   * Changes the network type of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances, but not standalone instances. You can call this operation to change the network of an instance from a classic network to a VPC.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkTypeWithOptions(request: ModifyDBInstanceNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
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

    if (!Util.isUnset(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceNetworkType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceNetworkTypeResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceNetworkTypeResponse({}));
  }

  /**
   * Changes the network type of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation is applicable to replica set instances and sharded cluster instances, but not standalone instances. You can call this operation to change the network of an instance from a classic network to a VPC.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkType(request: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * ## Usage
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is a replica set instance.
   * *   The engine version of the instance is 3.4 or 4.0.
   * >  When you enable or disable SSL encryption or update the SSL certificate, the instance restarts. We recommend that you call this operation during off-peak hours.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSLWithOptions(request: ModifyDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.SSLAction)) {
      query["SSLAction"] = request.SSLAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceSSL",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceSSLResponse({}));
  }

  /**
   * Modifies the SSL settings of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * ## Usage
   * Before you call this operation, make sure that the following requirements are met:
   * *   The instance is in the running state.
   * *   The instance is a replica set instance.
   * *   The engine version of the instance is 3.4 or 4.0.
   * >  When you enable or disable SSL encryption or update the SSL certificate, the instance restarts. We recommend that you call this operation during off-peak hours.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSL(request: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the specifications or storage space of an ApsaraDB for MongoDB standalone, replica set, or serverless instance. Serverless instances are available only on the China site (aliyun.com).
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to standalone and replica set instances. To modify the specifications of sharded cluster instances, you can call the [ModifyNodeSpec](https://help.aliyun.com/document_detail/61911.html), [CreateNode](https://help.aliyun.com/document_detail/61922.html), [DeleteNode](https://help.aliyun.com/document_detail/61816.html), or [ModifyNodeSpecBatch](https://help.aliyun.com/document_detail/61923.html) operation.
   * 
   * @param request - ModifyDBInstanceSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpecWithOptions(request: ModifyDBInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.DBInstanceStorage)) {
      query["DBInstanceStorage"] = request.DBInstanceStorage;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.extraParam)) {
      query["ExtraParam"] = request.extraParam;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!Util.isUnset(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceSpec",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceSpecResponse({}));
  }

  /**
   * Modifies the specifications or storage space of an ApsaraDB for MongoDB standalone, replica set, or serverless instance. Serverless instances are available only on the China site (aliyun.com).
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * This operation applies only to standalone and replica set instances. To modify the specifications of sharded cluster instances, you can call the [ModifyNodeSpec](https://help.aliyun.com/document_detail/61911.html), [CreateNode](https://help.aliyun.com/document_detail/61922.html), [DeleteNode](https://help.aliyun.com/document_detail/61816.html), or [ModifyNodeSpecBatch](https://help.aliyun.com/document_detail/61923.html) operation.
   * 
   * @param request - ModifyDBInstanceSpecRequest
   * @returns ModifyDBInstanceSpecResponse
   */
  async modifyDBInstanceSpec(request: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the transparent data encryption (TDE) status of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * TDE allows you to perform real-time I/O encryption and decryption on data files. Data is encrypted before it is written to a disk and is decrypted when it is read from the disk to the memory. For more information, see [Configure TDE](https://help.aliyun.com/document_detail/131048.html).
   * >  TDE cannot be disabled after it is enabled.
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   A replica set or sharded cluster instance is used.
   * *   The storage engine of the instance is WiredTiger.
   * *   The instance uses local disks to store data.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDEWithOptions(request: ModifyDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceTDEResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.encryptorName)) {
      query["EncryptorName"] = request.encryptorName;
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

    if (!Util.isUnset(request.roleARN)) {
      query["RoleARN"] = request.roleARN;
    }

    if (!Util.isUnset(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceTDE",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceTDEResponse({}));
  }

  /**
   * Modifies the transparent data encryption (TDE) status of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * TDE allows you to perform real-time I/O encryption and decryption on data files. Data is encrypted before it is written to a disk and is decrypted when it is read from the disk to the memory. For more information, see [Configure TDE](https://help.aliyun.com/document_detail/131048.html).
   * >  TDE cannot be disabled after it is enabled.
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   A replica set or sharded cluster instance is used.
   * *   The storage engine of the instance is WiredTiger.
   * *   The instance uses local disks to store data.
   * *   The database engine version of the instance is 4.0 or 4.2. If the database engine version is earlier than 4.0, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine.
   * 
   * @param request - ModifyDBInstanceTDERequest
   * @returns ModifyDBInstanceTDEResponse
   */
  async modifyDBInstanceTDE(request: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceTDEWithOptions(request, runtime);
  }

  /**
   * Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroupWithOptions(request: ModifyGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroup(request: ModifyGlobalSecurityIPGroupRequest): Promise<ModifyGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupNameWithOptions(request: ModifyGlobalSecurityIPGroupNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroupName",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupNameResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupNameResponse({}));
  }

  /**
   * Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupName(request: ModifyGlobalSecurityIPGroupNameRequest): Promise<ModifyGlobalSecurityIPGroupNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupNameWithOptions(request, runtime);
  }

  /**
   * Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelationWithOptions(request: ModifyGlobalSecurityIPGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroupRelation",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelation(request: ModifyGlobalSecurityIPGroupRelationRequest): Promise<ModifyGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is applicable to subscription instances.
   * >  When auto-renewal is enabled, your payment will be collected nine days before the expiration date of ApsaraDB for MongoDB. Ensure that your account has sufficient balance.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttributeWithOptions(request: ModifyInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceAutoRenewalAttribute",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAutoRenewalAttributeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  /**
   * Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is applicable to subscription instances.
   * >  When auto-renewal is enabled, your payment will be collected nine days before the expiration date of ApsaraDB for MongoDB. Ensure that your account has sufficient balance.
   * 
   * @param request - ModifyInstanceAutoRenewalAttributeRequest
   * @returns ModifyInstanceAutoRenewalAttributeResponse
   */
  async modifyInstanceAutoRenewalAttribute(request: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The database engine version of the instance is 4.0 (with the minor version of mongodb_20190408_3.0.11 or later) or 4.2. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the database engine version of the instance. If necessary, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine version of the instance.
   * *   The network type of the instance must be VPC. If the network type of the instance is classic network, you must call the [ModifyDBInstanceNetworkType](https://help.aliyun.com/document_detail/62138.html) operation to change the network type to VPC.
   * *   You can only disable but not enable password-free access over VPC.
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthModeWithOptions(request: ModifyInstanceVpcAuthModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVpcAuthModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.vpcAuthMode)) {
      query["VpcAuthMode"] = request.vpcAuthMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceVpcAuthMode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceVpcAuthModeResponse>(await this.callApi(params, req, runtime), new ModifyInstanceVpcAuthModeResponse({}));
  }

  /**
   * Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is a replica set or sharded cluster instance.
   * *   The database engine version of the instance is 4.0 (with the minor version of mongodb_20190408_3.0.11 or later) or 4.2. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the database engine version of the instance. If necessary, you can call the [UpgradeDBInstanceEngineVersion](https://help.aliyun.com/document_detail/67608.html) operation to upgrade the database engine version of the instance.
   * *   The network type of the instance must be VPC. If the network type of the instance is classic network, you must call the [ModifyDBInstanceNetworkType](https://help.aliyun.com/document_detail/62138.html) operation to change the network type to VPC.
   * *   You can only disable but not enable password-free access over VPC.
   * 
   * @param request - ModifyInstanceVpcAuthModeRequest
   * @returns ModifyInstanceVpcAuthModeResponse
   */
  async modifyInstanceVpcAuthMode(request: ModifyInstanceVpcAuthModeRequest): Promise<ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  /**
   * Changes the specifications and storage capacity of a node of an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * > This operation is applicable only to sharded cluster instances.
   * 
   * @param request - ModifyNodeSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeSpecResponse
   */
  async modifyNodeSpecWithOptions(request: ModifyNodeSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNodeSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.fromApp)) {
      query["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.nodeClass)) {
      query["NodeClass"] = request.nodeClass;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.nodeStorage)) {
      query["NodeStorage"] = request.nodeStorage;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readonlyReplicas)) {
      query["ReadonlyReplicas"] = request.readonlyReplicas;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNodeSpec",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNodeSpecResponse>(await this.callApi(params, req, runtime), new ModifyNodeSpecResponse({}));
  }

  /**
   * Changes the specifications and storage capacity of a node of an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB.
   * > This operation is applicable only to sharded cluster instances.
   * 
   * @param request - ModifyNodeSpecRequest
   * @returns ModifyNodeSpecResponse
   */
  async modifyNodeSpec(request: ModifyNodeSpecRequest): Promise<ModifyNodeSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodeSpecWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * This operation is applicable only to sharded cluster instances.
   * When you upgrade or downgrade the configurations of multiple sharded cluster instances in batches, the specifications of the instances are limited. For example, if you want to expand the storage capacity of the instances, the storage capacity of the instances after expansion must be greater than the current capacity. When the specifications of multiple sharded cluster instances are different, limits are defined based on the specifications of a random sharded cluster instance. In this case, you may be unable to upgrade or downgrade the configurations of the instances. In this case, we recommend that you call the ModifyNodeSpec operation to individually change the configurations of each sharded cluster instance.
   * 
   * @param request - ModifyNodeSpecBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeSpecBatchResponse
   */
  async modifyNodeSpecBatchWithOptions(request: ModifyNodeSpecBatchRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNodeSpecBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.nodesInfo)) {
      query["NodesInfo"] = request.nodesInfo;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNodeSpecBatch",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNodeSpecBatchResponse>(await this.callApi(params, req, runtime), new ModifyNodeSpecBatchResponse({}));
  }

  /**
   * Changes the configurations of mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing) of ApsaraDB for MongoDB before you call this operation.
   * This operation is applicable only to sharded cluster instances.
   * When you upgrade or downgrade the configurations of multiple sharded cluster instances in batches, the specifications of the instances are limited. For example, if you want to expand the storage capacity of the instances, the storage capacity of the instances after expansion must be greater than the current capacity. When the specifications of multiple sharded cluster instances are different, limits are defined based on the specifications of a random sharded cluster instance. In this case, you may be unable to upgrade or downgrade the configurations of the instances. In this case, we recommend that you call the ModifyNodeSpec operation to individually change the configurations of each sharded cluster instance.
   * 
   * @param request - ModifyNodeSpecBatchRequest
   * @returns ModifyNodeSpecBatchResponse
   */
  async modifyNodeSpecBatch(request: ModifyNodeSpecBatchRequest): Promise<ModifyNodeSpecBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodeSpecBatchWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the Running state when you call this operation.
   * *   If you call this operation to modify specific instance parameters and the modification for part of the parameters can take effect only after an instance restart, the instance is automatically restarted after this operation is called. You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query the parameters that take effect only after the instance is restarted.
   * 
   * @param request - ModifyParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyParameters",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyParametersResponse>(await this.callApi(params, req, runtime), new ModifyParametersResponse({}));
  }

  /**
   * Modifies the parameters of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   *   The instance must be in the Running state when you call this operation.
   * *   If you call this operation to modify specific instance parameters and the modification for part of the parameters can take effect only after an instance restart, the instance is automatically restarted after this operation is called. You can call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/67618.html) operation to query the parameters that take effect only after the instance is restarted.
   * 
   * @param request - ModifyParametersRequest
   * @returns ModifyParametersResponse
   */
  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  /**
   * Moves an ApsaraDB for MongoDB instance to a specified resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroupWithOptions(request: ModifyResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyResourceGroup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyResourceGroupResponse({}));
  }

  /**
   * Moves an ApsaraDB for MongoDB instance to a specified resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyResourceGroupRequest
   * @returns ModifyResourceGroupResponse
   */
  async modifyResourceGroup(request: ModifyResourceGroupRequest): Promise<ModifyResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify an ECS Security group that is bound to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For a sharded cluster instance, the bound ECS security group takes effect only for mongos nodes.
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfigurationWithOptions(request: ModifySecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityGroupConfiguration",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityGroupConfigurationResponse>(await this.callApi(params, req, runtime), new ModifySecurityGroupConfigurationResponse({}));
  }

  /**
   * You can call this operation to modify an ECS Security group that is bound to an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  For a sharded cluster instance, the bound ECS security group takes effect only for mongos nodes.
   * 
   * @param request - ModifySecurityGroupConfigurationRequest
   * @returns ModifySecurityGroupConfigurationResponse
   */
  async modifySecurityGroupConfiguration(request: ModifySecurityGroupConfigurationRequest): Promise<ModifySecurityGroupConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
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

    if (!Util.isUnset(request.securityIpGroupAttribute)) {
      query["SecurityIpGroupAttribute"] = request.securityIpGroupAttribute;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      query["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIps",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new ModifySecurityIpsResponse({}));
  }

  /**
   * Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The actions performed by this operation for a task vary based on the current state of the task. The supported actions for a task can be obtained from the value of the actionInfo parameter in the DescribeHistoryTasks operation.
   * 
   * @param request - ModifyTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfoWithOptions(request: ModifyTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionParams)) {
      query["ActionParams"] = request.actionParams;
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

    if (!Util.isUnset(request.stepName)) {
      query["StepName"] = request.stepName;
    }

    if (!Util.isUnset(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTaskInfo",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTaskInfoResponse>(await this.callApi(params, req, runtime), new ModifyTaskInfoResponse({}));
  }

  /**
   * Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The actions performed by this operation for a task vary based on the current state of the task. The supported actions for a task can be obtained from the value of the actionInfo parameter in the DescribeHistoryTasks operation.
   * 
   * @param request - ModifyTaskInfoRequest
   * @returns ModifyTaskInfoResponse
   */
  async modifyTaskInfo(request: ModifyTaskInfoRequest): Promise<ModifyTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTaskInfoWithOptions(request, runtime);
  }

  /**
   * Releases the internal endpoint of a shard or Configserver node in a sharded cluster instance.
   * 
   * @remarks
   *   This operation can be used to release the internal endpoint of a shard or Configserver node in a sharded cluster instance. For more information, see [Release the endpoint of a shard or Configserver node](https://help.aliyun.com/document_detail/134067.html).
   * *   To release the public endpoint of a shard or Configserver node in a sharded cluster instance, you can call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation.
   * 
   * @param request - ReleaseNodePrivateNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseNodePrivateNetworkAddressResponse
   */
  async releaseNodePrivateNetworkAddressWithOptions(request: ReleaseNodePrivateNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseNodePrivateNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseNodePrivateNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseNodePrivateNetworkAddressResponse>(await this.callApi(params, req, runtime), new ReleaseNodePrivateNetworkAddressResponse({}));
  }

  /**
   * Releases the internal endpoint of a shard or Configserver node in a sharded cluster instance.
   * 
   * @remarks
   *   This operation can be used to release the internal endpoint of a shard or Configserver node in a sharded cluster instance. For more information, see [Release the endpoint of a shard or Configserver node](https://help.aliyun.com/document_detail/134067.html).
   * *   To release the public endpoint of a shard or Configserver node in a sharded cluster instance, you can call the [ReleasePublicNetworkAddress](https://help.aliyun.com/document_detail/67604.html) operation.
   * 
   * @param request - ReleaseNodePrivateNetworkAddressRequest
   * @returns ReleaseNodePrivateNetworkAddressResponse
   */
  async releaseNodePrivateNetworkAddress(request: ReleaseNodePrivateNetworkAddressRequest): Promise<ReleaseNodePrivateNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ReleasePublicNetworkAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddressWithOptions(request: ReleasePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePublicNetworkAddress",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePublicNetworkAddressResponse>(await this.callApi(params, req, runtime), new ReleasePublicNetworkAddressResponse({}));
  }

  /**
   * Releases the public endpoint of an ApsaraDB for MongoDB instance.
   * 
   * @param request - ReleasePublicNetworkAddressRequest
   * @returns ReleasePublicNetworkAddressResponse
   */
  async releasePublicNetworkAddress(request: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  /**
   * Manually renews an ApsaraDB for MongoDB subscription instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and pricing of ApsaraDB for MongoDB before you call this operation. For more information about the pricing of ApsaraDB for MongoDB, visit the [pricing tab of the product buy page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is only applicable to instances that use the subscription billing method.
   * 
   * @param request - RenewDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewDBInstanceResponse
   */
  async renewDBInstanceWithOptions(request: RenewDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewDBInstanceResponse>(await this.callApi(params, req, runtime), new RenewDBInstanceResponse({}));
  }

  /**
   * Manually renews an ApsaraDB for MongoDB subscription instance.
   * 
   * @remarks
   * Make sure that you fully understand the billing methods and pricing of ApsaraDB for MongoDB before you call this operation. For more information about the pricing of ApsaraDB for MongoDB, visit the [pricing tab of the product buy page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * This operation is only applicable to instances that use the subscription billing method.
   * 
   * @param request - RenewDBInstanceRequest
   * @returns RenewDBInstanceResponse
   */
  async renewDBInstance(request: RenewDBInstanceRequest): Promise<RenewDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDBInstanceWithOptions(request, runtime);
  }

  /**
   * Resets the password of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to reset only the password of the root account of an instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password of the root account in an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * >  This operation can be used to reset only the password of the root account of an instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation can also be used to restart an instance, or restart a shard or mongos node in a sharded cluster instance.
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBInstance",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartDBInstanceResponse({}));
  }

  /**
   * Restarts an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * This operation can also be used to restart an instance, or restart a shard or mongos node in a sharded cluster instance.
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * 重启副本集单个节点
   * 
   * @param request - RestartNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartNodeResponse
   */
  async restartNodeWithOptions(request: RestartNodeRequest, runtime: $Util.RuntimeOptions): Promise<RestartNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartNode",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartNodeResponse>(await this.callApi(params, req, runtime), new RestartNodeResponse({}));
  }

  /**
   * 重启副本集单个节点
   * 
   * @param request - RestartNodeRequest
   * @returns RestartNodeResponse
   */
  async restartNode(request: RestartNodeRequest): Promise<RestartNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartNodeWithOptions(request, runtime);
  }

  /**
   * Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be running when you call this operation.
   * > 
   * *   This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * *   On replica set instances, the switch is performed between instances. On sharded cluster instances, the switch is performed between shards.
   * 
   * @param request - SwitchDBInstanceHARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHAWithOptions(request: SwitchDBInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceHAResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!Util.isUnset(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!Util.isUnset(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchDBInstanceHA",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchDBInstanceHAResponse>(await this.callApi(params, req, runtime), new SwitchDBInstanceHAResponse({}));
  }

  /**
   * Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be running when you call this operation.
   * > 
   * *   This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
   * *   On replica set instances, the switch is performed between instances. On sharded cluster instances, the switch is performed between shards.
   * 
   * @param request - SwitchDBInstanceHARequest
   * @returns SwitchDBInstanceHAResponse
   */
  async switchDBInstanceHA(request: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  /**
   * Binds tags to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags, bind the tags to the instances, and filter the instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
   * *   If a tag that has the same key is already bound to the instance, the new tag overwrites the existing tag.
   * *   You can bind up to 20 tags to each instance.
   * *   You can bind tags to up to 50 instances each time you call the operation.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Binds tags to ApsaraDB for MongoDB instances.
   * 
   * @remarks
   * If you have a large number of instances, you can create multiple tags, bind the tags to the instances, and filter the instances by tag.
   * *   A tag consists of a key and a value. Each key must be unique in a region for an Alibaba Cloud account. Different keys can be mapped to the same value.
   * *   If the tag that you specify does not exist, this tag is automatically created and bound to the specified instance.
   * *   If a tag that has the same key is already bound to the instance, the new tag overwrites the existing tag.
   * *   You can bind up to 20 tags to each instance.
   * *   You can bind tags to up to 50 instances each time you call the operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Switches the backup mode of an ApsaraDB for MongoDB sharded cluster instance to the cluster backup mode. After the instance is switched to the cluster backup mode, the instance supports high-frequency backup.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. Cloud disk-based sharded cluster instances that are created on or after October 19, 2023 are set to the cluster backup mode by default.
   * 
   * @param request - TransferClusterBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferClusterBackupResponse
   */
  async transferClusterBackupWithOptions(request: TransferClusterBackupRequest, runtime: $Util.RuntimeOptions): Promise<TransferClusterBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferClusterBackup",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferClusterBackupResponse>(await this.callApi(params, req, runtime), new TransferClusterBackupResponse({}));
  }

  /**
   * Switches the backup mode of an ApsaraDB for MongoDB sharded cluster instance to the cluster backup mode. After the instance is switched to the cluster backup mode, the instance supports high-frequency backup.
   * 
   * @remarks
   *   The instance is an ApsaraDB for MongoDB sharded cluster instance that runs MongoDB 4.4 or later and uses enhanced SSDs (ESSDs) to store data.
   * *   You can call the TransferClusterBackup operation only for instances that are created before October 19, 2023 to switch the instances to the cluster backup mode. Cloud disk-based sharded cluster instances that are created on or after October 19, 2023 are set to the cluster backup mode by default.
   * 
   * @param request - TransferClusterBackupRequest
   * @returns TransferClusterBackupResponse
   */
  async transferClusterBackup(request: TransferClusterBackupRequest): Promise<TransferClusterBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferClusterBackupWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail) of ApsaraDB for MongoDB.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   Your instance has no unpaid billing method change orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * > To change the billing method of an instance whose instance type is no longer available to purchase, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeTypeWithOptions(request: TransformInstanceChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransformInstanceChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
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

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransformInstanceChargeType",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransformInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new TransformInstanceChargeTypeResponse({}));
  }

  /**
   * Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/mongodb/detail) of ApsaraDB for MongoDB.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the Running state.
   * *   Your instance has no unpaid billing method change orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * > To change the billing method of an instance whose instance type is no longer available to purchase, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
   * 
   * @param request - TransformInstanceChargeTypeRequest
   * @returns TransformInstanceChargeTypeResponse
   */
  async transformInstanceChargeType(request: TransformInstanceChargeTypeRequest): Promise<TransformInstanceChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformInstanceChargeTypeWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an ApsaraDB for MongoDB instance from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * A subscription instance cannot be changed to a pay-as-you-go instance. To avoid wasting resources, proceed with caution.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the running state.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The instance has no unpaid subscription orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * >  To change the billing method of an instance whose instance type is no longer available to subscription, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
   * 
   * @param request - TransformToPrePaidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaidWithOptions(request: TransformToPrePaidRequest, runtime: $Util.RuntimeOptions): Promise<TransformToPrePaidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.businessInfo)) {
      query["BusinessInfo"] = request.businessInfo;
    }

    if (!Util.isUnset(request.couponNo)) {
      query["CouponNo"] = request.couponNo;
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

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransformToPrePaid",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransformToPrePaidResponse>(await this.callApi(params, req, runtime), new TransformToPrePaidResponse({}));
  }

  /**
   * Changes the billing method of an ApsaraDB for MongoDB instance from pay-as-you-go to subscription.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).
   * A subscription instance cannot be changed to a pay-as-you-go instance. To avoid wasting resources, proceed with caution.
   * Before you call this API operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:
   * *   The instance is in the running state.
   * *   The billing method of the instance is pay-as-you-go.
   * *   The instance has no unpaid subscription orders.
   * *   The instance type is available for purchase. For more information about unavailable instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * >  To change the billing method of an instance whose instance type is no longer available to subscription, call the [ModifyDBInstanceSpec](https://help.aliyun.com/document_detail/61816.html) or [ModifyNodeSpec](https://help.aliyun.com/document_detail/61923.html) operation to first change the instance type.
   * 
   * @param request - TransformToPrePaidRequest
   * @returns TransformToPrePaidResponse
   */
  async transformToPrePaid(request: TransformToPrePaidRequest): Promise<TransformToPrePaidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformToPrePaidWithOptions(request, runtime);
  }

  /**
   * Removes a tag if the tag is not added to another instance.
   * 
   * @remarks
   * > 
   * *   You can remove up to 20 tags at a time.
   * *   If you remove a tag from all instances, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes a tag if the tag is not added to another instance.
   * 
   * @remarks
   * > 
   * *   You can remove up to 20 tags at a time.
   * *   If you remove a tag from all instances, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the database version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * > * The available database versions depend on the storage engine used by the instance. For more information, see [Upgrades of MongoDB major versions](https://help.aliyun.com/document_detail/398673.html). You can also call the [DescribeAvailableEngineVersion](https://help.aliyun.com/document_detail/141355.html) operation to query the available database versions.
   * > * You cannot downgrade the MongoDB version of an instance after you upgrade it.
   * > * The instance is automatically restarted for two to three times during the upgrade process. Make sure that you upgrade the instance during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersionWithOptions(request: UpgradeDBInstanceEngineVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceEngineVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBInstanceEngineVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBInstanceEngineVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceEngineVersionResponse({}));
  }

  /**
   * Upgrades the database version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * > * The available database versions depend on the storage engine used by the instance. For more information, see [Upgrades of MongoDB major versions](https://help.aliyun.com/document_detail/398673.html). You can also call the [DescribeAvailableEngineVersion](https://help.aliyun.com/document_detail/141355.html) operation to query the available database versions.
   * > * You cannot downgrade the MongoDB version of an instance after you upgrade it.
   * > * The instance is automatically restarted for two to three times during the upgrade process. Make sure that you upgrade the instance during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceEngineVersionRequest
   * @returns UpgradeDBInstanceEngineVersionResponse
   */
  async upgradeDBInstanceEngineVersion(request: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

  /**
   * Upgrades the minor version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the UpgradeDBInstanceKernelVersion operation, the instance must be in the Running state.
   * > * The UpgradeDBInstanceKernelVersion operation is applicable to replica set and sharded cluster instances, but not to standalone instances.
   * > * The instance will be restarted once during the upgrade. Call this operation during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersionWithOptions(request: UpgradeDBInstanceKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceKernelVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2015-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  /**
   * Upgrades the minor version of an ApsaraDB for MongoDB instance.
   * 
   * @remarks
   * When you call the UpgradeDBInstanceKernelVersion operation, the instance must be in the Running state.
   * > * The UpgradeDBInstanceKernelVersion operation is applicable to replica set and sharded cluster instances, but not to standalone instances.
   * > * The instance will be restarted once during the upgrade. Call this operation during off-peak hours.
   * 
   * @param request - UpgradeDBInstanceKernelVersionRequest
   * @returns UpgradeDBInstanceKernelVersionResponse
   */
  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
