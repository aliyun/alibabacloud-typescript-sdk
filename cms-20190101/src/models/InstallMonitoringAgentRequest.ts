// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMonitoringAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly install the CloudMonitor agent. Valid values:
   * 
   * - true (default): Forcibly installs the agent.
   * 
   * - false: Does not forcibly install the agent.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The installation command. This command installs the CloudMonitor agent on all Alibaba Cloud hosts that belong to your Alibaba Cloud account. Valid values:
   * 
   * - `onlyInstallNotHasAgent`: Installs the latest version of the CloudMonitor agent only on Alibaba Cloud hosts where the agent is not installed.
   * 
   * - `onlyUpgradeAgent`: Upgrades the CloudMonitor agent only on Alibaba Cloud hosts where an earlier version of the agent is installed.
   * 
   * - `installAndUpgrade`: Installs the latest version of the CloudMonitor agent on Alibaba Cloud hosts where the agent is not installed, and upgrades the agent on Alibaba Cloud hosts where an earlier version of the agent is installed.
   * 
   * > If you set this parameter, the `InstanceIds` parameter is invalid.
   * 
   * @example
   * onlyInstallNotHasAgent
   */
  installCommand?: string;
  /**
   * @remarks
   * The IDs of the Alibaba Cloud hosts.
   * 
   * You can specify from 1 to 10 instance IDs.
   * 
   * > You must specify either `InstallCommand` or `InstanceIds`.
   * 
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

