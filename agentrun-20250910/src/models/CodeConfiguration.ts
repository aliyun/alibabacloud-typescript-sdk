// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * 代码包的CRC-64校验值。如果提供了checksum，则函数计算会校验代码包的checksum是否和提供的一致
   * 
   * @example
   * 1234567890123456789
   */
  checksum?: string;
  /**
   * @remarks
   * 在运行时中运行的命令（例如：[\"python\"]）
   * 
   * @example
   * python,main.py
   */
  command?: string[];
  /**
   * @remarks
   * 代码运行时的编程语言，如 python3、nodejs 等
   * 
   * @example
   * python3.12
   */
  language?: string;
  /**
   * @example
   * my-agent-code-bucket
   */
  ossBucketName?: string;
  /**
   * @example
   * agent-code-v1.0.zip
   */
  ossObjectName?: string;
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
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
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

