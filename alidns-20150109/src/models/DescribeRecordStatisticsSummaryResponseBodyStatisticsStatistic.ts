// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordStatisticsSummaryResponseBodyStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 838711553
   */
  count?: number;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * t1.alitest2.com
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

