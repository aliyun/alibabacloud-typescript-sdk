// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadBalancerLeaveSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 51c5b627-3500-487c-b17d-5cc583f0****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC0C96E4-7CCB-599C-9329-3A5DB6FF****
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

