// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayTrafficTotalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 826B6280-9704-5643-97B1-6B47AC3F027A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of assets that are protected by border firewalls.
   * 
   * @example
   * 132
   */
  totalAssets?: number;
  /**
   * @remarks
   * For the subscription edition, this is the total billed elastic traffic after deductions are applied. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalBillTraffic?: number;
  /**
   * @remarks
   * The total number of assets that are protected by Internet Border firewalls.
   * 
   * @example
   * 128
   */
  totalInternetAssets?: number;
  /**
   * @remarks
   * The total traffic of the Internet Border. For the subscription edition, this is the total elastic traffic of the Internet Border. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalInternetTraffic?: number;
  /**
   * @remarks
   * The total number of assets that are protected by NAT border firewalls.
   * 
   * @example
   * 1
   */
  totalNatAssets?: number;
  /**
   * @remarks
   * The total traffic of the NAT border. For the subscription edition, this is the total elastic traffic of the NAT border. Unit: bytes.
   * 
   * @example
   * 560646279
   */
  totalNatTraffic?: number;
  /**
   * @remarks
   * The total billed traffic for data leakage detection.
   * 
   * @example
   * 0
   */
  totalSdlBillTraffic?: number;
  /**
   * @remarks
   * The total free traffic for data leakage detection.
   * 
   * @example
   * 0
   */
  totalSdlFreeTraffic?: number;
  /**
   * @remarks
   * The total traffic. For the subscription edition, this is the total elastic traffic. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalTraffic?: number;
  /**
   * @remarks
   * The total number of assets that are protected by VPC border firewalls.
   * 
   * @example
   * 3
   */
  totalVpcAssets?: number;
  /**
   * @remarks
   * The total traffic of the VPC border. For the subscription edition, this is the total elastic traffic of the VPC border. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalVpcTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalAssets: 'TotalAssets',
      totalBillTraffic: 'TotalBillTraffic',
      totalInternetAssets: 'TotalInternetAssets',
      totalInternetTraffic: 'TotalInternetTraffic',
      totalNatAssets: 'TotalNatAssets',
      totalNatTraffic: 'TotalNatTraffic',
      totalSdlBillTraffic: 'TotalSdlBillTraffic',
      totalSdlFreeTraffic: 'TotalSdlFreeTraffic',
      totalTraffic: 'TotalTraffic',
      totalVpcAssets: 'TotalVpcAssets',
      totalVpcTraffic: 'TotalVpcTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalAssets: 'number',
      totalBillTraffic: 'number',
      totalInternetAssets: 'number',
      totalInternetTraffic: 'number',
      totalNatAssets: 'number',
      totalNatTraffic: 'number',
      totalSdlBillTraffic: 'number',
      totalSdlFreeTraffic: 'number',
      totalTraffic: 'number',
      totalVpcAssets: 'number',
      totalVpcTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

