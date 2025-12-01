// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSafetyCoverRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732255620000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * 该接口不用传
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

