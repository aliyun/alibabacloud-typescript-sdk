// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastResponseBodyDataDataSummarySummaries } from "./GetHotTopicBroadcastResponseBodyDataDataSummarySummaries";


export class GetHotTopicBroadcastResponseBodyDataDataSummary extends $dara.Model {
  /**
   * @example
   * 17
   */
  inputToken?: number;
  /**
   * @example
   * 41
   */
  outputToken?: number;
  summaries?: GetHotTopicBroadcastResponseBodyDataDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      inputToken: 'InputToken',
      outputToken: 'OutputToken',
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      summaries: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataSummarySummaries },
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

