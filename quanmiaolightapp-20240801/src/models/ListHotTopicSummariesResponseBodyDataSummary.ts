// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotTopicSummariesResponseBodyDataSummarySummaries } from "./ListHotTopicSummariesResponseBodyDataSummarySummaries";


export class ListHotTopicSummariesResponseBodyDataSummary extends $dara.Model {
  summaries?: ListHotTopicSummariesResponseBodyDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataSummarySummaries },
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

