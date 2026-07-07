// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EticketInfo extends $dara.Model {
  /**
   * @remarks
   * The number of available units.
   * 
   * @example
   * 0
   */
  availableNum?: number;
  /**
   * @remarks
   * The unique code for the e-ticket.
   * 
   * @example
   * taobao******tpg
   */
  code?: string;
  /**
   * @remarks
   * The status of the e-ticket.
   * 
   * > Valid enum values:
   * >
   * > - 1: valid
   * >
   * > - -1: redeemed
   * >
   * > - -2: expired
   * >
   * > - -5: expired
   * >
   * > - -8: expired
   * 
   * @example
   * -1
   */
  codeStatus?: number;
  /**
   * @remarks
   * The end time of the e-ticket validity period.
   * 
   * @example
   * 2026-08-02T23:59:59.000+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The number of locked units.
   * 
   * @example
   * 0
   */
  lockNum?: number;
  /**
   * @remarks
   * The URL of the QR code image for the e-ticket.
   * 
   * > This field is not currently populated. Distributors must generate the QR code using the `code` field.
   * 
   * @example
   * http://qrcode.alicdn.com/img.jpg
   */
  qrcodeUrl?: string;
  /**
   * @remarks
   * The start time of the e-ticket validity period.
   * 
   * @example
   * 2026-02-04T00:00:00.000+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time the e-ticket was redeemed.
   * 
   * @example
   * 2026-02-04T15:07:59.000+08:00
   */
  useTime?: string;
  /**
   * @remarks
   * The number of redeemed units.
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

