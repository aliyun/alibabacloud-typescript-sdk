// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulScanGlobalConfigResponseBodyWuyingVulFixConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to prohibit shutdown during the fix process to prevent system exceptions caused by shutting down during patch installation. Valid values:
   * - **true**: Shutdown is prohibited.
   * - **false**: Shutdown is not prohibited.
   * 
   * @example
   * true
   */
  antiShutdownSwitch?: boolean;
  /**
   * @remarks
   * Specifies whether to create a snapshot for the cloud desktop before the fix, which can be used for rollback if the fix fails. Valid values:
   * - **true**: A snapshot is created.
   * - **false**: No snapshot is created.
   * 
   * @example
   * true
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

export class GetVulScanGlobalConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum download speed for vulnerability patches on a single user terminal device. Unit: bytes per second. A value of 0 indicates no speed limit.
   * 
   * @example
   * 1048576
   */
  maxDownloadSpeed?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The vulnerability fix configuration for WUYING Workspace. This configuration takes effect only on user terminal devices of the Cloud Desktop type.
   */
  wuyingVulFixConfig?: GetVulScanGlobalConfigResponseBodyWuyingVulFixConfig;
  static names(): { [key: string]: string } {
    return {
      maxDownloadSpeed: 'MaxDownloadSpeed',
      requestId: 'RequestId',
      wuyingVulFixConfig: 'WuyingVulFixConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDownloadSpeed: 'number',
      requestId: 'string',
      wuyingVulFixConfig: GetVulScanGlobalConfigResponseBodyWuyingVulFixConfig,
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

