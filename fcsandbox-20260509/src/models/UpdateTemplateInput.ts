// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogConfiguration } from "./LogConfiguration";


export class UpdateTemplateInput extends $dara.Model {
  logConfiguration?: LogConfiguration;
  static names(): { [key: string]: string } {
    return {
      logConfiguration: 'logConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logConfiguration: LogConfiguration,
    };
  }

  validate() {
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

