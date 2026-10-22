// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppServiceGroup extends $dara.Model {
  /**
   * @remarks
   * The name.
   */
  name?: string;
  /**
   * @remarks
   * The QR code.
   */
  qrCode?: string;
  /**
   * @remarks
   * The group type, such as dingtalk and wx.
   * 
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * https://example.com/example.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      qrCode: 'QrCode',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      qrCode: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

