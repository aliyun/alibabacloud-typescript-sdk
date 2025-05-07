// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebScalingConfig } from "./WebScalingConfig";


export class WebApplicationStatus extends $dara.Model {
  instanceCount?: number;
  webScalingConfig?: WebScalingConfig;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      webScalingConfig: 'WebScalingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      webScalingConfig: WebScalingConfig,
    };
  }

  validate() {
    if(this.webScalingConfig && typeof (this.webScalingConfig as any).validate === 'function') {
      (this.webScalingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

