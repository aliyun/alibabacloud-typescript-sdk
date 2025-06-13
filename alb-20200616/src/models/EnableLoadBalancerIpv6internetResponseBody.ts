// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableLoadBalancerIpv6InternetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 4a6e3ad4-ef08-4ab1-b332-fa621cfe****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB920797-D70E-567F-8098-55A861DD7912
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

