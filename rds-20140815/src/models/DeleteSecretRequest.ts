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
   * 
   * >  If you specify this parameter, you must also specify the **SecretName** parameter. parameter.
   * 
   * @example
   * rm-sfjdlsjxxxxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The engine of the database.
   * 
   * > Only MySQL is supported.
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
   * The Alibaba Cloud Resource Name (ARN) of the credential for the created Data API account. You can call the CreateSecret operation to obtain the value of this parameter.
   * 
   * >  You must specify one of the SecretArn and **SecretName** parameters.
   * 
   * @example
   * acs:rds:cn-hangzhou:1335786***:dbInstance/rm-bp1m7l3j63****
   */
  secretArn?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * > *   You must specify one of **SecretArn** and SecretName.
   * > *   If you specify this parameter, you must also specify **DbInstanceId**.
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

