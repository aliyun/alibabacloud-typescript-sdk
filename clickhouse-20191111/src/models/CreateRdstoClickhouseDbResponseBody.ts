// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRDSToClickhouseDbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cause of the creation failure. This parameter is returned when the **Status** parameter is -1.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.79.102, port: 14540; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The duplicate tables in the synchronization task.
   */
  repeatedDbs?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66676F54-1994-5DCF-993F-74536649628A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the creation is successful. Valid values:
   * - **1**: The creation is successful.
   * - **0**: The creation failed. Duplicate tables exist in the synchronization task. The specific duplicate tables are returned in the **RepeatedDbs** parameter.
   * - **-1**: The creation failed. The cause of the failure is returned in the **ErrorMsg** parameter.
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

