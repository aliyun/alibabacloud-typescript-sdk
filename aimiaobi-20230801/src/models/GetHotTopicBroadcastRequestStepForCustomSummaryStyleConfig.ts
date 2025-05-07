// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastRequestStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 90
   */
  summaryImageCount?: number;
  /**
   * @example
   * 摘要模型
   */
  summaryModel?: string;
  /**
   * @example
   * 摘要-自定义Prompt
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

