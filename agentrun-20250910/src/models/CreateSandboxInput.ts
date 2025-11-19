// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSandboxInput extends $dara.Model {
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
      sandboxIdleTimeoutSeconds: 'sandboxIdleTimeoutSeconds',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sandboxIdleTimeoutSeconds: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

