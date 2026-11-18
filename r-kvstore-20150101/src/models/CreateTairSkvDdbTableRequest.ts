// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster backup set. Some new cluster architectures support cluster backup set IDs. You can call the [DescribeClusterBackupList](https://www.alibabacloud.com/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeclusterbackuplist-redis) operation to query the ID.
   * 
   * @example
   * cb-hyxdof5x9kqb**
   */
  backupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The value is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz**
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance type. Set the value to tair_skv_ddb_table.
   * 
   * This parameter is required.
   * 
   * @example
   * tair_skv_ddb_table
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61012.htm) operation to query the most recent region list. Set this parameter to the ID of the region where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  /**
   * @remarks
   * The table schema configuration information in JSON format.
   * 
   * @example
   * {"AttributeDefinitions":[{"AttributeType":"S","AttributeName":"pk"},{"AttributeType":"S","AttributeName":"sk"}],"KeySchema":[{"KeyType":"HASH","AttributeName":"pk"},{"KeyType":"RANGE","AttributeName":"sk"}]}
   */
  schema?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the source instance. If you want to create an instance based on the backup set of a specific instance, specify the ID of the source instance in this parameter.
   * 
   * Note
   * 
   * This parameter must be used in combination with BackupId.
   * 
   * @example
   * r-bp1zxszhcgatnx**
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The table name. The name must be 2 to 128 characters in length and start with a letter or a Chinese character. The name cannot contain the following special characters: @, /, :, =, <, >, {, }, [, ], and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * apitest
   */
  tableName?: string;
  /**
   * @remarks
   * The parameter settings in JSON format.
   * 
   * @example
   * {"attributeName":"Expiretime","enabled":true}
   */
  ttlSpec?: string;
  /**
   * @remarks
   * The workspace instance ID. You can call the [DescribeInstances](https://www.alibabacloud.com/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tt-bp1zxszhcgatnx**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      schema: 'Schema',
      securityToken: 'SecurityToken',
      srcDBInstanceId: 'SrcDBInstanceId',
      tableName: 'TableName',
      ttlSpec: 'TtlSpec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      schema: 'string',
      securityToken: 'string',
      srcDBInstanceId: 'string',
      tableName: 'string',
      ttlSpec: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

