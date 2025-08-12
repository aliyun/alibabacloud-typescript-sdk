// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMonitoringConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically install the CloudMonitor agent on new ECS instances. Valid values:
   * 
   * *   true (default): The CloudMonitor agent is automatically installed on new ECS instances.
   * *   false: The CloudMonitor agent is not automatically installed on new ECS instances.
   * 
   * @example
   * true
   */
  enableInstallAgentNewECS?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
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

