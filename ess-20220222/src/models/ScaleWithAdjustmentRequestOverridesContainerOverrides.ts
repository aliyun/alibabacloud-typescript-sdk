// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars } from "./ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars";


export class ScaleWithAdjustmentRequestOverridesContainerOverrides extends $dara.Model {
  /**
   * @remarks
   * The arguments that correspond to the startup commands of the container. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The container startup commands. You can specify up to 20 commands. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the container.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The information about the environment variables.
   */
  environmentVars?: ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars[];
  /**
   * @remarks
   * The memory size that you want to allocate to the container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The container name. If you specify ContainerOverrides, you must also specify Name. ContainerOverrides takes effect only when the container name specified by Name matches that specified in the scaling configuration.
   * 
   * @example
   * container-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars },
      memory: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

