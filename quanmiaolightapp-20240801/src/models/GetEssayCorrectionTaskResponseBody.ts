// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelUsage } from "./ModelUsage";


export class GetEssayCorrectionTaskResponseBodyDataResultsDimensionResults extends $dara.Model {
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

export class GetEssayCorrectionTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * xxx
   * 
   * @example
   * 1
   */
  customId?: string;
  dimensionResults?: GetEssayCorrectionTaskResponseBodyDataResultsDimensionResults[];
  /**
   * @example
   * RateLimit
   */
  errorCode?: string;
  /**
   * @example
   * 触发模型限流
   */
  errorMessage?: string;
  /**
   * @example
   * 整体表现良好，建议在论述深度上进一步加强。
   */
  overallComment?: string;
  /**
   * @example
   * 本文整体结构清晰，语言流畅...
   */
  result?: string;
  /**
   * @example
   * 58
   */
  score?: number;
  usage?: ModelUsage;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      dimensionResults: 'dimensionResults',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      overallComment: 'overallComment',
      result: 'result',
      score: 'score',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      dimensionResults: { 'type': 'array', 'itemType': GetEssayCorrectionTaskResponseBodyDataResultsDimensionResults },
      errorCode: 'string',
      errorMessage: 'string',
      overallComment: 'string',
      result: 'string',
      score: 'number',
      usage: ModelUsage,
    };
  }

  validate() {
    if(Array.isArray(this.dimensionResults)) {
      $dara.Model.validateArray(this.dimensionResults);
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

export class GetEssayCorrectionTaskResponseBodyData extends $dara.Model {
  errorMessage?: string;
  results?: GetEssayCorrectionTaskResponseBodyDataResults[];
  /**
   * @example
   * PENDING
   */
  status?: string;
  totalUsage?: ModelUsage;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
      totalUsage: 'totalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetEssayCorrectionTaskResponseBodyDataResults },
      status: 'string',
      totalUsage: ModelUsage,
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    if(this.totalUsage && typeof (this.totalUsage as any).validate === 'function') {
      (this.totalUsage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEssayCorrectionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetEssayCorrectionTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEssayCorrectionTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

