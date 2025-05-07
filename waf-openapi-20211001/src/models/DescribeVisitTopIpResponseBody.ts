// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVisitTopIpResponseBodyTopIp } from "./DescribeVisitTopIpResponseBodyTopIp";


export class DescribeVisitTopIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D2B8DAE-A761-58CB-A68D-74989E4831DA
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 IP addresses from which requests are sent.
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

