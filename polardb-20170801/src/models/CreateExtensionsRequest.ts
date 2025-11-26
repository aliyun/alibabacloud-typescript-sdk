// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdb1,testdb2
   */
  DBNames?: string;
  /**
   * @example
   * pg_stat_statements,pg_trgm
   */
  extensions?: string;
  /**
   * @example
   * test@example.com
   */
  ownerAccount?: string;
  /**
   * @example
   * 1234567890123456
   */
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @example
   * test@example.com
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1234567890123456
   */
  resourceOwnerId?: number;
  /**
   * @example
   * sourcedb
   */
  sourceDBName?: string;
  /**
   * @example
   * 7.7
   */
  version?: string;
  /**
   * @example
   * vpc-****************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNames: 'DBNames',
      extensions: 'Extensions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBName: 'SourceDBName',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBNames: 'string',
      extensions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBName: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

