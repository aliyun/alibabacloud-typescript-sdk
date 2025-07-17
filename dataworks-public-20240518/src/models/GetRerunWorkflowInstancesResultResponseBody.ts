// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRerunWorkflowInstancesResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The failure message. Returned if the rerun fails.
   * 
   * @example
   * Invalid Param xxx
   */
  failureMessage?: string;
  /**
   * @remarks
   * The status. NotRun Success Failure
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
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

export class GetRerunWorkflowInstancesResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, used for log tracing and troubleshooting.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the workflow instance rerun.
   */
  result?: GetRerunWorkflowInstancesResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRerunWorkflowInstancesResultResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

