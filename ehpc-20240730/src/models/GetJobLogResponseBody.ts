// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1.manager
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The error output log that is encoded in Base64.
   * 
   * @example
   * aG9zdG5hbWU=
   */
  stderrLog?: string;
  /**
   * @remarks
   * The size of the error output file.
   * 
   * @example
   * 0
   */
  stderrLogSize?: string;
  /**
   * @remarks
   * The standard output log that is encoded in Base64.
   * 
   * @example
   * aG9zdG5hbWU=
   */
  stdoutLog?: string;
  /**
   * @remarks
   * The size of the standard output file.
   * 
   * @example
   * 4096
   */
  stdoutLogSize?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      stderrLog: 'StderrLog',
      stderrLogSize: 'StderrLogSize',
      stdoutLog: 'StdoutLog',
      stdoutLogSize: 'StdoutLogSize',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      stderrLog: 'string',
      stderrLogSize: 'string',
      stdoutLog: 'string',
      stdoutLogSize: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

