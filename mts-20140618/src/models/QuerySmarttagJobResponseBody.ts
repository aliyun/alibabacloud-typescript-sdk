// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmarttagJobResponseBodyResults } from "./QuerySmarttagJobResponseBodyResults";


export class QuerySmarttagJobResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  jobStatus?: string;
  message?: string;
  /**
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1AD0
   */
  requestId?: string;
  results?: QuerySmarttagJobResponseBodyResults;
  /**
   * @example
   * example UserData ****
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobStatus: 'JobStatus',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobStatus: 'string',
      message: 'string',
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

