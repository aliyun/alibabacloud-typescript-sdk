// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillRequest extends $dara.Model {
  /**
   * @remarks
   * The Settings for the page number of the current page during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the bill query. The time is a UNIX timestamp accurate to seconds and must be later than StartTime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646063922
   */
  endTime?: string;
  /**
   * @remarks
   * The time interval for querying data. This parameter is required. If this parameter is not specified, ERR_PARAMS_INVALID is returned. Valid values:
   * - 3600: hourly data.
   * - 86400: daily data.
   * 
   * @example
   * 60
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
   * The maximum number of entries to return per page during paging in a paged query. Default value: 10.
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

