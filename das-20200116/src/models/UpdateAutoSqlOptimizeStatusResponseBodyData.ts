// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoSqlOptimizeStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   **-1001**: indicates that the specified parameter is invalid.
   * *   **-91029**: indicates that a system error occurred.
   * 
   * @example
   * -1001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * invalid param
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request initiated to configure the automatic SQL optimization feature was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

