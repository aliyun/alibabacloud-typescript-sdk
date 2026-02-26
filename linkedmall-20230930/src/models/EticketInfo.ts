// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EticketInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  availableNum?: number;
  /**
   * @example
   * taobao******tpg
   */
  code?: string;
  /**
   * @example
   * -1
   */
  codeStatus?: number;
  /**
   * @example
   * 2026-08-02T23:59:59.000+08:00
   */
  endTime?: string;
  /**
   * @example
   * 0
   */
  lockNum?: number;
  /**
   * @example
   * http://qrcode.alicdn.com/img.jpg
   */
  qrcodeUrl?: string;
  /**
   * @example
   * 2026-02-04T00:00:00.000+08:00
   */
  startTime?: string;
  /**
   * @example
   * 2026-02-04T15:07:59.000+08:00
   */
  useTime?: string;
  /**
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

