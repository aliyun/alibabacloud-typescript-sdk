// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetRiskListResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 39.108.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP version of the asset that is protected by Cloud Firewall.
   * 
   * Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * 4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The reason for the risk.
   * 
   * @example
   * other
   */
  reason?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **low**
   * *   **middle**
   * *   **high**
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

