// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentResponseBodyDataFunctionCallResponses extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  endTime?: string;
  functionArgs?: string;
  /**
   * @example
   * web_search
   */
  functionName?: string;
  result?: string;
  /**
   * @example
   * 2025-01-21 16:37:14
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      endTime: 'endTime',
      functionArgs: 'functionArgs',
      functionName: 'functionName',
      result: 'result',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      functionArgs: 'string',
      functionName: 'string',
      result: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponseChoicesMessage extends $dara.Model {
  content?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * assistant
   */
  roleDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      roleDisplayName: 'roleDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
      roleDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponseChoices extends $dara.Model {
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RunAgentResponseBodyDataResponseChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunAgentResponseBodyDataResponseChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyDataResponse extends $dara.Model {
  choices?: RunAgentResponseBodyDataResponseChoices[];
  /**
   * @example
   * 1737448637
   */
  created?: number;
  /**
   * @example
   * d91d9afa-7cfc-4235-b012-a6f8e6ffa443
   */
  id?: string;
  /**
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * 2025-01-21T16:37:17.497206762
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunAgentResponseBodyDataResponseChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBodyData extends $dara.Model {
  functionCallResponses?: RunAgentResponseBodyDataFunctionCallResponses[];
  /**
   * @example
   * 766
   */
  inputTokens?: number;
  /**
   * @example
   * 988
   */
  outputTokens?: number;
  response?: RunAgentResponseBodyDataResponse;
  /**
   * @example
   * 4vlag5ken3
   */
  threadId?: string;
  /**
   * @example
   * 5bdb9809856c58acb92001f8ae65773c
   */
  traceId?: string;
  /**
   * @example
   * w4paqoezm2
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionCallResponses: 'functionCallResponses',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      response: 'response',
      threadId: 'threadId',
      traceId: 'traceId',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionCallResponses: { 'type': 'array', 'itemType': RunAgentResponseBodyDataFunctionCallResponses },
      inputTokens: 'number',
      outputTokens: 'number',
      response: RunAgentResponseBodyDataResponse,
      threadId: 'string',
      traceId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionCallResponses)) {
      $dara.Model.validateArray(this.functionCallResponses);
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: RunAgentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * EF4B5C9B-3BC8-5171-A47B-4C5CF3DC3258
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: RunAgentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

