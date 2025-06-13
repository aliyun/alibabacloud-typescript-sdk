// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachCommonBandwidthPackageToLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EF39708-974B-5E74-AFF5-3445263035A8
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

