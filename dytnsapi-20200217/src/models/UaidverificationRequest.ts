// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > In **Cell Phone Number Service** -> [**Tag Marketplace**](https://dytns.console.aliyun.com/analysis/square), select a tag and submit a usage application. After the application is approved, you will obtain this authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * The carrier of the user. Valid values:
   * - **CM**: China Mobile.
   * - **CU**: China Unicom.
   * - **CT**: China Telecom.
   * 
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @remarks
   * The public IP address. This parameter is required when the carrier is China Unicom (CU). Both IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 2408:8440:308:29dc:ed00:c4ec:475c:25a4
   */
  ip?: string;
  /**
   * @remarks
   * The external serial number.
   * 
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The province ID. This parameter is optional when the carrier is China Unicom (CU). The value must be the same as the value of the province field in the response returned when the token is obtained.
   * 
   * @example
   * 1
   */
  province?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The carrier authorization token.  
   * > For information about how to obtain the authorization token and its signature, see the GetUAIDApplyTokenSign API documentation.
   * 
   * This parameter is required.
   * 
   * @example
   * MIGfMA0********3DQEBAQUAA4GNADCB
   */
  token?: string;
  /**
   * @remarks
   * The user authorization code, which indicates that the user has granted authorization. The value must be a unique random number that does not exceed 128 characters in length.  
   * 
   * <warning>When you integrate the service, we recommend that you include UAID-related content in the privacy policy of your product.</warning>
   * 
   * @example
   * Md****a3Em
   */
  userGrantId?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      province: 'Province',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      token: 'Token',
      userGrantId: 'UserGrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      province: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      token: 'string',
      userGrantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

