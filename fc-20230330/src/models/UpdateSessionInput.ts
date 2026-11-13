// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { UpdateSessionNetworkConfig } from "./UpdateSessionNetworkConfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class UpdateSessionInput extends $dara.Model {
  allowInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to save only the file system during auto-pause.
   */
  autoPauseFileSystemOnly?: boolean;
  /**
   * @remarks
   * Specifies whether to disable session ID reuse. Default value: false. A value of false indicates that after a session ID expires, you can continue to send requests with the same session ID, and the system treats it as a new session and binds it to a new instance. A value of true indicates that the session ID cannot be reused after the session expires.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  enableAutoPause?: boolean;
  enableAutoResume?: boolean;
  /**
   * @remarks
   * The JuiceFS mount configuration.
   */
  juiceFsConfig?: JuiceFsConfig;
  /**
   * @remarks
   * The NAS mount point configuration for the session.
   */
  nasConfig?: NASConfig;
  network?: UpdateSessionNetworkConfig;
  /**
   * @remarks
   * The OSS mount point configuration for the session.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The deep sleep retention period in seconds. The minimum value is 600, and the maximum value is determined by the plan configuration. If this parameter is not specified, the original value is retained. The update takes effect upon the next successful pause. This parameter cannot be modified when the session is in the Paused state.
   * 
   * @example
   * 86400
   */
  pausedExpirationSeconds?: number;
  /**
   * @remarks
   * The PolarFS mount point configuration for the session.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The session idle timeout.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session time-to-live.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  /**
   * @remarks
   * The retention period for subsequently created user snapshots in seconds. The minimum value is 600, and the maximum value is determined by the plan configuration. If this parameter is not specified, the original value is retained. This update only affects snapshots created after the update, and the expiration time of existing snapshots remains unchanged.
   * 
   * @example
   * 86400
   */
  snapshotExpirationSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
      autoPauseFileSystemOnly: 'autoPauseFileSystemOnly',
      disableSessionIdReuse: 'disableSessionIdReuse',
      enableAutoPause: 'enableAutoPause',
      enableAutoResume: 'enableAutoResume',
      juiceFsConfig: 'juiceFsConfig',
      nasConfig: 'nasConfig',
      network: 'network',
      ossMountConfig: 'ossMountConfig',
      pausedExpirationSeconds: 'pausedExpirationSeconds',
      polarFsConfig: 'polarFsConfig',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
      snapshotExpirationSeconds: 'snapshotExpirationSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
      autoPauseFileSystemOnly: 'boolean',
      disableSessionIdReuse: 'boolean',
      enableAutoPause: 'boolean',
      enableAutoResume: 'boolean',
      juiceFsConfig: JuiceFsConfig,
      nasConfig: NASConfig,
      network: UpdateSessionNetworkConfig,
      ossMountConfig: OSSMountConfig,
      pausedExpirationSeconds: 'number',
      polarFsConfig: PolarFsConfig,
      sessionIdleTimeoutInSeconds: 'number',
      sessionTTLInSeconds: 'number',
      snapshotExpirationSeconds: 'number',
    };
  }

  validate() {
    if(this.juiceFsConfig && typeof (this.juiceFsConfig as any).validate === 'function') {
      (this.juiceFsConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(this.polarFsConfig && typeof (this.polarFsConfig as any).validate === 'function') {
      (this.polarFsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

