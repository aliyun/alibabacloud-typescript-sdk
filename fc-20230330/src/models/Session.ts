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
   * The instance ID of the function associated with the session.
   * 
   * @example
   * c-68999e02-16a1955c-d2a03d1ccs
   */
  containerId?: string;
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 2025-04-01T08:15:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Specifies whether to disable session ID reuse after the session expires. Valid values:
   * - False: After the session expires, you can use the same session ID to initiate requests. The system treats it as a new session and binds it to a new instance.
   * - True: After the session expires, the session ID cannot be reused.
   * 
   * Default value: False.
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
   * The NAS configuration. After configuration, the instance associated with the session can access the specified NAS resource.
   */
  nasConfig?: NASConfig;
  network?: CreateSessionNetworkConfig;
  ossMountConfig?: OSSMountConfig;
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The qualifier passed when the customer created the session. If not specified, the default value is LATEST.
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
   * The session status. Valid values:
   * - Active: The session is valid.
   * - Expired: The session has expired.
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
  trafficAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
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
      polarFsConfig: 'polarFsConfig',
      qualifier: 'qualifier',
      sessionAffinityType: 'sessionAffinityType',
      sessionId: 'sessionId',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionStatus: 'sessionStatus',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
      trafficAccessToken: 'trafficAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
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
      polarFsConfig: PolarFsConfig,
      qualifier: 'string',
      sessionAffinityType: 'string',
      sessionId: 'string',
      sessionIdleTimeoutInSeconds: 'number',
      sessionStatus: 'string',
      sessionTTLInSeconds: 'number',
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

