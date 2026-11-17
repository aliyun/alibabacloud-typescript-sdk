// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrialDialogueResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The values declared in the control command type include Voice (voice reply), HangUp (hang up), Transfer (transfer), GatherDtmf (collect key presses), and SendSms (send SMS). This update supplements SendSms, which was omitted in the original description, without changing the backend structure or runtime enumeration constraints.
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

export class TrialDialogueResponseBodyDataExtras extends $dara.Model {
  /**
   * @remarks
   * The debug information returned by the dialogue engine as a JSON string. It is returned only when the engine provides the debug information, and may be returned with supplementary events after the reply ends. The internal structure is determined by the engine. The example empty object string does not declare any fixed debug fields.
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

export class TrialDialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The robot reply text in the current streaming event. It may be returned across multiple SSE events, or it may be empty in the end event or debug event. Do not equate missing text with session failure. Whether the content is incremental or cumulative is determined by the output convention of the dialogue engine. The current general callback directly forwards the engine content.
   * 
   * @example
   * Sure, let me introduce the handling process to you
   */
  answer?: string;
  /**
   * @remarks
   * The robot control commands attached to this reply. The current POP structure only expands the command Type and does not add other command fields in this document. When no control commands are generated, the text service supplements a Voice type command.
   * 
   * @example
   * [{"Type":"Voice"}]
   */
  controlParamsList?: TrialDialogueResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The UNIX timestamp of the current streaming reply callback event, in milliseconds. It is generated based on the current callback time. It may also be returned when StreamEnd=false, and should not be directly interpreted as the end time of the entire conversation or call.
   * 
   * @example
   * 1794560400123
   */
  endTime?: number;
  /**
   * @remarks
   * The extended information object attached to the robot reply, which is different from the JSON event array of the request parameter Extras. The current POP expands the DebugInfo field. Whether it is actually returned depends on the engine used and the current turn of reply.
   * 
   * @example
   * {"DebugInfo":"{}"}
   */
  extras?: TrialDialogueResponseBodyDataExtras;
  /**
   * @remarks
   * The session ID used to uniquely associate this interaction. For a text conversation, it is the text- identifier returned when the conversation is started. For web voice, it is the ws- identifier. For real number outbound call tests, it is the test- identifier. Subsequent calls must use the actual return value.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The UNIX timestamp recorded when the streaming reply callback is entered for the first time in this turn, in milliseconds. Subsequent events in this turn use this time. It is not the session creation time, nor is it an update time in the general sense.
   * 
   * @example
   * 1794560400000
   */
  startTime?: number;
  /**
   * @remarks
   * Indicates whether the streaming output for the current reply turn has ended. A value of true indicates that the streaming output has ended and the service has completed the corresponding SSE response. A value of false indicates that there may still be subsequent events in this turn. This field does not indicate that the entire conversation or voice call has ended.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The ID of the conversation turn to which this robot reply belongs. The same turn of reply can contain multiple streaming events. The text conversation context starts from 0 and increments during subsequent Dialogue calls. The actual return value of the engine shall prevail.
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
      controlParamsList: { 'type': 'array', 'itemType': TrialDialogueResponseBodyDataControlParamsList },
      endTime: 'number',
      extras: TrialDialogueResponseBodyDataExtras,
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

export class TrialDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business processing status code. OK indicates success. When an exception occurs, the corresponding business error code is returned. The error types and mapping rules follow the current API configuration, and no error codes are added or modified in this update.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robot reply, turn ID, time, and control commands carried by the current SSE event. A single turn may have multiple events.
   * 
   * @example
   * {"Answer":"Sure, let me introduce the handling process to you.","StreamEnd":true,"SessionId":"text-11111111-2222-4333-8444-555555555555","StreamId":"1","StartTime":1794560400000,"EndTime":1794560400123,"ControlParamsList":[{"Type":"Voice"}],"Extras":{"DebugInfo":"{}"}}
   */
  data?: TrialDialogueResponseBodyData;
  /**
   * @remarks
   * The HTTP status code recorded in the business response body. A normal return is 200. To determine whether the business is successful, you should also check Code. You cannot determine that the call is successful solely based on the presence of this field.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The business response or error description. It is usually empty or not returned upon success, and you cannot require a fixed text to be returned upon success. Upon failure, it is an error description used to assist troubleshooting, and should be combined with Code and Params to understand the cause of the error. The example is an error message when the experience link visitor token expires (corresponding to Code Expired.VisitorToken), and is for format reference only.
   * 
   * @example
   * VisitorToken: example-visitor-token is expired.
   */
  message?: string;
  /**
   * @remarks
   * The list of parameters used for the localized display of error messages, which are not scenario variables or business results. A normal successful response is usually an empty array. When an error occurs, parameters corresponding to the error template may be returned.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The ID used to associate and troubleshoot this POP request. The value in the response corresponds to this request. System request parameters are injected by the gateway, and the caller does not need to fill in system fields.
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
      data: TrialDialogueResponseBodyData,
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

