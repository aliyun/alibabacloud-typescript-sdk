// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStateLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Break code.
   * 
   * @example
   * 会议
   */
  breakCode?: string;
  /**
   * @remarks
   * Duration of the status, in seconds.
   * 
   * @example
   * 32
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether the agent is in outbound-only mode.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * Start Time of the status, in UNIX timestamp format, in milliseconds.
   * 
   * @example
   * 1620259200000
   */
  startTime?: number;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * Break
   */
  state?: string;
  /**
   * @remarks
   * Sub-status, which provides additional details for the status code. In certain scenarios, an agent\\"s status is jointly identified by State and StateCode. For example, in a monitoring scenario, the State is Talking and the StateCode is Monitoring.
   * 
   * @example
   * CHECK_IN_BREAK
   */
  stateCode?: string;
  /**
   * @remarks
   * Work mode.
   * 
   * @example
   * ON_SITE
   */
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListAgentStateLogsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
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

