// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth allocated to the client account. Unit: Kbit/s.
   * 
   * Valid values: **1** to **20000**.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The email address of the client account.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG app instance is deployed.
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
   * The ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-rz2e23c0e78ema****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The username of the client account.
   * 
   * This parameter is required.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      email: 'Email',
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
      bandwidth: 'number',
      email: 'string',
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

