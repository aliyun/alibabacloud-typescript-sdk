// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BoundTool extends $dara.Model {
  /**
   * @remarks
   * 绑定的 HTTP 请求方法，支持：GET、PUT、POST、PATCH、DELETE、OPTIONS
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * 绑定的 URL 路径，用于路由匹配
   * 
   * @example
   * /api/v1/tools
   */
  path?: string;
  /**
   * @remarks
   * 要绑定的工具名称
   * 
   * @example
   * my-tool
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      path: 'path',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      path: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

