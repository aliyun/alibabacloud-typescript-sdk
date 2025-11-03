// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryScanDayNumResponseBodyScanDayNumConfig extends $dara.Model {
  /**
   * @remarks
   * The selectable day options.
   * 
   * @example
   * 1,3,7,15,30,90,180,365
   */
  dayNumList?: string;
  /**
   * @remarks
   * The scan period. Unit: days.
   * 
   * @example
   * 7
   */
  scanDayNum?: number;
  static names(): { [key: string]: string } {
    return {
      dayNumList: 'DayNumList',
      scanDayNum: 'ScanDayNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayNumList: 'string',
      scanDayNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistryScanDayNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration of the scan period.
   */
  scanDayNumConfig?: GetRegistryScanDayNumResponseBodyScanDayNumConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanDayNumConfig: 'ScanDayNumConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanDayNumConfig: GetRegistryScanDayNumResponseBodyScanDayNumConfig,
    };
  }

  validate() {
    if(this.scanDayNumConfig && typeof (this.scanDayNumConfig as any).validate === 'function') {
      (this.scanDayNumConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

