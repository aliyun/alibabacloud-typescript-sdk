// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig } from "./SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig";
import { SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig } from "./SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig";


export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  stepForCustomSummaryStyleConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  stepForNewsBroadcastContentConfig?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig;
  static names(): { [key: string]: string } {
    return {
      stepForCustomSummaryStyleConfig: 'StepForCustomSummaryStyleConfig',
      stepForNewsBroadcastContentConfig: 'StepForNewsBroadcastContentConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepForCustomSummaryStyleConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForCustomSummaryStyleConfig,
      stepForNewsBroadcastContentConfig: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig,
    };
  }

  validate() {
    if(this.stepForCustomSummaryStyleConfig && typeof (this.stepForCustomSummaryStyleConfig as any).validate === 'function') {
      (this.stepForCustomSummaryStyleConfig as any).validate();
    }
    if(this.stepForNewsBroadcastContentConfig && typeof (this.stepForNewsBroadcastContentConfig as any).validate === 'function') {
      (this.stepForNewsBroadcastContentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

