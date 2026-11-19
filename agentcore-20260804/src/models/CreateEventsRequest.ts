// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventsRequestBodyEventsDataContent extends $dara.Model {
  /**
   * @remarks
   * The JSON parameter values. This field is required for tool_call blocks. Unparsed raw strings can be retained.
   * 
   * @example
   * {"city":"Hangzhou"}
   */
  arguments?: any;
  /**
   * @remarks
   * The logical call ID. This field is required for tool_call blocks.
   * 
   * @example
   * call-001
   */
  callId?: string;
  /**
   * @remarks
   * The access format identifier. This field is required for opaque blocks. Saving the format does not mean that its content can be interpreted or used across platforms.
   * 
   * @example
   * application/json
   */
  format?: string;
  /**
   * @remarks
   * The tool name. This field is required for tool_call blocks. This content block only expresses the call intent.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * The actual text. This field is required for text and reasoning blocks.
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
   * The JSON value. This field is required for json and opaque blocks. The data field is not used for opaque blocks.
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

export class CreateEventsRequestBodyEventsDataParentScope extends $dara.Model {
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

export class CreateEventsRequestBodyEventsData extends $dara.Model {
  /**
   * @remarks
   * The call ID. This field is required for tool_call and tool_result events, or message events with the role set to tool. It associates the call intent, actual execution, and feedback.
   * 
   * @example
   * call-001
   */
  callId?: string;
  /**
   * @remarks
   * The ordered content blocks. This field is required for message and tool_result events. Use a text block for plain text. This can be an empty array if the tool has no output.
   */
  content?: CreateEventsRequestBodyEventsDataContent[];
  /**
   * @remarks
   * The list of visible event IDs referenced by the summary. This list cannot be empty.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The anchor event ID of the parent session. This field is required for session_fork events. The child session continues from the valid context at this anchor and does not inherit interactions after the anchor.
   * 
   * @example
   * evt-2f5f9c5a8d0e4c3b
   */
  parentEventId?: string;
  /**
   * @remarks
   * The business scope of the parent session. This field is required for session_fork events. The event is written to the child session, and the requested scope is the child session.
   */
  parentScope?: CreateEventsRequestBodyEventsDataParentScope;
  /**
   * @remarks
   * The message role. This field is required for message events.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The human-readable summary. This field is optional for context_update events.
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
      content: { 'type': 'array', 'itemType': CreateEventsRequestBodyEventsDataContent },
      eventIds: { 'type': 'array', 'itemType': 'string' },
      parentEventId: 'string',
      parentScope: CreateEventsRequestBodyEventsDataParentScope,
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

export class CreateEventsRequestBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The event-specific data. Use the corresponding fields based on the type. For conditional requirements, refer to the description of each field.
   * 
   * This parameter is required.
   */
  data?: CreateEventsRequestBodyEventsData;
  /**
   * @remarks
   * The actual occurrence time provided by the client as a Unix timestamp in milliseconds. This is the only source for business sorting. Identical values do not indicate a known sequence, and the array position does not imply a business order.
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
      timestamp: 'timestamp',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateEventsRequestBodyEventsData,
      timestamp: 'number',
      type: 'string',
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

export class CreateEventsRequestBodyScope extends $dara.Model {
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

export class CreateEventsRequestBodySession extends $dara.Model {
  /**
   * @remarks
   * The JSON metadata of the session.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The session title. It can be up to 256 characters in length.
   * 
   * @example
   * Travel plan
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventsRequestBody extends $dara.Model {
  /**
   * @remarks
   * A list of 1 to 100 events. The request body cannot exceed 1 MiB.
   * 
   * This parameter is required.
   */
  events?: CreateEventsRequestBodyEvents[];
  /**
   * @remarks
   * The exact session to which all events belong.
   * 
   * This parameter is required.
   */
  scope?: CreateEventsRequestBodyScope;
  /**
   * @remarks
   * The information saved when the first event is successfully written. It is not overwritten by subsequent writes.
   */
  session?: CreateEventsRequestBodySession;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      scope: 'scope',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': CreateEventsRequestBodyEvents },
      scope: CreateEventsRequestBodyScope,
      session: CreateEventsRequestBodySession,
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON request body.
   * 
   * This parameter is required.
   */
  body?: CreateEventsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventsRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

