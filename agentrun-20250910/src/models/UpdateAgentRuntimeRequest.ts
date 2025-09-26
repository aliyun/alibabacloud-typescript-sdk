// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAgentRuntimeInput } from "./UpdateAgentRuntimeInput";


export class UpdateAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * 包含要更新的智能体运行时配置信息的请求体
   * 
   * This parameter is required.
   */
  body?: UpdateAgentRuntimeInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAgentRuntimeInput,
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

