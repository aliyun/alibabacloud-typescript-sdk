// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data retrieval task.
   * 
   * This parameter is required.
   * 
   * @example
   * lrj-nfstest-ia-160****853-hshvw
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

