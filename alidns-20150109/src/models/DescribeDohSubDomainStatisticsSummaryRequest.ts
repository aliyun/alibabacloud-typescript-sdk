// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohSubDomainStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * The default value is the day when you query the required data.
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
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * You can query only the DNS records of the last 90 days. `The value of StartDate must be greater than or equal to the difference between the current date and 90`.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

