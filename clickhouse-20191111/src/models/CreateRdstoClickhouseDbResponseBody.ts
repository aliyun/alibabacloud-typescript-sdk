// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRDSToClickhouseDbResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of the **Status** parameter is -1, the cause of the creation failure is returned.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.79.102, port: 14540; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * Duplicate tables in the synchronization task.
   */
  repeatedDbs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66676F54-1994-5DCF-993F-74536649628A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the synchronization task was created. Valid values:
   * 
   * *   **1**: Created.
   * *   **0**: Creation failed. The tables in the synchronization task are duplicate. The duplicate tables are returned for the **RepeatedDbs** parameter.
   * *   **-1**: Creation failed. The cause why the creation failed is returned for the **ErrorMsg** parameter.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      repeatedDbs: 'RepeatedDbs',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      repeatedDbs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.repeatedDbs)) {
      $dara.Model.validateArray(this.repeatedDbs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

