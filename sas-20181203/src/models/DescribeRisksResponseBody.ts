// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRisksResponseBodyRisks extends $dara.Model {
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Ubuntu 14,Ubuntu 16 ,Ubuntu 18,Ubuntu 20 baseline based on Alibaba Cloud best security practices
   */
  riskDetail?: string;
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 54
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Alibaba Cloud Standard - Ubuntu Security Baseline
   */
  riskName?: string;
  /**
   * @remarks
   * The name of the baseline type.
   * 
   * @example
   * cis
   */
  riskType?: string;
  /**
   * @remarks
   * The name of the baseline subtype.
   * 
   * @example
   * hc_ubuntu
   */
  subRiskType?: string;
  /**
   * @remarks
   * The display name of the baseline subtype.
   * 
   * @example
   * Alibaba Cloud Standard - Ubuntu Security Baseline
   */
  subTypeAlias?: string;
  /**
   * @remarks
   * The display name of the baseline type.
   * 
   * @example
   * Best security practices
   */
  typeAlias?: string;
  static names(): { [key: string]: string } {
    return {
      riskDetail: 'RiskDetail',
      riskId: 'RiskId',
      riskName: 'RiskName',
      riskType: 'RiskType',
      subRiskType: 'SubRiskType',
      subTypeAlias: 'SubTypeAlias',
      typeAlias: 'TypeAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskDetail: 'string',
      riskId: 'number',
      riskName: 'string',
      riskType: 'string',
      subRiskType: 'string',
      subTypeAlias: 'string',
      typeAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EA54FE21-B006-5DFF-8D64-C4FFECDA****
   */
  requestId?: string;
  /**
   * @remarks
   * The baselines.
   */
  risks?: DescribeRisksResponseBodyRisks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      risks: 'Risks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      risks: { 'type': 'array', 'itemType': DescribeRisksResponseBodyRisks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.risks)) {
      $dara.Model.validateArray(this.risks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

