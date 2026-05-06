// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEssayCorrectionResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEssayCorrectionResponseBodyPayloadOutputDimensionResults extends $dara.Model {
  /**
   * @example
   * 文章内容较为完整，涵盖了题目的核心要求，但部分论述略显简略。
   */
  analysis?: string;
  /**
   * @example
   * 30
   */
  maxScore?: number;
  /**
   * @example
   * 内容完整度
   */
  name?: string;
  /**
   * @example
   * 25.5
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      maxScore: 'maxScore',
      name: 'name',
      score: 'score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      maxScore: 'number',
      name: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEssayCorrectionResponseBodyPayloadOutput extends $dara.Model {
  dimensionResults?: RunEssayCorrectionResponseBodyPayloadOutputDimensionResults[];
  /**
   * @example
   * 整体表现良好，建议在论述深度上进一步加强。
   */
  overallComment?: string;
  /**
   * @example
   * 首先分析文章结构，发现开头、正文、结尾完整...
   */
  reasoningContent?: string;
  /**
   * @example
   * 50
   */
  score?: number;
  /**
   * @example
   * 本文整体结构清晰，语言流畅...
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionResults: 'dimensionResults',
      overallComment: 'overallComment',
      reasoningContent: 'reasoningContent',
      score: 'score',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionResults: { 'type': 'array', 'itemType': RunEssayCorrectionResponseBodyPayloadOutputDimensionResults },
      overallComment: 'string',
      reasoningContent: 'string',
      score: 'number',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensionResults)) {
      $dara.Model.validateArray(this.dimensionResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEssayCorrectionResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEssayCorrectionResponseBodyPayload extends $dara.Model {
  output?: RunEssayCorrectionResponseBodyPayloadOutput;
  usage?: RunEssayCorrectionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunEssayCorrectionResponseBodyPayloadOutput,
      usage: RunEssayCorrectionResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
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

export class RunEssayCorrectionResponseBody extends $dara.Model {
  header?: RunEssayCorrectionResponseBodyHeader;
  payload?: RunEssayCorrectionResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunEssayCorrectionResponseBodyHeader,
      payload: RunEssayCorrectionResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

