// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableLoadBalancerAccessLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous job.
   * 
   * @example
   * ff7713ca-5818-4120-85e3-0bf9fr******
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FD******
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

