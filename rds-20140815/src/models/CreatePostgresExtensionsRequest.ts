// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostgresExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountName?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBNames?: string;
  extensions?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  riskConfirmed?: boolean;
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

