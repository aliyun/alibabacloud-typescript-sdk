// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayBillTotalRequest extends $dara.Model {
  /**
   * @remarks
   * The bill type of the user. This parameter is required in practice. An error is returned if this parameter is not specified. Valid values:
   * - elastic_traffic: elastic traffic
   * - sdl: sensitive data leak detection traffic
   * 
   * @example
   * sdl
   */
  billType?: string;
  /**
   * @remarks
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Specify a UNIX timestamp in seconds.
   * > Because billing data is aggregated at the daily granularity, the timestamp must correspond to 00:00:00 of the day in CST (UTC+8). If the timestamp is not aligned to the start of the day, no data may be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646063922
   */
  endTime?: string;
  /**
   * @remarks
   * The language. Enumerated value.
   * Default value: zh.
   * Valid value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp in seconds.
   * 
   * > Because billing data is aggregated at the daily granularity, the timestamp must correspond to 00:00:00 of the day in CST (UTC+8). If the timestamp is not aligned to the start of the day, no data may be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656750960
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      currentPage: 'number',
      endTime: 'string',
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

