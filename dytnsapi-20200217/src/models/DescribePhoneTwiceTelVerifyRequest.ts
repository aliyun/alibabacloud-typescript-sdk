// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneTwiceTelVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * >  On the **My Applications** page in the [Cell Phone Number Service console](https://dytns.console.aliyun.com/analysis/apply), you can obtain the authorization code (also known as authorization ID).
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried.
   * 
   * *   If the value of Mask is NORMAL, specify an 11-digit phone number in plaintext.
   * *   If the value of Mask is MD5, specify a 32-bit string that is encrypted by using MD5.
   * *   If the value of Mask is SHA256, specify a 64-bit string that is encrypted by using SHA256.
   * 
   * >  Letters in the encrypted strings are not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * 139*******
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method of the phone number. Valid values:
   * 
   * *   **NORMAL**: The phone number is not encrypted.
   * *   **MD5**
   * *   **SHA256**
   * 
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  mask?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The registration time. Specify the time in the yyyy-MM-dd HH:mm:ss format. This time is the service registration time of the mobile phone user. If the service registration time is later than the time when the phone number is assigned by a carrier, it indicates that the phone number is not a reassigned number. Otherwise, the phone number is a reassigned number.
   * 
   * > 
   * 
   * *   If a carrier allocates a single number multiple times, the system will determine whether the phone number is a reassigned number based on the time when the carrier last allocated the phone number.
   * 
   * *   The service registration time must be later than 00:00:00 on January 1, 1970.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-01-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

