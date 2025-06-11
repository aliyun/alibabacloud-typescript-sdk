// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneMessageQrdlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the deep link.
   * 
   * @example
   * https://wa.qrdl/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * The format of the generated image.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * The URL of the QR code.
   * 
   * @example
   * http://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * The mode of the quick-response (QR) code.
   * 
   * @example
   * D9II3***
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

