// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class UpdateSessionInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable session ID reuse after the session expires. Valid values:
   * - False: After the session associated with a SessionID expires, you can use the same SessionID to initiate requests. The system treats this as a new session and binds it to a new instance.
   * - True: After the session associated with a SessionID expires, the SessionID cannot be reused.
   * Default value: False.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  enableAutoPause?: boolean;
  enableAutoResume?: boolean;
  juiceFsConfig?: JuiceFsConfig;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  polarFsConfig?: PolarFsConfig;
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

