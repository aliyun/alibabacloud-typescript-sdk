// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The account whose password needs to be reset. Set the value to **root**.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  accountName?: string;
  /**
   * @remarks
   * The new password.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include `! # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Ali!123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The role of the instance.
   * 
   * *   If the instance is a sharded cluster instance, this parameter is required. Valid values: db and cs.
   * *   If the instance is a replica set instance, you can leave this parameter empty or set the parameter to normal.
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
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

