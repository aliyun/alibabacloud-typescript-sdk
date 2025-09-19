// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses extends $dara.Model {
  /**
   * @remarks
   * The code that indicates the handling result of the alert event.
   * 
   * @example
   * ignore.Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 12321
   */
  securityEventId?: string;
  /**
   * @remarks
   * The handling status of the alert event. Valid values:
   * 
   * *   **Processing**: The alert event is being handled.
   * *   **Success**: The alert event is handled.
   * *   **Failed**: The alert event failed to be handled.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      securityEventId: 'SecurityEventId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      securityEventId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the status of the alert events handled by the task.
   */
  securityEventOperationStatuses?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses[];
  /**
   * @remarks
   * The status of the task that handles the alert events. Valid values:
   * 
   * *   **Processing**: The task is running.
   * *   **Success**: The task is successful.
   * *   **Failure**: The task failed.
   * *   **Pending**: The task is pending.
   * 
   * @example
   * Success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventOperationStatuses: 'SecurityEventOperationStatuses',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventOperationStatuses: { 'type': 'array', 'itemType': DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses },
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityEventOperationStatuses)) {
      $dara.Model.validateArray(this.securityEventOperationStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1683940A-E4AE-4473-8C40-F4075434B76B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the task that handles the alert events.
   */
  securityEventOperationStatusResponse?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationStatusResponse: 'SecurityEventOperationStatusResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationStatusResponse: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse,
    };
  }

  validate() {
    if(this.securityEventOperationStatusResponse && typeof (this.securityEventOperationStatusResponse as any).validate === 'function') {
      (this.securityEventOperationStatusResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

