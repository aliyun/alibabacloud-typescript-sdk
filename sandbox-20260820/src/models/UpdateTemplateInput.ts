// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";


export class UpdateTemplateInput extends $dara.Model {
  containerConfiguration?: ContainerConfiguration;
  logConfiguration?: LogConfiguration;
  networkConfiguration?: NetworkConfiguration;
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      containerConfiguration: 'containerConfiguration',
      logConfiguration: 'logConfiguration',
      networkConfiguration: 'networkConfiguration',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerConfiguration: ContainerConfiguration,
      logConfiguration: LogConfiguration,
      networkConfiguration: NetworkConfiguration,
      teamID: 'string',
    };
  }

  validate() {
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
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

