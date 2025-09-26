// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetConfiguration } from "./TargetConfiguration";


export class CreateGatewayTargetInput extends $dara.Model {
  domainId?: string;
  name?: string;
  targetConfiguration?: TargetConfiguration;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      targetConfiguration: 'targetConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
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

