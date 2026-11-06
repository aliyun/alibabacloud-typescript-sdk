// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentVersionRequestBody extends $dara.Model {
  /**
   * @remarks
   * 版本描述，最多 1024 个字符，保存后不可修改。
   * 
   * @example
   * 生产环境稳定版本
   */
  description?: string;
  /**
   * @remarks
   * 用户自定义的展示名称，去除首尾空白后为 1 至 128 个字符，可包含中文、大小写字母、空格和标点，不能包含控制字符。同一 Agent 下未删除的版本名称唯一，区分大小写，保存后不可修改。版本号 agentVersion 由系统生成，不由此字段决定。
   * 
   * This parameter is required.
   * 
   * @example
   * 生产稳定版 V1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      versionName: 'versionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * 保存版本的请求体。
   */
  body?: CreateAgentVersionRequestBody;
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
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentVersionRequestBody,
      clientToken: 'string',
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

