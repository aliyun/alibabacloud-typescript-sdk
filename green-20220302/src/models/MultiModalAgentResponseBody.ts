// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalAgentResponseBodyDataResult extends $dara.Model {
  description?: string;
  /**
   * @example
   * violent_explosion
   */
  label?: string;
  /**
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
  agentDetail?: { [key: string]: any };
  /**
   * @example
   * 10
   */
  contentLength?: number;
  /**
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
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  result?: MultiModalAgentResponseBodyDataResult[];
  /**
   * @example
   * high
   */
  riskLevel?: string;
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
   * @example
   * 200
   */
  code?: string;
  data?: MultiModalAgentResponseBodyData;
  /**
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

