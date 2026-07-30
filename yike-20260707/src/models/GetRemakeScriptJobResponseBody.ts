// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemakeScriptJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The error code. Returned when the status is Failed.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. Returned when the status is Failed.
   * 
   * @example
   * The specified product does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 68ca759e798b40b4903b255*******
   */
  jobId?: string;
  /**
   * @remarks
   * The file URL of the script imitation result. The file content is in JSON format of the creative script.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The file status. Valid values:
   * 
   * - Created: Created.
   * - Executing: Executing.
   * - Finished: Finished.
   * - Failed: Failed.
   * - Deleted: Deleted.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The user-defined parameter, in JSON format string.
   * 
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      result: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemakeScriptJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The generated creative script object.
   */
  job?: GetRemakeScriptJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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
      job: GetRemakeScriptJobResponseBodyJob,
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

