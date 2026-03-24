// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVisitTopIpResponseBodyTopIp extends $dara.Model {
  /**
   * @remarks
   * The code of the geographical location.
   * 
   * @example
   * 310000
   */
  area?: string;
  /**
   * @remarks
   * The total number of requests that are initiated from the IP address.
   * 
   * @example
   * 2622
   */
  count?: number;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * @example
   * AAA
   */
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      count: 'Count',
      ip: 'Ip',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      count: 'number',
      ip: 'string',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVisitTopIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D2B8DAE-A761-58CB-A68D-74989E4831DA
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 IP addresses that initiate the most requests.
   */
  topIp?: DescribeVisitTopIpResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribeVisitTopIpResponseBodyTopIp },
    };
  }

  validate() {
    if(Array.isArray(this.topIp)) {
      $dara.Model.validateArray(this.topIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

