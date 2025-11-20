// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateInput } from "./CreateTemplateInput";


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 创建模板所需的完整配置信息，包括模板名称、类型、资源规格、网络配置等
   * 
   * This parameter is required.
   */
  body?: CreateTemplateInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateTemplateInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

