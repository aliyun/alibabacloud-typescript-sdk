// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobList } from "./QueryAnalysisJobListResponseBodyAnalysisJobList";
import { QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds } from "./QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds";


export class QueryAnalysisJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of template analysis jobs.
   */
  analysisJobList?: QueryAnalysisJobListResponseBodyAnalysisJobList;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify the user of the job result.
   */
  nonExistAnalysisJobIds?: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Submitted**: The job has been submitted.
   * *   **Analyzing**: The job is being run.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * 
   * @example
   * 5CA6E020-4102-4FFF-AA56-5ED7ECD811A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisJobList: 'AnalysisJobList',
      nonExistAnalysisJobIds: 'NonExistAnalysisJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobList: QueryAnalysisJobListResponseBodyAnalysisJobList,
      nonExistAnalysisJobIds: QueryAnalysisJobListResponseBodyNonExistAnalysisJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.analysisJobList && typeof (this.analysisJobList as any).validate === 'function') {
      (this.analysisJobList as any).validate();
    }
    if(this.nonExistAnalysisJobIds && typeof (this.nonExistAnalysisJobIds as any).validate === 'function') {
      (this.nonExistAnalysisJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

