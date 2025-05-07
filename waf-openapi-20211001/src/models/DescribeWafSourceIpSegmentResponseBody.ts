// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWafSourceIpSegmentResponseBodyWafSourceIp } from "./DescribeWafSourceIpSegmentResponseBodyWafSourceIp";


export class DescribeWafSourceIpSegmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9087ADDC-9047-4D02-82A7-33021B58083C
   */
  requestId?: string;
  /**
   * @remarks
   * The back-to-origin CIDR blocks that are used by the protection cluster.
   */
  wafSourceIp?: DescribeWafSourceIpSegmentResponseBodyWafSourceIp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wafSourceIp: 'WafSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wafSourceIp: DescribeWafSourceIpSegmentResponseBodyWafSourceIp,
    };
  }

  validate() {
    if(this.wafSourceIp && typeof (this.wafSourceIp as any).validate === 'function') {
      (this.wafSourceIp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

