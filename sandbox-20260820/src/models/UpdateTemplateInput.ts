// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";


export class UpdateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * The new container image configuration of the template. When passed in, this overwrites the existing configuration entirely.
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * The new log delivery configuration of the template. When passed in, this overwrites the existing configuration entirely.
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * The new network configuration of the template. When passed in, this overwrites the existing configuration entirely.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The ID of the team to which the template belongs, in UUID format. This parameter is used to locate the template to be updated.
   * 
   * @example
   * 5f4a2c18-****
   */
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

