// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretRequest extends $dara.Model {
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
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-sdfljk123****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * users
   */
  dbNames?: string;
  /**
   * @remarks
   * The description of the credential.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * > This parameter currently supports only the value MySQL.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  password?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeDBInstanceAttribute operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfmxypivk****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * Foo
   */
  secretName?: string;
  /**
   * @remarks
   * The username of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_jack
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbInstanceId: 'DbInstanceId',
      dbNames: 'DbNames',
      description: 'Description',
      engine: 'Engine',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretName: 'SecretName',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbInstanceId: 'string',
      dbNames: 'string',
      description: 'string',
      engine: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretName: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

