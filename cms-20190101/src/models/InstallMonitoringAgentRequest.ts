// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMonitoringAgentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. The dry run includes checks on permissions and instance status. Valid values:
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, the name and description of the route table are directly modified.
   * - **true**: Sends a dry run request. Only checks are performed, and the name and description of the route table are not modified. Check items include whether required parameters are specified and the request format. If the check fails, an error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly install the CloudMonitor agent. Valid values:
   * - true (default): Forcibly installs the agent.
   * - false: Does not forcibly install the agent.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * Installs the CloudMonitor agent on all Alibaba Cloud hosts within the current Alibaba Cloud account. Valid values:
   * 
   * - onlyInstallNotHasAgent: Installs the latest version of the agent only on Alibaba Cloud hosts on which the CloudMonitor agent is not installed.
   * 
   * - onlyUpgradeAgent: Upgrades the agent only on Alibaba Cloud hosts on which a non-latest version of the CloudMonitor agent is installed.
   * 
   * - installAndUpgrade: Installs the latest version of the agent on Alibaba Cloud hosts on which the CloudMonitor agent is not installed, and upgrades the agent on Alibaba Cloud hosts on which a non-latest version of the CloudMonitor agent is installed.
   * 
   * > If you specify this parameter, the InstanceIds parameter becomes invalid.
   * 
   * @example
   * onlyInstallNotHasAgent
   */
  installCommand?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud host.
   * 
   * Valid values of N: 1 to 10.
   * 
   * > You must specify either InstallCommand or InstanceIds.
   * 
   * @example
   * i-m5e0k0bexac8tykr****
   */
  instanceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      installCommand: 'InstallCommand',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

