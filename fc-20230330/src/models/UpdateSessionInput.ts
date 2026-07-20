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
   * Specifies whether to disable session ID reuse after the session expires. Default value: False, which indicates that after a session expires, you can use the same session ID to initiate requests. The system treats the request as a new session and binds it to a new instance. If you set this parameter to True, the session ID cannot be reused after the session expires.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  enableAutoPause?: boolean;
  enableAutoResume?: boolean;
  juiceFsConfig?: JuiceFsConfig;
  nasConfig?: NASConfig;
  network?: UpdateSessionNetworkConfig;
  ossMountConfig?: OSSMountConfig;
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
   * The session lifetime.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      allowInternetAccess: 'allowInternetAccess',
      disableSessionIdReuse: 'disableSessionIdReuse',
      enableAutoPause: 'enableAutoPause',
      enableAutoResume: 'enableAutoResume',
      juiceFsConfig: 'juiceFsConfig',
      nasConfig: 'nasConfig',
      network: 'network',
      ossMountConfig: 'ossMountConfig',
      polarFsConfig: 'polarFsConfig',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInternetAccess: 'boolean',
      disableSessionIdReuse: 'boolean',
      enableAutoPause: 'boolean',
      enableAutoResume: 'boolean',
      juiceFsConfig: JuiceFsConfig,
      nasConfig: NASConfig,
      network: UpdateSessionNetworkConfig,
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

