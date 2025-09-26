// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetConfiguration } from "./TargetConfiguration";


export class UpdateTargetConfigurationInput extends $dara.Model {
  domainId?: string;
  targetConfiguration?: TargetConfiguration;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      targetConfiguration: 'targetConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      targetConfiguration: TargetConfiguration,
    };
  }

  validate() {
    if(this.targetConfiguration && typeof (this.targetConfiguration as any).validate === 'function') {
      (this.targetConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

