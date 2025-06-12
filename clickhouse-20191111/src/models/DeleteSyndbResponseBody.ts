// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSyndbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: number;
  /**
   * @remarks
   * *   If the value **true** is returned for the **Status** parameter, the system does not return the ErrorMsg parameter.
   * *   If the value **false** is returned for the **Status** parameter, the system returns the deletion failure cause for the ErrorMsg parameter.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.xx.xx, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C7393F1-5FD1-5CEE-A2EA-270A2CF99693
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database used for data synchronization was deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

