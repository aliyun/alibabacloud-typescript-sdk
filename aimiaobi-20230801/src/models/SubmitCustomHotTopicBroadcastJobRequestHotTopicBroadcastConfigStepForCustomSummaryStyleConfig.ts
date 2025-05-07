// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  summaryImageCount?: number;
  /**
   * @example
   * qwen-max
   */
  summaryModel?: string;
  /**
   * @example
   * xxxx
   */
  summaryPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      summaryImageCount: 'SummaryImageCount',
      summaryModel: 'SummaryModel',
      summaryPrompt: 'SummaryPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryImageCount: 'number',
      summaryModel: 'string',
      summaryPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

