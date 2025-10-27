// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecutionHistoryResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The details about the execution step.
   * 
   * @example
   * {}
   */
  eventDetail?: string;
  /**
   * @remarks
   * The ID of the execution step.
   * 
   * @example
   * 2
   */
  eventId?: number;
  /**
   * @remarks
   * The ID of the scheduling step.
   * 
   * @example
   * 1
   */
  scheduleEventId?: number;
  /**
   * @remarks
   * The name of the execution step.
   * 
   * @example
   * passStep
   */
  stepName?: string;
  /**
   * @remarks
   * The time when the event was updated.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  time?: string;
  /**
   * @remarks
   * The type of the execution step. Valid values:
   * 
   * *   **StepEntered**
   * *   **StepStarted**
   * *   **StepSucceeded**
   * *   **StepFailed**
   * *   **StepExited**
   * *   **BranchEntered**
   * *   **BranchExited**
   * *   **IterationEntered**
   * *   **IterationExited**
   * *   **TaskScheduled**
   * *   **TaskStarted**
   * *   **TaskSubmitted**
   * *   **TaskSubmitFailed**
   * *   **TaskSucceeded**
   * *   **TaskFailed**
   * *   **TaskTimedOut**
   * *   **ExecutionStarted**
   * *   **ExecutionStopped**
   * *   **ExecutionSucceeded**
   * *   **ExecutionFailed**
   * *   **ExecutionTimedOut**
   * 
   * @example
   * TaskSucceeded
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'EventDetail',
      eventId: 'EventId',
      scheduleEventId: 'ScheduleEventId',
      stepName: 'StepName',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: 'string',
      eventId: 'number',
      scheduleEventId: 'number',
      stepName: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: GetExecutionHistoryResponseBodyEvents[];
  /**
   * @remarks
   * You do not need to specify this parameter for the first request. The returned value of **ScheduleEventId** is used as the token for the next query. No value is returned for the last query.
   * 
   * @example
   * 3
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': GetExecutionHistoryResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

