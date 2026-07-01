// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequiredPhoneCodeRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The administrator\\"s phone number that receives the verification code.
   * - The account that **calls this operation to send the verification code must be the same account that submits the qualification**. Otherwise, the call fails.
   * - Phone number format: +/+86/0086/86 or a mobile phone number without any prefix, for example 1390000****.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNo: 'string',
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

