// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The type of the control parameter.
   * 
   * > - `HangUp`: Hang up.
   * >
   * > - `Transfer`: Transfer.
   * >
   * > - `GatherDtmf`: Gather DTMF.
   * >
   * > - `Voice`: Voice.
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

export class DialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bot\\"s reply.
   * 
   * @example
   * 不好意思，我没听
   */
  answer?: string;
  /**
   * @remarks
   * A list of control parameters.
   */
  controlParamsList?: DialogueResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The Unix timestamp for when the operation ended.
   * 
   * @example
   * 1752283603978
   */
  endTime?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @remarks
   * The Unix timestamp for when the operation started.
   * 
   * @example
   * 1774858849987
   */
  startTime?: number;
  /**
   * @remarks
   * A flag that indicates whether the stream has ended. A value of `true` signifies the end of the stream.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The stream ID for the conversational turn.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of `OK` indicates that the operation was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The business-specific data returned by the operation.
   */
  data?: DialogueResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of `200` indicates a successful response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The HTTP response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The parameters associated with an error.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
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

