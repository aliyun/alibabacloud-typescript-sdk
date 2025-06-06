// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHuggingFaceModelInputHttpTriggerTriggerConfig } from "./DeployHuggingFaceModelInputHttpTriggerTriggerConfig";


export class DeployHuggingFaceModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployHuggingFaceModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployHuggingFaceModelInputHttpTriggerTriggerConfig,
    };
  }

  validate() {
    if(this.triggerConfig && typeof (this.triggerConfig as any).validate === 'function') {
      (this.triggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

