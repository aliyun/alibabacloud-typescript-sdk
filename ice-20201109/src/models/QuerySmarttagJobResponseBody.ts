// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmarttagJobResponseBodyResults } from "./QuerySmarttagJobResponseBodyResults";


export class QuerySmarttagJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Success**: The job was successful.
   * *   **Fail**: The job failed.
   * *   **Processing**: The job is in progress.
   * *   **Submitted**: The job is submitted and waiting to be processed.
   * 
   * @example
   * Success
   */
  jobStatus?: string;
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
   * The analysis results of the smart tagging job. The value is an array.
   */
  results?: QuerySmarttagJobResponseBodyResults;
  /**
   * @remarks
   * The content of callback messages that are sent to Simple Message Queue (SMQ) when the information of the smart tagging job changes. For more information about the parameters contained in the callback message, see the "Callback parameters" section of this topic.
   * 
   * @example
   * {"userId":"123432412831"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      results: 'Results',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      requestId: 'string',
      results: QuerySmarttagJobResponseBodyResults,
      userData: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

