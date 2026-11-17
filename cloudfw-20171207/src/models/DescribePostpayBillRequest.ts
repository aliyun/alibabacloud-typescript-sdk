// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the bill query. The time is a UNIX timestamp accurate to seconds and must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646063922
   */
  endTime?: string;
  /**
   * @remarks
   * The aggregation interval of the bill data. Unit: seconds. This parameter is required. If you do not specify this parameter, the ERR_PARAMS_INVALID error is returned. Valid values:
   * - 3600: Hourly aggregation.
   * - 86400: Daily aggregation.
   * 
   * @example
   * 3600
   */
  interval?: number;
  /**
   * @remarks
   * The language. Valid values:
   * - en: English.
   * - zh: Chinese.
   * Default value: zh.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the bill query. The time is a UNIX timestamp accurate to seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656664560
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      interval: 'Interval',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'string',
      interval: 'number',
      lang: 'string',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

