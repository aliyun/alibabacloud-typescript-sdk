// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backup plan ID.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * findValidDBSJob error
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether this modification triggers a precheck. Return values:
   * 
   * - **true**: A precheck is triggered. Manually call the [StartBackupPlan](https://help.aliyun.com/document_detail/2869818.html) API to start the backup plan.
   * 
   * - **false**: No precheck is triggered.
   * 
   * @example
   * false
   */
  needPrecheck?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * E995F91F-6F89-503B-9F7D-502F58FD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Return values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      needPrecheck: 'NeedPrecheck',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      needPrecheck: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

