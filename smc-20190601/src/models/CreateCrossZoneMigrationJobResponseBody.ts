// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrossZoneMigrationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * j-bp17bclvg344jlyt****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9DBD2F8-DE5A-5844-BA6F-957A996CBD78
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

