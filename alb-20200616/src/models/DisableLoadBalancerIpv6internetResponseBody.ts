// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableLoadBalancerIpv6InternetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * d12871a6-ebb2-41f3-8d74-d9f452bb****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D866E37-1123-5160-AFF1-BDAF5EB86A8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

