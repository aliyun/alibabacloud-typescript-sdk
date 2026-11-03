// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayBillTotalRequest extends $dara.Model {
  /**
   * @remarks
   * The bill type. This parameter is required. If it is not specified, an error is returned. Valid values:
   * - elastic_traffic: elastic traffic.
   * - sdl: sensitive data leak detection traffic.
   * 
   * @example
   * sdl
   */
  billType?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Use a UNIX timestamp accurate to seconds.
   * > Because billing data is aggregated on a daily basis, this timestamp must correspond to 00:00:00 of the day in the CST (UTC+8) time zone. If the time is not aligned with midnight, no data may be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1646063922
   */
  endTime?: string;
  /**
   * @remarks
   * The language. Valid values:
   * - zh
   * - en
   * Default value: zh.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Use a UNIX timestamp accurate to seconds.
   * 
   * > Because billing data is aggregated on a daily basis, this timestamp must correspond to 00:00:00 of the day in the CST (UTC+8) time zone. If the time is not aligned with midnight, no data may be returned.
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

