// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneMessageQrdlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Deep link address.
   * 
   * @example
   * https://wa.msg/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * Generate image types.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * Number.
   * 
   * @example
   * 8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * QR code address.
   * 
   * @example
   * https://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * @example
   * DEDEE998
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      deepLinkUrl: 'DeepLinkUrl',
      generateQrImage: 'GenerateQrImage',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrImageUrl: 'QrImageUrl',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deepLinkUrl: 'string',
      generateQrImage: 'string',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrImageUrl: 'string',
      qrdlCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

