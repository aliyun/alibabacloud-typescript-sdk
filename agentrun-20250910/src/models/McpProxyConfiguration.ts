// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hook } from "./Hook";


export class McpProxyConfiguration extends $dara.Model {
  /**
   * @remarks
   * MCP 代理的钩子函数配置列表，每个钩子可以在请求处理的不同阶段执行自定义逻辑
   */
  hooks?: Hook[];
  static names(): { [key: string]: string } {
    return {
      hooks: 'hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooks: { 'type': 'array', 'itemType': Hook },
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

