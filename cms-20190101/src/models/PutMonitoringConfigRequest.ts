// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMonitoringConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Ignore this parameter.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: Sends a dry run request without deleting the endpoint IPAM pool. The system checks whether all required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends a normal request and directly deletes the endpoint IPAM pool if the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically install the CloudMonitor agent on newly purchased ECS instances. Valid values:
   * - true (default): Automatically installs the CloudMonitor agent on newly purchased ECS instances.
   * 
   * - false: Does not automatically install the CloudMonitor agent on newly purchased ECS instances.
   * 
   * @example
   * true
   */
  enableInstallAgentNewECS?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      enableInstallAgentNewECS: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

