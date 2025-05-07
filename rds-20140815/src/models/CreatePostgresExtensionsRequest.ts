// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostgresExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The account of the user who owns the extension. Only privileged accounts are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  accountName?: string;
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
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-gc7f1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name. You can call the DescribeDatabases operation to query the database name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  DBNames?: string;
  /**
   * @remarks
   * The extension that you want to install. If you want to install multiple extensions, separate them with commas (,). If you do not specify the **SourceDatabase** parameter, you must specify this parameter.
   * 
   * @example
   * citext,pg_profile
   */
  extensions?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The risk description that you need to confirm. If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  For more information about the risks, see [Limits on extension creation for ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/2587815.html).
   * 
   * @example
   * true
   */
  riskConfirmed?: boolean;
  /**
   * @remarks
   * The source database from which you want to synchronize the extension to the destination database. If you do not specify the **Extensions** parameter, you must specify this parameter.
   * 
   * @example
   * source_db
   */
  sourceDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBNames: 'DBNames',
      extensions: 'Extensions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      riskConfirmed: 'RiskConfirmed',
      sourceDatabase: 'SourceDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBNames: 'string',
      extensions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      riskConfirmed: 'boolean',
      sourceDatabase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

