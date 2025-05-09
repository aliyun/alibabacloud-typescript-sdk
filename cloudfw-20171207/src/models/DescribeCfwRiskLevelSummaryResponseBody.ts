// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCfwRiskLevelSummaryResponseBodyRiskList } from "./DescribeCfwRiskLevelSummaryResponseBodyRiskList";


export class DescribeCfwRiskLevelSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1F30435-FA0A-52DA-A5DE-C16FD6C171DA
   */
  requestId?: string;
  /**
   * @remarks
   * The list of risks.
   */
  riskList?: DescribeCfwRiskLevelSummaryResponseBodyRiskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskList: 'RiskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskList: { 'type': 'array', 'itemType': DescribeCfwRiskLevelSummaryResponseBodyRiskList },
    };
  }

  validate() {
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

