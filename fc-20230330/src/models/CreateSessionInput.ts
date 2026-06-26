// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class CreateSessionInput extends $dara.Model {
  /**
   * @remarks
   * A value of false (the default) allows an expired session ID to be reused for a new session, which the system then binds to a new instance. If set to true, an expired session ID cannot be reused.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  juiceFsConfig?: JuiceFsConfig;
  /**
   * @remarks
   * Allows instances in the session to access specified NAS resources.
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * Allows instances in the session to access specified OSS resources.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * Allows instances in the session to access specified PolarFS resources.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * A customizable session ID. If you do not specify a value, the server generates one. This parameter applies only to the HEADER_FIELD affinity mode. The value must be 0 to 64 characters long. The first character must be a character in **a-zA-Z0-9_**. Subsequent characters can be any character in **a-zA-Z0-9_-**.
   * 
   * @example
   * custom-test-session-id
   */
  sessionId?: string;
  /**
   * @remarks
   * The session idle timeout in seconds.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session lifetime in seconds.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      disableSessionIdReuse: 'disableSessionIdReuse',
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

