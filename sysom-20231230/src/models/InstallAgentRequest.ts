// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The ID of the component to install.
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The version of the component to install.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @remarks
   * The installation type. Valid values:
   * 
   * - InstallAndUpgrade: installs the component if it does not exist, or updates it if it exists.
   * - OnlyInstallNotHasAgent: installs the component if it does not exist, or takes no action if it exists.
   * - OnlyUpgradeHasAgent: takes no action if the component does not exist, or updates it if it exists.
   * - OnlyInstallWithoutStart: installs the component only without starting the service.
   * 
   * This parameter is required.
   * 
   * @example
   * InstallAndUpgrade
   */
  installType?: string;
  /**
   * @remarks
   * The list of instances on which to install the component.
   * 
   * This parameter is required.
   */
  instances?: InstallAgentRequestInstances[];
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      installType: 'install_type',
      instances: 'instances',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      agentId: 'string',
      agentVersion: 'string',
      installType: 'string',
      instances: { 'type': 'array', 'itemType': InstallAgentRequestInstances },
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

