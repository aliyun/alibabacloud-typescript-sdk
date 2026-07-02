// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbTableRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster backup set ID. Some new cluster architectures support cluster backup set IDs. You can call [DescribeClusterBackupList](https://www.alibabacloud.com/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeclusterbackuplist-redis) to obtain the ID.
   * 
   * @example
   * cb-hyxdof5x9kqb**
   */
  backupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value. Make sure that the value is unique among different requests. The token is case-sensitive and can contain up to 64 ASCII characters.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/61012.htm) to query available regions. Use this parameter to specify the region in which to create the instance.
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
   * The table schema configuration in JSON format.
   * 
   * @example
   * {"AttributeDefinitions":[{"AttributeType":"S","AttributeName":"pk"},{"AttributeType":"S","AttributeName":"sk"}],"KeySchema":[{"KeyType":"HASH","AttributeName":"pk"},{"KeyType":"RANGE","AttributeName":"sk"}]}
   */
  schema?: string;
  securityToken?: string;
  /**
   * @remarks
   * To create an instance from a backup set of an existing instance, specify the ID of the source instance in this parameter.
   * 
   * > This parameter must be used together with BackupId.
   * 
   * @example
   * r-bp1zxszhcgatnx**
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * The table name. The name must be 2 to 128 characters in length and must start with an uppercase letter, a lowercase letter, or a Chinese character. The name cannot contain the following characters: @/:="<>{}[] or spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * apitest
   */
  tableName?: string;
  /**
   * @remarks
   * The parameter settings switch in JSON format.
   * 
   * @example
   * {"attributeName":"Expiretime","enabled":true}
   */
  ttlSpec?: string;
  /**
   * @remarks
   * The ID of the workspace instance. You can call [DescribeInstances](https://www.alibabacloud.com/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) to obtain the ID.
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

