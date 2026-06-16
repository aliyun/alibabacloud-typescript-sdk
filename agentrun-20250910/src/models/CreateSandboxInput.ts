// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";
import { PolarFsConfig } from "./PolarFsConfig";


export class CreateSandboxInput extends $dara.Model {
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
   * The unique identifier of the sandbox instance.
   * 
   * @example
   * 01KE8DAJ35JC8SKP9CNFRZ8CW7
   */
  sandboxId?: string;
  /**
   * @remarks
   * The idle timeout for the sandbox, in seconds.
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The idle timeout for the sandbox, in seconds.
   * 
   * @example
   * 1800
   * 
   * @deprecated
   */
  sandboxIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * templateName
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      polarFsConfig: 'polarFsConfig',
      sandboxId: 'sandboxId',
      sandboxIdleTimeoutInSeconds: 'sandboxIdleTimeoutInSeconds',
      sandboxIdleTimeoutSeconds: 'sandboxIdleTimeoutSeconds',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      polarFsConfig: PolarFsConfig,
      sandboxId: 'string',
      sandboxIdleTimeoutInSeconds: 'number',
      sandboxIdleTimeoutSeconds: 'number',
      templateName: 'string',
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

