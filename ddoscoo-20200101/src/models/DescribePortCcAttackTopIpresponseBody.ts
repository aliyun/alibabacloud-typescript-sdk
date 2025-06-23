// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortCcAttackTopIPResponseBodyTopIp } from "./DescribePortCcAttackTopIpresponseBodyTopIp";


export class DescribePortCcAttackTopIPResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24F36D81-5E2D-52E5-9DB6-A3ED23CF271A
   */
  requestId?: string;
  /**
   * @remarks
   * The top IP addresses from which most attacks are initiated.
   */
  topIp?: DescribePortCcAttackTopIPResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribePortCcAttackTopIPResponseBodyTopIp },
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

