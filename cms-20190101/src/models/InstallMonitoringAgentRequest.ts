// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMonitoringAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. The dry run includes permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the name and description of the route table are modified.
   * - **true**: sends a dry run request. Only a check is performed, and the name and description of the route table are not modified. Check items include whether required parameters are specified and the request format. If the request fails the check, the corresponding error is returned. If the request passes the check, the DryRunOperation error code is returned.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly install the CloudMonitor agent. Valid values:
   * - true (default): forcibly installs the agent.
   * - false: does not forcibly install the agent.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * Installs the CloudMonitor agent on all Alibaba Cloud hosts within the current Alibaba Cloud account. Valid values:
   * 
   * - onlyInstallNotHasAgent: installs the latest version of the agent only on Alibaba Cloud hosts on which the CloudMonitor agent is not installed.
   * 
   * - onlyUpgradeAgent: upgrades the agent only on Alibaba Cloud hosts on which a non-latest version of the CloudMonitor agent is installed.
   * 
   * - installAndUpgrade: installs the latest version of the agent on Alibaba Cloud hosts on which the CloudMonitor agent is not installed, and upgrades the agent on Alibaba Cloud hosts on which a non-latest version of the CloudMonitor agent is installed.
   * 
   * > If you specify this parameter, the InstanceIds parameter is ignored.
   * 
   * @example
   * onlyInstallNotHasAgent
   */
  installCommand?: string;
  /**
   * @remarks
   * The IDs of the Alibaba Cloud hosts.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      installCommand: 'InstallCommand',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

