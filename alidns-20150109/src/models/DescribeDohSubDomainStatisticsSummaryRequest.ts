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
   * The end date of the query. The format is YYYY-MM-DD.
   * 
   * The default value is the current day.
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
   * The current page number. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date of the query. The format is YYYY-MM-DD.
   * 
   * You can query data only from the last 90 days. StartDate must be greater than or equal to `Now - 90`.
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

