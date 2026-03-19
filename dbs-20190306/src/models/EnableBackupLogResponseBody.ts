// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * @example
   * dbstooi******
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
   * Indicates whether the modification triggers a precheck. Valid values:
   * 
   * - true: A precheck is triggered. Call the [StartBackupPlan](https://help.aliyun.com/document_detail/2869816.html) operation to start the backup plan.
   * 
   * - false: A precheck is not triggered.
   * 
   * @example
   * true
   */
  needPrecheck?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
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

