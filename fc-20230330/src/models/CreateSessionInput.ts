// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class CreateSessionInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable session ID reuse. Default value: False, which indicates that after a session with a specific SessionID expires, you can send requests with the same SessionID, and the system treats it as a new session bound to a new instance. If this parameter is set to True, the SessionID cannot be reused after the session expires.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  enableAutoPause?: boolean;
  enableAutoResume?: boolean;
  juiceFsConfig?: JuiceFsConfig;
  /**
   * @remarks
   * The NAS configuration. After this parameter is configured, instances associated with the session can access the specified NAS resources.
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The OSS configuration. After this parameter is configured, instances associated with the session can access the specified OSS resources.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The PolarFs configuration. After this parameter is configured, instances associated with the session can access the specified PolarFs resources.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The custom session ID. If this parameter is not specified, the server generates a session ID. If specified, the value is used as the session ID. This parameter applies only to the HEADER_FIELD affinity mode. Format: the length is limited to [0,64]. The first character must be from **a-zA-Z0-9_**, and subsequent characters can be from **a-zA-Z0-9_-**.
   * 
   * @example
   * custom-test-session-id
   */
  sessionId?: string;
  /**
   * @remarks
   * The session idle timeout period.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session lifetime.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      disableSessionIdReuse: 'disableSessionIdReuse',
      enableAutoPause: 'enableAutoPause',
      enableAutoResume: 'enableAutoResume',
      juiceFsConfig: 'juiceFsConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      polarFsConfig: 'polarFsConfig',
      sessionId: 'sessionId',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSessionIdReuse: 'boolean',
      enableAutoPause: 'boolean',
      enableAutoResume: 'boolean',
      juiceFsConfig: JuiceFsConfig,
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      polarFsConfig: PolarFsConfig,
      sessionId: 'string',
      sessionIdleTimeoutInSeconds: 'number',
      sessionTTLInSeconds: 'number',
    };
  }

  validate() {
    if(this.juiceFsConfig && typeof (this.juiceFsConfig as any).validate === 'function') {
      (this.juiceFsConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
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

