// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFlowInput } from "./CreateFlowInput";


export class CreateFlowRequest extends $dara.Model {
  /**
   * @remarks
   * 创建工作流所需的完整配置信息，包括工作流名称、定义、执行模式等
   * 
   * This parameter is required.
   */
  body?: CreateFlowInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateFlowInput,
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

