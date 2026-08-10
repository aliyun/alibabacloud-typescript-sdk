// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskStatsResponseBodyRiskStats extends $dara.Model {
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 100
   */
  requestCount?: number;
  /**
   * @remarks
   * The number of detected risks.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * prompt_attack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      riskCount: 'RiskCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      riskCount: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. This ID can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of risk posture statistics.
   */
  riskStats?: GetRiskStatsResponseBodyRiskStats[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskStats: 'RiskStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskStats: { 'type': 'array', 'itemType': GetRiskStatsResponseBodyRiskStats },
    };
  }

  validate() {
    if(Array.isArray(this.riskStats)) {
      $dara.Model.validateArray(this.riskStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

