// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescriberPython3ScriptLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D22D8A0C-6E86-57B2-A142-929184122AB1
   */
  requestId?: string;
  /**
   * @remarks
   * The operational logs of the Python3 script.
   * 
   * @example
   * {
   *     "logs": [
   *         {
   *             "message": "function input is {}"
   *         }
   *     ]
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

