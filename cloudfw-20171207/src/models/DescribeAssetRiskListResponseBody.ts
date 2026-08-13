// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetRiskListResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The server IP address.
   * 
   * @example
   * 39.108.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address version of the assets protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * - **4**: IPv4 address.
   * 
   * - **6**: IPv6 address.
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The risk reason.
   * 
   * @example
   * other
   */
  reason?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - **low**: low risk
   * - **middle**: medium risk
   * - **high**: high risk
   * 
   * @example
   * low
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      ipVersion: 'IpVersion',
      reason: 'Reason',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      ipVersion: 'number',
      reason: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetRiskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset details returned.
   */
  assetList?: DescribeAssetRiskListResponseBodyAssetList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 443C5781-1C03-5FCD-8EC5-FB9C0B9AC396
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAssetRiskListResponseBodyAssetList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

