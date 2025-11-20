// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateInput } from "./UpdateTemplateInput";


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * 更新模板所需的配置信息
   * 
   * This parameter is required.
   */
  body?: UpdateTemplateInput;
  /**
   * @remarks
   * 用于确保请求幂等性的唯一标识符
   * 
   * @example
   * clientToken
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTemplateInput,
      clientToken: 'string',
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

