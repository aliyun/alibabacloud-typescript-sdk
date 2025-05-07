// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries } from "./GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries";


export class GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResult extends $dara.Model {
  summaries?: GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': GetTopicSelectionPerspectiveAnalysisTaskResponseBodyDataTopicSummaryResultSummaries },
    };
  }

  validate() {
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

