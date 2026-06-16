// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The CRC-64 checksum of the code package. If you provide `checksum`, Function Compute verifies that the code package\\"s computed checksum matches this value.
   * 
   * @example
   * 1234567890123456789
   */
  checksum?: string;
  /**
   * @remarks
   * The command and arguments to run in the runtime.
   * 
   * @example
   * python,main.py
   */
  command?: string[];
  /**
   * @remarks
   * The programming language for the function\\"s runtime, such as python3 or nodejs.
   * 
   * @example
   * python3.12
   */
  language?: string;
  /**
   * @remarks
   * The name of the OSS bucket that contains the function\\"s code package.
   * 
   * @example
   * my-agent-code-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the OSS object for the function\\"s code package.
   * 
   * @example
   * agent-code-v1.0.zip
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The base64-encoded content of the agent\\"s code package.
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

