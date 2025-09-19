// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetsSecurityEventSummaryResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **namespace**
   * *   **clusters**
   * *   **applications**
   * *   **pods**
   * *   **containers**
   * *   **images**
   * *   **hosts**
   * 
   * @example
   * namespace
   */
  assetType?: string;
  /**
   * @remarks
   * The number of potential risky assets.
   * 
   * @example
   * 16
   */
  riskCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      riskCount: 'RiskCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      riskCount: 'number',
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

export class DescribeAssetsSecurityEventSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of risk information about containers.
   */
  assets?: DescribeAssetsSecurityEventSummaryResponseBodyAssets[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeAssetsSecurityEventSummaryResponseBodyAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

