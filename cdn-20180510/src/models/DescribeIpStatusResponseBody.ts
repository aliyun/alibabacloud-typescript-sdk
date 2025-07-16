// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpStatusResponseBodyIpStatus extends $dara.Model {
  /**
   * @remarks
   * The IP address of the POP.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * The status.
   * 
   * *   **nonali**: not an Alibaba Cloud CDN POP
   * *   **normal**: an available Alibaba Cloud CDN POP
   * *   **abnormal**: an unavailable Alibaba Cloud CDN POP
   * 
   * @example
   * abnormal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

