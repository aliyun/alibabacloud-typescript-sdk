// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRDSToClickhouseDbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reason for the creation failure. This parameter is returned only if the value of the Status parameter is **-1**.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.79.102, port: 14540; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The duplicate tables in the sync task.
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
   * Indicates whether the task was created. Valid values:
   * 
   * - **1**: The task was created.
   * 
   * - **0**: The task failed to be created because of duplicate tables. The duplicate tables are returned in the **RepeatedDbs** parameter.
   * 
   * - **-1**: The task failed to be created. The error message is returned in the **ErrorMsg** parameter.
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

