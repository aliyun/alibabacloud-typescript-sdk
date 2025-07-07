// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmartHandleJobResponseBodyJobResult } from "./GetSmartHandleJobResponseBodyJobResult";
import { GetSmartHandleJobResponseBodySmartJobInfo } from "./GetSmartHandleJobResponseBodySmartJobInfo";


export class GetSmartHandleJobResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The job results.
   */
  jobResult?: GetSmartHandleJobResponseBodyJobResult;
  /**
   * @remarks
   * The job results.
   * 
   * @example
   * {}
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the intelligent job.
   */
  smartJobInfo?: GetSmartHandleJobResponseBodySmartJobInfo;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished
   * *   Failed
   * *   Executing
   * *   Created
   * 
   * @example
   * Finished
   */
  state?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format.
   * 
   * @example
   * {"user":"data"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobResult: 'JobResult',
      output: 'Output',
      requestId: 'RequestId',
      smartJobInfo: 'SmartJobInfo',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobResult: GetSmartHandleJobResponseBodyJobResult,
      output: 'string',
      requestId: 'string',
      smartJobInfo: GetSmartHandleJobResponseBodySmartJobInfo,
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.jobResult && typeof (this.jobResult as any).validate === 'function') {
      (this.jobResult as any).validate();
    }
    if(this.smartJobInfo && typeof (this.smartJobInfo as any).validate === 'function') {
      (this.smartJobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

