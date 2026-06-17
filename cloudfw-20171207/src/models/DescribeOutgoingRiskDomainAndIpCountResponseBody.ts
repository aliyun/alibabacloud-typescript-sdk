// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskDomainAndIpCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE258AC0-6EDD-5929-AB47-165E9B54****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of risk domain names.
   * 
   * @example
   * 6
   */
  riskDomainCount?: number;
  /**
   * @remarks
   * The number of risk IP addresses.
   * 
   * @example
   * 47
   */
  riskIpCount?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskDomainCount: 'RiskDomainCount',
      riskIpCount: 'RiskIpCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskDomainCount: 'number',
      riskIpCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

