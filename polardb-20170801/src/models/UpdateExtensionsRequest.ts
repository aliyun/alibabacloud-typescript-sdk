// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExtensionsRequest extends $dara.Model {
  /**
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * auto_test_db
   */
  DBNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * postgres_fdw
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
   * rg-**********
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
   * 7.7
   */
  version?: string;
  /**
   * @example
   * vpc-bp1qpo0kug3a20qqe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
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
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

