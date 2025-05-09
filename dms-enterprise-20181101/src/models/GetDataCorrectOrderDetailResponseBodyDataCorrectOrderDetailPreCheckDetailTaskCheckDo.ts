// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailPreCheckDetailTaskCheckDO extends $dara.Model {
  /**
   * @remarks
   * The state of the precheck. Valid values:
   * 
   * *   **WAITING**: The ticket is pending precheck.
   * *   **RUNNING**: The ticket is being prechecked.
   * *   **SUCCESS**: The ticket passes the precheck.
   * *   **FAIL**: The ticket fails the precheck.
   * 
   * @example
   * SUCCESS
   */
  checkStatus?: string;
  /**
   * @remarks
   * The check step of the precheck. Valid values:
   * 
   * *   **SQL_PARSE**: The system checks the syntax of the SQL statement.
   * *   **SQL_TYPE_CHECK**: The system checks the type of the SQL statement.
   * *   **PERMISSION_CHECK**: The system checks the permissions required for the data change.
   * *   **ROW_CHECK**: The system checks the number of affected rows.
   * 
   * @example
   * PERMISSION_CHECK
   */
  checkStep?: string;
  /**
   * @remarks
   * The message that appears when a check step is executed.
   * 
   * @example
   * tip messsage
   */
  userTip?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      checkStep: 'CheckStep',
      userTip: 'UserTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      checkStep: 'string',
      userTip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

