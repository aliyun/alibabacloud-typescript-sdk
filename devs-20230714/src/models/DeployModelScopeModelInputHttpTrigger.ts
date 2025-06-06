// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployModelScopeModelInputHttpTriggerTriggerConfig } from "./DeployModelScopeModelInputHttpTriggerTriggerConfig";


export class DeployModelScopeModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployModelScopeModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployModelScopeModelInputHttpTriggerTriggerConfig,
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

