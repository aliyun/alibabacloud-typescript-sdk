// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerConfiguration extends $dara.Model {
  /**
   * @remarks
   * 在容器中运行的命令（例如：[\"python3\", \"app.py\"]）
   * 
   * @example
   * python3,app.py
   */
  command?: string[];
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my-namespace/agent-runtime:latest
   */
  image?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

