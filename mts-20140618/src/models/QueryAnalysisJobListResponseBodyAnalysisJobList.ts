// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob";


export class QueryAnalysisJobListResponseBodyAnalysisJobList extends $dara.Model {
  analysisJob?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob[];
  static names(): { [key: string]: string } {
    return {
      analysisJob: 'AnalysisJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJob: { 'type': 'array', 'itemType': QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJob },
    };
  }

  validate() {
    if(Array.isArray(this.analysisJob)) {
      $dara.Model.validateArray(this.analysisJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

