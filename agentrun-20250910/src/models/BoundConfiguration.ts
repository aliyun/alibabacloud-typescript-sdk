// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BoundTool } from "./BoundTool";


export class BoundConfiguration extends $dara.Model {
  /**
   * @remarks
   * 绑定的工具配置列表，每个配置项定义一个工具与特定 HTTP 路径和方法的绑定关系
   */
  boundTools?: BoundTool[];
  static names(): { [key: string]: string } {
    return {
      boundTools: 'boundTools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundTools: { 'type': 'array', 'itemType': BoundTool },
    };
  }

  validate() {
    if(Array.isArray(this.boundTools)) {
      $dara.Model.validateArray(this.boundTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

