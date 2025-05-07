// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPTriggerConfig } from "./HttptriggerConfig";


export class UpdateAttributesInput extends $dara.Model {
  description?: string;
  httpTriggerConfig?: HTTPTriggerConfig;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      httpTriggerConfig: 'httpTriggerConfig',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      httpTriggerConfig: HTTPTriggerConfig,
      versionID: 'string',
    };
  }

  validate() {
    if(this.httpTriggerConfig && typeof (this.httpTriggerConfig as any).validate === 'function') {
      (this.httpTriggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

