// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateFlowDraftInput } from "./UpdateFlowDraftInput";


export class UpdateFlowDraftRequest extends $dara.Model {
  /**
   * @remarks
   * 包含要更新的工作流草稿配置信息的请求体
   * 
   * This parameter is required.
   */
  body?: UpdateFlowDraftInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateFlowDraftInput,
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

