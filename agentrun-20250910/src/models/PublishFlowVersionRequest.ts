// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishFlowVersionInput } from "./PublishFlowVersionInput";


export class PublishFlowVersionRequest extends $dara.Model {
  /**
   * @remarks
   * 包含版本描述等信息的请求体
   */
  body?: PublishFlowVersionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PublishFlowVersionInput,
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

