// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostgresExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The user to which the extension belongs. Only privileged accounts are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  accountName?: string;
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
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-gc7f1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name of the instance. You can call DescribeDatabases to query the database name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  DBNames?: string;
  /**
   * @remarks
   * The plugins to install. Separate multiple plugins with commas (,).
   * If you do not specify the request parameter **SourceDatabase**, this parameter is required.
   * 
   * @example
   * citext,pg_profile
   */
  extensions?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to confirm the security risk of installing specific extensions on instances that run minor engine versions that are too early. After you confirm the risk, the extensions can be installed.
   * Valid values:
   * - true
   * - false
   * > For information about related risks, see [Restrictions on creating extensions in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2587815.html).
   * 
   * @example
   * true
   */
  riskConfirmed?: boolean;
  /**
   * @remarks
   * The source database from which plugins are synchronized to the target database. If you do not specify the request parameter **Extensions**, this parameter is required.
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

