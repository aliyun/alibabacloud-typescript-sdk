// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionsRequest extends $dara.Model {
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
   * song
   */
  DBName?: string;
  extensionName?: string;
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
   * test@example.com
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1234567890123456
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      extensionName: 'ExtensionName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      extensionName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

