// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleActiveSQLRecordResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The process ID, which is the unique identifier of the active query SQL statement.
   * 
   * @example
   * 3003925
   */
  pid?: string;
  /**
   * @remarks
   * The status of the processing result. Valid values:
   * - **false**: The processing failed.
   * - **true**: The processing succeeded.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
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

export class HandleActiveSQLRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The processing results of the active queries.
   */
  results?: HandleActiveSQLRecordResponseBodyResults[];
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * 
   * - **false**: The execution failed.
   * - **true**: The execution succeeded.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': HandleActiveSQLRecordResponseBodyResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

