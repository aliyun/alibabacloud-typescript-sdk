// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairSkvDdbTableRequest extends $dara.Model {
  /**
   * @example
   * cb-hyxdof5x9kqb**
   */
  backupId?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz**
   */
  clientToken?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * {"AttributeDefinitions":[{"AttributeType":"S","AttributeName":"pk"},{"AttributeType":"S","AttributeName":"sk"}],"KeySchema":[{"KeyType":"HASH","AttributeName":"pk"},{"KeyType":"RANGE","AttributeName":"sk"}]}
   */
  schema?: string;
  securityToken?: string;
  /**
   * @example
   * r-bp1zxszhcgatnx**
   */
  srcDBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apitest
   */
  tableName?: string;
  /**
   * @example
   * {"attributeName":"Expiretime","enabled":true}
   */
  ttlSpec?: string;
  /**
   * @remarks
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

