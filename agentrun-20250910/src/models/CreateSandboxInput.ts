// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";
import { OSSMountConfig } from "./OssmountConfig";


export class CreateSandboxInput extends $dara.Model {
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  sandboxId?: string;
  /**
   * @remarks
   * 沙箱空闲超时时间（秒）
   */
  sandboxIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * 模板名称（系统内部通过 templateName 查询 template_id）
   * 
   * This parameter is required.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      sandboxId: 'sandboxId',
      sandboxIdleTimeoutSeconds: 'sandboxIdleTimeoutSeconds',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      sandboxId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

