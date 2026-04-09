// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BoundToolApi } from "./BoundToolApi";


export class BoundTool extends $dara.Model {
  apis?: BoundToolApi[];
  /**
   * @remarks
   * 绑定的 HTTP 请求方法，支持：GET、PUT、POST、PATCH、DELETE、OPTIONS
   * 
   * @example
   * POST
   * 
   * @deprecated
   */
  method?: string;
  /**
   * @remarks
   * 绑定的 URL 路径，用于路由匹配
   * 
   * @example
   * /api/v1/tools
   * 
   * @deprecated
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
      apis: 'apis',
      method: 'method',
      path: 'path',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': BoundToolApi },
      method: 'string',
      path: 'string',
      toolName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

