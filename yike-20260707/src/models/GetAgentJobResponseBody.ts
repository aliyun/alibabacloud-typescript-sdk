// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * bc30a1080b21434f961a0d9a391b30b9
   */
  jobId?: string;
  /**
   * @remarks
   * The task output JSON string. Different tasks return different structures, which are defined by the business side.
   * 
   * @example
   * {\\"OssUri\\":\\"oss://ice-ai-saas/ice-ai-saas-prd/1123668546389636/210606863/generate/ag_3a506706a33f44008aec6274d2e38d58/\\"}
   */
  output?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Created
   * - Queuing
   * - Executing
   * - Finished
   * - Failed
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      output: 'Output',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      output: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task information.
   */
  job?: GetAgentJobResponseBodyJob;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetAgentJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

