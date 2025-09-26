// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * 代码包的CRC-64校验值。如果提供了checksum，则函数计算会校验代码包的checksum是否和提供的一致
   */
  checksum?: string;
  /**
   * @remarks
   * 在运行时中运行的命令（例如：[\"python\"]）
   */
  command?: string[];
  /**
   * @remarks
   * 代码运行时的编程语言，如 python3、nodejs 等
   */
  language?: string;
  /**
   * @remarks
   * 智能体代码ZIP包的Base64编码
   * 
   * @example
   * UEsDBAoAAAAAANF
   */
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      command: 'command',
      language: 'language',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      zipFile: 'string',
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

