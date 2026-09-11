// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryLifecycleRetrieveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The data retrieval task ID.
   * 
   * **Scenarios**
   * 
   * Call this operation to retry a data retrieval task that has entered the `failed` state. Common causes for a task to enter the `failed` state include:
   * - A backend error occurred during data retrieval from the InfrequentAccess or Archive storage tier.
   * - The data retrieval request timed out.
   * - A temporary storage tier failure or network exception occurred.
   * 
   * **Before you begin**
   * 
   * Before calling this operation, call [ListLifecycleRetrieveJobs](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-listlifecycleretrievejobs) to query the task list, confirm that the target task is in the `failed` state, and obtain the JobId of the task you want to retry.
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

