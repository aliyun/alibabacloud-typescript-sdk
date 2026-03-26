// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateToolInputV2 } from "./CreateToolInputV2";


export class CreateToolRequest extends $dara.Model {
  /**
   * @remarks
   * 创建工具的请求参数，包含工具的所有配置信息
   */
  body?: CreateToolInputV2;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateToolInputV2,
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

