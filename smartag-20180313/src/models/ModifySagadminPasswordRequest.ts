// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySAGAdminPasswordRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new logon password for the Smart Access Gateway device.
   * 
   * Password format requirements: The password must be 8 to 30 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * > The example shows a partially masked synthetic format for demonstration purposes and does not correspond to a real device password. An asterisk (\\*) indicates a masked character and does not mean that asterisks (\\*) are supported in passwords. When entering a password, refer to the password format requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoPass_2***
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The instance ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-tq3sazs17smldn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

