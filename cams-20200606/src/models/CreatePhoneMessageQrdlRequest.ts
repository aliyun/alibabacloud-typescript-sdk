// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 838833
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Produce QR code image format.
   * 
   * This parameter is required.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * The phone number. Add the country code before the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

