// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig } from "./RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig";


export class RunHotTopicSummaryRequest extends $dara.Model {
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
  stepForCustomSummaryStyleConfig?: RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  topicIds?: string[];
  static names(): { [key: string]: string } {
    return {
      hotTopicVersion: 'hotTopicVersion',
      stepForCustomSummaryStyleConfig: 'stepForCustomSummaryStyleConfig',
      topicIds: 'topicIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicVersion: 'string',
      stepForCustomSummaryStyleConfig: RunHotTopicSummaryRequestStepForCustomSummaryStyleConfig,
      topicIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(Array.isArray(this.topicIds)) {
      $dara.Model.validateArray(this.topicIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

