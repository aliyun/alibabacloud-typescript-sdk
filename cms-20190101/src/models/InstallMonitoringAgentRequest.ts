// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMonitoringAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent. Valid values:
   * 
   * *   true (default value): yes
   * *   false: no
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account. Valid values:
   * 
   * *   `onlyInstallNotHasAgent`: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
   * *   `onlyUpgradeAgent`: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
   * *   `installAndUpgrade`: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
   * 
   * >  If you set the InstallCommand parameter, the `InstanceIds` parameter does not take effect.
   * 
   * @example
   * onlyInstallNotHasAgent
   */
  installCommand?: string;
  /**
   * @example
   * i-m5e0k0bexac8tykr****
   */
  instanceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      installCommand: 'InstallCommand',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      installCommand: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

