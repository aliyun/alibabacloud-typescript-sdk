// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * 客户端生成的幂等令牌，当前为预留参数，后端暂不提供持久化幂等保证。
   * 
   * @example
   * c2d8a6f0-3b1e-4a7d-9f25-6e4b0c1a8d37
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

