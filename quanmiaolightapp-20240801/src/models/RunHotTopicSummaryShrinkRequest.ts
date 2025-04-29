// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicSummaryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-10-16_8
   */
  hotTopicVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  topicIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      hotTopicVersion: 'hotTopicVersion',
      stepForCustomSummaryStyleConfigShrink: 'stepForCustomSummaryStyleConfig',
      topicIdsShrink: 'topicIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicVersion: 'string',
      stepForCustomSummaryStyleConfigShrink: 'string',
      topicIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

