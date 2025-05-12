// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAnalysisJobResponseBodyAnalysisJob } from "./SubmitAnalysisJobResponseBodyAnalysisJob";


export class SubmitAnalysisJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the preset template analysis job that was submitted.
   */
  analysisJob?: SubmitAnalysisJobResponseBodyAnalysisJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B52658D4-07AB-43CD-82B0-210958A65E23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: SubmitAnalysisJobResponseBodyAnalysisJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.analysisJob && typeof (this.analysisJob as any).validate === 'function') {
      (this.analysisJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

