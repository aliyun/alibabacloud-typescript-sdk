// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability } from "./CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability";


export class CreateEciScalingConfigurationRequestInitContainersSecurityContext extends $dara.Model {
  capability?: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability;
  readOnlyRootFilesystem?: boolean;
  runAsUser?: number;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      readOnlyRootFilesystem: 'ReadOnlyRootFilesystem',
      runAsUser: 'RunAsUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: CreateEciScalingConfigurationRequestInitContainersSecurityContextCapability,
      readOnlyRootFilesystem: 'boolean',
      runAsUser: 'number',
    };
  }

  validate() {
    if(this.capability && typeof (this.capability as any).validate === 'function') {
      (this.capability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

