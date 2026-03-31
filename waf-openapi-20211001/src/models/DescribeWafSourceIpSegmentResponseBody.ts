// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafSourceIpSegmentResponseBodyWafSourceIp extends $dara.Model {
  /**
   * @remarks
   * An array of back-to-origin IPv4 CIDR blocks.
   */
  IPv4?: string[];
  /**
   * @remarks
   * An array of back-to-origin IPv6 CIDR blocks.
   */
  IPv6?: string[];
  static names(): { [key: string]: string } {
    return {
      IPv4: 'IPv4',
      IPv6: 'IPv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4: { 'type': 'array', 'itemType': 'string' },
      IPv6: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4)) {
      $dara.Model.validateArray(this.IPv4);
    }
    if(Array.isArray(this.IPv6)) {
      $dara.Model.validateArray(this.IPv6);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

