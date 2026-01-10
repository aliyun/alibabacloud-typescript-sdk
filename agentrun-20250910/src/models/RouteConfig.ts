// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PathConfig } from "./PathConfig";


export class RouteConfig extends $dara.Model {
  /**
   * @remarks
   * 路由表：自定义域名访问时的 PATH 到 Function 的映射列表。
   * 
   * @example
   * []
   */
  routes?: PathConfig[];
  static names(): { [key: string]: string } {
    return {
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: { 'type': 'array', 'itemType': PathConfig },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

