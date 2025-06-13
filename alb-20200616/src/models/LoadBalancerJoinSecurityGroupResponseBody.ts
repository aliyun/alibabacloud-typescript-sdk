// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadBalancerJoinSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 8fe81f25-79a0-4fa0-9036-f2601fda****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3B9AE45-F5DB-58E3-A4B5-EE58F1EC****
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

