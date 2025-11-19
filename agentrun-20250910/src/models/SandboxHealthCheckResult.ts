// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SandboxHealthCheckOut } from "./SandboxHealthCheckOut";


export class SandboxHealthCheckResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS 为成功
   */
  code?: string;
  data?: SandboxHealthCheckOut;
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
      data: SandboxHealthCheckOut,
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

