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
   * The total number of assets protected all types of firewalls.
   * 
   * @example
   * 132
   */
  totalAssets?: number;
  /**
   * @remarks
   * The volume of burstable protected traffic for which fees are generated. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalBillTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by the Internet firewall.
   * 
   * @example
   * 128
   */
  totalInternetAssets?: number;
  /**
   * @remarks
   * The total traffic for the Internet firewall. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the Internet boundary. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalInternetTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by NAT firewalls.
   * 
   * @example
   * 1
   */
  totalNatAssets?: number;
  /**
   * @remarks
   * The total traffic for NAT firewalls. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the NAT boundary. Unit: bytes.
   * 
   * @example
   * 560646279
   */
  totalNatTraffic?: number;
  /**
   * @remarks
   * Data Leak Detection Total Fee Flow.
   * 
   * @example
   * 22879916142
   */
  totalSdlBillTraffic?: number;
  /**
   * @remarks
   * Data Leak Detection Total free usage traffic.
   * 
   * @example
   * 0
   */
  totalSdlFreeTraffic?: number;
  /**
   * @remarks
   * The total volume of traffic. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic. Unit: bytes.
   * 
   * @example
   * 2320274874426
   */
  totalTraffic?: number;
  /**
   * @remarks
   * The total number of assets protected by virtual private cloud (VPC) firewalls.
   * 
   * @example
   * 3
   */
  totalVpcAssets?: number;
  /**
   * @remarks
   * The total traffic for VPC firewalls. If you use Cloud Firewall that uses the subscription billing method, this parameter indicates the total volume of burstable protected traffic on the VPC boundary. Unit: bytes.
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

