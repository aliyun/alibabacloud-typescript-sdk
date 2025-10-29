// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBrowsersOutput } from "./ListBrowsersOutput";


export class ListBrowsersResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS 为成功，失败情况返回对应错误类型，比如 ERR_BAD_REQUEST ERR_VALIDATION_FAILED ERR_INTERNAL_SERVER_ERROR
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * 浏览器列表的详细信息
   * 
   * @example
   * {}
   */
  data?: ListBrowsersOutput;
  /**
   * @remarks
   * 唯一的请求标识符，用于问题追踪
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
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
      data: ListBrowsersOutput,
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

