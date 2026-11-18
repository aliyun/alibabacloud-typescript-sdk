// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemakeScriptJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the task status is Failed.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is of the String type and is returned when the task status is Failed.
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
   * The URL of the file that contains the script rewriting result. The file content is the creative script in JSON format.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The task status. Valid values: Created, Executing, Finished, and Failed. RecordNotFound is returned if the queried task is deleted, does not exist, or does not belong to the current account.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The user-defined parameter, which is a string in JSON format.
   * 
   * @example
   * {
   *   "NotifyAddress": "https://example.com/callback"
   * }
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

