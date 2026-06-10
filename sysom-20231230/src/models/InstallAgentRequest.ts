// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * Region ID.
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
  /**
   * @remarks
   * ID of the widget to install
   * 
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * Version of the widget to install
   * 
   * This parameter is required.
   * 
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Installation Type:  
   * - InstallAndUpgrade: Install if not present; update if present.  
   * - OnlyInstallNotHasAgent: Install if not present; do nothing if present.  
   * - OnlyUpgradeHasAgent: Do nothing if not present; update if present.
   * 
   * This parameter is required.
   * 
   * @example
   * InstallAndUpgrade
   */
  installType?: string;
  /**
   * @remarks
   * List of instances on which to install the widget
   * 
   * This parameter is required.
   */
  instances?: InstallAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      installType: 'install_type',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      installType: 'string',
      instances: { 'type': 'array', 'itemType': InstallAgentRequestInstances },
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

