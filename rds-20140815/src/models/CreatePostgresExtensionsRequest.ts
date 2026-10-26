// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostgresExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The user to which the plug-in belongs. Only privileged accounts are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  accountName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate requests. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-gc7f1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database on the instance. You can call the DescribeDatabases operation to obtain the name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  DBNames?: string;
  /**
   * @remarks
   * The plug-ins to be installed. Separate multiple plug-ins with commas (,).
   * If you do not specify the **SourceDatabase** request parameter, you must specify this parameter.
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
   * Specifies whether security risk of installing specific plug-ins on instances with outdated minor engine versions is confirmed. You can install the plug-ins only after you confirm security risk.
   * Valid values:
   * - true
   * - false
   * > For information about the related risks, see [Limits on creating plug-ins in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/2587815.html).
   * 
   * @example
   * true
   */
  riskConfirmed?: boolean;
  /**
   * @remarks
   * The source database from which plug-ins are synchronized to the destination database. If you do not specify the **Extensions** request parameter, you must specify this parameter.
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

