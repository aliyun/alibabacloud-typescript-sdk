// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohAccountStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * The default value is the day when you perform the operation.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * You can query only the DNS records of the latest 90 days.`The value of StartDate must be greater than or equal to the difference between the current date and 90`.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

