// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneEncryptionPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user under the independent software vendor (ISV) account.
   * 
   * @example
   * 393838848
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

