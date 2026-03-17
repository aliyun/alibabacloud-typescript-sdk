// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewayClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth value. Unit: Kbit/s. Valid values: **1 to 20000**. Default value: **2000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * *   If you enable the client app service, you must set the IP address of the client app. The current client account uses the specified IP address to connect to Alibaba Cloud.
   * 
   * >  The IP address must fall within a private CIDR block.
   * 
   * *   If you disable the client app service, an IP address within a private CIDR block is assigned to the client account. Each connection to Alibaba Cloud uses a different IP address.
   * 
   * @example
   * 10.0.XX.XX
   */
  clientIp?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password that is used to log on to the SAG app.
   * 
   * The password must be 8 to 32 characters in length. It can contain letters, digits, underscores (_), at signs (@), and hyphens (-). It must start with a letter or a digit.
   * 
   * @example
   * duuf****
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway (SAG) app instance.
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
   * sag-gnhe6sywtare5****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The email address of the client account. The username and password are sent to the specified email address by the administrator.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  userMail?: string;
  /**
   * @remarks
   * The username of the client account. The usernames of client accounts added to the same SAG app instance must be unique.
   * 
   * The username must be 7 to 33 characters in length, and can contain letters, digits, underscores (_), at signs (@), periods (.), and hyphens (-). It must start with a letter or a digit.
   * 
   * >  For a client account, if you specify the username, you must also specify the password. If you specify the password, you must specify the username.
   * 
   * @example
   * doctest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientIp: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      userMail: 'string',
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

