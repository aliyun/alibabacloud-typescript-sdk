// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The type of the control instruction.
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

export class BeginSessionResponseBodyDataExtras extends $dara.Model {
  /**
   * @remarks
   * The debug information of the conversation.
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

export class BeginSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reply content from the robot.
   * 
   * @example
   * Hello, how can I help you?
   */
  answer?: string;
  /**
   * @remarks
   * The list of robot control instructions.
   * 
   * @example
   * [{"Type":"Voice"}]
   */
  controlParamsList?: BeginSessionResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The time when the current reply event is sent.
   * 
   * @example
   * 1794560400123
   */
  endTime?: number;
  /**
   * @remarks
   * The extended information of the reply.
   * 
   * @example
   * {"DebugInfo":"{}"}
   */
  extras?: BeginSessionResponseBodyDataExtras;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * text-11111111-2222-4333-8444-555555555555
   */
  sessionId?: string;
  /**
   * @remarks
   * The time of the first reply event in the current round.
   * 
   * @example
   * 1794560400000
   */
  startTime?: number;
  /**
   * @remarks
   * Indicates whether the response stream for the current round has ended.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The reply round ID.
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
      controlParamsList: { 'type': 'array', 'itemType': BeginSessionResponseBodyDataControlParamsList },
      endTime: 'number',
      extras: BeginSessionResponseBodyDataExtras,
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

export class BeginSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The text conversation reply.
   * 
   * @example
   * {"Answer":"Hello, how can I help you?","StreamEnd":true,"SessionId":"text-11111111-2222-4333-8444-555555555555","StreamId":"0","StartTime":1794560400000,"EndTime":1794560400123,"ControlParamsList":[{"Type":"Voice"}],"Extras":{"DebugInfo":"{}"}}
   */
  data?: BeginSessionResponseBodyData;
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
   * The business message.
   * 
   * @example
   * xxxxxx
   */
  message?: string;
  /**
   * @remarks
   * The list of error message parameters.
   * 
   * @example
   * []
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
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
      data: BeginSessionResponseBodyData,
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

