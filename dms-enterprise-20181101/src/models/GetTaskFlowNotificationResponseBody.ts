// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskFlowNotificationResponseBodyNotification extends $dara.Model {
  /**
   * @remarks
   * Indicates whether notifications for failed task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationFail?: boolean;
  /**
   * @remarks
   * Indicates whether service level agreement (SLA) global notifications for task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationSla?: boolean;
  /**
   * @remarks
   * Indicates whether notifications for successful task flows are enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  dagNotificationSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      dagNotificationFail: 'DagNotificationFail',
      dagNotificationSla: 'DagNotificationSla',
      dagNotificationSuccess: 'DagNotificationSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagNotificationFail: 'boolean',
      dagNotificationSla: 'boolean',
      dagNotificationSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFlowNotificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The notification settings specified by the user.
   */
  notification?: GetTaskFlowNotificationResponseBodyNotification;
  /**
   * @remarks
   * The ID of the request. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * F19D575F-EBEA-5683-AFA3-A8F6D9A7DE03
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      notification: 'Notification',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      notification: GetTaskFlowNotificationResponseBodyNotification,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

