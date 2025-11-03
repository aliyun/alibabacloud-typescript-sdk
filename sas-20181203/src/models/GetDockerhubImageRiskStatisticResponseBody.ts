// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDockerhubImageRiskStatisticResponseBodyRiskRankInfo extends $dara.Model {
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 1
   */
  baseline?: number;
  /**
   * @remarks
   * The timestamp when the scan was performed.
   * 
   * @example
   * 1693997625000
   */
  scanTime?: number;
  /**
   * @remarks
   * The timestamp when the scan was performed.
   * 
   * @example
   * 1693997625000
   */
  scanTimeTimestamp?: number;
  /**
   * @remarks
   * The number of scanned Docker Hub images.
   * 
   * @example
   * 1
   */
  totalScanned?: number;
  /**
   * @remarks
   * The number of high-risk vulnerabilities.
   * 
   * @example
   * 1
   */
  vulAsap?: number;
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      scanTime: 'ScanTime',
      scanTimeTimestamp: 'ScanTimeTimestamp',
      totalScanned: 'TotalScanned',
      vulAsap: 'VulAsap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: 'number',
      scanTime: 'number',
      scanTimeTimestamp: 'number',
      totalScanned: 'number',
      vulAsap: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDockerhubImageRiskStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the risk source.
   */
  riskRankInfo?: GetDockerhubImageRiskStatisticResponseBodyRiskRankInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskRankInfo: 'RiskRankInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskRankInfo: GetDockerhubImageRiskStatisticResponseBodyRiskRankInfo,
    };
  }

  validate() {
    if(this.riskRankInfo && typeof (this.riskRankInfo as any).validate === 'function') {
      (this.riskRankInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

