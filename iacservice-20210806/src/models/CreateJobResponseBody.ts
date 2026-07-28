// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-518855d98c319561f
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 136B3926-DD90-5DB2-96EC-8BAD6407D1C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'jobId',
      requestId: 'requestId',
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

