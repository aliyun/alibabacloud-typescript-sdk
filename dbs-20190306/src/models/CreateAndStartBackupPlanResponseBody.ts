// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndStartBackupPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup schedule ID.
   * 
   * @example
   * dbs1hvb0wwweusfa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Indicates whether a backup is performed immediately after the backup schedule is configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  createBackupSet?: boolean;
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
   * The specified parameter %s value is not valid.
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
   * The ID of the order.
   * 
   * @example
   * 2056157***
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      createBackupSet: 'CreateBackupSet',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      createBackupSet: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      orderId: 'string',
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

