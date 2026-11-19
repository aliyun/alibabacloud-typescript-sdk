// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMonitoringConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the token on your client to ensure that the token is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - **true**: sends a check request without deleting the endpoint IPAM pool. The check items include whether required parameters are specified, the request format, and service limits. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default value): sends a normal request and directly deletes the endpoint IPAM pool if the request passes the check.
   * Default value: **false**.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically install the CloudMonitor agent on newly purchased ECS instances. Valid values:
   * - true: Automatically installs the CloudMonitor agent on newly purchased ECS instances.
   * - false: Does not automatically install the CloudMonitor agent on newly purchased ECS instances.
   * Default value: true.
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

