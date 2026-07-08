// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";


export class UpdateTemplateInput extends $dara.Model {
  logConfiguration?: LogConfiguration;
  networkConfiguration?: NetworkConfiguration;
  static names(): { [key: string]: string } {
    return {
      logConfiguration: 'logConfiguration',
      networkConfiguration: 'networkConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logConfiguration: LogConfiguration,
      networkConfiguration: NetworkConfiguration,
    };
  }

  validate() {
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

