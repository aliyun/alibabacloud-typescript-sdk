// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Sandbox } from "./Sandbox";


export class DeleteSandboxResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS 为成功
   */
  code?: string;
  data?: Sandbox;
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
      data: Sandbox,
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

