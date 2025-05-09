// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList } from "./GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList";
import { GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList } from "./GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList";


export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult extends $dara.Model {
  /**
   * @remarks
   * The details of the analysis results.
   */
  resultList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList[];
  /**
   * @remarks
   * The statistics on the analysis results.
   */
  summaryList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList[];
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      summaryList: 'SummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList },
      summaryList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    if(Array.isArray(this.summaryList)) {
      $dara.Model.validateArray(this.summaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

