// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVulScanGlobalConfigRequestWuyingVulFixConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to prohibit shutdown during the fix process to prevent system exceptions caused by shutting down during patch installation. Valid values:
   * - **true**: Prohibit shutdown.
   * - **false**: Do not prohibit shutdown.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  antiShutdownSwitch?: boolean;
  /**
   * @remarks
   * Specifies whether to create a snapshot for the cloud desktop before the fix for rollback in case of fix failure. Valid values:
   * - **true**: Create a snapshot.
   * - **false**: Do not create a snapshot.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  snapshotSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      antiShutdownSwitch: 'AntiShutdownSwitch',
      snapshotSwitch: 'SnapshotSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiShutdownSwitch: 'boolean',
      snapshotSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVulScanGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum download rate for vulnerability patches on a single user terminal device. Unit: Byte/s. A value of 0 indicates no speed limit.
   * 
   * @example
   * 1048576
   */
  maxDownloadSpeed?: number;
  /**
   * @remarks
   * The vulnerability fix configuration for WUYING Workspace. This configuration applies only to user terminal devices of the Cloud Desktop type.
   * 
   * @deprecated
   */
  wuyingVulFixConfig?: UpdateVulScanGlobalConfigRequestWuyingVulFixConfig;
  static names(): { [key: string]: string } {
    return {
      maxDownloadSpeed: 'MaxDownloadSpeed',
      wuyingVulFixConfig: 'WuyingVulFixConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDownloadSpeed: 'number',
      wuyingVulFixConfig: UpdateVulScanGlobalConfigRequestWuyingVulFixConfig,
    };
  }

  validate() {
    if(this.wuyingVulFixConfig && typeof (this.wuyingVulFixConfig as any).validate === 'function') {
      (this.wuyingVulFixConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

