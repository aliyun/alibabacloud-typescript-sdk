// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginTrialSessionResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The values declared in the control command type include Voice (voice reply), HangUp (hang up), Transfer (transfer), GatherDtmf (collect DTMF tones), and SendSms (send SMS message). SendSms, which was omitted in the original description, is added in this update without changing the backend structure or runtime enumeration constraints.
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

export class BeginTrialSessionResponseBodyDataExtras extends $dara.Model {
  /**
   * @remarks
   * The debug information returned by the dialogue engine, which is a JSON string. It is returned only when the engine provides and obtains debug information, and may be returned with supplementary events after the reply ends. The internal structure is determined by the engine. The example empty object string does not declare any fixed debug fields.
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

export class BeginTrialSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The robot reply text in the current streaming event. It may be returned across multiple SSE events, or it may be empty in an end event or debug event. Do not equate missing text with session failure. Whether the content is incremental or cumulative is determined by the output conventions of the dialogue engine. The current general callback directly forwards the engine content.
   * 
   * @example
   * Hello, how can I help you?
   */
  answer?: string;
  /**
   * @remarks
   * The robot control commands attached to this reply. The current POP structure only expands the command Type and does not add other command fields in this document. If no control command is generated, the text service supplements a Voice type command.
   * 
   * @example
   * [{"Type":"Voice"}]
   */
  controlParamsList?: BeginTrialSessionResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The UNIX timestamp of the current streaming reply callback event, in milliseconds. It is generated based on the current callback time. It may also be returned when StreamEnd=false. Do not directly interpret it as the end time of the entire session or call.
   * 
   * @example
   * 1794560400123
   */
  endTime?: number;
  /**
   * @remarks
   * The extended information object attached to the robot reply, which is different from the JSON event array of the request parameter Extras. The current POP expands the DebugInfo field. Whether it is actually returned depends on the engine used and the current round of reply.
   * 
   * @example
   * {"DebugInfo":"{}"}
   */
  extras?: BeginTrialSessionResponseBodyDataExtras;
  /**
   * @remarks
   * The session ID used to uniquely associate this interaction. For a text session, it is the text- ID returned when the session is started. For web voice, it is the ws- ID. For a real number outbound call test, it is the test- ID. Subsequent calls must use the actual return value.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The UNIX timestamp recorded when the streaming reply callback is entered for the first time in the current round, in milliseconds. Subsequent events in the current round use this time. It is not the session creation time or a general update time.
   * 
   * @example
   * 1794560400000
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether the streaming output of the current reply round has ended. Valid values:
   * - true: The streaming output has ended, and the service has completed the corresponding SSE response.
   * - false: Subsequent events may still occur in the current round.
   * This field does not indicate that the entire session or voice call has ended.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The ID of the dialogue round to which this robot reply belongs. A single round of reply may contain multiple streaming events. The text session context starts from 0 and increments during subsequent Dialogue calls. The actual return value from the engine shall prevail.
   * 
   * @example
   * 0
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
      controlParamsList: { 'type': 'array', 'itemType': BeginTrialSessionResponseBodyDataControlParamsList },
      endTime: 'number',
      extras: BeginTrialSessionResponseBodyDataExtras,
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

export class BeginTrialSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. If an exception occurs, the corresponding business error code is returned. Error types and mapping rules follow the current API configuration. No error codes are added or modified in this operation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robot reply, round ID, time, and control commands carried by the current SSE event. A single round may contain multiple events.
   * 
   * @example
   * {"Answer":"Hello, how can I help you?","StreamEnd":true,"SessionId":"text-11111111-2222-4333-8444-555555555555","StreamId":"0","StartTime":1794560400000,"EndTime":1794560400123,"ControlParamsList":[{"Type":"Voice"}],"Extras":{"DebugInfo":"{}"}}
   */
  data?: BeginTrialSessionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return value is 200. To determine whether the business operation is successful, you must also check Code. You cannot determine the success of a call solely based on the presence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error description. This field is usually empty or not returned upon success, and no fixed text is returned. Upon failure, it provides an error description to assist in troubleshooting. Combine this field with Code and Params to understand the cause of the error. The example shows an error message when the trial link visitor token expires (corresponding to the Expired.VisitorToken code) and is for format reference only.
   * 
   * @example
   * VisitorToken: example-visitor-token is expired.
   */
  message?: string;
  /**
   * @remarks
   * The parameter list used for the localized display of error messages. It is not a scenario variable or business result. A normal successful response is usually an empty array. If an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to the current request. System request parameters are injected by the gateway, and the caller does not need to fill in system fields.
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
      data: BeginTrialSessionResponseBodyData,
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

