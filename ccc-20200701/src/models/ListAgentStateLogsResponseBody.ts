// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStateLogsResponseBodyData extends $dara.Model {
  breakCode?: string;
  duration?: number;
  /**
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @example
   * Break
   */
  state?: string;
  /**
   * @example
   * CHECK_IN_BREAK
   */
  stateCode?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      breakCode: 'BreakCode',
      duration: 'Duration',
      outboundScenario: 'OutboundScenario',
      startTime: 'StartTime',
      state: 'State',
      stateCode: 'StateCode',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakCode: 'string',
      duration: 'number',
      outboundScenario: 'boolean',
      startTime: 'number',
      state: 'string',
      stateCode: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentStateLogsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListAgentStateLogsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentStateLogsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

