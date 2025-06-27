// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 35509014
   */
  count?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * ali-gslb.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. The parameter value is not case-sensitive. Valid values:
   * 
   * PUBLIC (default): hosted public domain name
   * 
   * CACHE: cache-accelerated domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * Indicates whether the DNS traffic analysis feature is enabled for the domain name. Valid values:
   * 
   * *   OPEN
   * *   CLOSE
   * 
   * @example
   * OPEN
   */
  resolveAnalysisStatus?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
      resolveAnalysisStatus: 'resolveAnalysisStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      domainType: 'string',
      resolveAnalysisStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

