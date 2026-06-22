// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The type of security data to query. Valid values:
   * - **HC_NEW**: number of new baseline risks
   * - **HC_OPERATE**: number of handled baseline risks
   * - **VUL_NEW**: number of new vulnerability risks
   * - **VUL_OPERATE**: number of handled vulnerability risks
   * - **SUSP_NEW**: number of new alert risks
   * - **SUSP_OPERATE**: number of handled alert risks.
   * 
   * This parameter is required.
   * 
   * @example
   * HC_NEW,HC_OPERATE
   */
  bizTypes?: string;
  /**
   * @remarks
   * The end timestamp of the query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1721923200000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The interval for querying data. Unit: milliseconds.
   * 
   * > Minimum value: 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 86400000
   */
  interval?: number;
  /**
   * @remarks
   * The start timestamp of the query. Unit: milliseconds.
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

