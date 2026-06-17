// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The structured data (such as tool invocation). Example: {"call_id":"call_xxx","name":"get_weather", "output":"Tool output details in text format"}.
   * 
   * @example
   * {"call_id":"call_xxx","name":"get_weather","arguments":"{"city":"Beijing"}"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * ""
   */
  object?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * 您好
   */
  text?: string;
  /**
   * @remarks
   * The content type ("text" / "data").
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      object: 'Object',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The content block list (included only when Status is completed).
   */
  content?: ChatResponseBodyContent[];
  /**
   * @remarks
   * （已废弃）创建时间戳
   * 
   * @example
   * 1773380609
   */
  created?: string;
  /**
   * @remarks
   * The creation timestamp (Unix seconds).
   * 
   * @example
   * 1773380609
   */
  createdAt?: string;
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
   * The unique message identifier.
   * 
   * @example
   * msg_xxx
   */
  id?: string;
  /**
   * @remarks
   * The error details (returned on failure).
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The event object type.
   * 
   * @example
   * response
   */
  object?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA12****-****-****-****-****E5C
   */
  requestId?: string;
  /**
   * @remarks
   * The role (user / assistant / system / tool).
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The event sequence number (an incrementing integer in string format, used to guarantee ordering). Note: When StreamOptions filters out certain event types, the filtered events still consume sequence numbers. Therefore, the sequence numbers received by the client may not be contiguous.
   * 
   * @example
   * 1
   */
  sequenceNumber?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 176405663****961
   */
  sessionId?: string;
  /**
   * @remarks
   * The reply status (created / in_progress / completed).
   * 
   * @example
   * in_progress
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The incremental text content (included in Object=content events).
   * [_single.resp.200.props.Created.desc](Deprecated) The creation timestamp.
   * 
   * @example
   * "hello"
   */
  text?: string;
  /**
   * @example
   * 0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d
   */
  traceId?: string;
  /**
   * @remarks
   * The message type (reasoning (model thinking process) / message (formal reply)).
   * 
   * @example
   * message / text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      content: 'Content',
      created: 'Created',
      createdAt: 'CreatedAt',
      httpStatusCode: 'HttpStatusCode',
      id: 'Id',
      message: 'Message',
      object: 'Object',
      requestId: 'RequestId',
      role: 'Role',
      sequenceNumber: 'SequenceNumber',
      sessionId: 'SessionId',
      status: 'Status',
      success: 'Success',
      text: 'Text',
      traceId: 'TraceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: { 'type': 'array', 'itemType': ChatResponseBodyContent },
      created: 'string',
      createdAt: 'string',
      httpStatusCode: 'number',
      id: 'string',
      message: 'string',
      object: 'string',
      requestId: 'string',
      role: 'string',
      sequenceNumber: 'string',
      sessionId: 'string',
      status: 'string',
      success: 'boolean',
      text: 'string',
      traceId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

