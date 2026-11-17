// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The values declared in the control instruction type include Voice (voice reply), HangUp (hang up), Transfer (transfer), GatherDtmf (collect key presses), and SendSms (send SMS). This update supplements the previously omitted SendSms without changing the backend structure or runtime enumeration constraints.
   * 
   * @example
   * Voice
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DialogueResponseBodyDataExtras extends $dara.Model {
  /**
   * @remarks
   * The debug information returned by the conversation engine, which is a JSON string. It is returned only when the engine provides and obtains the debug information, and may be returned with supplementary events after the reply ends. The internal structure is determined by the engine. The example empty object string does not declare any fixed debug fields.
   * 
   * @example
   * {}
   */
  debugInfo?: string;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The robot reply text in the current streaming event. It may be returned across multiple SSE events, or it may be empty in the end event or debug event. Do not equate the absence of text with session failure. Whether the content is incremental or cumulative is determined by the output convention of the conversation engine. The current general callback directly forwards the engine content.
   * 
   * @example
   * Sure, let me introduce the handling process to you
   */
  answer?: string;
  /**
   * @remarks
   * The robot control instructions attached to this reply. The current POP structure only expands the instruction Type and does not add other instruction fields in this document. When no control instruction is generated, the text service supplements a Voice type instruction.
   * 
   * @example
   * [{"Type":"Voice"}]
   */
  controlParamsList?: DialogueResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The UNIX timestamp of the current streaming reply callback event, in milliseconds. It is generated based on the current callback time. It may also be returned when StreamEnd is false. It should not be directly interpreted as the end time of the entire session or call.
   * 
   * @example
   * 1794560400123
   */
  endTime?: number;
  /**
   * @remarks
   * The extension information object attached to the robot reply, which is different from the JSON event array of the request parameter Extras. The current POP expands the DebugInfo field. Whether it is actually returned depends on the engine used and the current round of reply.
   * 
   * @example
   * {"DebugInfo":"{}"}
   */
  extras?: DialogueResponseBodyDataExtras;
  /**
   * @remarks
   * The session ID used to uniquely associate this interaction. For a text session, it is the text- identifier returned when the session is initiated. For web voice, it is the ws- identifier. For real number outbound call tests, it is the test- identifier. Subsequent calls must use the actual returned value.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The UNIX timestamp recorded when the streaming reply callback is entered for the first time in the current round, in milliseconds. Subsequent events in the current round use this time. It is not the session creation time, nor is it an update time in the general sense.
   * 
   * @example
   * 1794560400000
   */
  startTime?: number;
  /**
   * @remarks
   * Indicates whether the streaming output of the current reply round has ended. A value of true indicates that the streaming output has ended and the service has completed the corresponding SSE response. A value of false indicates that there may still be subsequent events in the current round. This field does not indicate that the entire session or voice call has ended.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The ID of the conversation round to which the current robot reply belongs. A single round of reply may contain multiple streaming events. The text session context starts from 0 and increments upon subsequent Dialogue calls. The actual value returned by the engine shall prevail.
   * 
   * @example
   * 1
   */
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      controlParamsList: 'ControlParamsList',
      endTime: 'EndTime',
      extras: 'Extras',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      streamEnd: 'StreamEnd',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      controlParamsList: { 'type': 'array', 'itemType': DialogueResponseBodyDataControlParamsList },
      endTime: 'number',
      extras: DialogueResponseBodyDataExtras,
      sessionId: 'string',
      startTime: 'number',
      streamEnd: 'boolean',
      streamId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.controlParamsList)) {
      $dara.Model.validateArray(this.controlParamsList);
    }
    if(this.extras && typeof (this.extras as any).validate === 'function') {
      (this.extras as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration. No error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robot reply, round ID, time, and control instructions carried by the current SSE event. A single round may contain multiple events.
   * 
   * @example
   * {"Answer":"Sure, let me introduce the handling process to you.","StreamEnd":true,"SessionId":"text-11111111-2222-4333-8444-555555555555","StreamId":"1","StartTime":1794560400000,"EndTime":1794560400123,"ControlParamsList":[{"Type":"Voice"}],"Extras":{"DebugInfo":"{}"}}
   */
  data?: DialogueResponseBodyData;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return is 200. To determine whether the business operation is successful, you must also check Code. You cannot determine that the call is successful solely based on the presence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error description. It is usually empty or not returned upon success. A fixed text cannot be required upon success. Upon failure, it provides an error description to assist in troubleshooting. Combine it with Code and Params to understand the cause of the error. The example shows an error message when the instance does not exist (corresponding to the Code NotExists.InstanceId) and is for format reference only.
   * 
   * @example
   * Instance instance-example-001 does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The parameter list used for the localized display of error messages. It is not a scenario variable or business result. A normal successful response is usually an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway, and the caller does not need to fill in the system fields.
   * 
   * @example
   * AAAAAAAA-BBBB-4CCC-8DDD-EEEEEEEEEEEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DialogueResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

