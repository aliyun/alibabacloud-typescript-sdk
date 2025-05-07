// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxx
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

