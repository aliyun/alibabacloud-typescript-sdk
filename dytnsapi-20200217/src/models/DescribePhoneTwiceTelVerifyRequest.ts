// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneTwiceTelVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > On the **My Applications** page in the [Phone Number Verification Service console](https://dytns.console.aliyun.com/analysis/apply), get the Authorization ID. This ID is your authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * Dd1r***4id
   */
  authCode?: string;
  /**
   * @remarks
   * The phone number to be queried. The number can be a mobile phone number or an encrypted string.
   * 
   * - If the value of **Mask** is **NORMAL**, **InputNumber** is an 11-digit mobile phone number.
   * 
   * - If the value of **Mask** is **MD5**, **InputNumber** is a 32-bit encrypted string.
   * 
   * - If the value of **Mask** is **SHA256**, **InputNumber** is a 64-bit encrypted string.
   * 
   * >Notice: 
   * 
   * The encrypted string is not case-sensitive.
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
   * - **NORMAL**: The phone number is not encrypted.
   * 
   * - **MD5**
   * 
   * - **SHA256**
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
   * The registration time of a phone number. The time must be in the `yyyy-MM-dd HH:mm:ss` format. The value of this parameter is the registration time of a mobile phone user in your business. If the registration time is later than the time when a carrier assigns a number, the number is not a recycled number. Otherwise, the number is a recycled number.
   * 
   * > - If a phone number is assigned for multiple times, the system uses the last assignment time as the criterion.
   * >
   * > - The registration time must be later than `1970-01-01 00:00:00`.
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

