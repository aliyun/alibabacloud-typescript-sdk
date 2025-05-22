// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAITaskEventsResponseBodyEvents } from "./ListAitaskEventsResponseBodyEvents";


export class ListAITaskEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The events.
   */
  events?: ListAITaskEventsResponseBodyEvents[];
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
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
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @remarks
   * The state of the AI task.
   * 
   * *   PENDING
   * *   WAITING
   * *   RUNNING
   * *   SUCCESS
   * *   FAILURE
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the AI task.
   * 
   * *   GenerateTemplate: The AI task is used to generate a template.
   * *   FixTemplate: The AI task is used to fix a template.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      events: 'Events',
      httpStatusCode: 'HttpStatusCode',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      events: { 'type': 'array', 'itemType': ListAITaskEventsResponseBodyEvents },
      httpStatusCode: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'string',
      taskStatus: 'string',
      taskType: 'string',
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

