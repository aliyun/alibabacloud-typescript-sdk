// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySAGAdminPasswordRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new logon password of the Smart Access Gateway device.
   * 
   * Password format requirements: The password must be 8 to 30 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * > Asterisks (\\*) are used in the sample value to mask the actual password. This does not mean that asterisks (\\*) are supported in the password. Specify the password based on the format requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * ********
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
   * The Smart Access Gateway instance ID.
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

