// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserOnlineClientsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the SAG APP instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG APP instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-wfjgn**********
   */
  smartAGId?: string;
  /**
   * @remarks
   * The username of the client account. Usernames of client accounts added to the same SAG APP instance are unique.
   * 
   * For a client account, if you specify the username, you must also specify the password.
   * 
   * This parameter is required.
   * 
   * @example
   * doctest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

