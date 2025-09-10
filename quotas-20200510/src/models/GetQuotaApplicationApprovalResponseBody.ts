// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaApplicationApprovalResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The average amount of time required to approve quota applications. Unit: hour.
   * 
   * @example
   * 24
   */
  approvalHours?: number;
  /**
   * @remarks
   * The interval between two consecutive approval reminders. Unit: hour.
   * 
   * @example
   * 24
   */
  reminderIntervalHours?: number;
  /**
   * @remarks
   * Indicates whether approval reminders are supported for quota applications. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  supportReminder?: boolean;
  /**
   * @remarks
   * The reason why approval reminders are not supported for quota applications.
   * 
   * @example
   * can only be remind once within the interval
   */
  unsupportReminderReason?: string;
  static names(): { [key: string]: string } {
    return {
      approvalHours: 'ApprovalHours',
      reminderIntervalHours: 'ReminderIntervalHours',
      supportReminder: 'SupportReminder',
      unsupportReminderReason: 'UnsupportReminderReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalHours: 'number',
      reminderIntervalHours: 'number',
      supportReminder: 'boolean',
      unsupportReminderReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaApplicationApprovalResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether retries are allowed. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PARAMETER.ILLEGALL
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * Parameter[%s] is required.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The parameters whose values are invalid.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * RAM.PERMISSION.DENIED
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to do this action or the API input parameter is invalid.
   */
  errorMsg?: string;
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
   * The information about quota application approval.
   */
  module?: GetQuotaApplicationApprovalResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ED584FB-ECBF-4A2A-969D-F54D25EFABF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRetry: 'AllowRetry',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRetry: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: GetQuotaApplicationApprovalResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

