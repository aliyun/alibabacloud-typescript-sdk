// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * The risk label.
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  /**
   * @remarks
   * A description of the result when the session is terminated.
   * 
   * - **SESSION_KILLED**: The session was successfully terminated.
   * 
   * - **SESSION_EXPIRED**: The session has expired.
   * 
   * - **SESSION_NO_PERMISSION**: The account used to terminate the session does not have sufficient permissions.
   * 
   * - **SESSION_ACCOUNT_ERROR**: The account or password used to terminate the session is incorrect.
   * 
   * - **SESSION_IGNORED_USER**: The session of an account that does not need to be terminated.
   * 
   * - **SESSION_INTERNAL_USER_OR_COMMAND**: The session or command of an Alibaba Cloud operations account.
   * 
   * - **SESSION_KILL_TASK_TIMEOUT**: A timeout occurred when terminating the session.
   * 
   * - **SESSION_OTHER_ERROR**: Other errors.
   * 
   * @example
   * TRACER_SLB_ALL_DEST_WEIGHT_0
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalAgentResponseBodyDataUsage extends $dara.Model {
  /**
   * @remarks
   * Agent details.
   */
  agentDetail?: { [key: string]: any };
  /**
   * @remarks
   * The length of the content.
   * 
   * @example
   * 10
   */
  contentLength?: number;
  /**
   * @remarks
   * The length of the prompt.
   * 
   * @example
   * 100
   */
  promptLength?: number;
  static names(): { [key: string]: string } {
    return {
      agentDetail: 'AgentDetail',
      contentLength: 'ContentLength',
      promptLength: 'PromptLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contentLength: 'number',
      promptLength: 'number',
    };
  }

  validate() {
    if(this.agentDetail) {
      $dara.Model.validateMap(this.agentDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The structure of the label item.
   */
  result?: MultiModalAgentResponseBodyDataResult[];
  /**
   * @remarks
   * The risk level. The value is returned based on the configured high and low risk scores. Valid values:
   * 
   * - high: High risk
   * 
   * - medium: Medium risk
   * 
   * - low: Low risk
   * 
   * - none: No risk detected
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Token usage.
   */
  usage?: MultiModalAgentResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': MultiModalAgentResponseBodyDataResult },
      riskLevel: 'string',
      usage: MultiModalAgentResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MultiModalAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the image content detection.
   */
  data?: MultiModalAgentResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MultiModalAgentResponseBodyData,
      message: 'string',
      requestId: 'string',
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

