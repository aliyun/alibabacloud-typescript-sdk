// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetKafkaClientIpResponseBodyDataData } from "./GetKafkaClientIpResponseBodyDataData";


export class GetKafkaClientIpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value true indicates that the broker is not of the latest minor version.
   * 
   * >  If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @example
   * true
   */
  alert?: boolean;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetKafkaClientIpResponseBodyDataData;
  /**
   * @remarks
   * The end of the date range within which data is queried.
   * 
   * @example
   * 1716343502000
   */
  endDate?: number;
  /**
   * @remarks
   * The time range within which the client IP addresses are queried.
   * 
   * >  The valid value is 1 hour. If the beginning of the time range to query and the end of the time range to query exceeds 1 hour, only data within 1 hour is returned.
   * 
   * @example
   * 1
   */
  searchTimeRange?: number;
  /**
   * @remarks
   * The beginning of the date range within which data is queried.
   * 
   * @example
   * 1716343501000
   */
  startDate?: number;
  /**
   * @remarks
   * The date range within which the client IP addresses are queried.
   * 
   * >  The valid value is 7 days. If the beginning of the date range to query and the end of the date range to query exceeds 7 days, only data within 7 days is returned.
   * 
   * @example
   * 7
   */
  timeLimitDay?: number;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      data: 'Data',
      endDate: 'EndDate',
      searchTimeRange: 'SearchTimeRange',
      startDate: 'StartDate',
      timeLimitDay: 'TimeLimitDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: 'boolean',
      data: GetKafkaClientIpResponseBodyDataData,
      endDate: 'number',
      searchTimeRange: 'number',
      startDate: 'number',
      timeLimitDay: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

