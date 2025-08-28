// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Set the value to **CONTACT**.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTACT
   */
  bizType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The mobile phone number that receives the SMS verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 150****0000
   */
  target?: string;
  /**
   * @remarks
   * The mode of sending the SMS verification code. Set the value to **SMS**.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      target: 'Target',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      target: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

