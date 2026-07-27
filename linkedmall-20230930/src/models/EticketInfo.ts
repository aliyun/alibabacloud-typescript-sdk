// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EticketInfo extends $dara.Model {
  /**
   * @remarks
   * The number of unredeemed voucher electronic credentials.
   * 
   * @example
   * 0
   */
  availableNum?: number;
  /**
   * @remarks
   * The code of the voucher electronic credential.
   * 
   * @example
   * taobao******tpg
   */
  code?: string;
  /**
   * @remarks
   * The status of the voucher electronic credential.
   * > Valid values:
   * > - 1: valid
   * > - -1: redeemed
   * > - -2: expired
   * > - 100: locked
   * 
   * @example
   * -1
   */
  codeStatus?: number;
  /**
   * @remarks
   * The end time of the validity period for the voucher electronic credential.
   * 
   * @example
   * 2026-08-02T23:59:59.000+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The number of voucher electronic credentials in locked status.
   * 
   * @example
   * 0
   */
  lockNum?: number;
  /**
   * @remarks
   * The URL of the QR code image for the voucher electronic credential.
   * 
   * @example
   * http://qrcode.alicdn.com/img.jpg
   */
  qrcodeUrl?: string;
  /**
   * @remarks
   * The start time of the validity period for the voucher electronic credential.
   * 
   * @example
   * 2026-02-04T00:00:00.000+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The redemption time of the voucher electronic credential.
   * 
   * @example
   * 2026-02-04T15:07:59.000+08:00
   */
  useTime?: string;
  /**
   * @remarks
   * The number of redeemed voucher electronic credentials.
   * 
   * @example
   * 1
   */
  usedNum?: number;
  static names(): { [key: string]: string } {
    return {
      availableNum: 'availableNum',
      code: 'code',
      codeStatus: 'codeStatus',
      endTime: 'endTime',
      lockNum: 'lockNum',
      qrcodeUrl: 'qrcodeUrl',
      startTime: 'startTime',
      useTime: 'useTime',
      usedNum: 'usedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableNum: 'number',
      code: 'string',
      codeStatus: 'number',
      endTime: 'string',
      lockNum: 'number',
      qrcodeUrl: 'string',
      startTime: 'string',
      useTime: 'string',
      usedNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

