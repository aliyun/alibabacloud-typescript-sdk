// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployOllamaModelInputHttpTriggerTriggerConfig } from "./DeployOllamaModelInputHttpTriggerTriggerConfig";


export class DeployOllamaModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployOllamaModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployOllamaModelInputHttpTriggerTriggerConfig,
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

