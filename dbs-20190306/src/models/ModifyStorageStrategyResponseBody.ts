// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * findValidDBSJob error
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Indicates whether a precheck is triggered. Valid values:
   * 
   * *   **true**: A precheck is triggered. You must manually call the [StartBackupPlan](https://help.aliyun.com/document_detail/2869818.html) operation to start the backup schedule.
   * *   **false**: No precheck is triggered.
   * 
   * @example
   * false
   */
  needPrecheck?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E995F91F-6F89-503B-9F7D-502F58FD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
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

