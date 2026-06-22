// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistryScanDayNumResponseBodyScanDayNumConfig extends $dara.Model {
  /**
   * @remarks
   * The list of available day options.
   * 
   * @example
   * 1,3,7,15,30,90,180,365
   */
  dayNumList?: string;
  /**
   * @remarks
   * The scan time range. Unit: days.
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
   * The request ID. China Chinese Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  /**
   * @remarks
   * The scan day configuration.
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

