// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelUrlUploadJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of tasks that were successfully canceled.
   */
  canceledJobs?: string[];
  /**
   * @remarks
   * The list of tasks that do not exist.
   */
  nonExists?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4D5C-3C3D-D7393642****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canceledJobs: 'CanceledJobs',
      nonExists: 'NonExists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canceledJobs: { 'type': 'array', 'itemType': 'string' },
      nonExists: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canceledJobs)) {
      $dara.Model.validateArray(this.canceledJobs);
    }
    if(Array.isArray(this.nonExists)) {
      $dara.Model.validateArray(this.nonExists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

