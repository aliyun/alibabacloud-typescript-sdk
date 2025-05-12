// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportFpShotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the import job. We recommend that you save this ID for subsequent operations.
   * 
   * @example
   * c074b118ace44395a02063a5ab94****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
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

