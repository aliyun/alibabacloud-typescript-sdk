// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JuiceFsConfig } from "./JuiceFsConfig";
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class UpdateSessionInput extends $dara.Model {
  /**
   * @remarks
   * Defaults to `false`. If set to `false`, you can reuse a `SessionID` to start a new session on a new instance after the original session expires. If set to `true`, you cannot reuse a `SessionID` after its session expires.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  /**
   * @remarks
   * The JuiceFS configuration.
   */
  juiceFsConfig?: JuiceFsConfig;
  /**
   * @remarks
   * The NAS configuration.
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The OSS mount configuration.
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The PolarFS configuration.
   */
  polarFsConfig?: PolarFsConfig;
  /**
   * @remarks
   * The session idle timeout, in seconds.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session duration, in seconds.
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

