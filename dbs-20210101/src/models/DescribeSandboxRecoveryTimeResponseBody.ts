// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxRecoveryTimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The backup schedule of the sandbox instance.
   * 
   * @example
   * 1hxxxx8xxxxxa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the sandbox instance can be restored. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-01T12:01:01Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end of the time range during which the sandbox instance can be restored. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-02T12:01:01Z
   */
  recoveryEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * Param.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeSandboxRecoveryTimeResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
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
      data: DescribeSandboxRecoveryTimeResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

