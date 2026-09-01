// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPython3ScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique ID for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F210521C-D9BF-5264-8369-83EDDC617DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned after the script is run.
   * 
   * @example
   * {
   *     "requestUuid": "fe240b98-27b1-4a36-aec1-550b894318d9",
   *     "content": {
   *         "resultData": [],
   *         "success": true
   *     }
   * }
   */
  runResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runResult: 'RunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

