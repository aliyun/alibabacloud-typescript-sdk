// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDeepAnalyzeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * FileNotExist
   */
  code?: string;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * {
   *   "result": 0,
   *   "file_analysis": {
   *     "summary": {
   *       "ai_interpretation": "The file is a script for the JetBrains PhpStorm stub generation tool, which is a legitimate developer tool. The code uses the PhpParser library to parse PHP source code and generate the PhpStormStubsMap.php mapping file. The engine analysis did not detect any attempts to invoke dangerous functions, external input processing, code obfuscation, or malicious behavior characteristics, and the file is determined to be normal."
   *     }
   *   }
   * }
   */
  data?: string;
  /**
   * @remarks
   * The stage description.
   * 
   * @example
   * File hash parsed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7F9C0A1-2B3D-4E5F-8A90-123456XXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The stage status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

