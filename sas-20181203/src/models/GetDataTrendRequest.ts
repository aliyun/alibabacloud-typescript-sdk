// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the security data that you want to query. Valid values:
   * 
   * *   **HC_NEW**: the number of new baseline risks.
   * *   **HC_OPERATE**: the number of handled baseline risks.
   * *   **VUL_NEW**: the number of new vulnerabilities.
   * *   **VUL_OPERATE**: the number of handled vulnerabilities.
   * *   **SUSP_NEW**: the number of new alerts.
   * *   **SUSP_OPERATE**: the number of handled alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * HC_NEW,HC_OPERATE
   */
  bizTypes?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721923200000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The interval of the data that you want to query. Unit: milliseconds.
   * 
   * >  The minimum value is 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 86400000
   */
  interval?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1687334501000
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      bizTypes: 'BizTypes',
      endTimestamp: 'EndTimestamp',
      interval: 'Interval',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTypes: 'string',
      endTimestamp: 'number',
      interval: 'number',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

