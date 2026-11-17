// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemAuditResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of field change details. Each item includes the changed field and its values before and after the change.
   * 
   * @example
   * [{"field":"title","before":"Old title","after":"New title"}]
   */
  changes?: any;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * The work item title is changed to Quarterly Sales Opportunity Review
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the audit event.
   * 
   * @example
   * evt_20261105_0001
   */
  eventId?: string;
  /**
   * @remarks
   * The audit event type, such as WORK_ITEM_UPDATED or TODO_COMPLETED.
   * 
   * @example
   * WORK_ITEM_UPDATED
   */
  eventType?: string;
  /**
   * @remarks
   * The time when the event occurred, in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  occurredAt?: string;
  /**
   * @remarks
   * The display name of the operator.
   * 
   * @example
   * Zhang San
   */
  operatorName?: string;
  /**
   * @remarks
   * The user ID of the operator.
   * 
   * @example
   * 10001
   */
  operatorUserId?: string;
  /**
   * @remarks
   * The list of questions to be confirmed related to the event.
   * 
   * @example
   * [{"question":"Whether to continue execution"}]
   */
  questions?: any[];
  /**
   * @remarks
   * The event result payload as a JSON object. If no result is available, this field is empty.
   * 
   * @example
   * {"result":"ok"}
   */
  resultPayload?: any;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The event title.
   * 
   * @example
   * Investigate sales opportunities
   */
  title?: string;
  /**
   * @remarks
   * The ID of the associated to-do item. If no to-do item is associated, an empty string is returned.
   * 
   * @example
   * todo_20261105_0007
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      changes: 'changes',
      description: 'description',
      eventId: 'eventId',
      eventType: 'eventType',
      occurredAt: 'occurredAt',
      operatorName: 'operatorName',
      operatorUserId: 'operatorUserId',
      questions: 'questions',
      resultPayload: 'resultPayload',
      status: 'status',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changes: 'any',
      description: 'string',
      eventId: 'string',
      eventType: 'string',
      occurredAt: 'string',
      operatorName: 'string',
      operatorUserId: 'string',
      questions: { 'type': 'array', 'itemType': 'any' },
      resultPayload: 'any',
      status: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questions)) {
      $dara.Model.validateArray(this.questions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The complete work item audit records sorted in descending order of event time.
   * 
   * @example
   * [{"eventId":"evt_example","eventType":"WORK_ITEM_UPDATED","occurredAt":"2026-11-05T08:00:00Z","status":"SUCCESS"}]
   */
  items?: GetWorkItemAuditResponseBodyItems[];
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': GetWorkItemAuditResponseBodyItems },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

