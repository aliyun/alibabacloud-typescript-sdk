// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSandboxesOutput } from "./ListSandboxesOutput";


export class ListSandboxesResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS 为成功，失败情况返回对应错误类型，比如 ERR_BAD_REQUEST ERR_VALIDATION_FAILED ERR_INTERNAL_SERVER_ERROR
   */
  code?: string;
  /**
   * @remarks
   * 沙箱列表的详细信息
   */
  data?: ListSandboxesOutput;
  /**
   * @remarks
   * 唯一的请求标识符，用于问题追踪
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSandboxesOutput,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

