// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderSyncJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current execution step of the AgentCore asynchronous task. This field may not be returned if the task has not started.
   * 
   * @example
   * SYNC
   */
  currentStep?: string;
  /**
   * @remarks
   * The failure summary of the asynchronous task. This field is not returned if no failure information is available. You can use this field along with the taskId and requestId for troubleshooting.
   * 
   * @example
   * The identity provider synchronization job failed.
   */
  failureReason?: string;
  /**
   * @remarks
   * The status of the synchronization task. Valid values: PENDING: pending. RUNNING: running. PAUSED: paused. SUCCESS: successful. FAILED: failed. CANCELED: canceled. The first three are non-terminal states, and the last three are terminal states. Query the status until a terminal state is reached to determine the result.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The number of user entries that have been read locally and written or updated, including existing users. This does not represent the number of newly added users or the synchronization percentage. This field is not returned when no statistics are available.
   * 
   * @example
   * 12
   */
  syncedUserCount?: number;
  /**
   * @remarks
   * The ID of the downstream synchronization task in AgentIdentity. This field is not returned if the task has not been created. You cannot use this ID in place of taskId to call GetIdentityProviderSyncJob.
   * 
   * @example
   * syncjob_0123456789abcdef0123456789abcdef
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * The local task ID in AgentCore returned by CreateIdentityProviderSyncJob, which is different from the synchronizationJobId in AgentIdentity. You must use the same workspace and identity provider when querying the task.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentStep: 'currentStep',
      failureReason: 'failureReason',
      status: 'status',
      syncedUserCount: 'syncedUserCount',
      synchronizationJobId: 'synchronizationJobId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStep: 'string',
      failureReason: 'string',
      status: 'string',
      syncedUserCount: 'number',
      synchronizationJobId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderSyncJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code of the API request. SUCCESS indicates that the request is successful, but does not indicate that the asynchronous synchronization task is completed.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The business data returned in the response.
   * 
   * @example
   * {"taskId":"12345678-1234-4234-8234-123456789abc","status":"PENDING"}
   */
  data?: CreateIdentityProviderSyncJobResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the API request, which does not indicate the execution result of the asynchronous task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message of the API request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. Provide this value when troubleshooting issues.
   * 
   * @example
   * 01234567-89AB-CDEF-0123-456789ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. To check whether the asynchronous task is completed, query the task status.
   * 
   * @example
   * true
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
      data: CreateIdentityProviderSyncJobResponseBodyData,
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

