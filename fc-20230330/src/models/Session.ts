// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { CreateSessionNetworkConfig } from "./CreateSessionNetworkConfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class Session extends $dara.Model {
  allowInternetAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to save only the file system during auto-pause.
   */
  autoPauseFileSystemOnly?: boolean;
  /**
   * @remarks
   * The function instance ID associated with the session.
   * 
   * @example
   * c-68999e02-16a1955c-d2a03d1ccs
   */
  containerId?: string;
  /**
   * @remarks
   * The creation time of the session.
   * 
   * @example
   * 2025-04-01T08:15:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Specifies whether to disable session ID reuse. Default value: False. A value of False indicates that after a session expires, you can continue to send requests with the same session ID, and the system treats it as a new session and binds it to a new instance. A value of True indicates that after a session expires, the session ID cannot be reused.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  enableAutoPause?: boolean;
  enableAutoResume?: boolean;
  /**
   * @remarks
   * The name of the function to which the session belongs.
   * 
   * @example
   * functionName1
   */
  functionName?: string;
  /**
   * @remarks
   * The JuiceFS mount configuration.
   */
  juiceFsConfig?: JuiceFsConfig;
  /**
   * @remarks
   * The time when the session was last updated.
   * 
   * @example
   * 2025-04-01T18:15:27Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The NAS configuration. After this configuration is applied, the instance associated with the session can access the specified NAS resources.
   */
  nasConfig?: NASConfig;
  network?: CreateSessionNetworkConfig;
  /**
   * @remarks
   * The OSS mount configuration, which allows the associated function instance to access the specified OSS resources.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The deep hibernation retention duration for the saved session, in seconds. The minimum value is 600. The timing starts each time the session successfully enters deep hibernation. If this parameter is not configured, this field may not be returned.
   * 
   * @example
   * 600
   */
  pausedExpirationSeconds?: number;
  /**
   * @remarks
   * The PolarFS mount configuration, which allows the associated function instance to access the specified PolarFS resources.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The qualifier passed by the user when creating the session. If no qualifier is passed, the default value LATEST is used.
   * 
   * @example
   * AliasName1
   */
  qualifier?: string;
  /**
   * @remarks
   * The session affinity type.
   * 
   * @example
   * HEADER_FIELD
   */
  sessionAffinityType?: string;
  /**
   * @remarks
   * The unique identifier of the function session.
   * 
   * @example
   * 81f70ae156904eb9b7d43e12f511fe58
   */
  sessionId?: string;
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
   * The session status. Active indicates that the session is valid, and Expired indicates that the session has expired.
   * 
   * @example
   * Active
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The maximum session lifetime.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  /**
   * @remarks
   * The retention duration for subsequent user snapshots saved in the session, in seconds. The minimum value is 600. Updating this policy affects only newly created user snapshots and does not modify the expiration time of existing snapshots.
   * 
   * @example
   * 600
   */
  snapshotExpirationSeconds?: number;
  trafficAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
      autoPauseFileSystemOnly: 'autoPauseFileSystemOnly',
      containerId: 'containerId',
      createdTime: 'createdTime',
      disableSessionIdReuse: 'disableSessionIdReuse',
      enableAutoPause: 'enableAutoPause',
      enableAutoResume: 'enableAutoResume',
      functionName: 'functionName',
      juiceFsConfig: 'juiceFsConfig',
      lastModifiedTime: 'lastModifiedTime',
      nasConfig: 'nasConfig',
      network: 'network',
      ossMountConfig: 'ossMountConfig',
      pausedExpirationSeconds: 'pausedExpirationSeconds',
      polarFsConfig: 'polarFsConfig',
      qualifier: 'qualifier',
      sessionAffinityType: 'sessionAffinityType',
      sessionId: 'sessionId',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionStatus: 'sessionStatus',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
      snapshotExpirationSeconds: 'snapshotExpirationSeconds',
      trafficAccessToken: 'trafficAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
      autoPauseFileSystemOnly: 'boolean',
      containerId: 'string',
      createdTime: 'string',
      disableSessionIdReuse: 'boolean',
      enableAutoPause: 'boolean',
      enableAutoResume: 'boolean',
      functionName: 'string',
      juiceFsConfig: JuiceFsConfig,
      lastModifiedTime: 'string',
      nasConfig: NASConfig,
      network: CreateSessionNetworkConfig,
      ossMountConfig: OSSMountConfig,
      pausedExpirationSeconds: 'number',
      polarFsConfig: PolarFsConfig,
      qualifier: 'string',
      sessionAffinityType: 'string',
      sessionId: 'string',
      sessionIdleTimeoutInSeconds: 'number',
      sessionStatus: 'string',
      sessionTTLInSeconds: 'number',
      snapshotExpirationSeconds: 'number',
      trafficAccessToken: 'string',
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

