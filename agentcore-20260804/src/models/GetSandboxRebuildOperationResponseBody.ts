// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSandboxRebuildOperationResponseBodyDataError extends $dara.Model {
  /**
   * @remarks
   * The task error code, which is used to distinguish between rebuild failures, subsequent instance creation failures, cancellations, or supersessions.
   * 
   * @example
   * SandboxRebuild.Failed
   */
  code?: string;
  /**
   * @remarks
   * The task error description that can be publicly displayed. Keep the task ID for troubleshooting.
   * 
   * @example
   * The Sandbox rebuild did not complete. Contact support with the operation ID.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSandboxRebuildOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task error that can be publicly displayed. This is returned upon task failure, cancellation, or override by subsequent operations. This field can be empty in other states.
   */
  error?: GetSandboxRebuildOperationResponseBodyDataError;
  /**
   * @remarks
   * The initial rebuild task ID. Use the operationId returned by RebuildSandbox. Always use this ID to query the overall result. You do not need to switch to the ID of a subsequent creation task.
   * 
   * @example
   * 01a1be92-7fa4-76b2-a871-b376d6d0****
   */
  operationId?: string;
  /**
   * @remarks
   * The logical sandbox ID corresponding to the rebuild. The logical ID remains unchanged after the rebuild.
   * 
   * @example
   * 01a1b56a-b00f-7aa3-bacf-cc9d04b0****
   */
  sandboxId?: string;
  /**
   * @remarks
   * The overall rebuild status. Valid values: PENDING: waiting to be processed. RUNNING: execute. SUCCEEDED: overall success. FAILED: failed. CANCELED: canceled. SUPERSEDED: override by subsequent operations. UNKNOWN: unconfirmed. Only SUCCEEDED indicates completion. Do not treat UNKNOWN, missing status, or query exceptions as success, and do not automatically resubmit the rebuild.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      operationId: 'operationId',
      sandboxId: 'sandboxId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: GetSandboxRebuildOperationResponseBodyDataError,
      operationId: 'string',
      sandboxId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSandboxRebuildOperationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Task result code of the API request. A successful request returns SUCCESS. Query task result of the asynchronous task separately.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The overall result of the rebuild task.
   */
  data?: GetSandboxRebuildOperationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code corresponding to the API request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result description of the API request. This does not indicate that the asynchronous rebuild task is completed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate the API call.
   * 
   * @example
   * 01A1BE93-46A7-1A2A-BD62-159FCDAA****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. A value of true does not indicate that the sandbox rebuild is completed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSandboxRebuildOperationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

