// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * 指定要获取的智能体运行时版本，如果不指定则返回最新版本
   * 
   * @example
   * v1.0.0
   */
  agentRuntimeVersion?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeVersion: 'agentRuntimeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

