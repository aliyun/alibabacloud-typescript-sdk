// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpStatusResponseBodyIpStatus } from "./DescribeIpStatusResponseBodyIpStatus";


export class DescribeIpStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the IP addresses of the POPs.
   */
  ipStatus?: DescribeIpStatusResponseBodyIpStatus[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipStatus: 'IpStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipStatus: { 'type': 'array', 'itemType': DescribeIpStatusResponseBodyIpStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipStatus)) {
      $dara.Model.validateArray(this.ipStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

