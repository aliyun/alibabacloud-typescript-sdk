// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLifecycleRetrieveJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
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

