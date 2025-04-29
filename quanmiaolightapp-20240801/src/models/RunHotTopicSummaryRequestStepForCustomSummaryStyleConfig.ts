// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig extends $dara.Model {
  /**
   * @example
   * 2
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
      summaryImageCount: 'summaryImageCount',
      summaryModel: 'summaryModel',
      summaryPrompt: 'summaryPrompt',
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

