// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * *   Success: The task passed the precheck.
   * *   Failed: The task failed to pass the precheck.
   * 
   * @example
   * Success
   */
  checkStatus?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck.
   * 
   * >  This parameter is returned only if the return value of the **CheckStatus** parameter is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.xxx.xx\\" (using password: YES)
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  itemName?: string;
  /**
   * @remarks
   * The method to fix the precheck failure.
   * 
   * >  This parameter is returned only if the return value of the **CheckStatus** parameter is Failed.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'CheckStatus',
      errorMessage: 'ErrorMessage',
      itemName: 'ItemName',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'string',
      errorMessage: 'string',
      itemName: 'string',
      repairMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

