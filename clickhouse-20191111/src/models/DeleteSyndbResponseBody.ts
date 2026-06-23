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
   * - This parameter is not returned if **Status** is **true**.
   * 
   * - If **Status** is **false**, this parameter indicates the reason for the failure.
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
   * Indicates whether the deletion was successful. Valid values:
   * 
   * - **true**: The deletion was successful.
   * 
   * - **false**: The deletion failed.
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

