// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteComponentResponseBody extends $dara.Model {
  /**
   * @example
   * 10B92EE1-4597-593B-A131-7A17D25EF5C9
   */
  requestId?: string;
  /**
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

