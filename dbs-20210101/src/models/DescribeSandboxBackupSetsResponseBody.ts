// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxBackupSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Param.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned data. The following parameters are contained:
   * 
   * *   **backupSetTime**: the point in time when the snapshot was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * *   **backupSetId**: the ID of the backup set.
   * *   **backupSetType**: the type of the snapshot. A value of **Full** indicates that the snapshot is a full backup snapshot. A value of **Inc** indicates that the snapshot is an incremental backup snapshot.
   * *   **backupPlanId**: the ID of the backup schedule.
   * 
   * @example
   * "Data": {     "number": 2,     "size": 2,     "content": [       {         "backupSetTime": "2021-08-28T23:12:31Z",         "backupSetId": "Inc_1hxxxx8xxxxxa_20210801064200_mysql-bin.000134",         "backupSetType": "Inc",         "backupPlanId": "1hxxxx8xxxxxa"       },       {         "backupSetTime": "2021-08-28T22:42:28Z",         "backupSetId": "1hxxxx8xxxxxa_20210829064228",         "backupSetType": "FULL",         "backupPlanId": "1hxxxx8xxxxxa"       }     ],     "totalElements": 2   },
   */
  data?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  message?: string;
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
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
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

