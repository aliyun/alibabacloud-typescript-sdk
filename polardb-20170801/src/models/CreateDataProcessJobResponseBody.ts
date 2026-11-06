// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataProcessJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created data processing task.
   * 
   * @example
   * job-123456
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
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

