// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskDomainAndIpCountResponseBody extends $dara.Model {
  /**
   * @example
   * EE258AC0-6EDD-5929-AB47-165E9B54****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  riskDomainCount?: number;
  /**
   * @example
   * 47
   */
  riskIpCount?: number;
  /**
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

