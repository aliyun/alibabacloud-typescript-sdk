// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohSubDomainStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query in YYYY-MM-DD format.
   * 
   * The default value is the current date.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The start date of the query in YYYY-MM-DD format.
   * 
   * You can query data from the last 90 days. The `StartDate` must be greater than or equal to the date 90 days before the current date.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The subdomain for which to query statistics.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
      subDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

