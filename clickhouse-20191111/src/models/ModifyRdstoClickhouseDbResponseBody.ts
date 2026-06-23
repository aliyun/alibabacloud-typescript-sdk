// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRDSToClickhouseDbResponseBody extends $dara.Model {
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
   * - This parameter is not returned if **Status** is **1**.
   * 
   * - If **Status** is **0**, this parameter indicates the reason why the modification failed.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.118.132, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 746CD303-0B82-5E8D-886D-93A9FAF3A876
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the modification was successful. Valid values:
   * 
   * - **1**: The modification was successful.
   * 
   * - **0**: The modification failed.
   * 
   * @example
   * 1
   */
  status?: number;
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
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

