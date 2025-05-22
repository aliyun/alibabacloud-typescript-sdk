// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubDistributedJobPrecheckStatusDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC
   */
  checkItem?: string;
  /**
   * @remarks
   * The description of the precheck item.
   * 
   * @example
   * CHECK_CONN_SRC_DETAIL
   */
  checkItemDescription?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  checkResult?: string;
  /**
   * @remarks
   * The error message returned if the task failed to pass the precheck.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * Original error: Access denied for user \\"dtstest\\"@\\"100.104.***.**\\" (using password: YES)
   */
  failedReason?: string;
  /**
   * @remarks
   * The method used to fix the precheck failure.
   * 
   * > This parameter is returned only if the return value of **CheckResult** is **Failed**.
   * 
   * @example
   * CHECK_ERROR_DEST_CONN_REPAIR2
   */
  repairMethod?: string;
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
      checkItemDescription: 'CheckItemDescription',
      checkResult: 'CheckResult',
      failedReason: 'FailedReason',
      repairMethod: 'RepairMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: 'string',
      checkItemDescription: 'string',
      checkResult: 'string',
      failedReason: 'string',
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

