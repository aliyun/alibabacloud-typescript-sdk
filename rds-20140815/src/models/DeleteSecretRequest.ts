// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * >This parameter must be specified together with **SecretName**.
   * 
   * @example
   * rm-sfjdlsjxxxxx
   */
  dbInstanceId?: string;
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
   * The region ID. You can call the DescribeSecrets operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The user credential of the Data API account that has been created. You can call the createSecret operation to query the value of this parameter.
   * >You must specify either **SecretName** or this parameter.
   * 
   * @example
   * acs:rds:cn-hangzhou:1335786***:dbInstance/rm-bp1m7l3j63****
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the user credential.
   * 
   * > * You must specify either **SecretArn** or this parameter.
   * > * This parameter must be specified together with **DbInstanceId**.
   * 
   * @example
   * Foo
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbInstanceId: 'DbInstanceId',
      engine: 'Engine',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretArn: 'SecretArn',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbInstanceId: 'string',
      engine: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretArn: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

