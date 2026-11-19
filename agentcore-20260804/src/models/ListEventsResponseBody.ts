// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsResponseBodyItemsDataContent extends $dara.Model {
  /**
   * @remarks
   * The JSON parameter values, which are required for tool_call blocks. Unparsed raw strings can be retained.
   * 
   * @example
   * {"city":"Hangzhou"}
   */
  arguments?: any;
  /**
   * @remarks
   * The logical call ID, which is required for tool_call blocks.
   * 
   * @example
   * call-001
   */
  callId?: string;
  /**
   * @remarks
   * The access format identifier, which is required for opaque blocks. Saving the format does not mean its content can be interpreted or used across platforms.
   * 
   * @example
   * application/json
   */
  format?: string;
  /**
   * @remarks
   * The tool name, which is required for tool_call blocks. This content block only expresses the call intent.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * The actual text, which is required for text and reasoning blocks.
   * 
   * @example
   * The user likes hiking
   */
  text?: string;
  /**
   * @remarks
   * The content block type. This field determines the required fields.
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The JSON value, which is required for json and opaque blocks. The data field is not used for opaque blocks.
   * 
   * @example
   * {"preference":"hiking"}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      arguments: 'arguments',
      callId: 'callId',
      format: 'format',
      name: 'name',
      text: 'text',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'any',
      callId: 'string',
      format: 'string',
      name: 'string',
      text: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyItemsDataParentScope extends $dara.Model {
  /**
   * @remarks
   * The business agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The exact session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The business user ID. This is not the platform tenant identity.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      teamId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyItemsData extends $dara.Model {
  /**
   * @remarks
   * The call ID, which is required for tool_call, tool_result, or messages with role=tool. It associates the call intent, actual execution, and feedback.
   * 
   * @example
   * call-001
   */
  callId?: string;
  /**
   * @remarks
   * The ordered content blocks, which are required for message and tool_result events. Use a text block for plain text. This can be an empty array if the tool has no output.
   */
  content?: ListEventsResponseBodyItemsDataContent[];
  /**
   * @remarks
   * The list of visible event IDs referenced by the summary. This list cannot be empty.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The parent session anchor, which is required for session_fork events. The child session continues from the valid context at this anchor and does not inherit interactions after the anchor.
   * 
   * @example
   * evt-2f5f9c5a8d0e4c3b
   */
  parentEventId?: string;
  /**
   * @remarks
   * The business positioning of the parent session, which is required for session_fork events. The event is written to the child session, and the requested scope is the child session.
   */
  parentScope?: ListEventsResponseBodyItemsDataParentScope;
  /**
   * @remarks
   * The message role, which is required for message events.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The readable summary, which is optional for context_update events.
   * 
   * @example
   * The user plans to go hiking on the weekend
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'callId',
      content: 'content',
      eventIds: 'eventIds',
      parentEventId: 'parentEventId',
      parentScope: 'parentScope',
      role: 'role',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      content: { 'type': 'array', 'itemType': ListEventsResponseBodyItemsDataContent },
      eventIds: { 'type': 'array', 'itemType': 'string' },
      parentEventId: 'string',
      parentScope: ListEventsResponseBodyItemsDataParentScope,
      role: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    if(this.parentScope && typeof (this.parentScope as any).validate === 'function') {
      (this.parentScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyItemsScope extends $dara.Model {
  /**
   * @remarks
   * The business agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The exact session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The business user ID. This is not the platform tenant identity.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      teamId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The event-specific data. Use the corresponding fields based on the type. For conditional requirements, refer to the description of each field.
   * 
   * This parameter is required.
   */
  data?: ListEventsResponseBodyItemsData;
  /**
   * @remarks
   * The stable event ID generated by the server. It is used for referencing, locating, and deleting events. It does not represent the business sequence, and no separate messageId is provided.
   * 
   * This parameter is required.
   * 
   * @example
   * evt-2f5f9c5a8d0e4c3b
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event reaches the server, in Unix milliseconds. It is used for asynchronous processing and not for historical business sorting.
   * 
   * This parameter is required.
   * 
   * @example
   * 1758614401000
   */
  receivedAt?: number;
  /**
   * @remarks
   * The session to which the event belongs.
   * 
   * This parameter is required.
   */
  scope?: ListEventsResponseBodyItemsScope;
  /**
   * @remarks
   * The actual occurrence time provided by the client, in Unix milliseconds. This is the only source for business sorting. Identical values do not indicate a known sequence, and the array position does not imply a business sequence.
   * 
   * This parameter is required.
   * 
   * @example
   * 1758614400000
   */
  timestamp?: number;
  /**
   * @remarks
   * The event type. This determines the applicable fields and conditional requirements for the data.
   * 
   * This parameter is required.
   * 
   * @example
   * message
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      eventId: 'eventId',
      receivedAt: 'receivedAt',
      scope: 'scope',
      timestamp: 'timestamp',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListEventsResponseBodyItemsData,
      eventId: 'string',
      receivedAt: 'number',
      scope: ListEventsResponseBodyItemsScope,
      timestamp: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
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
   * The results on the current page.
   */
  items?: ListEventsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries per page used in the current request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The request processing message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The next page token. An empty value indicates that all data has been read.
   * 
   * @example
   * eyJvZmZzZXQiOjIwMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID used for troubleshooting.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. For batch operations, you must still check the result of each item.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records. This field is empty if the exact total count is not provided.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListEventsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

