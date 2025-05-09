// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatFirewallTrafficTrendResponseBodyDataList } from "./DescribeNatFirewallTrafficTrendResponseBodyDataList";


export class DescribeNatFirewallTrafficTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on traffic.
   */
  dataList?: DescribeNatFirewallTrafficTrendResponseBodyDataList[];
  /**
   * @remarks
   * The maximum inbound network throughput, which indicates the maximum number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 18038632
   */
  maxInBps?: number;
  /**
   * @remarks
   * The maximum outbound network throughput, which indicates the maximum number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 122596487
   */
  maxOutBps?: number;
  /**
   * @remarks
   * The total maximum inbound and outbound network throughput, which indicates the maximum number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 66953194
   */
  maxTotalBps?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 87F23A3A-6F57-59C3-8237-A090D0613D71
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      maxTotalBps: 'MaxTotalBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeNatFirewallTrafficTrendResponseBodyDataList },
      maxInBps: 'number',
      maxOutBps: 'number',
      maxTotalBps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

