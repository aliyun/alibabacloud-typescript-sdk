// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneMessageQrdlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deep link URL.
   * 
   * @example
   * https://wa.msg/
   */
  deepLinkUrl?: string;
  /**
   * @remarks
   * The type of the generated image.
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
   * 86138009****
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
   * https://img.png
   */
  qrImageUrl?: string;
  /**
   * @remarks
   * The code.
   * 
   * @example
   * IUIED999
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

export class ListPhoneMessageQrdlResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListPhoneMessageQrdlResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPhoneMessageQrdlResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

