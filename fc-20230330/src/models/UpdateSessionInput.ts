// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class UpdateSessionInput extends $dara.Model {
  disableSessionIdReuse?: boolean;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  polarFsConfig?: PolarFsConfig;
  /**
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      disableSessionIdReuse: 'disableSessionIdReuse',
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
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      polarFsConfig: PolarFsConfig,
      sessionIdleTimeoutInSeconds: 'number',
      sessionTTLInSeconds: 'number',
    };
  }

  validate() {
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

