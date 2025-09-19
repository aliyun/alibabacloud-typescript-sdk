// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse extends $dara.Model {
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **New**: The task is created.
   * *   **RetrievingData**: Data is being retrieved.
   * *   **DataRetrieved**: Data is retrieved.
   * *   **Processing**: The task is running.
   * *   **Success**: The task is successful.
   * *   **Failed**: The task failed.
   * *   **PartialFailed**: The task partially failed.
   * 
   * @example
   * New
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 2915
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the task that queries alert events of the same alert type.
   */
  createSimilarSecurityEventsQueryTaskResponse?: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5861EE3E-F0B3-48B8-A5DC-A5080BFBE052
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createSimilarSecurityEventsQueryTaskResponse: 'CreateSimilarSecurityEventsQueryTaskResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSimilarSecurityEventsQueryTaskResponse: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse,
      requestId: 'string',
    };
  }

  validate() {
    if(this.createSimilarSecurityEventsQueryTaskResponse && typeof (this.createSimilarSecurityEventsQueryTaskResponse as any).validate === 'function') {
      (this.createSimilarSecurityEventsQueryTaskResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

